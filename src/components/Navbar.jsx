import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolio";
import { Download, Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(navLinks[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(13,17,23,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(163,230,53,0.1)" : "none",
        padding: "0 5vw",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("Home")}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.4rem",
            color: "#fff",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-0.02em",
          }}
        >
          Dolly<span style={{ color: "var(--lime)" }}>.</span>
        </button>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "0.9rem",
                color: active === link ? "var(--lime)" : "rgba(255,255,255,0.7)",
                transition: "color 0.2s",
                position: "relative",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => {
                if (active !== link) e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                if (active !== link) e.target.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              {link}
              {active === link && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "var(--lime)",
                    borderRadius: 2,
                  }}
                />
              )}
            </button>
          ))}

          <a
            href={personalInfo.resumeUrl}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              background: "var(--lime)",
              color: "var(--navy)",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#84cc16";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--lime)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Download size={15} />
            Download Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: 4,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(13,17,23,0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(163,230,53,0.15)",
            padding: "1.5rem 5vw 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "1rem",
                color: active === link ? "var(--lime)" : "rgba(255,255,255,0.8)",
                padding: "0.75rem 0",
                textAlign: "left",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link}
            </button>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              background: "var(--lime)",
              color: "var(--navy)",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              marginTop: "1rem",
              width: "fit-content",
            }}
          >
            <Download size={15} />
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

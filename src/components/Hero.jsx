import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolio";
import { Mail, Download, ArrowDown } from "lucide-react";
import dollyPhoto from "../assets/dolly-photo.png";

const STICKERS = [
  { label: "DATA + CODE", rotate: -8, top: "12%", left: "2%", delay: 0, color: "#a3e635", textColor: "#0d1117" },
  { label: "BUILD → ANALYZE", rotate: 6, top: "60%", left: "-1%", delay: 0.3, color: "#161b22", textColor: "#a3e635", border: "1px solid #a3e63560" },
  { label: "PROBLEM SOLVER ✦", rotate: -4, top: "78%", right: "2%", delay: 0.5, color: "#818cf8", textColor: "#fff" },
  { label: "DATA ANALYST IN PROGRESS", rotate: 5, top: "18%", right: "1%", delay: 0.2, color: "#fb923c", textColor: "#fff" },
];

function Sticker({ label, rotate, top, left, right, delay, color, textColor, border }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay * 1000 + 800);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`animate-float${delay > 0.3 ? "2" : delay > 0.1 ? "3" : ""}`}
      style={{
        position: "absolute",
        top, left, right,
        background: color,
        color: textColor,
        border: border || "none",
        borderRadius: 8,
        padding: "6px 12px",
        fontSize: "0.65rem",
        fontWeight: 700,
        fontFamily: "var(--font-display)",
        letterSpacing: "0.06em",
        transform: `rotate(${rotate}deg)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
        zIndex: 10,
        whiteSpace: "nowrap",
        userSelect: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        pointerEvents: "none",
      }}
    >
      {label}
    </div>
  );
}

function Doodle({ type, style }) {
  const svgs = {
    arrow: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M5 30 Q15 10 30 15" stroke="#a3e635" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M25 10 L30 15 L24 18" stroke="#a3e635" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    dots: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        {[0,1,2,3].map(row => [0,1,2,3].map(col => (
          <circle key={`${row}-${col}`} cx={col * 10 + 5} cy={row * 10 + 5} r="1.5" fill="rgba(163,230,53,0.3)" />
        )))}
      </svg>
    ),
    star: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.5 9H20L14.5 13L16.5 20L12 16L7.5 20L9.5 13L4 9H10.5L12 2Z" fill="#a3e635" opacity="0.6"/>
      </svg>
    ),
    circle: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="rgba(163,230,53,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
      </svg>
    ),
  };
  return <div style={{ position: "absolute", pointerEvents: "none", ...style }}>{svgs[type]}</div>;
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "var(--navy)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 70,
      }}
    >
      {/* Background elements */}
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
      <div style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "5%",
        width: 300,
        height: 300,
        background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "4rem 5vw",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
          gap: "5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* Left: Content */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.1s",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(163,230,53,0.1)",
              border: "1px solid rgba(163,230,53,0.25)",
              borderRadius: 99,
              marginBottom: "1.5rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--lime)",
              letterSpacing: "0.04em",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--lime)", display: "inline-block" }} />
            Hello, I'm
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 4.2vw, 4rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            <span style={{ display: "block", color: "#fff" }}>DOLLY</span>
            <span
              style={{
                display: "block",
                color: "var(--lime)",
                WebkitTextStroke: "2px var(--lime)",
              }}
            >
              KUSHWAHA
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            {["CSE Student", "Developer", "Problem Solver"].map((t, i) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {t}
                {i < 2 && <span style={{ color: "var(--lime)", opacity: 0.5 }}>|</span>}
              </span>
            ))}
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 480,
              marginBottom: "2.5rem",
            }}
          >
            CSE undergraduate building full-stack web applications and exploring
            data analytics. Solved 200+ DSA problems across LeetCode and CodeChef.
            Currently diving into LLM-based application development.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "12px 28px",
                background: "var(--lime)",
                color: "var(--navy)",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#84cc16"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--lime)"; }}
            >
              View My Work <ArrowDown size={16} />
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              style={{
                padding: "12px 28px",
                background: "transparent",
                color: "#fff",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                border: "1px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--lime)"; e.currentTarget.style.color = "var(--lime)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}
            >
              <Download size={15} /> Resume
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, href: personalInfo.linkedin, label: "LinkedIn", bg: "#0077b5" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>, href: personalInfo.github, label: "GitHub", bg: "#333" },
              { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email", bg: "#ea4335" },
            ].map(({ icon, href, label, bg }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = bg;
                  e.currentTarget.style.borderColor = bg;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.3s",
          }}
        >
          {/* Stickers */}
          {STICKERS.map((s) => <Sticker key={s.label} {...s} />)}

          {/* Doodles */}
          <Doodle type="dots" style={{ bottom: "15%", left: "5%", opacity: 0.7 }} />
          <Doodle type="arrow" style={{ top: "35%", left: "8%", transform: "rotate(20deg)", opacity: 0.8 }} />
          <Doodle type="star" style={{ top: "8%", left: "45%", opacity: 0.7 }} />
          <Doodle type="circle" style={{ top: "5%", right: "15%", opacity: 0.5 }} className="animate-spin-slow" />

          {/* Green blob behind photo */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "78%",
              height: "85%",
              background: "linear-gradient(135deg, #a3e635 0%, #84cc16 60%, #4ade80 100%)",
              borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
              zIndex: 1,
              opacity: 0.9,
            }}
          />

          {/* Photo */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "88%",
              maxWidth: 440,
            }}
          >
            <img
              src={dollyPhoto}
              alt="Dolly Kushwaha — CSE Student and Developer"
              style={{
                width: "100%",
                display: "block",
                objectFit: "contain",
                filter: "contrast(1.03) brightness(1.02) drop-shadow(0 12px 24px rgba(0,0,0,0.35))",
              }}
              onError={(e) => {
                // Fallback if image fails
                e.target.style.display = "none";
                e.target.parentElement.style.background = "rgba(163,230,53,0.15)";
                e.target.parentElement.style.height = 380;
                e.target.parentElement.style.borderRadius = 16;
                e.target.parentElement.style.display = "flex";
                e.target.parentElement.style.alignItems = "center";
                e.target.parentElement.style.justifyContent = "center";
              }}
            />
          </div>

          {/* Quick stat chips */}
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              left: "0%",
              background: "rgba(13,17,23,0.92)",
              border: "1px solid rgba(163,230,53,0.2)",
              borderRadius: 12,
              padding: "10px 16px",
              zIndex: 10,
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--lime)" }}>200+</div>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>DSA Problems Solved</div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "28%",
              right: "-4%",
              background: "rgba(13,17,23,0.92)",
              border: "1px solid rgba(129,140,248,0.3)",
              borderRadius: 12,
              padding: "10px 16px",
              zIndex: 10,
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--purple)" }}>3</div>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Projects Built</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.4,
          animation: "bounce 2s infinite",
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)" }}>SCROLL</span>
        <ArrowDown size={16} color="rgba(255,255,255,0.5)" />
      </div>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            order: 2;
          }
          .hero-grid > div:last-child {
            order: 1;
            max-width: 320px;
            margin: 0 auto;
          }
          .hero-grid > div:first-child > div {
            justify-content: center !important;
          }
          .hero-grid > div:first-child p:nth-child(4) {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}

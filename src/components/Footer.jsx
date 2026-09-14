export default function Footer() {
  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <footer style={{
      background: "#080c10",
      padding: "3rem 5vw 2rem",
      borderTop: "1px solid rgba(163,230,53,0.08)",
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: "0.3rem",
            }}>
              Dolly<span style={{ color: "var(--lime)" }}>.</span>
            </div>
            <div style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
            }}>
              Built with Code + Curiosity
            </div>
          </div>

          {/* Nav */}
          <nav style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  const el = document.getElementById(link.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.35)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.target.style.color = "var(--lime)"}
                onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.35)"}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>

        <div style={{
          height: 1,
          background: "rgba(255,255,255,0.05)",
        }} />

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.25)",
          }}>
            © 2026 Dolly Kushwaha. All rights reserved.
          </p>
          <p style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.2)",
          }}>
            Designed & Developed with ♥ by Dolly
          </p>
        </div>
      </div>
    </footer>
  );
}

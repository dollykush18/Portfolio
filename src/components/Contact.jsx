import { useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolio";
import { Mail, MapPin, Download, Trophy } from "lucide-react";

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
          }, delay);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#ea4335",
    bg: "rgba(234,67,53,0.1)",
    border: "rgba(234,67,53,0.2)",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    label: "LinkedIn",
    value: personalInfo.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    href: personalInfo.linkedin,
    color: "#0077b5",
    bg: "rgba(0,119,181,0.1)",
    border: "rgba(0,119,181,0.2)",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
    label: "GitHub",
    value: personalInfo.github.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    href: personalInfo.github,
    color: "#a3e635",
    bg: "rgba(163,230,53,0.08)",
    border: "rgba(163,230,53,0.2)",
  },
  {
    icon: <Trophy size={20} />,
    label: "Codolio",
    value: personalInfo.codolio.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    href: personalInfo.codolio,
    color: "#fb923c",
    bg: "rgba(251,146,60,0.1)",
    border: "rgba(251,146,60,0.2)",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Lucknow, India",
    href: null,
    color: "#818cf8",
    bg: "rgba(129,140,248,0.1)",
    border: "rgba(129,140,248,0.2)",
  },
];

export default function Contact() {
  const headRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useReveal(headRef);
  useReveal(leftRef, 100);
  useReveal(rightRef, 200);

  return (
    <section id="contact" style={{
      background: "var(--navy)",
      padding: "7rem 5vw",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background */}
      <div className="dot-pattern" style={{
        position: "absolute",
        inset: 0,
        opacity: 0.3,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 400,
        background: "radial-gradient(ellipse, rgba(163,230,53,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div
          ref={headRef}
          style={{
            opacity: 0,
            transform: "translateY(25px)",
            transition: "all 0.7s ease",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            background: "rgba(163,230,53,0.1)",
            border: "1px solid rgba(163,230,53,0.2)",
            borderRadius: 99,
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "var(--lime)",
            marginBottom: "1rem",
          }}>
            GET IN TOUCH
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "1rem",
          }}>
            Let's{" "}
            <span style={{ color: "var(--lime)" }}>Connect</span>
          </h2>

          <p style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto",
          }}>
            Have an opportunity, project, or idea? I'm always open to new conversations and collaborations.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          alignItems: "start",
        }} className="contact-grid">

          {/* Left: Contact cards */}
          <div
            ref={leftRef}
            style={{
              opacity: 0,
              transform: "translateY(25px)",
              transition: "all 0.7s ease",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactLinks.map((link, i) => (
                <div
                  key={link.label}
                  style={{
                    background: link.bg,
                    border: `1px solid ${link.border}`,
                    borderRadius: 16,
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "all 0.25s ease",
                    cursor: link.href ? "pointer" : "default",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  as={link.href ? "a" : "div"}
                  onClick={() => link.href && window.open(link.href, link.href.startsWith("mailto") ? "_self" : "_blank")}
                  onMouseEnter={(e) => {
                    if (link.href) {
                      e.currentTarget.style.transform = "translateX(6px)";
                      e.currentTarget.style.borderColor = link.color + "50";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.borderColor = link.border;
                  }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${link.color}18`,
                    border: `1px solid ${link.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: link.color,
                    flexShrink: 0,
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: link.color,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 3,
                    }}>
                      {link.label}
                    </div>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: 500,
                    }}>
                      {link.value}
                    </div>
                  </div>
                  {link.href && (
                    <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.25)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div
            ref={rightRef}
            style={{
              opacity: 0,
              transform: "translateY(25px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <div style={{
              background: "linear-gradient(135deg, rgba(163,230,53,0.08) 0%, rgba(163,230,53,0.02) 100%)",
              border: "1px solid rgba(163,230,53,0.15)",
              borderRadius: 24,
              padding: "2.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative */}
              <div style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "rgba(163,230,53,0.06)",
              }} />
              <div style={{
                position: "absolute",
                bottom: -30,
                left: -30,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(129,140,248,0.06)",
              }} />

              <div style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                background: "rgba(163,230,53,0.1)",
                border: "2px solid rgba(163,230,53,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                fontSize: "1.8rem",
              }}>
                👋
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}>
                Open to Opportunities
              </h3>

              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: 320,
                margin: "0 auto 2rem",
              }}>
                I'm actively looking for internships and entry-level roles in full-stack development or data analytics.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 28px",
                    background: "var(--lime)",
                    color: "var(--navy)",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontFamily: "var(--font-body)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#84cc16"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--lime)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <Mail size={16} />
                  Send me an Email
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 28px",
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontFamily: "var(--font-body)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(163,230,53,0.4)"; e.currentTarget.style.color = "var(--lime)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

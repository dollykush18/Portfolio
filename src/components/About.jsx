import { useEffect, useRef } from "react";
import { personalInfo, journey } from "../data/portfolio";
import { MapPin, BookOpen, Heart } from "lucide-react";

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function TimelineDot({ status }) {
  const colors = {
    done: "#a3e635",
    current: "#818cf8",
    future: "rgba(255,255,255,0.2)",
  };
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: colors[status],
        border: "2px solid var(--navy-dark, #0d1117)",
        boxShadow: status === "current" ? "0 0 0 4px rgba(129,140,248,0.2)" : "none",
        zIndex: 2,
        flexShrink: 0,
      }} />
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useReveal(leftRef);
  useReveal(rightRef);

  return (
    <section id="about" style={{ background: "var(--cream)", color: "var(--navy)", padding: "7rem 5vw" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Section label */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "5px 14px",
          background: "rgba(13,17,23,0.06)",
          borderRadius: 99,
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: "rgba(13,17,23,0.45)",
          marginBottom: "1rem",
          textTransform: "uppercase",
        }}>
          ABOUT ME
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: "3.5rem",
          color: "#0d1117",
        }}>
          A little about{" "}
          <span style={{
            color: "transparent",
            WebkitTextStroke: "2px #a3e635",
            textStroke: "2px #a3e635",
          }}>
            me
          </span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }} className="about-grid">

          {/* Left: Bio */}
          <div
            ref={leftRef}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            <p style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(13,17,23,0.75)",
              marginBottom: "1.5rem",
            }}>
              I'm Dolly, a CSE student who took an unconventional path into tech — starting with a Diploma in Mechanical Engineering before pivoting to Computer Science through lateral entry. That transition taught me to adapt fast and learn what matters.
            </p>

            <p style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(13,17,23,0.75)",
              marginBottom: "2.5rem",
            }}>
              Today I build full-stack web applications with React, Node.js, and MongoDB, explore data through Power BI dashboards, and grind DSA problems to sharpen my problem-solving. Currently CGPA: 8.4/10 at IET Lucknow.
            </p>

            {/* Quick facts */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}>
              {[
                { icon: <BookOpen size={16} />, label: "B.Tech CSE", sub: "3rd Year (Lateral)" },
                { icon: <MapPin size={16} />, label: "Lucknow, India", sub: "Open to Remote" },
                { icon: <Heart size={16} />, label: "Interests", sub: "Web Dev + Analytics" },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  label: "DSA Journey",
                  sub: "200+ Problems Solved",
                },
              ].map(({ icon, label, sub }) => (
                <div key={label} style={{
                  background: "#fff",
                  border: "1px solid rgba(13,17,23,0.08)",
                  borderRadius: 12,
                  padding: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                }}>
                  <span style={{ color: "#84cc16", marginTop: 2, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#0d1117" }}>{label}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(13,17,23,0.5)", marginTop: 2 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Journey */}
          <div
            ref={rightRef}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "#0d1117",
              marginBottom: "1.75rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{ color: "#84cc16" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 12h4l3 8 4-16 3 8h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              My journey
            </h3>

            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute",
                left: 7,
                top: 14,
                bottom: 14,
                width: 1,
                background: "rgba(13,17,23,0.12)",
              }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {journey.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <TimelineDot status={item.status} />
                    <div style={{ flex: 1, paddingTop: 0 }}>
                      <div style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: item.status === "current" ? "var(--purple)" : "rgba(13,17,23,0.4)",
                        letterSpacing: "0.08em",
                        marginBottom: 3,
                      }}>
                        {item.year}
                      </div>
                      <div style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: item.status === "future" ? "rgba(13,17,23,0.4)" : "#0d1117",
                        marginBottom: 2,
                      }}>
                        {item.event}
                      </div>
                      <div style={{
                        fontSize: "0.8rem",
                        color: "rgba(13,17,23,0.5)",
                      }}>
                        {item.detail}
                      </div>
                      {item.status === "current" && (
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          marginTop: 6,
                          padding: "3px 10px",
                          background: "rgba(129,140,248,0.12)",
                          border: "1px solid rgba(129,140,248,0.3)",
                          borderRadius: 99,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: "var(--purple)",
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--purple)", display: "inline-block" }} />
                          Currently here
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div style={{
              marginTop: "2rem",
              background: "#0d1117",
              borderRadius: 16,
              padding: "1.5rem",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(163,230,53,0.08)",
              }} />
              <p style={{
                fontSize: "0.95rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.75)",
                fontStyle: "italic",
              }}>
                "Data is not just numbers — it's a story waiting to be told."
              </p>
              <div style={{
                marginTop: 10,
                fontSize: "0.75rem",
                color: "var(--lime)",
                fontWeight: 600,
              }}>
                — still learning ✦
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

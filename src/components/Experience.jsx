import { useEffect, useRef } from "react";
import { education } from "../data/portfolio";

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

const certifications = [
  { name: "SQL (HackerRank)", issuer: "HackerRank", color: "#a3e635" },
  { name: "Excel (LinkedIn Learning)", issuer: "LinkedIn", color: "#818cf8" },
  { name: "Power BI (Microsoft Learn)", issuer: "Microsoft", color: "#fb923c" },
];

const achievements = [
  {
    icon: "🏆",
    title: "200+ DSA Problems",
    detail: "Solved across LeetCode and CodeChef",
  },
  {
    icon: "⭐",
    title: "CGPA: 8.4 / 10",
    detail: "B.Tech Computer Science & Engineering",
  },
  {
    icon: "🚀",
    title: "Full-Stack Projects",
    detail: "Built 3 end-to-end production-grade apps",
  },
];

export default function Experience() {
  const headRef = useRef(null);
  const eduRef = useRef(null);
  const certRef = useRef(null);
  const achRef = useRef(null);

  useReveal(headRef);
  useReveal(eduRef, 100);
  useReveal(certRef, 200);
  useReveal(achRef, 300);

  return (
    <section id="experience" style={{
      background: "var(--cream)",
      padding: "7rem 5vw",
      color: "#0d1117",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div
          ref={headRef}
          style={{
            opacity: 0,
            transform: "translateY(25px)",
            transition: "all 0.7s ease",
            marginBottom: "3.5rem",
          }}
        >
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
            BACKGROUND
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#0d1117",
          }}>
            Education & Certifications
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "start",
        }} className="exp-grid">

          {/* Left: Education */}
          <div
            ref={eduRef}
            style={{
              opacity: 0,
              transform: "translateY(25px)",
              transition: "all 0.7s ease",
            }}
          >
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#0d1117",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "#a3e635",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
              }}>📚</span>
              Education
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {education.map((edu, i) => (
                <div key={i} style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "1.5rem",
                  border: "1px solid rgba(13,17,23,0.08)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(163,230,53,0.4)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(13,17,23,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Left accent */}
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: i === 0 ? "#a3e635" : "#818cf8",
                    borderRadius: "16px 0 0 16px",
                  }} />

                  <div style={{ paddingLeft: "0.5rem" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.4rem",
                    }}>
                      <span style={{
                        padding: "3px 10px",
                        background: i === 0 ? "rgba(163,230,53,0.12)" : "rgba(129,140,248,0.12)",
                        color: i === 0 ? "#65a30d" : "#6366f1",
                        borderRadius: 99,
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                      }}>
                        {edu.type}
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "rgba(13,17,23,0.4)", fontWeight: 500 }}>
                        {edu.period}
                      </span>
                    </div>

                    <h4 style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#0d1117",
                      marginBottom: "0.3rem",
                      lineHeight: 1.3,
                    }}>
                      {edu.institution}
                    </h4>
                    <p style={{ fontSize: "0.82rem", color: "rgba(13,17,23,0.6)", marginBottom: "0.5rem" }}>
                      {edu.degree}
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.78rem", color: "rgba(13,17,23,0.5)" }}>📍 {edu.location}</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0d1117" }}>{edu.grade}</span>
                    </div>
                    {edu.note && (
                      <span style={{
                        display: "inline-block",
                        marginTop: "0.5rem",
                        padding: "2px 10px",
                        background: "rgba(251,146,60,0.1)",
                        color: "#c2410c",
                        borderRadius: 99,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}>
                        → {edu.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div
              ref={achRef}
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "all 0.7s ease",
                marginTop: "1.5rem",
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#0d1117",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <span style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "#fb923c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                }}>🏆</span>
                Highlights
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {achievements.map((a, i) => (
                  <div key={i} style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "1rem 1.25rem",
                    border: "1px solid rgba(13,17,23,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "all 0.2s ease",
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(4px)";
                      e.currentTarget.style.borderColor = "rgba(163,230,53,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.borderColor = "rgba(13,17,23,0.08)";
                    }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>{a.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "#0d1117" }}>{a.title}</div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(13,17,23,0.5)", marginTop: 2 }}>{a.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Certifications + Summary */}
          <div
            ref={certRef}
            style={{
              opacity: 0,
              transform: "translateY(25px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#0d1117",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "#818cf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
              }}>🎓</span>
              Certifications
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {certifications.map((cert, i) => (
                <div key={i} style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "1.25rem 1.5rem",
                  border: "1px solid rgba(13,17,23,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "all 0.25s ease",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${cert.color}40`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(13,17,23,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${cert.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}>
                    🏅
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#0d1117" }}>{cert.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(13,17,23,0.5)", marginTop: 2 }}>{cert.issuer}</div>
                  </div>
                  <div style={{
                    marginLeft: "auto",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: cert.color,
                    flexShrink: 0,
                  }} />
                </div>
              ))}
            </div>

            {/* Summary card */}
            <div style={{
              background: "#0d1117",
              borderRadius: 20,
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                bottom: -30,
                right: -30,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "rgba(163,230,53,0.06)",
              }} />

              <h4 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#fff",
                marginBottom: "1rem",
              }}>
                Currently Learning
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {[
                  { topic: "LLM-based Application Development", color: "#a3e635" },
                  { topic: "Advanced Data Analytics & Power BI", color: "#818cf8" },
                  { topic: "System Design Fundamentals", color: "#fb923c" },
                ].map(({ topic, color }) => (
                  <div key={topic} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.65)",
                  }}>
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: color,
                      flexShrink: 0,
                    }} />
                    {topic}
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "rgba(163,230,53,0.08)",
                borderRadius: 12,
                border: "1px solid rgba(163,230,53,0.15)",
              }}>
                <p style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  Open to internships, collaborations, and entry-level opportunities in web development and data analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

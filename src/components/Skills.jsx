import { useEffect, useRef } from "react";
import { skills } from "../data/portfolio";

const ICON_SVG = {
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  "bar-chart": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  cpu: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  tool: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const CARD_COLORS = ["#a3e635", "#818cf8", "#fb923c", "#38bdf8", "#f472b6", "#34d399"];

function SkillCard({ skill, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
          }, index * 80);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const color = CARD_COLORS[index % CARD_COLORS.length];

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(25px)",
        transition: "all 0.6s ease",
        background: "#fff",
        borderRadius: 20,
        padding: "1.75rem",
        border: "1px solid rgba(13,17,23,0.07)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.1)`;
        e.currentTarget.style.borderColor = `${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(13,17,23,0.07)";
      }}
    >
      {/* Accent bar */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: color,
        borderRadius: "20px 20px 0 0",
      }} />

      {/* Icon */}
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: `${color}18`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: color,
        marginBottom: "1rem",
      }}>
        {ICON_SVG[skill.icon]}
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1rem",
        color: "#0d1117",
        marginBottom: "1rem",
      }}>
        {skill.category}
      </h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {skill.items.map((item) => (
          <span
            key={item}
            style={{
              padding: "4px 11px",
              background: `${color}12`,
              color: "#0d1117",
              borderRadius: 99,
              fontSize: "0.78rem",
              fontWeight: 500,
              border: `1px solid ${color}25`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ background: "var(--cream-dark, #ece7dc)", padding: "7rem 5vw" }}>
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
            SKILLS
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#0d1117",
            }}>
              What I Work With
            </h2>
            <p style={{
              fontSize: "0.95rem",
              color: "rgba(13,17,23,0.55)",
              maxWidth: 360,
              lineHeight: 1.65,
            }}>
              Technologies and tools I use to build, analyze, and ship things.
            </p>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

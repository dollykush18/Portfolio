import { useEffect, useRef } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
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
    <section id="projects" style={{
      background: "var(--navy)",
      padding: "7rem 5vw",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background dot pattern */}
      <div className="dot-pattern" style={{
        position: "absolute",
        inset: 0,
        opacity: 0.4,
        pointerEvents: "none",
      }} />

      {/* Accent blobs */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "-5%",
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(163,230,53,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "-5%",
        width: 300,
        height: 300,
        background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

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
            background: "rgba(163,230,53,0.1)",
            border: "1px solid rgba(163,230,53,0.2)",
            borderRadius: 99,
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "var(--lime)",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}>
            PROJECTS
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}>
              Selected Work
            </h2>
            <p style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.4)",
              maxWidth: 380,
              lineHeight: 1.65,
            }}>
              Projects I've built while learning, experimenting, and solving real problems.
            </p>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: "3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <a
            href="https://github.com/dollykush"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 28px",
              background: "transparent",
              color: "var(--lime)",
              border: "1px solid rgba(163,230,53,0.3)",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(163,230,53,0.08)";
              e.currentTarget.style.borderColor = "var(--lime)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(163,230,53,0.3)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

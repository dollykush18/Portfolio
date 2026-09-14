import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const PREVIEW_SVGS = {
  dashboard: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="320" height="180" fill="#0d1117" rx="8"/>
      <rect x="12" y="12" width="100" height="60" rx="6" fill="#161b22" stroke="#a3e63520" strokeWidth="1"/>
      <rect x="122" y="12" width="100" height="60" rx="6" fill="#161b22" stroke="#a3e63520" strokeWidth="1"/>
      <rect x="232" y="12" width="76" height="60" rx="6" fill="#161b22" stroke="#a3e63520" strokeWidth="1"/>
      <text x="20" y="32" fontFamily="monospace" fontSize="8" fill="#a3e635" opacity="0.8">PRESENCE %</text>
      <text x="20" y="50" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="#a3e635">87.3%</text>
      <text x="130" y="32" fontFamily="monospace" fontSize="8" fill="#818cf8" opacity="0.8">WFH RATE</text>
      <text x="130" y="50" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="#818cf8">34.1%</text>
      <text x="240" y="32" fontFamily="monospace" fontSize="8" fill="#fb923c" opacity="0.8">LEAVE</text>
      <text x="240" y="50" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="#fb923c">12%</text>
      <rect x="12" y="84" width="194" height="84" rx="6" fill="#161b22" stroke="#a3e63520" strokeWidth="1"/>
      {[0,1,2,3,4,5,6].map((i) => (
        <rect key={i} x={22 + i*26} y={148 - (30+i*8)} width="18" height={30+i*8} rx="3" fill="#a3e635" opacity={0.4 + i*0.08}/>
      ))}
      <rect x="216" y="84" width="92" height="84" rx="6" fill="#161b22" stroke="#a3e63520" strokeWidth="1"/>
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x="224" y={92+i*18} width={55+i*4} height="8" rx="4" fill="#a3e635" opacity={0.3+i*0.15}/>
          <text x="286" y={100+i*18} fontFamily="monospace" fontSize="6" fill="#a3e635" opacity="0.7">{80+i*5}%</text>
        </g>
      ))}
    </svg>
  ),
  webapp: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="320" height="180" fill="#0d1117" rx="8"/>
      <rect x="0" y="0" width="320" height="36" fill="#161b22" rx="8"/>
      <rect x="0" y="28" width="320" height="8" fill="#161b22"/>
      <circle cx="16" cy="18" r="5" fill="#ff5f57"/>
      <circle cx="32" cy="18" r="5" fill="#febc2e"/>
      <circle cx="48" cy="18" r="5" fill="#28c840"/>
      <rect x="80" y="10" width="160" height="16" rx="6" fill="#0d1117"/>
      <text x="140" y="22" fontFamily="monospace" fontSize="7" fill="#ffffff40">collabroom.app</text>
      <rect x="12" y="48" width="80" height="120" rx="6" fill="#161b22" stroke="#81 8cf830" strokeWidth="1"/>
      <rect x="14" y="50" width="76" height="12" fill="#818cf815" rx="3"/>
      <text x="18" y="60" fontFamily="monospace" fontSize="6" fill="#818cf8">Meetings</text>
      {["Daily Standup","Team Sync","1:1 Call"].map((t,i) => (
        <g key={t}>
          <rect x="14" y={66+i*16} width="76" height="13" rx="3" fill={i===0?"#818cf825":"transparent"}/>
          <text x="18" y={77+i*16} fontFamily="monospace" fontSize="5.5" fill={i===0?"#818cf8":"#ffffff50"}>{t}</text>
        </g>
      ))}
      <rect x="102" y="48" width="206" height="120" rx="6" fill="#161b22" stroke="#818cf830" strokeWidth="1"/>
      <circle cx="209" cy="90" r="30" fill="#818cf810" stroke="#818cf840" strokeWidth="2"/>
      <circle cx="209" cy="90" r="12" fill="#818cf8" opacity="0.9"/>
      <text x="203" y="95" fontFamily="monospace" fontSize="9" fill="#fff">▶</text>
      {[[-45,0],[45,0],[0,45],[0,-45]].map(([dx,dy],i) => (
        <circle key={i} cx={209+dx} cy={90+dy} r="16" fill="#161b22" stroke="#818cf840" strokeWidth="1"/>
      ))}
      <rect x="110" y="148" width="190" height="14" rx="4" fill="#818cf815"/>
      <text x="196" y="159" fontFamily="monospace" fontSize="7" fill="#818cf8">⬛ Share Screen</text>
    </svg>
  ),
  trading: (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="320" height="180" fill="#0d1117" rx="8"/>
      <rect x="0" y="0" width="320" height="36" fill="#161b22"/>
      <text x="12" y="22" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#fb923c">Zerodha</text>
      <text x="70" y="22" fontFamily="monospace" fontSize="7" fill="#ffffff40">KITE · PORTFOLIO · CONSOLE</text>
      <rect x="12" y="44" width="138" height="70" rx="6" fill="#161b22"/>
      <text x="18" y="60" fontFamily="monospace" fontSize="7" fill="#ffffff60">NIFTY 50</text>
      <text x="18" y="76" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#34d399">22,456.80</text>
      <text x="18" y="90" fontFamily="monospace" fontSize="7" fill="#34d399">▲ +123.45 (0.55%)</text>
      <polyline points="18,108 35,100 52,104 70,96 88,102 105,92 122,98 138,88 138,110 18,110" fill="#34d39920" stroke="#34d399" strokeWidth="1.5"/>
      <rect x="160" y="44" width="148" height="130" rx="6" fill="#161b22"/>
      <text x="168" y="62" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#ffffff80">Holdings</text>
      {[
        {name:"RELIANCE",qty:5,val:"₹14,320",chg:"+2.1%",c:"#34d399"},
        {name:"TCS",qty:3,val:"₹11,850",chg:"-0.5%",c:"#f87171"},
        {name:"INFY",qty:10,val:"₹16,400",chg:"+1.3%",c:"#34d399"},
        {name:"HDFC",qty:2,val:"₹ 3,400",chg:"+0.8%",c:"#34d399"},
      ].map((s,i) => (
        <g key={s.name}>
          <text x="168" y={82+i*20} fontFamily="monospace" fontSize="6.5" fill="#fff">{s.name}</text>
          <text x="230" y={82+i*20} fontFamily="monospace" fontSize="6" fill="#ffffff50">{s.qty} shares</text>
          <text x="270" y={82+i*20} fontFamily="monospace" fontSize="6.5" fill="#ffffff80">{s.val}</text>
          <text x="270" y={92+i*20} fontFamily="monospace" fontSize="6" fill={s.c}>{s.chg}</text>
        </g>
      ))}
      <rect x="12" y="124" width="138" height="50" rx="6" fill="#161b22"/>
      <text x="18" y="140" fontFamily="monospace" fontSize="7" fill="#ffffff60">Portfolio Value</text>
      <text x="18" y="158" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#fb923c">₹45,970.00</text>
    </svg>
  ),
};

export default function ProjectCard({ project, index }) {
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
          }, index * 120);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const hasLink = project.github || project.live;
  const linkUrl = project.live || project.github;

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.7s ease",
        background: "#161b22",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = `${project.color}40`;
        el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}20`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Preview */}
      <div style={{
        height: 180,
        background: "#0d1117",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        {PREVIEW_SVGS[project.preview]}
        {/* Number badge */}
        <div style={{
          position: "absolute",
          top: 12,
          left: 12,
          width: 28,
          height: 28,
          borderRadius: 8,
          background: project.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "0.75rem",
          color: project.color === "#a3e635" ? "#0d1117" : "#fff",
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Tech tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "1rem" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 10px",
                background: `${project.color}15`,
                color: project.color,
                borderRadius: 99,
                fontSize: "0.7rem",
                fontWeight: 600,
                border: `1px solid ${project.color}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.15rem",
          color: "#fff",
          marginBottom: "0.6rem",
          lineHeight: 1.3,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: "0.85rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.5)",
          marginBottom: "1rem",
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Key bullets */}
        <ul style={{
          listStyle: "none",
          padding: 0,
          marginBottom: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}>
          {project.bullets.slice(0, 2).map((b, i) => (
            <li key={i} style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.4)",
              paddingLeft: "1rem",
              position: "relative",
              lineHeight: 1.55,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                color: project.color,
              }}>›</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Link */}
        <div>
          {hasLink ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 18px",
                background: project.color,
                color: project.color === "#a3e635" ? "#0d1117" : "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "0.82rem",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              View Project <ArrowUpRight size={14} />
            </a>
          ) : (
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 18px",
              border: `1px solid ${project.color}30`,
              color: "rgba(255,255,255,0.3)",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: "0.82rem",
              fontFamily: "var(--font-body)",
            }}>
              Private Project
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

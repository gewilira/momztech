const nodes: { top: string; left: string; color: string; delay: string }[] = [
  { top: "8%",  left: "12%", color: "#E29A5C", delay: "0s"   },
  { top: "22%", left: "82%", color: "#5FD0C5", delay: "0.6s" },
  { top: "38%", left: "6%",  color: "#5FD0C5", delay: "1.2s" },
  { top: "55%", left: "92%", color: "#E29A5C", delay: "0.3s" },
  { top: "68%", left: "28%", color: "#5FD0C5", delay: "1.8s" },
  { top: "12%", left: "55%", color: "#E29A5C", delay: "2.1s" },
];

const traceLines: { x1: string; y1: string; x2: string; y2: string; color: string; delay: string }[] = [
  { x1: "0%",   y1: "15%", x2: "45%",  y2: "15%", color: "#E29A5C", delay: "0s"  },
  { x1: "60%",  y1: "35%", x2: "100%", y2: "35%", color: "#5FD0C5", delay: "2s"  },
];

export default function CircuitBackground() {
  return (
    <div
      className="brick-bg fixed inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse 100% 85% at 50% 0%, #000 0%, transparent 95%)",
        maskImage: "radial-gradient(ellipse 100% 85% at 50% 0%, #000 0%, transparent 95%)",
      }}
    >
      {/* Circuit-board trace pattern */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.85 }}>
        <defs>
          <pattern id="circuit-trace" width="140" height="140" patternUnits="userSpaceOnUse">
            <path
              d="M0 70 H40 V20 H100 M140 70 H100 V120 H60 M40 20 V0 M100 120 V140"
              fill="none"
              stroke="#E29A5C"
              strokeWidth="1.5"
              strokeOpacity="0.45"
            />
            <circle cx="40" cy="20" r="3" fill="#5FD0C5" opacity="0.6" />
            <circle cx="100" cy="120" r="3" fill="#E29A5C" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-trace)" />

        {/* Animated data-flow traces */}
        {traceLines.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={l.color}
            strokeWidth="2"
            strokeOpacity="0.65"
            strokeDasharray="6 14"
            className="animate-trace-flow"
            style={{ animationDelay: l.delay }}
          />
        ))}
      </svg>

      {/* Pulsing nodes */}
      {nodes.map((n, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-node-pulse"
          style={{
            top: n.top,
            left: n.left,
            width: "7px",
            height: "7px",
            background: n.color,
            boxShadow: `0 0 12px ${n.color}, 0 0 22px ${n.color}99`,
            animationDelay: n.delay,
          }}
        />
      ))}
    </div>
  );
}

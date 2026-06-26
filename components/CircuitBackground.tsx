// Nature-meets-tech backdrop, in balance. Topographic contour lines (the mountains
// motif) sprout circuit "taps" ending in pulsing nodes — and some of those nodes
// grow leaves, where technology turns back into life. Above it all, a gentle rise
// of "life + data" motes (green seeds and teal/azure data particles) keeps the
// whole thing feeling alive and refreshing. Cyan-teal AI glow + pine green + sky
// azure, kept faint so it sits behind the light page.

const NODE_TEAL = "#16B6C4";
const NODE_PINE = "#2E7D46";
const NODE_AZURE = "#1E73C8";

// Flowing contour curves spanning the viewport (topographic / mountain feel).
const contours: { d: string; color: string; opacity: number }[] = [
  { d: "M-40 210 C 240 140, 460 250, 720 200 S 1200 120, 1480 190", color: NODE_AZURE, opacity: 0.18 },
  { d: "M-40 300 C 260 240, 520 340, 760 290 S 1220 220, 1480 280", color: NODE_TEAL,  opacity: 0.22 },
  { d: "M-40 410 C 300 350, 540 460, 800 400 S 1240 330, 1480 390", color: NODE_PINE,  opacity: 0.16 },
  { d: "M-40 520 C 240 470, 520 560, 780 510 S 1260 440, 1480 500", color: NODE_TEAL,  opacity: 0.16 },
  { d: "M-40 640 C 300 590, 560 690, 820 630 S 1260 560, 1480 620", color: NODE_AZURE, opacity: 0.12 },
];

// Circuit "taps": a short right-angle branch off a contour, ending in a node.
// `leaf` marks the nodes where the circuit grows back into a living leaf.
const taps: { x: number; y: number; dir: 1 | -1; color: string; delay: string; leaf?: boolean }[] = [
  { x: 230,  y: 168, dir: -1, color: NODE_AZURE, delay: "0s"   },
  { x: 720,  y: 200, dir:  1, color: NODE_TEAL,  delay: "0.6s", leaf: true },
  { x: 1140, y: 165, dir: -1, color: NODE_AZURE, delay: "2.1s" },
  { x: 360,  y: 318, dir:  1, color: NODE_TEAL,  delay: "1.2s" },
  { x: 980,  y: 360, dir: -1, color: NODE_PINE,  delay: "0.3s", leaf: true },
  { x: 560,  y: 432, dir:  1, color: NODE_PINE,  delay: "1.8s", leaf: true },
  { x: 1240, y: 470, dir: -1, color: NODE_TEAL,  delay: "0.9s" },
];

// Animated data-flow traces that ride along two of the contours.
const flowTraces = [
  { d: contours[1].d, color: NODE_TEAL,  delay: "0s" },
  { d: contours[2].d, color: NODE_PINE,  delay: "2s" },
];

// Drifting "life + data" motes: green = seeds/pollen (nature), teal/azure = data (tech).
const motes: { left: string; top: string; size: number; color: string; glow: boolean; op: number; dur: string; delay: string; dx: string }[] = [
  { left: "10%", top: "80%", size: 6, color: NODE_PINE,  glow: false, op: 0.45, dur: "18s", delay: "0s",   dx: "18px"  },
  { left: "30%", top: "88%", size: 4, color: NODE_TEAL,  glow: true,  op: 0.5,  dur: "16s", delay: "3s",   dx: "-12px" },
  { left: "48%", top: "82%", size: 5, color: NODE_PINE,  glow: false, op: 0.4,  dur: "20s", delay: "6s",   dx: "20px"  },
  { left: "64%", top: "90%", size: 4, color: NODE_AZURE, glow: true,  op: 0.5,  dur: "17s", delay: "1.5s", dx: "-16px" },
  { left: "80%", top: "78%", size: 5, color: NODE_PINE,  glow: false, op: 0.42, dur: "21s", delay: "4.5s", dx: "14px"  },
  { left: "92%", top: "86%", size: 4, color: NODE_TEAL,  glow: true,  op: 0.5,  dur: "15s", delay: "7.5s", dx: "-10px" },
];

// A small leaf growing up out of a node at local origin (base at 0,0, tip up).
function Leaf({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g
      transform={`translate(${x} ${y})`}
      className="animate-leaf-sway"
      style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}
    >
      <path
        d="M0 0 C -9 -9, -7 -24, 0 -32 C 7 -24, 9 -9, 0 0 Z"
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeOpacity="0.55"
        strokeWidth="1.25"
      />
      <path d="M0 -2 L0 -28 M0 -12 L-6 -18 M0 -12 L6 -18" stroke={color} strokeOpacity="0.5" strokeWidth="1" fill="none" />
    </g>
  );
}

export default function CircuitBackground() {
  return (
    <div
      className="brick-bg fixed inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{
        zIndex: -1,
        WebkitMaskImage: "radial-gradient(ellipse 100% 85% at 50% 0%, #000 0%, transparent 95%)",
        maskImage: "radial-gradient(ellipse 100% 85% at 50% 0%, #000 0%, transparent 95%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Topographic contour lines */}
        {contours.map((c, i) => (
          <path
            key={i}
            d={c.d}
            fill="none"
            stroke={c.color}
            strokeWidth="1.5"
            strokeOpacity={c.opacity}
            strokeLinecap="round"
          />
        ))}

        {/* Animated data-flow riding the contours */}
        {flowTraces.map((t, i) => (
          <path
            key={`flow-${i}`}
            d={t.d}
            fill="none"
            stroke={t.color}
            strokeWidth="2"
            strokeOpacity="0.55"
            strokeDasharray="6 16"
            className="animate-trace-flow"
            style={{ animationDelay: t.delay }}
          />
        ))}

        {/* Circuit taps: contour → right-angle branch → node (some grow a leaf) */}
        {taps.map((t, i) => {
          const nx = t.x + t.dir * 34;
          const ny = t.y - 30;
          return (
            <g key={`tap-${i}`}>
              <path
                d={`M${t.x} ${t.y} H${nx} V${ny}`}
                fill="none"
                stroke={t.color}
                strokeWidth="1.25"
                strokeOpacity="0.4"
              />
              <circle cx={t.x} cy={t.y} r="2.5" fill={t.color} opacity="0.6" />
              {t.leaf && <Leaf x={nx} y={ny} color={NODE_PINE} />}
            </g>
          );
        })}
      </svg>

      {/* Pulsing tap nodes (HTML so they get the soft glow + node-pulse animation) */}
      {taps.map((t, i) => {
        const nx = (t.x + t.dir * 34) / 1440;
        const ny = (t.y - 30) / 900;
        return (
          <span
            key={`node-${i}`}
            className="absolute rounded-full animate-node-pulse"
            style={{
              left: `${nx * 100}%`,
              top: `${ny * 100}%`,
              width: "7px",
              height: "7px",
              background: t.color,
              boxShadow: `0 0 12px ${t.color}, 0 0 22px ${t.color}99`,
              animationDelay: t.delay,
            }}
          />
        );
      })}

      {/* Drifting life + data motes */}
      {motes.map((m, i) => (
        <span
          key={`mote-${i}`}
          className="absolute rounded-full animate-drift"
          style={
            {
              left: m.left,
              top: m.top,
              width: `${m.size}px`,
              height: `${m.size}px`,
              background: m.color,
              boxShadow: m.glow ? `0 0 8px ${m.color}, 0 0 14px ${m.color}88` : "none",
              animationDuration: m.dur,
              animationDelay: m.delay,
              "--mote-opacity": m.op,
              "--dx": m.dx,
              "--dy": "-150px",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

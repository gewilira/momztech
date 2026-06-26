// Signifies "The MomzTech Principle": a single tree growing living leaves on one
// side and glowing circuitry on the other from the same trunk — technology and
// nature growing together, in balance — crowned by an AI/sun node.
const PINE = "#2E7D46";
const TEAL = "#16B6C4";
const AZURE = "#1E73C8";

const leafBranches = [
  { from: [180, 208], c: [152, 178], tip: [120, 150], rot: -32 },
  { from: [180, 188], c: [150, 152], tip: [130, 116], rot: -15 },
  { from: [180, 228], c: [156, 208], tip: [134, 184], rot: -48 },
  { from: [180, 170], c: [162, 150], tip: [150, 128], rot: -8 },
];

const circuitBranches = [
  { from: [180, 208], mid: [226, 208], tip: [226, 150] },
  { from: [180, 188], mid: [240, 188], tip: [240, 126] },
  { from: [180, 228], mid: [214, 228], tip: [214, 186] },
  { from: [180, 170], mid: [212, 170], tip: [212, 140] },
];

function Leaf({ x, y, rot, delay }: { x: number; y: number; rot: number; delay: number }) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rot})`}
      className="animate-leaf-sway"
      style={{ transformBox: "fill-box", transformOrigin: "bottom center", animationDelay: `${delay}s` }}
    >
      <path d="M0 0 C -8 -8, -6 -22, 0 -28 C 6 -22, 8 -8, 0 0 Z" fill={PINE} fillOpacity="0.85" />
      <path d="M0 -2 L0 -24" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
    </g>
  );
}

export default function PrincipleVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(180deg,#EAF4FD 0%, #FFFFFF 72%)", border: "1px solid #D3E1EC", boxShadow: "0 30px 70px -45px rgba(20,32,43,0.4)" }}
    >
      <svg
        viewBox="0 0 360 340"
        className="block w-full"
        fill="none"
        role="img"
        aria-label="A single tree growing living leaves on one side and glowing circuitry on the other — technology and nature in balance"
      >
        {/* distant ridges */}
        <path d="M0 300 L70 250 L130 290 L210 240 L290 285 L360 250 L360 340 L0 340 Z" fill={TEAL} fillOpacity="0.08" />
        {/* ground mound */}
        <path d="M30 302 Q180 280 330 302 L330 340 L30 340 Z" fill={PINE} fillOpacity="0.16" />
        <path d="M44 300 Q180 280 316 300" stroke={PINE} strokeOpacity="0.4" strokeWidth="1.5" />

        {/* trunk */}
        <path d="M180 306 C 175 262, 185 215, 180 150" stroke={PINE} strokeWidth="4.5" strokeLinecap="round" />

        {/* left — organic branches + leaves (nature) */}
        {leafBranches.map((b, i) => (
          <path key={`lb-${i}`} d={`M${b.from[0]} ${b.from[1]} Q ${b.c[0]} ${b.c[1]} ${b.tip[0]} ${b.tip[1]}`} stroke={PINE} strokeOpacity="0.7" strokeWidth="2" />
        ))}
        {leafBranches.map((b, i) => (
          <Leaf key={`lf-${i}`} x={b.tip[0]} y={b.tip[1]} rot={b.rot} delay={i * 0.4} />
        ))}

        {/* right — circuit branches + nodes (technology) */}
        {circuitBranches.map((b, i) => (
          <path key={`cb-${i}`} d={`M${b.from[0]} ${b.from[1]} H ${b.mid[0]} V ${b.tip[1]}`} stroke={AZURE} strokeOpacity="0.6" strokeWidth="1.6" />
        ))}
        {circuitBranches.map((b, i) => (
          <g key={`cn-${i}`}>
            <circle cx={b.tip[0]} cy={b.tip[1]} r="7" fill={TEAL} fillOpacity="0.18" />
            <circle
              cx={b.tip[0]}
              cy={b.tip[1]}
              r="3.4"
              fill={TEAL}
              className="animate-node-pulse"
              style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${i * 0.5}s` }}
            />
          </g>
        ))}

        {/* crown — AI / sun balance point */}
        <circle cx="180" cy="142" r="16" stroke={TEAL} strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="180" cy="142" r="9" fill={TEAL} fillOpacity="0.2" />
        <circle cx="180" cy="142" r="5" fill={TEAL} className="animate-node-pulse" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      </svg>
    </div>
  );
}

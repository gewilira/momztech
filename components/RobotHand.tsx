// A sleek robotic hand presenting the AI core from below — the signature
// "robot hand holding Earth" gesture from the brand image. Stylised, segmented
// digits with glowing joint nodes and a palm energy core.
const STEEL = "#1E73C8";
const JOINT = "#16B6C4";
const PANEL = "#F2F8FD";

const fingers = [
  { p: "M198 82 L188 54 L183 32", joint: [188, 54], tip: [183, 32] },
  { p: "M213 79 L209 49 L207 26", joint: [209, 49], tip: [207, 26] },
  { p: "M229 79 L233 49 L237 28", joint: [233, 49], tip: [237, 28] },
  { p: "M244 82 L255 55 L261 36", joint: [255, 55], tip: [261, 36] },
];
const thumb = { p: "M192 99 L169 87 L154 76", joint: [169, 87], tip: [154, 76] };

export default function RobotHand() {
  return (
    <svg
      viewBox="0 0 440 156"
      preserveAspectRatio="xMidYMax meet"
      className="block w-full"
      style={{ height: "118px", marginTop: "-46px" }}
      fill="none"
      aria-hidden="true"
    >
      {/* faint energy beam rising from the palm toward the core */}
      <path d="M222 86 L196 -30 L248 -30 Z" fill="url(#beam)" opacity="0.5" />
      <defs>
        <linearGradient id="beam" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#16B6C4" stopOpacity="0.35" />
          <stop offset="1" stopColor="#16B6C4" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* forearm + wrist */}
      <rect x="200" y="114" width="44" height="46" rx="11" fill={PANEL} stroke={STEEL} strokeWidth="1.4" />
      <line x1="222" y1="120" x2="222" y2="150" stroke={STEEL} strokeOpacity="0.4" strokeWidth="1" />
      <rect x="191" y="99" width="62" height="17" rx="8" fill="#FFFFFF" stroke={STEEL} strokeWidth="1.4" />
      <circle cx="222" cy="107.5" r="3" fill={JOINT} />

      {/* fingers + thumb (drawn before palm so the palm overlaps their base) */}
      {[...fingers, thumb].map((f, i) => (
        <path key={i} d={f.p} stroke={STEEL} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      ))}

      {/* palm */}
      <rect x="185" y="73" width="74" height="30" rx="13" fill="#FFFFFF" stroke={STEEL} strokeWidth="1.4" />
      {/* palm energy core */}
      <circle cx="222" cy="88" r="11" fill={JOINT} fillOpacity="0.18" />
      <circle cx="222" cy="88" r="5.5" fill={JOINT} className="animate-node-pulse" style={{ transformBox: "fill-box", transformOrigin: "center" }} />

      {/* joint + fingertip nodes */}
      {[...fingers, thumb].map((f, i) => (
        <g key={`n-${i}`}>
          <circle cx={f.joint[0]} cy={f.joint[1]} r="2.6" fill="#FFFFFF" stroke={STEEL} strokeWidth="1.2" />
          <circle cx={f.tip[0]} cy={f.tip[1]} r="3.4" fill={JOINT} fillOpacity="0.2" />
          <circle cx={f.tip[0]} cy={f.tip[1]} r="1.8" fill={JOINT} />
        </g>
      ))}
    </svg>
  );
}

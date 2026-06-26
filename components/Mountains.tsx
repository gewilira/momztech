// Layered mountain horizon (pine → teal → azure), the recurring "nature meets
// tech" motif. Full-bleed by default; stretches to whatever width it's dropped in.
export default function Mountains({
  className = "",
  height = "clamp(120px,15vw,210px)",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div className={className} aria-hidden="true" style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height }}
        fill="none"
      >
        {/* far ridge — pine */}
        <path
          d="M0 220 L0 118 L240 60 L470 132 L700 48 L940 120 L1180 54 L1440 108 L1440 220 Z"
          fill="#2E7D46"
          fillOpacity="0.16"
        />
        {/* mid ridge — teal */}
        <path
          d="M0 220 L0 150 L260 96 L520 152 L780 80 L1040 142 L1300 86 L1440 130 L1440 220 Z"
          fill="#16B6C4"
          fillOpacity="0.24"
        />
        {/* front ridge — azure */}
        <path
          d="M0 220 L0 182 L300 126 L580 176 L840 116 L1100 166 L1360 122 L1440 156 L1440 220 Z"
          fill="#1E73C8"
        />
      </svg>
    </div>
  );
}

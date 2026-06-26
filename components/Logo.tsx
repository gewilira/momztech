// Brand mark: a mountain range that reads as an "M" (Momz) with a rising AI node
// between the peaks — the "nature meets tech" idea, in azure / teal / pine.
export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* back ridge — pine, soft (depth) */}
      <path
        d="M4 84 L28 50 L46 70 L60 54 L86 84"
        stroke="#2E7D46"
        strokeWidth="4"
        strokeOpacity="0.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* main range = M monogram — azure */}
      <path
        d="M8 84 L32 34 L50 58 L68 34 L92 84"
        stroke="#1E73C8"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* rising AI node + halo — teal */}
      <circle cx="50" cy="28" r="11.5" stroke="#16B6C4" strokeWidth="2" strokeOpacity="0.4" />
      <circle cx="50" cy="28" r="6.5" fill="#16B6C4" />
      {/* circuit nodes at the summits */}
      <circle cx="32" cy="34" r="3.5" fill="#1E73C8" />
      <circle cx="68" cy="34" r="3.5" fill="#1E73C8" />
    </svg>
  );
}

export default function Logo({
  size = 26,
  showText = true,
  textColor = "#14202B",
}: {
  size?: number;
  showText?: boolean;
  textColor?: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      {showText && (
        <span style={{ fontWeight: 600, fontSize: "1.125rem", letterSpacing: "-0.01em", color: textColor }}>
          Momz<span style={{ color: "#1E73C8" }}>Tech</span>
        </span>
      )}
    </div>
  );
}

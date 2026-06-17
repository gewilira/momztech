export function LogoMark({ size = 26, color = "#E29A5C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ color }}>
      <path d="M50 14 L84 42 V86 H16 V42 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M42 86 V62 H58 V86" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 56 H4 M84 56 H96 M50 14 V4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="4" cy="56" r="4" fill="currentColor" />
      <circle cx="96" cy="56" r="4" fill="currentColor" />
      <circle cx="50" cy="4" r="4" fill="currentColor" />
      <circle cx="50" cy="46" r="5" fill="currentColor" />
    </svg>
  );
}

export default function Logo({
  size = 26,
  showText = true,
  textColor = "#F4EBE0",
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
          MomzTech
        </span>
      )}
    </div>
  );
}

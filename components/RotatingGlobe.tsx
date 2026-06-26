// A small Earth turning on its axis — the planet at the centre of the hero's
// AI + nature ring. Meridians and green continents scroll horizontally inside a
// clipped circle to read as rotation. Two identical tiles (each 24 wide) are
// duplicated and translated by exactly one tile, so the loop is seamless.
const meridians = [0, 6, 12, 18];
const continents = [
  { cx: 8,  cy: 9,  rx: 2.0, ry: 1.6 },
  { cx: 14, cy: 14, rx: 2.4, ry: 2.0 },
  { cx: 5,  cy: 15, rx: 1.2, ry: 1.1 },
  { cx: 17, cy: 7,  rx: 1.4, ry: 1.2 },
];

export default function RotatingGlobe({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="globe-clip">
          <circle cx="12" cy="12" r="9.4" />
        </clipPath>
      </defs>

      {/* ocean + edge */}
      <circle cx="12" cy="12" r="9.4" fill="rgba(22,182,196,0.16)" stroke="#1E73C8" strokeWidth="1.4" />

      <g clipPath="url(#globe-clip)">
        {/* rotating surface */}
        <g className="animate-globe-spin">
          {[0, 24].map((offset) => (
            <g key={offset} transform={`translate(${offset} 0)`}>
              {continents.map((c, i) => (
                <ellipse key={i} cx={c.cx} cy={c.cy} rx={c.rx} ry={c.ry} fill="#2E7D46" fillOpacity="0.55" />
              ))}
              {meridians.map((x) => (
                <ellipse key={x} cx={x} cy="12" rx="2.1" ry="9.4" stroke="#1E73C8" strokeOpacity="0.5" strokeWidth="0.8" fill="none" />
              ))}
            </g>
          ))}
        </g>

        {/* latitudes (fixed) */}
        <g stroke="#1E73C8" strokeOpacity="0.45" strokeWidth="0.8" fill="none">
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="2" y1="12" x2="22" y2="12" strokeOpacity="0.6" />
          <line x1="2" y1="16" x2="22" y2="16" />
        </g>
      </g>
    </svg>
  );
}

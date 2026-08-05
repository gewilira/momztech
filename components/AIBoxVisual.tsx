import { ShieldCheck, CloudOff } from "lucide-react";

/**
 * The Hero brand visual: a MomzTech AI box sitting inside the client's own
 * building. A dashed perimeter marks "your premises"; the uplink to the cloud
 * is visibly severed, while LAN traces keep flowing to devices *inside* the
 * perimeter. Server component — no hooks, no state.
 *
 * Layout note: the artwork is a fixed 380x210 viewBox, but the Hero column is
 * wider than that, so `xMidYMid meet` letterboxes it. Percent-positioned HTML
 * overlays would drift out of alignment with the SVG geometry. Fix: the
 * background layers span the full stage, while the SVG *and* its overlays live
 * in an inner div locked to the same 380/210 aspect ratio — inside it, one SVG
 * user unit is exactly (1/380) or (1/210) of the box.
 */

const STAGE_W = 380;
const STAGE_H = 210;
/** Position, in SVG user units, as a percentage of the stage. */
const pctX = (x: number) => `${(x / STAGE_W) * 100}%`;
const pctY = (y: number) => `${(y / STAGE_H) * 100}%`;
/** Size, in SVG user units, as a fraction of the stage's own width. The stage
 *  is a container (`container-type: inline-size`), so `cqw` makes the HTML
 *  overlays shrink in step with the SVG instead of ballooning on narrow
 *  screens. 1 unit = 1px once the stage reaches its 380px cap. */
const cq = (px: number) => `${((px / STAGE_W) * 100).toFixed(3)}cqw`;

// Internal LAN: the box → devices elsewhere in the building. Data moves, but
// only within the walls.
// Endpoints stay inside the perimeter (which ends at y=186) — the whole point
// is that traffic never crosses the wall.
const lanTraces = [
  { x2: 76,  y2: 172, color: "#1E73C8", delay: "0s"   },
  { x2: 158, y2: 176, color: "#16B6C4", delay: "0.4s" },
  { x2: 238, y2: 172, color: "#1E73C8", delay: "0.8s" },
];
const lanOrigins = [
  { x1: 134, y1: 162 },
  { x1: 160, y1: 162 },
  { x1: 186, y1: 162 },
];

export default function AIBoxVisual() {
  return (
    <div
      className="relative overflow-hidden"
      role="img"
      aria-label="A MomzTech AI box installed inside a client's building — private, with no cloud uplink"
    >
      {/* sky wash */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#E7F1FB 0%, #F4FAFE 60%, #FFFFFF 100%)" }} />

      {/* HUD tech grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,115,200,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(30,115,200,0.16) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, #000 25%, transparent 80%)",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, #000 25%, transparent 80%)",
        }}
      />

      {/* nature horizon — flattened, so the box still sits in the world */}
      <svg viewBox="0 0 440 40" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: "24px" }} fill="none" aria-hidden="true">
        <path d="M0 40 L0 22 L90 8 L170 24 L260 6 L340 20 L440 10 L440 40 Z" fill="#2E7D46" fillOpacity="0.16" />
        <path d="M0 40 L0 30 L110 16 L210 30 L300 14 L380 26 L440 18 L440 40 Z" fill="#16B6C4" fillOpacity="0.2" />
      </svg>

      {/* ── Fixed-aspect stage: SVG units and overlay percentages agree in here.
           Sized from *width* (capped at the artwork's natural 380px) so it
           scales down on narrow screens instead of overflowing and being
           clipped. It also defines the outer stage's height. ── */}
      <div
        className="relative w-full mx-auto"
        style={{ maxWidth: `${STAGE_W}px`, aspectRatio: `${STAGE_W} / ${STAGE_H}`, containerType: "inline-size" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${STAGE_W} ${STAGE_H}`} fill="none" aria-hidden="true">
          {/* your premises */}
          <text x="44" y="24" fontSize="7.5" letterSpacing="1.4" fill="#5C6B76" style={{ fontFamily: "var(--font-mono), monospace" }}>
            YOUR PREMISES
          </text>
          <rect x="38" y="32" width="232" height="154" rx="10" fill="none" stroke="#1E73C8" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="5 6" />

          {/* severed uplink — the cloud link that isn't there */}
          <path d="M234 100 L262 80" stroke="#93A2AD" strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="3 4" />
          <path d="M282 66 L302 52" stroke="#93A2AD" strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="3 4" />
          <path d="M266 67 L278 79 M278 67 L266 79" stroke="#5C6B76" strokeWidth="1.4" strokeLinecap="round" />

          {/* internal LAN — data flows, but only inside the walls */}
          {lanTraces.map((t, i) => (
            <line
              key={t.x2}
              x1={lanOrigins[i].x1}
              y1={lanOrigins[i].y1}
              x2={t.x2}
              y2={t.y2}
              stroke={t.color}
              strokeOpacity="0.5"
              strokeWidth="1"
              strokeDasharray="3 4"
              className="animate-trace-flow"
              style={{ animationDelay: t.delay }}
            />
          ))}
          {lanTraces.map((t) => (
            <circle key={`dot-${t.x2}`} cx={t.x2} cy={t.y2} r="3.2" fill="#FFFFFF" stroke={t.color} strokeWidth="1.2" />
          ))}

          {/* ── the appliance ── */}
          {/* top face */}
          <path d="M104 104 L122 90 L234 90 L216 104 Z" fill="#EDF4FA" stroke="#BCD0E0" strokeWidth="1.2" />
          <path d="M120 96 L212 96 M116 100 L208 100" stroke="#D3E1EC" strokeWidth="1" />
          {/* right face */}
          <path d="M216 104 L234 90 L234 148 L216 162 Z" fill="#E7F0F7" stroke="#BCD0E0" strokeWidth="1.2" />
          {/* front face */}
          <rect x="104" y="104" width="112" height="58" rx="4" fill="#FFFFFF" stroke="#BCD0E0" strokeWidth="1.2" />

          {/* vent grille */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x="112" y={112 + i * 8} width="40" height="3" rx="1.5" fill="#D3E1EC" />
          ))}

          {/* status LEDs */}
          <circle cx="160" cy="114" r="2.6" fill="#2E7D46" />
          <circle cx="160" cy="122" r="2.6" fill="#16B6C4" className="animate-led" />
          <circle cx="160" cy="130" r="2.6" fill="#1E73C8" className="animate-led" style={{ animationDelay: "0.7s" }} />

          {/* GPU + storage bays */}
          <rect x="170" y="112" width="38" height="20" rx="3" fill="rgba(30,115,200,0.08)" stroke="#1E73C8" strokeOpacity="0.35" />
          <text x="176" y="125" fontSize="7" fill="#1E73C8" style={{ fontFamily: "var(--font-mono), monospace" }}>GPU</text>
          <rect x="170" y="138" width="38" height="14" rx="3" fill="rgba(22,182,196,0.1)" stroke="#16B6C4" strokeOpacity="0.4" />
          <text x="177" y="148" fontSize="6.5" fill="#0A7681" style={{ fontFamily: "var(--font-mono), monospace" }}>SSD</text>
        </svg>

        {/* scanline over the front face (x 104→216, y 104→162) */}
        <div className="absolute overflow-hidden" style={{ left: pctX(104), right: pctX(STAGE_W - 216), top: pctY(104), height: pctY(58) }}>
          <span className="scan animate-scan" />
        </div>

        {/* what's loaded on it */}
        <span className="chip absolute whitespace-nowrap" style={{ left: pctX(44), top: pctY(40), fontSize: `max(8px, ${cq(9)})`, padding: `${cq(3.2)} ${cq(7.2)}` }}>
          LLM &middot; LOCAL
        </span>
        <span className="chip absolute whitespace-nowrap" style={{ left: pctX(44), top: pctY(64), fontSize: `max(8px, ${cq(9)})`, padding: `${cq(3.2)} ${cq(7.2)}` }}>
          RAG &middot; YOUR DOCS
        </span>

        {/* privacy badge — inside the perimeter */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: pctX(46),
            top: pctY(118),
            width: cq(38),
            height: cq(38),
            borderRadius: cq(11),
            background: "rgba(255,255,255,0.92)",
            border: "1px solid #2E7D46",
            boxShadow: `0 0 0 ${cq(4)} rgba(46,125,70,0.1), 0 8px 20px -10px rgba(20,32,43,0.45)`,
            backdropFilter: "blur(2px)",
          }}
          title="Private by design"
        >
          <ShieldCheck style={{ width: cq(18), height: cq(18), color: "#2E7D46" }} />
        </div>

        {/* no-cloud badge — deliberately outside the perimeter */}
        <div className="absolute flex flex-col items-center" style={{ left: pctX(300), top: pctY(24) }}>
          <div
            className="flex items-center justify-center"
            style={{
              width: cq(36),
              height: cq(36),
              borderRadius: cq(11),
              background: "rgba(255,255,255,0.92)",
              border: "1px solid #D3E1EC",
            }}
            title="No cloud dependency"
          >
            <CloudOff style={{ width: cq(17), height: cq(17), color: "#93A2AD" }} />
          </div>
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: `max(7px, ${cq(8)})`, letterSpacing: "0.1em", color: "#93A2AD", marginTop: cq(4) }}>
            no cloud
          </span>
        </div>
      </div>
    </div>
  );
}

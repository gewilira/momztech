"use client";

import { useId, useState, type ReactNode } from "react";
import { Check, Clock, ChevronDown, Server, ArrowRight } from "lucide-react";

export type Offering = {
  name: string;
  tagline: string;
  timeline: string;
  includes: string[];
};

type Props = {
  /** Rendered element, not a component reference — lucide-react ships no
   *  "use client", so its icons cannot cross the server/client boundary as
   *  functions. The server parent renders <Icon /> and passes the node. */
  icon: ReactNode;
  label: string;
  title: string;
  blurb: string;
  offerings: Offering[];
  crossLink?: { label: string; href: string };
};

export default function ServiceModuleCard({ icon, label, title, blurb, offerings, crossLink }: Props) {
  const uid = useId();
  const btnId = `${uid}-btn`;
  const panelId = `${uid}-panel`;
  const [open, setOpen] = useState(false);

  return (
    <div className="module-row">
      <button
        id={btnId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-5 sm:p-6 flex items-start gap-3 sm:gap-4"
        style={{ borderRadius: "0.5rem" }}
      >
        {/* tech badge */}
        <div
          className="relative flex items-center justify-center shrink-0"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "13px",
            background: "linear-gradient(145deg, rgba(30,115,200,0.12), rgba(22,182,196,0.12))",
            border: "1px solid rgba(30,115,200,0.25)",
            boxShadow: "0 0 0 4px rgba(30,115,200,0.04)",
          }}
        >
          {icon}
          <span
            className="absolute rounded-full"
            style={{ top: "7px", right: "7px", width: "5px", height: "5px", background: "#16B6C4", boxShadow: "0 0 6px #16B6C4" }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="mono-label">{label}</p>
          <h3 className="mt-1.5 text-base sm:text-lg font-semibold tracking-tight" style={{ color: "#14202B", letterSpacing: "-0.01em" }}>
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-3 shrink-0 mt-1">
          <span className="mono-label hidden sm:inline" style={{ color: "#0A7681", fontSize: "0.6875rem" }}>
            {offerings.length} offerings
          </span>
          <ChevronDown
            size={18}
            aria-hidden="true"
            style={{ color: "#1E73C8", transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "none" }}
          />
        </div>
      </button>

      {/* Blurb + offering names sit outside the button: inside, they would bloat
          its accessible name and read as separately clickable. */}
      <div className="px-5 sm:px-6 pb-6 -mt-2">
        <p className="text-sm leading-relaxed" style={{ color: "#5C6B76" }}>{blurb}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {offerings.map((o) => (
            <span key={o.name} className="chip" style={{ fontSize: "0.6875rem", padding: "0.25rem 0.5rem" }}>
              {o.name}
            </span>
          ))}
        </div>
      </div>

      {/* Always rendered, hidden via the `hidden` attribute — keeps every
          inclusion bullet in the HTML for search engines while removing the
          panel from tab order and the accessibility tree when collapsed. */}
      <div id={panelId} role="region" aria-labelledby={btnId} hidden={!open} className="px-5 sm:px-6 pb-6">
        <div className="h-px mb-6" style={{ background: "#D3E1EC" }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {offerings.map((o) => (
            <div key={o.name} className="service-card h-full p-7">
              <h4 className="text-lg font-semibold" style={{ color: "#14202B" }}>{o.name}</h4>
              <p className="text-sm mt-1" style={{ color: "#5C6B76" }}>{o.tagline}</p>
              <div className="flex items-center gap-1.5 mt-3">
                <Clock size={13} style={{ color: "#0A7681", flexShrink: 0 }} />
                <span className="mono-label" style={{ color: "#0A7681", fontSize: "0.6875rem" }}>{o.timeline}</span>
              </div>
              <div className="h-px my-4" style={{ background: "#D3E1EC" }} />
              <ul className="flex flex-col gap-2.5">
                {o.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: "#36474F" }}>
                    <Check size={15} style={{ color: "#2E7D46", flexShrink: 0, marginTop: "2px" }} />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {crossLink && (
          <a
            href={crossLink.href}
            className="flex items-center gap-2.5 mt-5 p-4 rounded-md text-sm font-semibold"
            style={{ background: "#EDF4FA", border: "1px solid #D3E1EC", color: "#1E73C8" }}
          >
            <Server size={16} style={{ color: "#0A7681", flexShrink: 0 }} />
            <span>{crossLink.label}</span>
            <ArrowRight size={15} className="shrink-0" />
          </a>
        )}
      </div>
    </div>
  );
}

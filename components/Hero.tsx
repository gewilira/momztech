"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Server } from "lucide-react";
import AIBoxVisual from "@/components/AIBoxVisual";

const lineDefs = [
  { prefix: "We build AI that", emphasis: "" },
  { prefix: "runs on ", emphasis: "your own" },
  { prefix: "", emphasis: "hardware." },
];
const lineLengths = lineDefs.map((d) => d.prefix.length + d.emphasis.length);

function useTypewriter(lengths: number[], speed = 55, lineGap = 350) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    // Honor reduced-motion: skip the animation and show the full text immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- jump to final text when motion is reduced
      if (lineIdx < lengths.length) setLineIdx(lengths.length);
      return;
    }
    if (lineIdx >= lengths.length) return;
    const total = lengths[lineIdx];
    const delay = charIdx < total ? speed : lineGap;
    const t = setTimeout(() => {
      if (charIdx < total) {
        setCharIdx((c) => c + 1);
      } else {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, lengths, speed, lineGap]);

  return { lineIdx, charIdx };
}

function Cursor() {
  return (
    <span
      className="inline-block w-0.5 h-[0.85em] ml-0.5 align-middle rounded"
      style={{ background: "#1E73C8", animation: "dot-blink 1s step-end infinite" }}
    />
  );
}

function TypedLine({ def, typed, showCursor }: { def: { prefix: string; emphasis: string }; typed: number; showCursor: boolean }) {
  const prefixShown = def.prefix.slice(0, typed);
  const emphasisShown = typed > def.prefix.length ? def.emphasis.slice(0, typed - def.prefix.length) : "";
  return (
    <>
      {prefixShown}
      {emphasisShown && <span className="font-serif-italic" style={{ color: "#1E73C8" }}>{emphasisShown}</span>}
      {showCursor && <Cursor />}
    </>
  );
}

export default function Hero() {
  const { lineIdx, charIdx } = useTypewriter(lineLengths);
  const done = lineIdx >= lineDefs.length;

  return (
    <header id="top" className="relative pt-[104px] pb-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">

          {/* ── Left column ── */}
          <div className="animate-fadeInUp">
            <div
              className="inline-flex items-center gap-2 rounded-full mb-6"
              style={{ background: "#E7F0F7", border: "1px solid #D3E1EC", padding: "0.375rem 0.75rem 0.375rem 0.625rem" }}
            >
              <span className="glow-dot" style={{ width: "7px", height: "7px" }} />
              <span className="mono-label" style={{ color: "#0A7681", fontSize: "0.6875rem" }}>
                Now shipping &middot; On-premise AI boxes
              </span>
            </div>

            <p className="mono-label">
              Flagship &nbsp;&middot;&nbsp; Local AI Boxes &nbsp;&middot;&nbsp; <span style={{ color: "#5C6B76" }}>Software &middot; Cloud &middot; IT</span>
            </p>

            <h1
              className="mt-4 font-semibold tracking-tight"
              style={{ fontSize: "clamp(36px,7vw,72px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#14202B" }}
            >
              {lineDefs.map((def, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i < lineIdx || done ? (
                    <TypedLine def={def} typed={lineLengths[i]} showCursor={done && i === lineDefs.length - 1} />
                  ) : i === lineIdx ? (
                    <TypedLine def={def} typed={charIdx} showCursor />
                  ) : null}
                </span>
              ))}
            </h1>

            <p
              className="mt-6 max-w-lg"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: "clamp(17px,1.7vw,20px)", lineHeight: 1.55, color: "#36474F" }}
            >
              We design, build, and install AI appliances that live inside your
              building — a GPU box preloaded with open models, wired into the systems
              your team already uses, supported by us on a monthly retainer. No cloud,
              no metered prompts, nothing leaving your walls. It&apos;s the same thing
              we&apos;ve always built: powerful technology, in balance with the people
              and the world it serves.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-8">
              <a href="#contact" className="btn-primary">
                Book a Consult <ArrowRight size={16} />
              </a>
              <a href="#ai-box" className="btn-outline">
                <Server size={15} /> See the Box
              </a>
            </div>
          </div>

          {/* ── Right column — the AI box, installed on your premises ── */}
          <div
            className="mt-8 animate-fadeIn delay-200 overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #D3E1EC", borderRadius: "8px", boxShadow: "0 40px 90px -50px rgba(20,32,43,0.35)" }}
          >
            <div className="flex items-center justify-between px-5 pt-5">
              <span className="mono-label">SYS&#47;&#47;MOMZTECH</span>
              <div className="flex gap-1.5">
                <span className="glow-dot" />
                <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#D3E1EC" }} />
                <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#D3E1EC" }} />
              </div>
            </div>

            {/* The appliance, inside the client's own building */}
            <div className="mt-3">
              <AIBoxVisual />
            </div>

            {/* Readout strip */}
            <div className="readout" style={{ borderRadius: 0, borderLeft: "none", borderRight: "none", borderBottom: "none" }}>
              <div className="cell">
                <div className="k">Deployment</div>
                <div className="v" style={{ color: "#0A7681" }}>on-premise</div>
              </div>
              <div className="cell">
                <div className="k">Your data</div>
                <div className="v">never leaves</div>
              </div>
              <div className="cell">
                <div className="k">Models</div>
                <div className="v" style={{ color: "#1E73C8" }}>open-weight &middot; local</div>
              </div>
              <div className="cell">
                <div className="k">Support</div>
                <div className="v">retainer &middot; &lt; 24h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat band */}
        <div
          className="stat-band mt-16 grid grid-cols-2 md:grid-cols-4 animate-fadeInUp delay-400"
          style={{ borderTop: "1px solid #D3E1EC", borderBottom: "1px solid #D3E1EC", background: "#FFFFFF" }}
        >
          {[
            { value: "30+",  label: "Years Combined Exp.",   sub: "across our senior dev team" },
            { value: "100%", label: "On-Premise",            sub: "your data never leaves the building" },
            { value: "0",    label: "Lock-In",               sub: "you own the box, the models, the data" },
            { value: "24h",  label: "Response Time",         sub: "for all project inquiries" },
          ].map((s) => (
            <div key={s.label} className="py-7 px-5 md:py-8 md:px-7">
              <div className="font-semibold" style={{ fontSize: "clamp(34px,4vw,48px)", letterSpacing: "-0.02em", color: "#1E73C8" }}>
                {s.value}
              </div>
              <div className="mono-label mt-2" style={{ fontSize: "0.6875rem" }}>{s.label}</div>
              <div className="text-sm mt-1.5" style={{ color: "#5C6B76" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

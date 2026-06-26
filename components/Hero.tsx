"use client";

import { useEffect, useState } from "react";
import { ArrowRight, LayoutGrid, Brain, Cloud, Wifi, BarChart3, Leaf } from "lucide-react";
import RotatingGlobe from "@/components/RotatingGlobe";

// Capability icons wired into the AI core — a holographic neural hub. `nx`/`ny`
// are each chip's centre (in a 0–100 stage space) so a neural link can be drawn
// from the core to it. AI, cloud, data and connectivity (technology) sit
// alongside a living leaf (nature), all linked to the planet at the centre.
const CORE = { x: 50, y: 42 };
const floatIcons = [
  { icon: Brain,     label: "AI",          color: "#16B6C4", left: "10%", top: "13%", nx: 16, ny: 22 },
  { icon: Cloud,     label: "Cloud",       color: "#1E73C8", left: "72%", top: "10%", nx: 78, ny: 20 },
  { icon: Leaf,      label: "Sustainable", color: "#2E7D46", left: "4%",  top: "51%", nx: 10, ny: 60 },
  { icon: BarChart3, label: "Data",        color: "#1E73C8", left: "80%", top: "47%", nx: 86, ny: 56 },
  { icon: Wifi,      label: "Connected",   color: "#16B6C4", left: "49%", top: "71%", nx: 54, ny: 80 },
];

const lineDefs = [
  { prefix: "We build ", emphasis: "technology" },
  { prefix: "in ", emphasis: "balance" },
  { prefix: "with the world.", emphasis: "" },
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
                Available &middot; Accepting new clients
              </span>
            </div>

            <p className="mono-label">
              Responsible Technology &nbsp;&middot;&nbsp; <span style={{ color: "#5C6B76" }}>Software &middot; AI &middot; Cloud</span>
            </p>

            <h1
              className="mt-4 font-semibold tracking-tight"
              style={{ fontSize: "clamp(46px,7vw,72px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#14202B" }}
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
              We&apos;re a senior engineering team building modern software — web apps,
              AI, cloud, and APIs — the way it should be built: fast and future-ready,
              yet efficient, accessible, and made to last. Powerful technology that
              respects the people, and the world, it serves.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-8">
              <a href="#contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-outline">
                <LayoutGrid size={15} /> Explore Services
              </a>
            </div>
          </div>

          {/* ── Right column — AI over the mountains (brand visual) ── */}
          <div
            className="mt-8 animate-fadeIn delay-200 overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #D3E1EC", borderRadius: "8px", boxShadow: "0 40px 90px -50px rgba(20,32,43,0.35)" }}
            aria-label="MomzTech — a holographic AI Earth, wired to its capabilities, floating above a natural horizon"
          >
            <div className="flex items-center justify-between px-5 pt-5">
              <span className="mono-label">SYS&#47;&#47;MOMZTECH</span>
              <div className="flex gap-1.5">
                <span className="glow-dot" />
                <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#D3E1EC" }} />
                <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#D3E1EC" }} />
              </div>
            </div>

            {/* Holographic AI stage: neural core + capability nodes */}
            <div className="relative mt-3 overflow-hidden" style={{ height: "210px" }}>
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

              {/* Nature horizon — the hologram floats above the living world */}
              <svg viewBox="0 0 440 90" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: "74px" }} fill="none" aria-hidden="true">
                <path d="M0 90 L0 50 L90 22 L160 46 L240 16 L320 44 L390 20 L440 46 L440 90 Z" fill="#2E7D46" fillOpacity="0.18" />
                <path d="M0 90 L0 64 L80 38 L170 62 L260 32 L340 58 L420 34 L440 50 L440 90 Z" fill="#16B6C4" fillOpacity="0.22" />
                <path d="M0 90 L0 78 L110 52 L210 74 L300 50 L380 70 L440 56 L440 90 Z" fill="#1E73C8" fillOpacity="0.92" />
              </svg>

              {/* Neural links: core → each capability node */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {floatIcons.map((f, i) => (
                  <line
                    key={f.label}
                    x1={CORE.x}
                    y1={CORE.y}
                    x2={f.nx}
                    y2={f.ny}
                    stroke={f.color}
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    vectorEffect="non-scaling-stroke"
                    className="animate-trace-flow"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                ))}
              </svg>

              {/* Central Earth / AI neural core */}
              <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2" style={{ width: "66px", height: "66px" }}>
                {/* holographic orbital rings */}
                <svg className="absolute animate-spin-slow" style={{ inset: "-44px" }} viewBox="0 0 154 154" fill="none" aria-hidden="true">
                  <g strokeWidth="1" fill="none">
                    <ellipse cx="77" cy="77" rx="72" ry="27" stroke="#16B6C4" strokeOpacity="0.5" transform="rotate(22 77 77)" />
                    <ellipse cx="77" cy="77" rx="72" ry="27" stroke="#1E73C8" strokeOpacity="0.45" transform="rotate(-26 77 77)" />
                    <ellipse cx="77" cy="77" rx="68" ry="68" stroke="#2E7D46" strokeOpacity="0.32" strokeDasharray="3 6" />
                  </g>
                  <circle cx="149" cy="77" r="2.6" fill="#16B6C4" />
                  <circle cx="9" cy="77" r="2.2" fill="#1E73C8" />
                </svg>
                {/* teal AI halo */}
                <span
                  className="absolute rounded-full animate-node-pulse"
                  style={{ inset: "-15px", background: "radial-gradient(circle, rgba(22,182,196,0.4), transparent 70%)" }}
                />
                {/* the planet */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-full"
                  style={{ background: "#FFFFFF", border: "1px solid #BCD0E0", boxShadow: "0 0 0 4px rgba(22,182,196,0.1), 0 12px 30px -12px rgba(22,182,196,0.7)" }}
                >
                  <RotatingGlobe size={38} />
                </div>
              </div>

              {/* Capability nodes */}
              {floatIcons.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="absolute flex items-center justify-center rounded-xl animate-fadeIn"
                    style={{
                      left: f.left,
                      top: f.top,
                      width: "40px",
                      height: "40px",
                      background: "rgba(255,255,255,0.92)",
                      border: `1px solid ${f.color}`,
                      boxShadow: `0 0 0 4px ${f.color}1A, 0 8px 20px -10px rgba(20,32,43,0.45)`,
                      backdropFilter: "blur(2px)",
                    }}
                    title={f.label}
                  >
                    <Icon size={18} style={{ color: f.color }} />
                  </div>
                );
              })}
            </div>

            {/* Readout strip */}
            <div className="readout" style={{ borderRadius: 0, borderLeft: "none", borderRight: "none", borderBottom: "none" }}>
              <div className="cell">
                <div className="k">Status</div>
                <div className="v" style={{ color: "#0A7681" }}>&#9679; available</div>
              </div>
              <div className="cell">
                <div className="k">Discipline</div>
                <div className="v">web &middot; ai &middot; cloud &middot; apis</div>
              </div>
              <div className="cell">
                <div className="k">Location</div>
                <div className="v" style={{ color: "#1E73C8" }}>remote &middot; worldwide</div>
              </div>
              <div className="cell">
                <div className="k">Response</div>
                <div className="v">&lt; 24h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat band */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 animate-fadeInUp delay-400"
          style={{ borderTop: "1px solid #D3E1EC", borderBottom: "1px solid #D3E1EC", background: "#FFFFFF" }}
        >
          {[
            { value: "30+",  label: "Years Combined Exp.",   sub: "across our senior dev team" },
            { value: "6",    label: "Core Services",         sub: "web, AI, cloud, security & IT" },
            { value: "0",    label: "Lock-In",               sub: "clear docs & handovers, no black boxes" },
            { value: "24h",  label: "Response Time",         sub: "for all project inquiries" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-8 px-7"
              style={{ borderLeft: i === 0 ? "none" : "1px solid #D3E1EC" }}
            >
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

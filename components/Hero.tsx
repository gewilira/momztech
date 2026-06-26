"use client";

import { useEffect, useState } from "react";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { LogoMark } from "@/components/Logo";

const lineDefs = [
  { prefix: "We ", emphasis: "build." },
  { prefix: "We innovate.", emphasis: "" },
  { prefix: "We deliver.", emphasis: "" },
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
      style={{ background: "#E29A5C", animation: "dot-blink 1s step-end infinite" }}
    />
  );
}

function TypedLine({ def, typed, showCursor }: { def: { prefix: string; emphasis: string }; typed: number; showCursor: boolean }) {
  const prefixShown = def.prefix.slice(0, typed);
  const emphasisShown = typed > def.prefix.length ? def.emphasis.slice(0, typed - def.prefix.length) : "";
  return (
    <>
      {prefixShown}
      {emphasisShown && <span className="font-serif-italic" style={{ color: "#E29A5C" }}>{emphasisShown}</span>}
      {showCursor && <Cursor />}
    </>
  );
}

const techs = ["Java", "Spring Boot", "React", "Next.js", "AWS", "Docker", "AI / LLM", "PostgreSQL"];

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
              style={{ background: "#1C1610", border: "1px solid #3A2E24", padding: "0.375rem 0.75rem 0.375rem 0.625rem" }}
            >
              <span className="glow-dot" style={{ width: "7px", height: "7px" }} />
              <span className="mono-label" style={{ color: "#5FD0C5", fontSize: "0.6875rem" }}>
                Available &middot; Accepting new clients
              </span>
            </div>

            <p className="mono-label">
              IT Consultancy &nbsp;&middot;&nbsp; <span style={{ color: "#A89684" }}>Software Solutions</span>
            </p>

            <h1
              className="mt-4 font-semibold tracking-tight"
              style={{ fontSize: "clamp(46px,7vw,72px)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#F4EBE0" }}
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
              style={{ fontFamily: "var(--font-serif), serif", fontSize: "clamp(17px,1.7vw,20px)", lineHeight: 1.55, color: "#F4EBE0", opacity: 0.86 }}
            >
              A full-service IT consultancy powered by a senior engineering team with
              30+ years of combined experience. We design, build, and scale modern
              digital products — web apps, AI integrations, cloud infrastructure, and
              enterprise APIs — for startups and established companies that need
              software done right the first time.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-8">
              <a href="#contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-outline">
                <LayoutGrid size={15} /> Explore Services
              </a>
            </div>

            <div className="mt-10">
              <p className="mono-label mb-3.5" style={{ color: "#A89684" }}>
                Technologies we work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — status panel ── */}
          <div className="panel mt-8 animate-fadeIn delay-200" aria-label="MomzTech status panel">
            <div className="flex items-center justify-between mb-[18px]">
              <span className="mono-label">SYS&#47;&#47;MOMZTECH</span>
              <div className="flex gap-1.5">
                <span className="glow-dot" />
                <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#3A2E24" }} />
                <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#3A2E24" }} />
              </div>
            </div>

            <div className="glyph-stage">
              <div className="scan animate-scan" />
              <LogoMark size={120} />
            </div>

            <div className="readout">
              <div className="cell">
                <div className="k">Status</div>
                <div className="v" style={{ color: "#5FD0C5" }}>&#9679; available</div>
              </div>
              <div className="cell">
                <div className="k">Discipline</div>
                <div className="v">web &middot; ai &middot; cloud &middot; apis</div>
              </div>
              <div className="cell">
                <div className="k">Location</div>
                <div className="v" style={{ color: "#E29A5C" }}>remote &middot; worldwide</div>
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
          style={{ borderTop: "1px solid #3A2E24", borderBottom: "1px solid #3A2E24", background: "#1C1610" }}
        >
          {[
            { value: "30+",  label: "Years Combined Exp.",   sub: "across our senior dev team" },
            { value: "4",    label: "Core Services",         sub: "covering your full tech stack" },
            { value: "10+",  label: "Tech Stacks",           sub: "from Java to AI & cloud" },
            { value: "24h",  label: "Response Time",         sub: "for all project inquiries" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-8 px-7"
              style={{ borderLeft: i === 0 ? "none" : "1px solid #3A2E24" }}
            >
              <div className="font-semibold" style={{ fontSize: "clamp(34px,4vw,48px)", letterSpacing: "-0.02em", color: "#E29A5C" }}>
                {s.value}
              </div>
              <div className="mono-label mt-2" style={{ fontSize: "0.6875rem" }}>{s.label}</div>
              <div className="text-sm mt-1.5" style={{ color: "#A89684" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

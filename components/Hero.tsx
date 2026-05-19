"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const headlines = [
  "Web Applications That Scale",
  "AI-Powered Digital Solutions",
  "Enterprise Software Built Right",
  "Cloud-Native Architectures",
  "End-to-End Tech Partnerships",
];

function useTypewriter(words: string[], speed = 70, pause = 2000) {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const techs = ["Java", "Spring Boot", "React", "Next.js", "AWS", "Docker", "AI / LLM", "PostgreSQL"];

const chips: { label: string; top?: string; left?: string; right?: string; bottom?: string; delay: string }[] = [
  { label: "⚡ Web Apps", top: "-14%",  left: "-20%",  delay: "0s"    },
  { label: "🤖 AI / LLM", top: "-14%",  right: "-20%", delay: "0.8s"  },
  { label: "☁️  Cloud",   bottom: "-10%", left: "-10%", delay: "1.6s"  },
  { label: "🔌 APIs",     bottom: "-10%", right: "-10%", delay: "2.4s" },
];

export default function Hero() {
  const headline = useTypewriter(headlines);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 hero-grid overflow-hidden"
      style={{ background: "#181926" }}
    >
      {/* Ambient glows — purely decorative, position:absolute, no layout impact */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)",
          transform: "translate(-50%,-40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          transform: "translate(50%,40%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        {/*
          Key layout fix: use items-start so the grid row height is driven only by
          the LEFT column's stable min-height — the right panel floats independently
          inside its own fixed-size container and never causes a reflow.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left column — stable height ── */}
          <div
            className="flex flex-col gap-7"
            style={{ minHeight: "560px" }}
          >
            <div className="animate-fadeInUp">
              <span className="section-label">IT Consultancy &amp; Software Solutions</span>
            </div>

            <div className="animate-fadeInUp delay-100">
              <h1
                className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight"
                style={{ color: "#EEEEFF" }}
              >
                We Build
                {/*
                  Reserve a fixed two-line block for the typewriter so changes in text
                  length never push sibling elements and never change the column height.
                */}
                <span
                  className="text-gradient block"
                  style={{ minHeight: "2.6em" }}
                >
                  {headline}
                  <span
                    className="inline-block w-0.5 h-[0.9em] ml-0.5 align-middle rounded"
                    style={{ background: "#6C63FF", animation: "dot-blink 1s step-end infinite" }}
                  />
                </span>
              </h1>
            </div>

            <p
              className="animate-fadeInUp delay-200 text-base leading-relaxed max-w-lg"
              style={{ color: "#8888AA" }}
            >
              MomzTech is a full-service IT consultancy backed by a team with over
              <strong style={{ color: "#9D96FF" }}> 30 years of combined software development experience</strong>.
              We design, build, and scale modern digital products — web applications,
              AI integrations, cloud infrastructure, and enterprise APIs.
            </p>

            <div className="animate-fadeInUp delay-300 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </a>
              <a href="#work" className="btn-outline">
                <Play size={15} /> See Our Work
              </a>
            </div>

            <div className="animate-fadeInUp delay-400">
              <p className="text-xs font-mono mb-3" style={{ color: "#5A5A7A" }}>
                TECHNOLOGIES WE WORK WITH
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: "rgba(108,99,255,0.1)",
                      color: "#9D96FF",
                      border: "1px solid rgba(108,99,255,0.22)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — fixed-size, self-contained ── */}
          {/*
            This column has an explicit fixed size (w-80 h-80) so it never
            participates in layout flow. The float animation is isolated inside
            the inner circle and cannot cascade to the left column.
          */}
          <div className="flex justify-center lg:justify-end lg:pt-10 animate-fadeIn delay-300">
            <div className="relative w-80 h-80">

              {/* Outer spinning conic ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg, #6C63FF, #00D4FF, transparent 55%, #6C63FF)",
                  padding: "2px",
                }}
              />

              {/* Inner floated card — isolated from layout with will-change */}
              <div
                className="absolute inset-1 rounded-full flex flex-col items-center justify-center gap-4 animate-float"
                style={{
                  background: "linear-gradient(145deg, #22243A, #1D1E30)",
                  border: "1px solid rgba(108,99,255,0.2)",
                  boxShadow: "0 8px 48px rgba(108,99,255,0.18)",
                  willChange: "transform",   /* GPU-composited — doesn't trigger layout */
                }}
              >
                {/* Logo mark */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black text-white"
                  style={{
                    background: "linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)",
                    boxShadow: "0 8px 28px rgba(108,99,255,0.4)",
                  }}
                >
                  M
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg tracking-wide" style={{ color: "#EEEEFF" }}>
                    MomzTech
                  </div>
                  <div className="font-mono text-xs mt-1" style={{ color: "#6C63FF" }}>
                    IT Consultancy
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="glow-dot" />
                  <span className="text-xs" style={{ color: "#8888AA" }}>
                    Available for projects
                  </span>
                </div>
              </div>

              {/* Corner chips — each floats at its own pace, static position */}
              {chips.map((chip) => (
                <div
                  key={chip.label}
                  className="absolute glass-card rounded-full px-3 py-1.5 text-xs font-semibold animate-float"
                  style={{
                    top:            chip.top,
                    left:           chip.left,
                    right:          chip.right,
                    bottom:         chip.bottom,
                    color:          "#EEEEFF",
                    animationDelay: chip.delay,
                    willChange:     "transform",
                  }}
                >
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social proof strip */}
        <div
          className="mt-20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp delay-500"
          style={{ borderTop: "1px solid rgba(108,99,255,0.12)" }}
        >
          {[
            { value: "30+",  label: "Years Combined Exp." },
            { value: "4",    label: "Core Services" },
            { value: "10+",  label: "Tech Stacks" },
            { value: "24h",  label: "Response Time" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-gradient">{s.value}</div>
              <div className="text-xs mt-1 font-medium" style={{ color: "#5A5A7A" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ShieldCheck, Zap, Users, RefreshCw, MessageSquare, TrendingUp } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Senior-Level Quality",
    body: "With 30+ years of combined experience, we write production-grade code — automated tests, peer reviews, and documented APIs — not prototypes dressed up as products.",
    accent: "#6C63FF",
  },
  {
    icon: Zap,
    title: "Pragmatic & Fast",
    body: "We move quickly without cutting corners. Iterative delivery means you see working software in weeks, not months.",
    accent: "#00B4D8",
  },
  {
    icon: Users,
    title: "Deep Expertise, Real Partnership",
    body: "Decades of hands-on experience means we anticipate problems before they happen, make smarter tradeoffs, and stay engaged well beyond launch.",
    accent: "#A855F7",
  },
  {
    icon: RefreshCw,
    title: "Full Lifecycle Coverage",
    body: "From discovery and architecture to launch and post-production support — one team, one point of contact, zero hand-off chaos.",
    accent: "#10B981",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    body: "No jargon walls. You always know the status, the tradeoffs, and what's coming next. Weekly syncs, async updates, your choice.",
    accent: "#F59E0B",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    body: "Every system we design anticipates growth. Whether you go from 100 to 1M users, your architecture won't need a full rewrite.",
    accent: "#EC4899",
  },
];

const stats = [
  { value: "30+", label: "Years Combined Experience", sub: "across our senior dev team" },
  { value: "4",   label: "Core Services",              sub: "covering your full tech stack" },
  { value: "10+", label: "Tech Stacks Mastered",       sub: "from Java to AI & cloud" },
  { value: "24h", label: "Response Time",              sub: "for all project inquiries" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28" style={{ background: "#181926" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Stats banner */}
        <div
          className="rounded-2xl p-8 mb-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{
            background: "#22243A",
            border: "1px solid rgba(108,99,255,0.18)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-gradient">{s.value}</div>
              <div className="text-sm font-semibold mt-1" style={{ color: "#EEEEFF" }}>{s.label}</div>
              <div className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-label">Why MomzTech</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "#EEEEFF" }}>
            The Difference Is in{" "}
            <span className="text-gradient">How We Work</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#8888AA" }}>
            There are many dev shops. What sets us apart is over 30 years of
            combined hands-on experience — and the discipline that comes with it.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="rounded-xl p-6 flex flex-col gap-3 transition-all duration-300"
                style={{
                  background: "#22243A",
                  border: "1px solid rgba(108,99,255,0.12)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(108,99,255,0.1)";
                  e.currentTarget.style.borderColor = `${v.accent}40`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                  e.currentTarget.style.borderColor = "rgba(108,99,255,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${v.accent}14` }}
                >
                  <Icon size={18} style={{ color: v.accent }} />
                </div>
                <h3 className="font-bold text-base" style={{ color: "#EEEEFF" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8888AA" }}>{v.body}</p>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div
          className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #6C63FF 0%, #00B4D8 100%)" }}
        >
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              Ready to bring your idea to life?
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Let&apos;s discuss your project — no commitment required.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(8px)",
            }}
          >
            Book a Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}

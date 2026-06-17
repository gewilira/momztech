const values = [
  {
    title: "Senior-Level Quality",
    body: "With 30+ years of combined experience, we write production-grade code — automated tests, peer reviews, and documented APIs — not prototypes dressed up as products.",
  },
  {
    title: "Pragmatic & Fast",
    body: "We move quickly without cutting corners. Iterative delivery means you see working software in weeks, not months.",
  },
  {
    title: "Deep Expertise, Real Partnership",
    body: "Decades of hands-on experience means we anticipate problems before they happen, make smarter tradeoffs, and stay engaged well beyond launch.",
  },
  {
    title: "Full Lifecycle Coverage",
    body: "From discovery and architecture to launch and post-production support — one team, one point of contact, zero hand-off chaos.",
  },
  {
    title: "Clear Communication",
    body: "No jargon walls. You always know the status, the tradeoffs, and what's next. Weekly syncs, async updates, your choice.",
  },
  {
    title: "Built to Scale",
    body: "Every system we design anticipates growth. From 100 to 1M users, your architecture won't need a full rewrite.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-[88px]" style={{ background: "#16120F" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <p className="mono-label">Why MomzTech</p>
          <h2 className="mt-3.5 font-semibold tracking-tight" style={{ fontSize: "clamp(28px,3.6vw,42px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F4EBE0" }}>
            The difference is in{" "}
            <span className="font-serif-italic" style={{ color: "#E29A5C" }}>how we work.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: "#A89684" }}>
            There are many dev shops. What sets us apart is over 30 years of
            combined hands-on experience — and the discipline that comes with it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.title} className="why-card p-[26px]">
              <span className="mono-label" style={{ color: "#5FD0C5" }}>[ &#10003; ]</span>
              <h4 className="text-base font-semibold mt-3 mb-2" style={{ color: "#F4EBE0" }}>{v.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#A89684" }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

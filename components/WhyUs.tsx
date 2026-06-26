import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="why-us" className="py-[100px]" style={{ background: "#F2F8FD" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Why MomzTech"
          title="The difference is in"
          accent="how we work."
          intro="Plenty of teams can write code. What sets us apart is 30+ years of combined hands-on experience — and the engineering discipline that serious, at-scale work demands."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90}>
              <div className="why-card h-full p-[26px]">
                <span className="mono-label" style={{ color: "#2E7D46" }}>[ &#10003; ]</span>
                <h4 className="text-base font-semibold mt-3 mb-2" style={{ color: "#14202B" }}>{v.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#5C6B76" }}>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

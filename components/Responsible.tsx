import { Zap, ShieldCheck, Leaf, Users, Sparkles, Code2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

// How we actually balance progress with responsibility — the substance behind
// the "nature + technology" idea, in plain terms a customer can judge us by.
const principles = [
  {
    icon: Zap,
    color: "#1E73C8",
    title: "Efficient by default",
    body: "Lean, fast code that does more with less — quicker for your users, lighter on energy and on cost.",
  },
  {
    icon: ShieldCheck,
    color: "#1E73C8",
    title: "Built to last",
    body: "Architecture designed to scale and endure, so you build once instead of paying to rebuild every few years.",
  },
  {
    icon: Leaf,
    color: "#2E7D46",
    title: "Greener infrastructure",
    body: "Right-sized, efficient cloud — strong performance and a smaller footprint are the same decision, not a trade-off.",
  },
  {
    icon: Users,
    color: "#2E7D46",
    title: "Accessible to everyone",
    body: "Inclusive, standards-compliant, reduced-motion aware — technology that works for every person who uses it.",
  },
  {
    icon: Sparkles,
    color: "#0A7681",
    title: "Human-centered AI",
    body: "AI applied to help people do better work — practical and transparent, never hype for its own sake.",
  },
  {
    icon: Code2,
    color: "#1E73C8",
    title: "Open & maintainable",
    body: "Clean, documented code with no lock-in and no black boxes — your team can always build on what we ship.",
  },
];

export default function Responsible() {
  return (
    <section id="responsible" className="py-[100px]" style={{ background: "#F2F8FD" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Responsible by design"
          title="Powerful technology, in balance with"
          accent="the world."
          intro="Moving fast shouldn't mean leaving a mess behind — for your business, your users, or the planet. These principles guide everything we build."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="why-card h-full p-[26px]">
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: "linear-gradient(145deg, rgba(30,115,200,0.1), rgba(22,182,196,0.1))",
                      border: "1px solid rgba(30,115,200,0.2)",
                    }}
                  >
                    <Icon size={21} style={{ color: p.color }} />
                  </div>
                  <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: "#14202B" }}>{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#5C6B76" }}>{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

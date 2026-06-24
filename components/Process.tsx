import { Search, PenTool, Code2, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    icon: Search,
    phase: "01",
    title: "Discovery & Scoping",
    body: "We map your goals, constraints, and success metrics — then turn them into a clear scope, timeline, and fixed quote before a line of code is written.",
  },
  {
    icon: PenTool,
    phase: "02",
    title: "Design & Architecture",
    body: "Wireframes, UI design, and a system architecture built to scale. You sign off on exactly what we're building and how it fits together.",
  },
  {
    icon: Code2,
    phase: "03",
    title: "Build & Iterate",
    body: "Production-grade engineering in short milestones. You see working software every week — with tests, peer reviews, and documented APIs throughout.",
  },
  {
    icon: Rocket,
    phase: "04",
    title: "Launch & Scale",
    body: "We deploy, monitor, and harden for real-world load — then stay engaged with ongoing support so your product keeps improving after go-live.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-[100px]" style={{ background: "#1A130E", borderTop: "1px solid #251C15", borderBottom: "1px solid #251C15" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="How we work"
          title="A proven path from"
          accent="idea to scale."
          intro="No black boxes. Every engagement follows the same disciplined, transparent process — so you always know what's happening, what's next, and why."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.phase} delay={(i % 4) * 90}>
                <div className="why-card h-full p-7">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-md flex items-center justify-center"
                      style={{ background: "rgba(226,154,92,0.1)", border: "1px solid #3A2E24" }}
                    >
                      <Icon size={20} style={{ color: "#E29A5C" }} />
                    </div>
                    <span
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-mono), monospace", fontSize: "1.5rem", color: "#3A2E24" }}
                    >
                      {s.phase}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold mt-5 mb-2" style={{ color: "#F4EBE0" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#A89684" }}>{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

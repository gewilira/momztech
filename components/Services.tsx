import { Globe, Brain, Cloud, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    module: "MODULE 01 · WEB",
    title: "Web Application Development",
    description:
      "End-to-end custom web applications built for performance and scale. From complex SaaS platforms to internal business tools — we design, develop, and deploy.",
    highlights: ["React & Next.js", "Java / Spring Boot", "REST & GraphQL", "Accessible UI"],
  },
  {
    icon: Brain,
    module: "MODULE 02 · AI",
    title: "AI Consultation & Integration",
    description:
      "Leverage the power of AI in your business. We advise on AI strategy, integrate LLMs, and build intelligent automation pipelines tailored to your workflows.",
    highlights: ["LLM Integration", "AI Product Strategy", "RAG & Vector Search", "Workflow Automation"],
  },
  {
    icon: Cloud,
    module: "MODULE 03 · CLOUD",
    title: "Cloud Architecture & DevOps",
    description:
      "Design and manage cloud-native infrastructure that is secure, cost-efficient, and resilient. CI/CD pipelines, container orchestration, and monitoring included.",
    highlights: ["AWS & GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    icon: Server,
    module: "MODULE 04 · ENTERPRISE",
    title: "Enterprise Software & APIs",
    description:
      "Robust backend systems and API ecosystems that power your business at scale. Microservices architecture, legacy modernization, and third-party integrations.",
    highlights: ["Microservices", "Spring Boot / Hibernate", "Database Optimization", "System Integration"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[88px]" style={{ background: "#16120F" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <p className="mono-label">What we do</p>
          <h2 className="mt-3.5 font-semibold tracking-tight" style={{ fontSize: "clamp(28px,3.6vw,42px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F4EBE0" }}>
            Services built for real{" "}
            <span className="font-serif-italic" style={{ color: "#E29A5C" }}>business impact.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: "#A89684" }}>
            We combine deep technical expertise with a pragmatic, business-first mindset
            to deliver software that actually moves the needle.
          </p>
        </div>

        {/* Service modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="service-card p-7">
                <Icon size={28} style={{ color: "#E29A5C" }} />
                <p className="mono-label mt-4">{s.module}</p>
                <div className="h-px my-3.5" style={{ background: "#3A2E24" }} />
                <h3 className="text-lg font-semibold mb-2.5" style={{ color: "#F4EBE0" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#A89684" }}>
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.highlights.map((h) => (
                    <span key={h} className="chip text-xs">{h}</span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "#E29A5C" }}
                >
                  Get started <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

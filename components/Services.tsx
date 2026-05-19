"use client";

import { Globe, Brain, Cloud, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "End-to-end custom web applications built for performance and scale. From complex SaaS platforms to internal business tools — we design, develop, and deploy.",
    highlights: ["React & Next.js", "Java / Spring Boot", "REST & GraphQL APIs", "Responsive & Accessible UI"],
    accent: "#6C63FF",
    glow: "rgba(108,99,255,0.08)",
  },
  {
    icon: Brain,
    title: "AI Consultation & Integration",
    description:
      "Leverage the power of AI in your business. We advise on AI strategy, integrate LLMs, and build intelligent automation pipelines tailored to your workflows.",
    highlights: ["LLM Integration", "AI Product Strategy", "RAG & Vector Search", "Workflow Automation"],
    accent: "#A855F7",
    glow: "rgba(168,85,247,0.08)",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description:
      "Design and manage cloud-native infrastructure that is secure, cost-efficient, and resilient. CI/CD pipelines, container orchestration, and monitoring included.",
    highlights: ["AWS & GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
    accent: "#00B4D8",
    glow: "rgba(0,180,216,0.08)",
  },
  {
    icon: Server,
    title: "Enterprise Software & APIs",
    description:
      "Robust backend systems and API ecosystems that power your business at scale. Microservices architecture, legacy modernization, and third-party integrations.",
    highlights: ["Microservices", "Spring Boot / Hibernate", "Database Optimization", "System Integration"],
    accent: "#10B981",
    glow: "rgba(16,185,129,0.08)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28"
      style={{ background: "#1D1E30" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "#EEEEFF" }}>
            Services Built for{" "}
            <span className="text-gradient">Real Business Impact</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#8888AA" }}>
            We combine deep technical expertise with a pragmatic, business-first mindset
            to deliver software that actually moves the needle.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="service-card p-7 flex flex-col gap-5">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: s.glow, border: `1px solid ${s.accent}25` }}
                >
                  <Icon size={22} style={{ color: s.accent }} />
                </div>

                {/* Title + desc */}
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#EEEEFF" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8888AA" }}>
                    {s.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-md font-medium"
                      style={{
                        background: `${s.accent}12`,
                        color: s.accent,
                        border: `1px solid ${s.accent}28`,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-all"
                  style={{ color: s.accent }}
                  onMouseOver={(e) => (e.currentTarget.style.gap = "0.5rem")}
                  onMouseOut={(e) => (e.currentTarget.style.gap = "0.375rem")}
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

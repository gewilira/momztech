"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    title: "SaaS HR Management Platform",
    category: "Web Application",
    description:
      "A multi-tenant HR platform handling employee lifecycle, payroll integration, and real-time analytics dashboards for 10,000+ users across 40+ companies.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "AWS"],
    gradient: "linear-gradient(135deg, #EDE9FE 0%, #E0F2FE 100%)",
    accent: "#8B5CF6",
    emoji: "🏢",
  },
  {
    title: "AI-Powered Document Intelligence",
    category: "AI Integration",
    description:
      "Intelligent document processing system using LLMs to extract, classify, and summarize contracts and invoices — reducing manual review time by 80%.",
    tech: ["Python", "OpenAI API", "Next.js", "FastAPI", "Vector DB", "AWS"],
    gradient: "linear-gradient(135deg, #F3E8FF 0%, #EDE9FE 100%)",
    accent: "#A855F7",
    emoji: "🤖",
  },
  {
    title: "E-Commerce API Platform",
    category: "Enterprise Software",
    description:
      "Scalable multi-vendor marketplace API with OAuth2, real-time inventory sync, Stripe integration, and a merchant analytics portal serving 500K+ daily transactions.",
    tech: ["Java", "Spring Security", "MySQL", "Redis", "Kafka", "Kubernetes"],
    gradient: "linear-gradient(135deg, #E0F2FE 0%, #DCFCE7 100%)",
    accent: "#F2557A",
    emoji: "🛒",
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description:
      "Led the migration of a monolithic financial application to a microservices architecture on AWS, achieving 99.9% uptime and 60% cost reduction.",
    tech: ["AWS ECS", "Terraform", "Docker", "Jenkins", "Spring Cloud", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #DCFCE7 0%, #D1FAE5 100%)",
    accent: "#10B981",
    emoji: "☁️",
  },
  {
    title: "Healthcare Patient Portal",
    category: "Web Application",
    description:
      "HIPAA-compliant patient management system with appointment scheduling, EHR integration, telemedicine, and secure messaging for 5 regional hospitals.",
    tech: ["Java", "Spring Boot", "Next.js", "Oracle DB", "Kubernetes", "AWS"],
    gradient: "linear-gradient(135deg, #FEF3C7 0%, #FCE7F3 100%)",
    accent: "#F59E0B",
    emoji: "🏥",
  },
  {
    title: "Real-Time Event Streaming Engine",
    category: "Enterprise Software",
    description:
      "Event-driven notification and analytics engine processing 2M+ events/day across WebSockets, email, and SMS. Built as a standalone microservice.",
    tech: ["Java", "Apache Kafka", "Spring Cloud", "MongoDB", "Redis", "Docker"],
    gradient: "linear-gradient(135deg, #FCE7F3 0%, #F3E8FF 100%)",
    accent: "#EC4899",
    emoji: "⚡",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-28" style={{ background: "#231A3D" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Our Work</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "#F6F2FF" }}>
            Projects That{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#B0A3D4" }}>
            A snapshot of real-world systems we&apos;ve designed, built, and shipped —
            from startups to enterprise clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="project-card flex flex-col">
              {/* Banner */}
              <div
                className="h-32 flex items-center justify-center relative overflow-hidden"
                style={{ background: p.gradient }}
              >
                <span className="text-5xl">{p.emoji}</span>
                <span
                  className="absolute top-3 left-3 text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${p.accent}18`,
                    color: p.accent,
                    border: `1px solid ${p.accent}30`,
                  }}
                >
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="font-bold text-base leading-snug" style={{ color: "#F6F2FF" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#B0A3D4" }}>
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-xs font-medium"
                      style={{
                        background: "#231A3D",
                        color: "#B0A3D4",
                        border: "1px solid rgba(139,92,246,0.12)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 pt-1">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                    style={{ color: "#756893" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = p.accent)}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#756893")}
                  >
                    <GithubIcon size={13} /> Case Study
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                    style={{ color: "#756893" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = p.accent)}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#756893")}
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-sm mb-4" style={{ color: "#756893" }}>
            Have a project in mind? We&apos;d love to discuss it.
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}

import { Globe, Brain, Cloud, Server, ShieldCheck, Network, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceModuleCard, { type Offering } from "@/components/ServiceModuleCard";

type ServiceModule = {
  icon: typeof Globe;
  label: string;
  title: string;
  blurb: string;
  offerings: Offering[];
  /** Optional pointer out of this module — used to send AI enquiries to the
   *  flagship on-premise box section. Must stay plain data: it crosses the
   *  server → client boundary. */
  crossLink?: { label: string; href: string };
};

const modules: ServiceModule[] = [
  {
    icon: Globe,
    label: "MODULE 01 · WEB",
    title: "Web Application Development",
    blurb: "From a landing page to a full custom web app — designed, built, and deployed.",
    offerings: [
      {
        name: "Landing Page",
        tagline: "One-pager to launch fast",
        timeline: "3–7 days",
        includes: [
          "Single responsive page (mobile + desktop)",
          "Up to 5 sections (hero, about, services, contact)",
          "Contact form with email forwarding",
          "WhatsApp click-to-chat button",
          "Basic SEO (meta tags, title, favicon)",
          "Google Analytics setup",
          "1 revision round + deployment",
        ],
      },
      {
        name: "Business Website",
        tagline: "5–8 pages, editable by you",
        timeline: "1–3 weeks",
        includes: [
          "Custom multi-page design",
          "CMS so you can edit content yourself",
          "Contact + inquiry forms",
          "Social links + Google Maps embed",
          "On-page SEO + SSL setup",
          "2 revision rounds",
          "30 days post-launch bug support",
        ],
      },
      {
        name: "Custom Web App / MVP",
        tagline: "Validate your idea in the market",
        timeline: "4–10 weeks",
        includes: [
          "Discovery & scoping session",
          "UI/UX wireframes + design",
          "React / Next.js frontend + backend",
          "User auth (login, signup, roles)",
          "Admin dashboard + database design",
          "Up to 3 integrations (payments, email)",
          "API docs + deployment + 30 days support",
        ],
      },
      {
        name: "E-Commerce Store",
        tagline: "Shopify / WooCommerce",
        timeline: "2–4 weeks",
        includes: [
          "Store setup + theme customization",
          "Up to 30 products uploaded",
          "Payment gateway integration",
          "Shipping + tax configuration",
          "Order & inventory management",
          "Customer accounts + basic SEO",
          "Handover training session",
        ],
      },
    ],
  },
  {
    icon: Brain,
    label: "MODULE 02 · AI",
    title: "AI Integration & Automation",
    blurb: "Chatbots, voice agents, and workflow automation — plus the flagship on-premise box.",
    crossLink: { label: "Looking for a private, on-premise AI box? That's our flagship", href: "#ai-box" },
    offerings: [
      {
        name: "AI Chatbot",
        tagline: "Website or WhatsApp assistant",
        timeline: "1–3 weeks",
        includes: [
          "Custom chatbot trained on your content/FAQs",
          "Website or WhatsApp deployment",
          "Lead capture built in",
          "Handoff-to-human option",
          "Conversation analytics dashboard",
        ],
      },
      {
        name: "AI Voice Agent",
        tagline: "Automated inbound / outbound calls",
        timeline: "3–6 weeks",
        includes: [
          "Inbound/outbound calling (Vapi / Retell)",
          "Custom voice + conversation script",
          "CRM / backend integration",
          "Call logging + transcripts",
          "Testing & tuning rounds",
        ],
      },
      {
        name: "AI Strategy & Integration",
        tagline: "LLM, RAG & automation — cloud or on-prem",
        timeline: "Scoped per project",
        includes: [
          "AI opportunity assessment",
          "LLM integration into existing systems",
          "RAG / vector search setup",
          "Workflow automation pipelines",
          "Prompt engineering + evaluation",
        ],
      },
    ],
  },
  {
    icon: Cloud,
    label: "MODULE 03 · CLOUD",
    title: "Cloud Architecture & DevOps",
    blurb: "Secure, cost-efficient infrastructure with CI/CD and monitoring.",
    offerings: [
      {
        name: "Deployment & DevOps Setup",
        tagline: "Ship reliably from day one",
        timeline: "3–10 days",
        includes: [
          "Cloud environment (AWS / Vercel / Railway)",
          "CI/CD pipeline",
          "Domain + DNS configuration",
          "SSL / HTTPS",
          "Database hosting setup",
          "Secrets & environment management",
          "Basic uptime monitoring",
        ],
      },
      {
        name: "Cloud Architecture & Scaling",
        tagline: "Grow from 100 to 1M users",
        timeline: "Scoped per project",
        includes: [
          "Infrastructure-as-Code (Terraform)",
          "Docker & container orchestration",
          "Auto-scaling + load balancing",
          "Cost optimization review",
          "Monitoring + alerting dashboards",
        ],
      },
    ],
  },
  {
    icon: Server,
    label: "MODULE 04 · ENTERPRISE",
    title: "Enterprise Software, Mobile & APIs",
    blurb: "Backends, cross-platform apps, and platforms at scale.",
    offerings: [
      {
        name: "REST API & Backend",
        tagline: "The engine behind your product",
        timeline: "2–5 weeks",
        includes: [
          "API design (REST / OpenAPI spec)",
          "Database schema design",
          "CRUD endpoints + validation",
          "Auth + authorization (JWT)",
          "Error handling + rate limiting",
          "Swagger API documentation",
          "Cloud deployment",
        ],
      },
      {
        name: "Mobile App (Cross-platform)",
        tagline: "iOS + Android, one codebase",
        timeline: "6–10 weeks (MVP)",
        includes: [
          "Flutter / React Native — iOS + Android",
          "6–10 core screens",
          "User authentication",
          "Push notifications",
          "1 payment gateway + admin panel",
          "App Store + Play Store submission",
          "30 days post-launch support",
        ],
      },
      {
        name: "SaaS / Enterprise Platform",
        tagline: "Microservices & integrations",
        timeline: "3–6 months",
        includes: [
          "Multi-tenant architecture",
          "Microservices / modular monolith",
          "Role-based access + billing",
          "Third-party + legacy integration",
          "Automated tests + CI/CD",
          "Documentation + handover",
        ],
      },
      {
        name: "UI/UX Design",
        tagline: "Add-on · Figma to dev-ready handoff",
        timeline: "1–3 weeks",
        includes: [
          "User flow mapping + wireframes",
          "High-fidelity mockups (Figma)",
          "Clickable prototype",
          "Design system (colours, fonts, components)",
          "Handoff-ready developer assets",
          "2 revision rounds",
        ],
      },
    ],
  },
  {
    icon: ShieldCheck,
    label: "MODULE 05 · SECURITY",
    title: "Cybersecurity & Compliance",
    blurb: "Find the gaps before attackers do — then close them and stay compliant.",
    offerings: [
      {
        name: "Security Assessment & Audit",
        tagline: "Know exactly where you stand",
        timeline: "1–2 weeks",
        includes: [
          "Vulnerability scan of apps + infrastructure",
          "Cloud & network configuration review",
          "Access control + secrets audit",
          "Dependency / supply-chain check",
          "Prioritised risk report with fixes",
          "Remediation walkthrough call",
        ],
      },
      {
        name: "Penetration Testing",
        tagline: "Authorised real-world attack simulation",
        timeline: "2–4 weeks",
        includes: [
          "Scoped web app + API pen test",
          "OWASP Top 10 + business-logic testing",
          "Authentication & authorisation testing",
          "Exploitation proof-of-concept",
          "Detailed findings + severity ratings",
          "Re-test after fixes",
        ],
      },
      {
        name: "Security Hardening & Compliance",
        tagline: "Lock it down and keep it that way",
        timeline: "Scoped per project",
        includes: [
          "Server, network & cloud hardening",
          "MFA, SSO & identity management",
          "Backup, encryption & disaster recovery",
          "Security monitoring + alerting",
          "Policies & compliance prep (ISO / SOC 2 / GDPR)",
          "Staff security-awareness guidance",
        ],
      },
    ],
  },
  {
    icon: Network,
    label: "MODULE 06 · IT OPS",
    title: "IT Administration & Managed IT",
    blurb: "Your outsourced IT department — systems that stay up so your team stays productive.",
    offerings: [
      {
        name: "Managed IT Support",
        tagline: "Day-to-day IT, handled",
        timeline: "Ongoing",
        includes: [
          "Helpdesk for staff (email / chat / call)",
          "Workstation & device setup + onboarding",
          "Software install, updates & patching",
          "User account & access management",
          "Asset & license tracking",
          "Proactive monitoring + monthly reporting",
        ],
      },
      {
        name: "Systems & Network Administration",
        tagline: "Servers, networks & uptime",
        timeline: "Scoped per project",
        includes: [
          "Server provisioning & administration",
          "Network setup (firewall, VPN, Wi-Fi)",
          "Backup & disaster-recovery configuration",
          "Performance monitoring + alerting",
          "Patch management & maintenance windows",
          "Documentation & runbooks",
        ],
      },
      {
        name: "Microsoft 365 & Workspace Admin",
        tagline: "Email, identity & collaboration",
        timeline: "3–10 days",
        includes: [
          "Microsoft 365 / Google Workspace setup",
          "Email, domain & DNS configuration",
          "User provisioning + security groups",
          "Shared drives & permission structure",
          "MFA + conditional access policies",
          "Migration from existing providers",
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[88px]" style={{ background: "#F2F8FD" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Everything else we do"
          title="The rest of the stack, from"
          accent="web to managed IT."
          intro="The AI box is our flagship, but it sits on top of everything else we build and run. Six modules, thirty years of combined experience — open one to see exactly what's included."
        />

        {/* Modules — collapsed by default; the chip row telegraphs what's inside */}
        <div className="flex flex-col gap-4">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.label} delay={(i % 3) * 90}>
                <ServiceModuleCard
                  icon={<Icon size={23} style={{ color: "#1E73C8" }} />}
                  label={m.label}
                  title={m.title}
                  blurb={m.blurb}
                  offerings={m.offerings}
                  crossLink={m.crossLink}
                />
              </Reveal>
            );
          })}
        </div>

        {/* Closing note + CTA */}
        <Reveal
          className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-7 rounded-md"
          style={{ background: "#FFFFFF", border: "1px solid #D3E1EC" }}
        >
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#5C6B76" }}>
            Timelines are typical estimates — final scope is set in a quick discovery
            call. Most projects are milestone-based, and we&apos;ll always give you an
            honest assessment before any commitment.
          </p>
          <a href="#contact" className="btn-primary shrink-0">
            Get a Quote <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

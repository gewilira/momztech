import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Plan = {
  tier: string;
  tagline: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    tier: "Basic",
    tagline: "Keep it secure and online",
    features: [
      "Bug fixes & security patches",
      "Uptime monitoring",
      "Up to 5 hours / month",
      "Email support",
    ],
  },
  {
    tier: "Standard",
    tagline: "Secure, plus steady improvements",
    features: [
      "Everything in Basic",
      "Minor feature updates",
      "Content changes",
      "Up to 15 hours / month",
    ],
    featured: true,
  },
  {
    tier: "Premium",
    tagline: "A hands-on monthly partnership",
    features: [
      "Everything in Standard",
      "Priority support",
      "Monthly reports",
      "Up to 30 hours / month",
    ],
  },
];

export default function CarePlans() {
  return (
    <section
      id="care"
      className="py-[100px]"
      style={{ background: "#EDF4FA", borderTop: "1px solid #D3E1EC", borderBottom: "1px solid #D3E1EC" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Retainer · Care"
          title="Monthly care to keep you"
          accent="moving."
          intro="After launch, we keep your product secure, updated, and improving — pick the level of hands-on support that fits how fast you're growing."
        />

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <Reveal key={p.tier} delay={(i % 3) * 90}>
              <div
                className="service-card h-full p-7 flex flex-col"
                style={p.featured ? { borderColor: "#1E73C8" } : undefined}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="mono-label" style={{ color: p.featured ? "#0A7681" : "#1E73C8" }}>{p.tier}</p>
                  {p.featured && (
                    <span className="mono-label" style={{ color: "#0A7681", fontSize: "0.625rem" }}>Most popular</span>
                  )}
                </div>
                <p className="text-sm mt-3" style={{ color: "#5C6B76" }}>{p.tagline}</p>
                <div className="h-px my-5" style={{ background: "#D3E1EC" }} />
                <ul className="flex flex-col gap-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: "#36474F" }}>
                      <Check size={15} style={{ color: "#2E7D46", flexShrink: 0, marginTop: "2px" }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-sm font-semibold mt-7"
                  style={{ color: "#1E73C8" }}
                >
                  Ask about this plan <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed max-w-2xl" style={{ color: "#5C6B76" }}>
          Hosting and third-party fees (cloud, payment gateways, app store accounts)
          are billed at cost. Every plan is month-to-month — scale up or pause anytime.
        </p>
      </div>
    </section>
  );
}

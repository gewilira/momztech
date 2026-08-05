import { Cpu, Building2, LifeBuoy, FileSearch, Users, Mic, Search, Code2, ScanLine, Check, X, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

// The flagship. Turnkey: we build the hardware, install it on the client's
// premises, and support it. Use cases rather than hardware tiers — every box is
// spec'd in a consult, and (per the site convention) no prices appear anywhere.

const steps = [
  {
    icon: Cpu,
    phase: "01",
    title: "We build the box",
    body: "We spec and assemble a GPU appliance sized to your team, your models, and your real power and rack constraints — then burn it in and benchmark it before it ever leaves us.",
  },
  {
    icon: Building2,
    phase: "02",
    title: "We install & integrate",
    body: "We deliver it to your premises, put it on your network, load the models, index your documents, and wire it into the tools your staff already use — files, email, chat, line-of-business apps.",
  },
  {
    icon: LifeBuoy,
    phase: "03",
    title: "We keep it running",
    body: "Monitoring, model updates, security patching, tuning, and a human to call — on the same monthly care retainer as the rest of our work. Scale up or pause anytime.",
  },
];

const useCases = [
  {
    icon: FileSearch,
    color: "#1E73C8",
    title: "Private document chat",
    body: "Ask questions across contracts, SOPs, drawings, and project files and get answers with citations — without a single page leaving your network.",
  },
  {
    icon: Users,
    color: "#1E73C8",
    title: "An on-prem copilot for staff",
    body: "Drafting, summarising, translating, and Q&A for your whole team — running on the box in your server room instead of on someone's personal AI account.",
  },
  {
    icon: Mic,
    color: "#0A7681",
    title: "Offline transcription & notes",
    body: "Record, transcribe, and summarise meetings, interviews, and site calls locally. Confidential conversations stay confidential.",
  },
  {
    icon: Search,
    color: "#1E73C8",
    title: "Data-sovereign search",
    body: "One search box across your shared drives, wikis, and ticket history — indexed on hardware you control, in a country you choose.",
  },
  {
    icon: Code2,
    color: "#1E73C8",
    title: "A coding assistant behind your firewall",
    body: "Autocomplete, review, and refactoring for your developers without shipping proprietary source to a third-party model.",
  },
  {
    icon: ScanLine,
    color: "#2E7D46",
    title: "Document intake & extraction",
    body: "Turn invoices, forms, and ID documents into structured data on-site — high volume, no per-page processing fees, no outside processor.",
  },
];

const onYourBox = [
  "Your data stays in your building",
  "Owned hardware — no metering on every prompt",
  "Keeps working when the internet doesn't",
  "Models and prompts are yours to change",
  "No vendor lock-in — you own the box",
];

const onAMeteredApi = [
  "Your data leaves on every single request",
  "Cost scales with every prompt your team sends",
  "An outage upstream is an outage for you",
  "Models change under you, without notice",
  "Migrating away means re-engineering",
];

const includes = [
  "Discovery: your data, your use cases, your constraints",
  "Hardware sourced, assembled, and burned in by us",
  "Open-weight models preloaded and benchmarked on your data",
  "Retrieval over your own documents (RAG), with citations",
  "On-site install, networking, and access-control setup",
  "Integration with the tools your team already uses",
  "Staff onboarding and a plain-English runbook",
  "Monthly care retainer: monitoring, updates, and support",
];

export default function AIBox() {
  return (
    <section
      id="ai-box"
      className="py-[100px]"
      style={{ background: "#EDF4FA", borderTop: "1px solid #D3E1EC", borderBottom: "1px solid #D3E1EC" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Flagship · Local AI Boxes"
          title="Your own AI, installed"
          accent="in your building."
          intro="A turnkey AI appliance. We spec and build the hardware, preload it with open models, install and integrate it on your premises, and support it on a monthly retainer. You own the box — and your data never leaves your walls."
        />

        {/* ── How it works, end to end ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.phase} delay={(i % 3) * 90}>
                <div className="why-card h-full p-7">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-md flex items-center justify-center"
                      style={{ background: "rgba(30,115,200,0.1)", border: "1px solid #D3E1EC" }}
                    >
                      <Icon size={20} style={{ color: "#1E73C8" }} />
                    </div>
                    <span
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-mono), monospace", fontSize: "1.5rem", color: "#C6D7E4" }}
                    >
                      {s.phase}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold mt-5 mb-2" style={{ color: "#14202B" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5C6B76" }}>{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── What people actually run on it ── */}
        <Reveal className="mt-16 mb-6">
          <p className="mono-label">What you can run on it</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <Reveal key={u.title} delay={(i % 3) * 90}>
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
                    <Icon size={21} style={{ color: u.color }} />
                  </div>
                  <h4 className="text-base font-semibold mt-4 mb-2" style={{ color: "#14202B" }}>{u.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#5C6B76" }}>{u.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── Why local, side by side ── */}
        <Reveal className="mt-16">
          <div className="service-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:pr-8">
                <p className="mono-label" style={{ color: "#0A7681" }}>On your box</p>
                <ul className="flex flex-col gap-3 mt-5">
                  {onYourBox.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: "#36474F" }}>
                      <Check size={15} style={{ color: "#2E7D46", flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Divider has to be class-based, not inline: it runs down the
                  side at md+, but across the top once the columns stack. */}
              <div className="border-t pt-8 md:border-t-0 md:pt-0 md:border-l md:pl-8 border-[#D3E1EC]">
                <p className="mono-label" style={{ color: "#5C6B76" }}>On a metered API</p>
                <ul className="flex flex-col gap-3 mt-5">
                  {onAMeteredApi.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: "#5C6B76" }}>
                      <X size={15} style={{ color: "#93A2AD", flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── What's included — same anatomy as a Services offering card ── */}
        <Reveal className="mt-5">
          <div className="service-card p-7">
            <h4 className="text-lg font-semibold" style={{ color: "#14202B" }}>The MomzTech AI Box</h4>
            <p className="text-sm mt-1" style={{ color: "#5C6B76" }}>Turnkey local AI — sourced, built, installed, supported</p>
            <div className="flex items-center gap-1.5 mt-3">
              <Clock size={13} style={{ color: "#0A7681", flexShrink: 0 }} />
              <span className="mono-label" style={{ color: "#0A7681", fontSize: "0.6875rem" }}>4–8 weeks from scoping to live</span>
            </div>
            <div className="h-px my-4" style={{ background: "#D3E1EC" }} />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
              {includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: "#36474F" }}>
                  <Check size={15} style={{ color: "#2E7D46", flexShrink: 0, marginTop: "2px" }} />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ── Closing note + CTA ── */}
        <Reveal
          className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-7 rounded-md"
          style={{ background: "#FFFFFF", border: "1px solid #D3E1EC" }}
        >
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#5C6B76" }}>
            Every box is scoped to your data, your team size, and your building — so we
            start with a consult, not a price list. You&apos;ll get one fixed quote after
            scoping, and we&apos;ll tell you honestly if a local box isn&apos;t the right
            answer for you.
          </p>
          <a href="#contact" className="btn-primary shrink-0">
            Book a Consult <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

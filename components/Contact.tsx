"use client";

import { useActionState, useRef, useState } from "react";
import { AlertCircle, Send, Mail, CheckCircle2, Clock, Globe, Loader2, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { submitInquiry, type ContactState } from "@/app/actions/contact";
import Reveal from "@/components/Reveal";

const services = [
  "Web Application Development",
  "AI Consultation & Integration",
  "Cloud Architecture & DevOps",
  "Enterprise Software & APIs",
  "Other / Not Sure Yet",
];

const initialState: ContactState = { ok: false };

export default function Contact() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const [dismissed, setDismissed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const showSuccess = state.ok && !dismissed;

  const inputStyle = {
    background: "#16120F",
    border: "1px solid #3A2E24",
    color: "#F4EBE0",
  };

  return (
    <section id="contact" className="py-[100px]" style={{ background: "#16120F" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <Reveal className="max-w-2xl mb-12">
          <p className="mono-label">Contact us</p>
          <h2 className="mt-3.5 font-semibold tracking-tight" style={{ fontSize: "clamp(30px,4.4vw,52px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "#F4EBE0" }}>
            Let&apos;s build something{" "}
            <span className="font-serif-italic" style={{ color: "#E29A5C" }}>great together.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: "#A89684" }}>
            Tell us about your project. We respond within 24 hours with an honest
            assessment and next steps — no commitment required.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            {[
              {
                icon: Mail,
                label: "Email us",
                value: "gewilira.morales@momztech.com",
                href: "mailto:gewilira.morales@momztech.com",
              },
              {
                icon: LinkedinIcon,
                label: "LinkedIn",
                value: "linkedin.com/company/momztech",
                href: undefined,
              },
              {
                icon: Globe,
                label: "Location",
                value: "Remote · Worldwide",
                href: undefined,
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon size={20} style={{ color: "#E29A5C", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div className="mono-label" style={{ fontSize: "0.6875rem" }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium mt-1" style={{ color: "#F4EBE0" }}>{item.value}</div>
                  </div>
                </>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="ctline flex items-start gap-3.5 p-5">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="ctline flex items-start gap-3.5 p-5">
                  {content}
                </div>
              );
            })}

            {/* Availability box */}
            <div className="ctline p-6 mt-1.5">
              <div className="flex items-start gap-2.5 mb-3.5">
                <Clock size={18} style={{ color: "#5FD0C5", flexShrink: 0, marginTop: "1px" }} />
                <div>
                  <div className="text-sm font-medium" style={{ color: "#F4EBE0" }}>Typical response time</div>
                  <div className="text-sm mt-0.5" style={{ color: "#A89684" }}>Within 24 hours on business days.</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="glow-dot mt-1.5" />
                <div>
                  <div className="text-sm font-medium" style={{ color: "#F4EBE0" }}>Currently accepting new clients</div>
                  <div className="text-sm mt-0.5" style={{ color: "#A89684" }}>Available for projects now.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="ctline p-8">
              {showSuccess ? (
                <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(95,208,197,0.12)" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "#5FD0C5" }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: "#F4EBE0" }}>
                    Message Received!
                  </h3>
                  <p className="text-sm max-w-xs" style={{ color: "#A89684" }}>
                    Thank you for reaching out. We&apos;ll review your project details
                    and get back to you within 24 hours.
                  </p>
                  <button
                    className="btn-outline text-sm"
                    onClick={() => {
                      formRef.current?.reset();
                      setDismissed(true);
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  action={formAction}
                  onSubmit={() => setDismissed(false)}
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare size={18} style={{ color: "#E29A5C" }} />
                    <h3 className="font-semibold text-lg" style={{ color: "#F4EBE0" }}>
                      Project Inquiry
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name",    label: "Your Name",    placeholder: "Jane Smith",           req: true  },
                      { name: "company", label: "Company",      placeholder: "Acme Corp (optional)",  req: false },
                    ].map((f) => (
                      <div key={f.name} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: "#A89684" }}>
                          {f.label}
                        </label>
                        <input
                          type="text"
                          name={f.name}
                          required={f.req}
                          placeholder={f.placeholder}
                          className="w-full px-4 py-2.5 rounded text-sm"
                          style={inputStyle}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: "#A89684" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@acmecorp.com"
                      className="w-full px-4 py-2.5 rounded text-sm"
                      style={inputStyle}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold" style={{ color: "#A89684" }}>
                        Service Needed
                      </label>
                      <select
                        name="service"
                        defaultValue=""
                        className="w-full px-4 py-2.5 rounded text-sm"
                        style={inputStyle}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold" style={{ color: "#A89684" }}>
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        defaultValue=""
                        className="w-full px-4 py-2.5 rounded text-sm"
                        style={inputStyle}
                      >
                        <option value="">Select range…</option>
                        <option>Under $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $50,000</option>
                        <option>$50,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: "#A89684" }}>
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project, goals, timeline, and any specific technical requirements…"
                      className="w-full px-4 py-2.5 rounded text-sm resize-none"
                      style={inputStyle}
                    />
                  </div>

                  {state.error && !pending ? (
                    <div
                      className="flex items-start gap-2 rounded px-4 py-3 text-sm"
                      style={{
                        background: "rgba(239,68,68,0.08)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        color: "#FCA5A5",
                      }}
                      role="alert"
                    >
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{state.error}</span>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={pending}
                    className="btn-primary justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {pending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

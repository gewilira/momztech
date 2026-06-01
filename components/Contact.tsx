"use client";

import { useActionState, useRef, useState } from "react";
import { AlertCircle, Send, Mail, CheckCircle2, Clock, Globe, Loader2, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { submitInquiry, type ContactState } from "@/app/actions/contact";

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
    background: "#181926",
    border: "1px solid rgba(108,99,255,0.2)",
    color: "#EEEEFF",
  };

  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: "#181926" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Contact Us</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "#EEEEFF" }}>
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#8888AA" }}>
            Tell us about your project. We respond within 24 hours with an honest
            assessment and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "gewilira.morales@momztech.com",
                href: "mailto:gewilira.morales@momztech.com",
                accent: "#6C63FF",
                bg: "rgba(108,99,255,0.08)",
              },
              {
                icon: LinkedinIcon,
                label: "LinkedIn",
                value: "linkedin.com/company/momztech",
                href: "#",
                accent: "#00B4D8",
                bg: "rgba(0,180,216,0.08)",
              },
              {
                icon: Globe,
                label: "Location",
                value: "Remote · Worldwide",
                href: "#",
                accent: "#10B981",
                bg: "rgba(16,185,129,0.08)",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: "#22243A",
                    border: "1px solid rgba(108,99,255,0.14)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = `${item.accent}35`;
                    e.currentTarget.style.boxShadow = `0 4px 16px ${item.accent}14`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "rgba(108,99,255,0.1)";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(108,99,255,0.04)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg }}
                  >
                    <Icon size={18} style={{ color: item.accent }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: "#5A5A7A" }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "#EEEEFF" }}>{item.value}</div>
                  </div>
                </a>
              );
            })}

            {/* Response time card */}
            <div
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(108,99,255,0.12)",
                boxShadow: "0 1px 4px rgba(108,99,255,0.04)",
              }}
            >
              <div className="flex items-center gap-2">
                <Clock size={16} style={{ color: "#6C63FF" }} />
                <span className="text-sm font-semibold" style={{ color: "#EEEEFF" }}>
                  Typical response time
                </span>
              </div>
              <p className="text-sm" style={{ color: "#8888AA" }}>
                We respond to all inquiries within{" "}
                <strong style={{ color: "#6C63FF" }}>24 hours</strong> on business days.
              </p>
              <div className="flex items-center gap-2">
                <span className="glow-dot" />
                <span className="text-xs font-medium" style={{ color: "#EEEEFF" }}>
                  Currently accepting new clients
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#22243A",
                border: "1px solid rgba(108,99,255,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              {showSuccess ? (
                <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(108,99,255,0.1)" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "#6C63FF" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#EEEEFF" }}>
                    Message Received!
                  </h3>
                  <p className="text-sm max-w-xs" style={{ color: "#8888AA" }}>
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
                    <MessageSquare size={18} style={{ color: "#6C63FF" }} />
                    <h3 className="font-bold text-lg" style={{ color: "#EEEEFF" }}>
                      Project Inquiry
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name",    label: "Your Name",    placeholder: "Jane Smith",           req: true  },
                      { name: "company", label: "Company",      placeholder: "Acme Corp (optional)",  req: false },
                    ].map((f) => (
                      <div key={f.name} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: "#8888AA" }}>
                          {f.label}
                        </label>
                        <input
                          type="text"
                          name={f.name}
                          required={f.req}
                          placeholder={f.placeholder}
                          className="w-full px-4 py-2.5 rounded-xl text-sm"
                          style={inputStyle}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: "#8888AA" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@acmecorp.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm"
                      style={inputStyle}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold" style={{ color: "#8888AA" }}>
                        Service Needed
                      </label>
                      <select
                        name="service"
                        defaultValue=""
                        className="w-full px-4 py-2.5 rounded-xl text-sm"
                        style={inputStyle}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold" style={{ color: "#8888AA" }}>
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        defaultValue=""
                        className="w-full px-4 py-2.5 rounded-xl text-sm"
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
                    <label className="text-xs font-semibold" style={{ color: "#8888AA" }}>
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project, goals, timeline, and any specific technical requirements…"
                      className="w-full px-4 py-2.5 rounded-xl text-sm resize-none"
                      style={inputStyle}
                    />
                  </div>

                  {state.error && !pending ? (
                    <div
                      className="flex items-start gap-2 rounded-xl px-4 py-3 text-sm"
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
                        <Send size={16} /> Send Project Inquiry
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

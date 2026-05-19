"use client";

import { Zap, Heart, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#141520",
        borderTop: "1px solid rgba(108,99,255,0.14)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#6C63FF,#00B4D8)" }}
              >
                <Zap size={16} color="white" fill="white" />
              </div>
              <span className="font-bold text-lg tracking-tight" style={{ color: "#EEEEFF" }}>
                Momz<span style={{ color: "#6C63FF" }}>Tech</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#8888AA" }}>
              IT consultancy delivering custom web applications, AI solutions, and
              cloud infrastructure for businesses that want to move fast without
              breaking things.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="mailto:info@momztech.com"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(108,99,255,0.1)" }}
                aria-label="Email"
              >
                <Mail size={15} style={{ color: "#6C63FF" }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(0,180,216,0.1)" }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={15} style={{ color: "#00B4D8" }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(108,99,255,0.1)" }}
                aria-label="GitHub"
              >
                <GithubIcon size={15} style={{ color: "#6C63FF" }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#EEEEFF" }}>Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                "Web Application Development",
                "AI Consultation & Integration",
                "Cloud Architecture & DevOps",
                "Enterprise Software & APIs",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{ color: "#8888AA" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#6C63FF")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#8888AA")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#EEEEFF" }}>Company</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: "About",    href: "#why-us" },
                { label: "Services", href: "#services" },
                { label: "Contact",  href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ color: "#8888AA" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#6C63FF")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#8888AA")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(108,99,255,0.1)" }}
        >
          <p className="text-sm flex items-center gap-1.5" style={{ color: "#5A5A7A" }}>
            © {new Date().getFullYear()} MomzTech · Built with{" "}
            <Heart size={12} style={{ color: "#6C63FF" }} fill="#6C63FF" /> and lots of coffee
          </p>
          <a
            href="#"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(108,99,255,0.12)" }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} style={{ color: "#6C63FF" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

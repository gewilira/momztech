import { Heart, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #3A2E24", background: "#1C1610" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 mb-9">

          {/* Brand */}
          <div className="flex flex-col gap-3.5">
            <Logo size={24} />

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#A89684" }}>
              IT consultancy delivering custom web applications, AI solutions, and
              cloud infrastructure for businesses that want to move fast without
              breaking things. Built by a mom, a software engineer, and the family
              who inspires it all.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="mailto:gewilira.morales@momztech.com"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors"
                style={{ border: "1px solid #3A2E24" }}
                aria-label="Email"
              >
                <Mail size={15} style={{ color: "#E29A5C" }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors"
                style={{ border: "1px solid #3A2E24" }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={15} style={{ color: "#E29A5C" }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors"
                style={{ border: "1px solid #3A2E24" }}
                aria-label="GitHub"
              >
                <GithubIcon size={15} style={{ color: "#E29A5C" }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="mono-label mb-3.5">Services</h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                "Web Application Development",
                "AI Consultation & Integration",
                "Cloud Architecture & DevOps",
                "Enterprise Software & APIs",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="nav-link">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="mono-label mb-3.5">Company</h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: "About",    href: "#why-us" },
                { label: "Services", href: "#services" },
                { label: "Contact",  href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="nav-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid #3A2E24" }}
        >
          <p className="text-sm flex items-center gap-1.5" style={{ color: "#A89684" }}>
            © {new Date().getFullYear()} MomzTech · Built with{" "}
            <Heart size={12} style={{ color: "#E29A5C" }} fill="#E29A5C" /> and lots of coffee
          </p>
          <a
            href="#top"
            className="w-9 h-9 rounded flex items-center justify-center"
            style={{ border: "1px solid #3A2E24" }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} style={{ color: "#E29A5C" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

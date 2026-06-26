"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Care",     href: "#care" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(242,248,253,0.85)" : "rgba(242,248,253,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "#D3E1EC" : "transparent"}`,
        boxShadow: scrolled ? "0 12px 40px -28px rgba(20,32,43,0.25)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#top">
          <Logo size={26} />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2.5 px-4">
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg"
          style={{ color: "#14202B" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-5"
          style={{
            background: "rgba(242,248,253,0.98)",
            borderBottom: "1px solid #D3E1EC",
          }}
        >
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm text-center justify-center" onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}

import Reveal from "@/components/Reveal";
import { Sprout } from "lucide-react";
import PrincipleVisual from "@/components/PrincipleVisual";

export default function Philosophy() {
  return (
    <div style={{ borderTop: "1px solid #D3E1EC", borderBottom: "1px solid #D3E1EC", background: "linear-gradient(135deg, #E9F4EE 0%, #E2F4F4 55%, #E7F0F7 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="flex items-center justify-center rounded-lg"
              style={{ width: "36px", height: "36px", background: "rgba(46,125,70,0.12)", border: "1px solid rgba(46,125,70,0.3)" }}
            >
              <Sprout size={18} style={{ color: "#2E7D46" }} />
            </span>
            <p className="mono-label">&#47;&#47; balance</p>
          </div>
          <blockquote
            className="font-normal max-w-[20ch]"
            style={{ fontFamily: "var(--font-serif), serif", fontSize: "clamp(26px,4vw,46px)", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#14202B" }}
          >
            Move fast — without <span style={{ color: "#2E7D46" }}>breaking things.</span>
          </blockquote>
          <p className="mt-4 font-serif-italic max-w-[26ch]" style={{ fontSize: "clamp(18px,2.2vw,26px)", lineHeight: 1.3, color: "#0A7681" }}>
            Technology that grows with the world — not against it.
          </p>
          <cite className="block mt-7 not-italic">
            <span className="mono-label">The MomzTech Principle</span>
            <p className="mt-2.5 max-w-[54ch] text-base leading-relaxed" style={{ color: "#5C6B76" }}>
              We treat every product as if our own name ships on it — disciplined
              engineering, rigorous reviews, and a partnership that lasts well beyond
              launch. We build futuristic technology that stays in balance with the
              world around it: fast and precise, yet responsible and sustainable —
              made to leave things better than we found them.
            </p>
          </cite>
        </Reveal>

        <Reveal delay={120}>
          <PrincipleVisual />
        </Reveal>
        </div>
      </div>
    </div>
  );
}

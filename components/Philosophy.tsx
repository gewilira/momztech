import Reveal from "@/components/Reveal";

export default function Philosophy() {
  return (
    <div style={{ borderTop: "1px solid #3A2E24", borderBottom: "1px solid #3A2E24", background: "linear-gradient(180deg, #1C1610, #16120F)" }}>
      <div className="max-w-6xl mx-auto px-6 py-[100px]">
        <Reveal>
          <p className="mono-label mb-5">&#47;&#47; philosophy</p>
          <blockquote
            className="font-normal max-w-[18ch]"
            style={{ fontFamily: "var(--font-serif), serif", fontSize: "clamp(26px,4vw,46px)", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#F4EBE0" }}
          >
            Move fast — without <span style={{ color: "#E29A5C" }}>breaking things.</span>
          </blockquote>
          <cite className="block mt-6 not-italic">
            <span className="mono-label">The MomzTech Principle</span>
            <p className="mt-2.5 max-w-[48ch] text-base" style={{ color: "#A89684" }}>
              Our team treats every product as if our own name ships on it — disciplined
              engineering, rigorous reviews, and a partnership that lasts well beyond
              launch. Speed and precision were never opposites.
            </p>
          </cite>
        </Reveal>
      </div>
    </div>
  );
}

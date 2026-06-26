import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Italic accent phrase appended to the title (Fraunces, copper). */
  accent?: string;
  intro?: string;
  align?: "start" | "center";
};

/** Consistent eyebrow → headline → intro block used at the top of each section. */
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = "start",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "max-w-2xl mx-auto text-center mb-14" : "max-w-2xl mb-14"}>
      <p className="mono-label">{eyebrow}</p>
      <h2
        className="mt-3.5 font-semibold tracking-tight"
        style={{ fontSize: "clamp(28px,3.8vw,44px)", lineHeight: 1.07, letterSpacing: "-0.025em", color: "#14202B" }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="font-serif-italic" style={{ color: "#1E73C8" }}>{accent}</span>
          </>
        )}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${centered ? "mx-auto" : ""}`}
          style={{ color: "#5C6B76", maxWidth: "38rem" }}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

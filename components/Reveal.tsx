"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms before the reveal transition starts. */
  delay?: number;
  /** Render as a different element (e.g. "li", "span"). Defaults to "div". */
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Fades + slides children in once they scroll into view.
 * Respects `prefers-reduced-motion` — renders immediately with no transform.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reveal must show immediately when motion is reduced
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

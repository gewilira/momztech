# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000 (Turbopack)
npm run build    # production build + TypeScript check
npm run lint     # ESLint
```

There are no tests. TypeScript errors surface during `npm run build` — always run it before considering a change complete.

## Stack

- **Next.js 16** (App Router, `app/` directory) with **Turbopack**
- **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** — configured CSS-first via `@theme` in `app/globals.css`, not via `tailwind.config.*`. The `@theme` block defines named color tokens (`--color-sky`, `--color-cloud`, `--color-azure`, `--color-teal`, `--color-pine`, `--color-ink`, `--color-slate`, …) and font tokens — but **components mostly use raw inline hex** (`style={{ color: "#1E73C8" }}`) rather than the token-backed utilities. Match whatever the surrounding component already does. Note: components hardcode inline hex, so a full re-theme means remapping the inline hex across every component (a bulk find/replace), not just editing the `@theme` token values.
- **Fonts** (loaded via `next/font/google` in `app/layout.tsx`, exposed as CSS vars): **Space Grotesk** (`--font-space-grotesk`, sans / default body), **Fraunces** (`--font-fraunces`, serif — used italic for accent words via `.font-serif-italic`), **JetBrains Mono** (`--font-jetbrains-mono`, mono — used for `.mono-label` / `.section-label`).
- **lucide-react v1** — brand icons (`Github`, `Linkedin`) were removed in v1; use `components/Icons.tsx` instead

## Architecture

Single-page marketing site. Sections are assembled in `app/page.tsx` in order: `Navbar` → `Hero` → `Services` → `Process` → `WhyUs` → `CarePlans` → `Responsible` → `Philosophy` → `Contact` → `Mountains` → `Footer`. `Responsible` is the "how we balance it" section — six principles (efficient / built-to-last / greener infra / accessible / human-centered AI / open & maintainable) that give the nature↔tech balance idea real substance. `Mountains` is a full-bleed layered horizon (pine→teal→azure) that grounds the page right before the footer. Each is its own file in `components/`. `Services` renders the full catalogue (4 modules → offering cards with timelines + inclusion checklists, **no prices**); `Process` is the 4-step "how we work" credibility band; `CarePlans` renders the three monthly retainer tiers (also no prices). Source content for Services/CarePlans lives in the `MomzTech-Services-and-Pricing-2026.pdf` sheet — the site intentionally omits the AED/USD figures. `app/layout.tsx` wraps everything and renders `<CircuitBackground />` (a fixed, full-viewport backdrop of animated SVG **topographic contour lines that sprout circuit "taps" ending in pulsing nodes — some of which grow leaves** — plus a gentle rise of drifting "life + data" motes: green seeds/pollen and teal/azure data particles. This is the "nature meets tech, in balance" motif from the brand image, in teal/pine/azure) behind the page; `globals.css` adds a refreshing dawn-sky **aurora** wash blending nature-green + AI-teal + sky-azure (`body::before`) plus a faint topographic grid (`body::after`). The backdrop fades out toward the bottom via a radial mask.

**Shared section primitives:** `components/SectionHeading.tsx` (eyebrow → headline + optional Fraunces-italic `accent` → intro) standardizes the top of each section; `components/Reveal.tsx` is a `"use client"` IntersectionObserver fade/slide-in wrapper (fires once, `delay` prop for stagger, **respects `prefers-reduced-motion`**). Reuse these instead of re-rolling per-section headings/animations. Section rhythm alternates backgrounds: most sections are `#F2F8FD` (sky); `Process` and `CarePlans` use `#EDF4FA` (mist-2) with `#D3E1EC` top/bottom hairlines; `Philosophy` is the "balance" band — a nature-green→teal→sky gradient with a `Sprout` emblem and copy about building technology in balance with the world (responsible, sustainable, lasting impact). Cards/panels are white (`#FFFFFF`) with soft shadows. The Hero keeps its own one-shot `.animate-fadeInUp`/`.animate-fadeIn` entrance (it's above the fold) rather than `Reveal`.

**Accessibility conventions to preserve:** a `.skip-link` (in `layout.tsx`) targets the hero `#top`; `globals.css` defines a `:focus-visible` azure outline; the `prefers-reduced-motion` media query disables all looping animations (incl. the `CircuitBackground` via its `.brick-bg` hook), and the Hero typewriter jumps to final text under reduced motion. Keep links real — placeholder `href="#"` were removed (footer/contact social entries that have no real URL render as plain text, not links). The favicon is the branded `app/icon.svg` (the old default `favicon.ico` was deleted).

### Client vs Server components

Default to **server components**. Add `"use client"` at the top **only** when a component uses React hooks or DOM event handlers — forgetting it on an interactive component causes a prerender error at build time. Current client components: `Navbar` (mobile menu + scroll-elevation `useState`), `Hero` (typewriter hooks), `Contact` (form state), `Reveal` (IntersectionObserver). Everything else (`Services`, `Process`, `CarePlans`, `WhyUs`, `Philosophy`, `Footer`, `Logo`, `Icons`, `CircuitBackground`, `SectionHeading`) is a server component — keep it that way unless you add interactivity. Note `SectionHeading` is a server component that *renders* `Reveal` (a client component) — that nesting is fine.

### Styling conventions

All custom utility classes are defined in `app/globals.css` — **not** as Tailwind plugins. Key ones: `.btn-primary` / `.btn-outline`, `.nav-link`, `.mono-label` / `.section-label` (mono uppercase azure labels), `.font-serif-italic` (Fraunces italic accent), `.chip` (tech-stack pill), `.glow-dot` (pulsing status dot), `.panel` + `.glyph-stage` + `.scan` + `.readout` (Hero status panel), `.service-card` / `.why-card` / `.ctline` / `.project-card`, plus the a11y helpers `:focus-visible` and `.skip-link`, and the animations `.animate-fadeInUp`, `.animate-fadeIn`, `.animate-pulse-ring`, `.animate-scan`, `.animate-node-pulse`, `.animate-trace-flow`, `.animate-drift` (rising motes; reads `--mote-opacity`/`--dx`/`--dy` CSS vars + per-element `animation-duration`/`-delay`), `.animate-leaf-sway` (leaves), `.animate-spin-slow` (hero's living orbit ring) with `.delay-100`…`.delay-600`. All looping animations are disabled under `prefers-reduced-motion`. If you reference a class, confirm it exists in `globals.css` first — `Packages.tsx` (dead code) references `.pricing-card` / `.pricing-badge` which are **not** defined.

**Color palette** (light & airy "nature meets tech" theme — sky/azure/teal/pine, derived from the brand image. Values are the `@theme` tokens in `globals.css`):
| Token | Value | Usage |
|---|---|---|
| `--color-sky` | `#F2F8FD` | Page/section background |
| `--color-cloud` | `#FFFFFF` | Cards / panels (white) |
| `--color-mist` | `#E7F0F7` | Chips, subtle fills |
| `--color-mist-2` | `#EDF4FA` | Alternating section band (Process, CarePlans, Footer) |
| `--color-line` | `#D3E1EC` | Borders / hairlines |
| `--color-azure` | `#1E73C8` | Primary accent — links, buttons, labels, logo, headings-accent |
| `--color-azure-deep` | `#155A9E` | Button hover |
| `--color-teal` | `#16B6C4` | AI-glow accent — **decoration only** (halos, orbits, nodes, motes). Too light for text on white. |
| teal-ink | `#0A7681` | Teal used as **text/labels** on white (timelines, "available", featured tier) — meets WCAG AA. Inline hex, not a token. |
| `--color-pine` | `#2E7D46` | Nature/success green — inclusion checkmarks, why-us bullets |
| `--color-sand` | `#D9B98C` | Warm rock accent (available, currently unused) |
| `--color-ink` | `#14202B` | Primary text / headings (deep slate) |
| `--color-slate` | `#5C6B76` | Muted body copy |

Body/list copy that isn't a heading uses `#36474F` (a touch softer than `--color-ink`).

### Hero layout

The hero grid uses `items-start` (not `items-center`). The left column is a multi-line typewriter (`useTypewriter` over `lineDefs` — "We build **technology** / in **balance** / with the world.") with a balance-led intro; the right column is the **holographic AI brand visual** (a white card, built inline — not the `.panel` class): a HUD tech grid, animated **neural links** from the core out to each capability chip, a rotating Earth core (`RotatingGlobe`) inside tilted **holographic orbital rings** + a teal halo, five floating capability chips (`floatIcons`: Brain/Cloud/BarChart3/Wifi = tech + a green **Leaf** = nature; each carries `nx`/`ny` = its centre in 0–100 stage space for the neural link), a **nature horizon** (mountain silhouette) grounding the hologram, and the `.readout` strip below. Below both columns is a 4-cell stat band. `components/RobotHand.tsx` and `RotatingGlobe` exist as standalone visual components; **`RobotHand` is currently dormant** (built during an AI/robotics iteration, then removed from the Hero when rebalancing toward nature — keep it for reuse, don't assume it's mounted). The legacy `.panel`/`.glyph-stage` and `.scan`/`animate-scan` CSS are still defined but no longer used.

### Icons & Logo

`components/Icons.tsx` exports `GithubIcon` and `LinkedinIcon` as inline SVGs. Import from there — do not import `Github` or `Linkedin` from `lucide-react` (they don't exist in v1). `components/Logo.tsx` exports the wordmark `Logo` (used in `Navbar` and `Footer`) and the standalone `LogoMark` glyph. The mark is a **mountain range that reads as an "M"** with a rising teal AI node between the peaks (azure ridge / pine back-ridge / teal node) — the "nature meets tech" idea. `LogoMark` is now multi-color and takes only `size` (no `color` prop). The wordmark renders "Momz" in `textColor` + "Tech" in azure. `app/icon.svg` is the matching favicon (white mountain-M + teal node on an azure rounded square).

`components/Icons.tsx` exports `GithubIcon` and `LinkedinIcon` as inline SVGs. Import from there — do not attempt to import `Github` or `Linkedin` from `lucide-react` (they don't exist in v1).

## Contact form

The Project Inquiry form on `Contact.tsx` submits via the Server Action `submitInquiry` in `app/actions/contact.ts`, which sends mail through nodemailer over SMTP. Required env vars (set in `.env.local`):

| Var | Required | Example |
|---|---|---|
| `SMTP_HOST` | yes | `smtp.gmail.com` |
| `SMTP_PORT` | yes | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_SECURE` | optional | `true` for port 465, omit/`false` for 587 |
| `SMTP_USER` | yes | sending account username |
| `SMTP_PASS` | yes | app password / SMTP credential |
| `SMTP_FROM` | optional | defaults to `SMTP_USER` |
| `CONTACT_TO` | optional | defaults to `info@momztech.com` |

The action runs server-side; the secrets never reach the browser. The form uses `useActionState` with uncontrolled inputs — do not re-introduce controlled `value`/`onChange` plumbing.

## Content notes

- **Contact email:** `info@momztech.com`
- No past-work/portfolio section — the company is new; trust is built through 30+ years combined developer experience messaging
- **Dead / unimported code** (neither is in `app/page.tsx`): `components/Projects.tsx` and `components/Packages.tsx`. `Packages.tsx` is also currently **broken** — its component body wraps the JSX in parens with no `return`, so it renders nothing, and it uses undefined CSS classes. Don't treat either as a working reference; wire up and fix them only if asked.

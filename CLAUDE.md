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

Single-page marketing site. Sections are assembled in `app/page.tsx` in order: `Navbar` → `Hero` → `AIBox` → `Services` → `Process` → `WhyUs` → `CarePlans` → `Responsible` → `Philosophy` → `Contact` → `Mountains` → `Footer`.

**Positioning (read this before touching copy):** the **local AI box** is the flagship — a turnkey on-premise GPU appliance that MomzTech specs, builds, installs on the client's premises, and supports on a retainer. The client owns the box and their data never leaves their building. The Hero leads with it, `AIBox` (`#ai-box`) is the deepest section on the page, and `Services` is *deliberately* framed as secondary ("everything else we do"). The **no-prices rule extends to hardware** — every box is scoped in a consult, so never introduce a price, a range, or a "starting at". `Responsible` is the "how we balance it" section — six principles (efficient / built-to-last / greener infra / accessible / human-centered AI / open & maintainable) that give the nature↔tech balance idea real substance. `Mountains` is a full-bleed layered horizon (pine→teal→azure) that grounds the page right before the footer. Each is its own file in `components/`. `AIBox` is the flagship section (`#ai-box`, `#EDF4FA` band with hairlines): a 3-step turnkey strip (build → install & integrate → support, styled like `Process`), a 6-card **use-case** grid (private document chat, on-prem copilot, offline transcription, data-sovereign search, coding assistant, document intake) — deliberately use cases, **not** hardware tiers — a two-column "on your box vs. on a metered API" contrast panel, a what's-included card reusing the `Services` offering-card anatomy, and a consult CTA. `Services` renders the remaining catalogue as a **compact accordion**: 6 module rows (`.module-row`), collapsed by default, each showing a badge/label/title/blurb plus `.chip` pills naming its offerings, expanding to the same offering cards as before (19 total, with timelines + inclusion checklists, **no prices**). `Process` is the 4-step "how we work" credibility band; `CarePlans` renders the three monthly retainer tiers (also no prices) and now also covers AI-box upkeep. Source content for Services/CarePlans came from an external "MomzTech Services and Pricing 2026" sheet that is **not in this repo** — the site intentionally omits the AED/USD figures. `app/layout.tsx` wraps everything and renders `<CircuitBackground />` (a fixed, full-viewport backdrop of animated SVG **topographic contour lines that sprout circuit "taps" ending in pulsing nodes — some of which grow leaves** — plus a gentle rise of drifting "life + data" motes: green seeds/pollen and teal/azure data particles. This is the "nature meets tech, in balance" motif from the brand image, in teal/pine/azure) behind the page; `globals.css` adds a refreshing dawn-sky **aurora** wash blending nature-green + AI-teal + sky-azure (`body::before`) plus a faint topographic grid (`body::after`). The backdrop fades out toward the bottom via a radial mask.

Section rhythm now alternates cleanly from the top: Hero (page sky) → `AIBox` `#EDF4FA` → `Services` `#F2F8FD` → `Process` `#EDF4FA` → `WhyUs` `#F2F8FD` → `CarePlans` `#EDF4FA` → `Responsible` `#F2F8FD`.

**Shared section primitives:** `components/SectionHeading.tsx` (eyebrow → headline + optional Fraunces-italic `accent` → intro) standardizes the top of each section; `components/Reveal.tsx` is a `"use client"` IntersectionObserver fade/slide-in wrapper (fires once, `delay` prop for stagger, **respects `prefers-reduced-motion`**). Reuse these instead of re-rolling per-section headings/animations. Section rhythm alternates backgrounds: most sections are `#F2F8FD` (sky); `Process` and `CarePlans` use `#EDF4FA` (mist-2) with `#D3E1EC` top/bottom hairlines; `Philosophy` is the "balance" band — a nature-green→teal→sky gradient with a `Sprout` emblem and copy about building technology in balance with the world (responsible, sustainable, lasting impact). Cards/panels are white (`#FFFFFF`) with soft shadows. The Hero keeps its own one-shot `.animate-fadeInUp`/`.animate-fadeIn` entrance (it's above the fold) rather than `Reveal`.

**Accessibility conventions to preserve:** a `.skip-link` (in `layout.tsx`) targets the hero `#top`; `globals.css` defines a `:focus-visible` azure outline; the `prefers-reduced-motion` media query disables all looping animations (incl. the `CircuitBackground` via its `.brick-bg` hook), and the Hero typewriter jumps to final text under reduced motion. Keep links real — placeholder `href="#"` were removed (footer/contact social entries that have no real URL render as plain text, not links). The favicon is the branded `app/icon.svg` (the old default `favicon.ico` was deleted).

### Client vs Server components

Default to **server components**. Add `"use client"` at the top **only** when a component uses React hooks or DOM event handlers — forgetting it on an interactive component causes a prerender error at build time. Current client components: `Navbar` (mobile menu + scroll-elevation `useState`), `Hero` (typewriter hooks), `Contact` (form state), `Reveal` (IntersectionObserver), `ServiceModuleCard` (accordion `useState`/`useId`). Everything else (`Services`, `AIBox`, `AIBoxVisual`, `Process`, `CarePlans`, `WhyUs`, `Philosophy`, `Footer`, `Logo`, `Icons`, `CircuitBackground`, `SectionHeading`) is a server component — keep it that way unless you add interactivity. Note `SectionHeading` is a server component that *renders* `Reveal` (a client component) — that nesting is fine.

**lucide icons cannot cross the server → client boundary as components.** lucide-react v1 ships no `"use client"` directive, so passing an icon *reference* (e.g. `icon={m.icon}`) from a server component into a client component throws *"Functions cannot be passed directly to Client Components."* Render the element on the server and pass it as a `ReactNode` instead — this is exactly what `Services.tsx` does with `icon={<Icon size={23} … />}` → `ServiceModuleCard`. Everything else crossing that boundary must stay plain serializable data (the `crossLink` field on a module is `{ label, href }` strings for this reason).

### Styling conventions

All custom utility classes are defined in `app/globals.css` — **not** as Tailwind plugins. Key ones: `.btn-primary` / `.btn-outline`, `.nav-link`, `.mono-label` / `.section-label` (mono uppercase azure labels), `.font-serif-italic` (Fraunces italic accent), `.chip` (pill — used for the Hero visual's model chips and the `Services` offering-name pills), `.glow-dot` (pulsing status dot), `.scan` (teal sweep bar, used over the AI box's front face), `.readout` (Hero status strip — **always 2 columns**, so its 4 cells render 2×2 at every breakpoint), `.service-card` / `.module-row` (accordion row) / `.why-card` / `.ctline` / `.project-card`, plus the a11y helpers `:focus-visible` and `.skip-link`, and the animations `.animate-fadeInUp`, `.animate-fadeIn`, `.animate-pulse-ring`, `.animate-scan`, `.animate-node-pulse`, `.animate-trace-flow`, `.animate-led` (appliance status LED — **opacity only, so it is safe on an SVG `<circle>`**; `.animate-node-pulse` is not, because it scales about the SVG origin), `.animate-drift` (rising motes; reads `--mote-opacity`/`--dx`/`--dy` CSS vars + per-element `animation-duration`/`-delay`), `.animate-leaf-sway` (leaves), `.animate-spin-slow` with `.delay-100`…`.delay-600`. `.panel` and `.glyph-stage` are defined but currently unused. All looping animations are disabled under `prefers-reduced-motion`. If you reference a class, confirm it exists in `globals.css` first — `Packages.tsx` (dead code) references `.pricing-card` / `.pricing-badge` which are **not** defined.

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

The hero grid uses `items-start` (not `items-center`). The left column is a multi-line typewriter (`useTypewriter` over `lineDefs` — "We build AI that / runs on **your own** / **hardware.**", the emphasis rendering in Fraunces italic azure) over a flagship-led intro that still lands the "in balance with the world" brand line; note `TypedLine` handles both an empty `prefix` and an empty `emphasis`, so lines can be all-plain or all-accent. CTAs are "Book a Consult" (`#contact`) and "See the Box" (`#ai-box`). Below both columns is a 4-cell stat band (`30+` years / `100%` on-premise / `0` lock-in / `24h` response).

The right column is a white card wrapping **`components/AIBoxVisual.tsx`** (a server component): the appliance drawn in 2.5D (top/front/right faces, vent grille, GPU + SSD bays, three status LEDs using `.animate-led`) inside a dashed **"YOUR PREMISES"** perimeter, with internal LAN traces (`.animate-trace-flow`) running to endpoint dots that stay *inside* the perimeter, a **severed uplink** (two dashed segments with an ✕ in the gap) and a `CloudOff` "no cloud" badge deliberately placed *outside* it, a pine `ShieldCheck` privacy badge inside, two `.chip` model pills, a `.scan` sweep over the front face, and a flattened nature horizon grounding it. The `.readout` strip sits below.

**`AIBoxVisual`'s two-layer structure is load-bearing.** The artwork is a fixed `380 × 210` viewBox but the Hero column is wider, so `xMidYMid meet` letterboxes the SVG and percent-positioned HTML overlays would drift off the geometry. Therefore: background layers (wash, HUD grid, horizon) span the full stage, while the **main SVG *and* every overlay** live in an inner div with `aspectRatio: 380 / 210`. Inside that div one SVG user unit equals `1/380` (or `1/210`) of the box.

Three rules keep it responsive — all three were mobile bugs first:
- **Size the inner stage from width, never height.** It is `w-full` with `maxWidth: 380px`; the aspect ratio then supplies the height (and the outer stage's). Pinning `height: 100%` instead forces the width to a constant 380px, which on a ~327px mobile card overflows and gets clipped by `overflow-hidden` — silently amputating the "no cloud" badge, the one element that carries the argument.
- **Position overlays with `pctX()` / `pctY()`, size them with `cq()`.** The stage sets `container-type: inline-size`, so `cqw` units make the HTML overlays (badges, chips, their icons) shrink in step with the SVG instead of ballooning as the stage narrows. Text gets a `max(8px, …)` floor so labels stay legible at the small end.
- **Anything that must differ by breakpoint cannot be an inline style.** Inline styles can't be media-queried; use Tailwind responsive classes (this is why the `AIBox` contrast panel's divider is `border-t … md:border-l` classes, and why the Hero stat band's cell rules live in `.stat-band` in `globals.css` rather than a per-cell `borderLeft` — the grid goes 2-up → 4-up and the rules have to move with it).

`components/RobotHand.tsx` and `components/RotatingGlobe.tsx` are **both dormant** — standalone visual components kept for reuse but mounted nowhere (`RotatingGlobe` was the Hero's rotating Earth core before the AI-box pivot). Don't assume either is on the page.

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

- **The service taxonomy is duplicated in four unsynced places — change them together:** the `modules` array in `components/Services.tsx`, the services list in `components/Footer.tsx`, the `services` select options in `components/Contact.tsx`, and the `links` array in `components/Navbar.tsx`. They have drifted before (the Footer used to say "Enterprise Software & APIs" for a module actually titled "Enterprise Software, Mobile & APIs").
- **Contact email:** `info@momztech.com`
- No past-work/portfolio section — the company is new; trust is built through 30+ years combined developer experience messaging
- **Dead / unimported code** (neither is in `app/page.tsx`): `components/Projects.tsx` and `components/Packages.tsx`. `Packages.tsx` is also currently **broken** — its component body wraps the JSX in parens with no `return`, so it renders nothing, and it uses undefined CSS classes. Don't treat either as a working reference; wire up and fix them only if asked.

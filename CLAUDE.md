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
- **Tailwind CSS v4** — configured CSS-first via `@theme` in `app/globals.css`, not via `tailwind.config.*`. The `@theme` block defines named color tokens (`--color-ink`, `--color-panel`, `--color-copper`, `--color-cream`, `--color-taupe`, `--color-led`, …) and font tokens — but **components mostly use raw inline hex** (`style={{ color: "#E29A5C" }}`) rather than the token-backed utilities. Match whatever the surrounding component already does.
- **Fonts** (loaded via `next/font/google` in `app/layout.tsx`, exposed as CSS vars): **Space Grotesk** (`--font-space-grotesk`, sans / default body), **Fraunces** (`--font-fraunces`, serif — used italic for accent words via `.font-serif-italic`), **JetBrains Mono** (`--font-jetbrains-mono`, mono — used for `.mono-label` / `.section-label`).
- **lucide-react v1** — brand icons (`Github`, `Linkedin`) were removed in v1; use `components/Icons.tsx` instead

## Architecture

Single-page marketing site. Sections are assembled in `app/page.tsx` in order: `Navbar` → `Hero` → `Services` → `Process` → `WhyUs` → `CarePlans` → `Philosophy` → `Contact` → `Footer`. Each is its own file in `components/`. `Services` renders the full catalogue (4 modules → offering cards with timelines + inclusion checklists, **no prices**); `Process` is the 4-step "how we work" credibility band; `CarePlans` renders the three monthly retainer tiers (also no prices). Source content for Services/CarePlans lives in the `MomzTech-Services-and-Pricing-2026.pdf` sheet — the site intentionally omits the AED/USD figures. `app/layout.tsx` wraps everything and renders `<CircuitBackground />` (a fixed, full-viewport animated SVG circuit-trace + pulsing-node backdrop) behind the page; `globals.css` adds a second ambient grid via `body::before`. Both fade out toward the bottom via a radial mask.

**Shared section primitives:** `components/SectionHeading.tsx` (eyebrow → headline + optional Fraunces-italic `accent` → intro) standardizes the top of each section; `components/Reveal.tsx` is a `"use client"` IntersectionObserver fade/slide-in wrapper (fires once, `delay` prop for stagger, **respects `prefers-reduced-motion`**). Reuse these instead of re-rolling per-section headings/animations. Section rhythm alternates backgrounds: most sections are `#16120F` (ink); `Process` and `CarePlans` use `#1A130E` with `#251C15` top/bottom hairlines; `Philosophy` is a gradient band. The Hero keeps its own one-shot `.animate-fadeInUp`/`.animate-fadeIn` entrance (it's above the fold) rather than `Reveal`.

### Client vs Server components

Default to **server components**. Add `"use client"` at the top **only** when a component uses React hooks or DOM event handlers — forgetting it on an interactive component causes a prerender error at build time. Current client components: `Navbar` (mobile menu + scroll-elevation `useState`), `Hero` (typewriter hooks), `Contact` (form state), `Reveal` (IntersectionObserver). Everything else (`Services`, `Process`, `CarePlans`, `WhyUs`, `Philosophy`, `Footer`, `Logo`, `Icons`, `CircuitBackground`, `SectionHeading`) is a server component — keep it that way unless you add interactivity. Note `SectionHeading` is a server component that *renders* `Reveal` (a client component) — that nesting is fine.

### Styling conventions

All custom utility classes are defined in `app/globals.css` — **not** as Tailwind plugins. Key ones: `.btn-primary` / `.btn-outline`, `.nav-link`, `.mono-label` / `.section-label` (mono uppercase copper labels), `.font-serif-italic` (Fraunces italic accent), `.chip` (tech-stack pill), `.glow-dot` (pulsing status dot), `.panel` + `.glyph-stage` + `.scan` + `.readout` (Hero status panel), `.service-card` / `.why-card` / `.ctline` / `.project-card`, and the animations `.animate-fadeInUp`, `.animate-fadeIn`, `.animate-pulse-ring`, `.animate-scan`, `.animate-node-pulse`, `.animate-trace-flow` with `.delay-100`…`.delay-600`. If you reference a class, confirm it exists in `globals.css` first — `Packages.tsx` (dead code) references `.pricing-card` / `.pricing-badge` which are **not** defined.

**Color palette** (warm "copper on dark" / circuit-board theme — values are the `@theme` tokens in `globals.css`):
| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#16120F` | Page/section background |
| `--color-ink-2` | `#1C1610` | Cards, chips, stat band |
| `--color-panel` | `#211A14` | Hero status panel |
| `--color-panel-line` | `#3A2E24` | Borders / hairlines |
| `--color-copper` | `#E29A5C` | Primary accent (links, buttons, labels) |
| `--color-copper-deep` | `#C97E45` | Button hover shadow |
| `--color-cream` | `#F4EBE0` | Primary text / headings |
| `--color-taupe` | `#A89684` | Muted body copy |
| `--color-led` | `#5FD0C5` | Status/"available" cyan-teal accent |

### Hero layout

The hero grid uses `items-start` (not `items-center`). The left column is a multi-line typewriter (`useTypewriter` over `lineDefs`, rendered with `<br>` between lines so height is stable); the right column is the `.panel` status panel (`SYS//MOMZTECH` readout with a scan-line animation and `<LogoMark />`). Below both is a 4-cell stat band.

### Icons & Logo

`components/Icons.tsx` exports `GithubIcon` and `LinkedinIcon` as inline SVGs. Import from there — do not import `Github` or `Linkedin` from `lucide-react` (they don't exist in v1). `components/Logo.tsx` exports the wordmark `Logo` (used in `Navbar`) and the standalone `LogoMark` glyph (used in the Hero panel).

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
| `CONTACT_TO` | optional | defaults to `gewilira.morales@momztech.com` |

The action runs server-side; the secrets never reach the browser. The form uses `useActionState` with uncontrolled inputs — do not re-introduce controlled `value`/`onChange` plumbing.

## Content notes

- **Contact email:** `gewilira.morales@momztech.com`
- No past-work/portfolio section — the company is new; trust is built through 30+ years combined developer experience messaging
- **Dead / unimported code** (neither is in `app/page.tsx`): `components/Projects.tsx` and `components/Packages.tsx`. `Packages.tsx` is also currently **broken** — its component body wraps the JSX in parens with no `return`, so it renders nothing, and it uses undefined CSS classes. Don't treat either as a working reference; wire up and fix them only if asked.

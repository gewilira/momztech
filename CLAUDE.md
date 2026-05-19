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
- **Tailwind CSS v4** — configured CSS-first via `@theme` in `app/globals.css`, not via `tailwind.config.*`
- **lucide-react v1** — brand icons (`Github`, `Linkedin`) were removed in v1; use `components/Icons.tsx` instead

## Architecture

Single-page marketing site. All sections are assembled in `app/page.tsx` as server components, with individual section files in `components/`.

### Client vs Server components

Any component that uses event handlers (`onMouseOver`, `onMouseOut`, `onClick`, `onChange`) or React hooks **must** have `"use client"` at the top. Forgetting this causes a prerender error at build time. Currently all components except `Services.tsx` and `WhyUs.tsx`… actually all components are marked `"use client"` — keep it that way for any new interactive component.

### Styling conventions

All custom utility classes (`.btn-primary`, `.btn-outline`, `.glass-card`, `.service-card`, `.project-card`, `.section-label`, `.text-gradient`, `.animate-float`, `.animate-spin-slow`, etc.) are defined in `app/globals.css` — **not** as Tailwind plugins. Component-specific colors are hardcoded as inline `style` props rather than Tailwind utilities.

**Color palette** (dark gray theme):
| Token | Value | Usage |
|---|---|---|
| Main bg | `#181926` | Hero, Contact, WhyUs |
| Alt bg | `#1D1E30` | Services, Projects |
| Card | `#22243A` | Cards, form panels |
| Footer | `#141520` | Footer |
| Primary text | `#EEEEFF` | Headings, labels |
| Muted text | `#8888AA` | Body copy |
| Subtle text | `#5A5A7A` | Dimmed labels |
| Accent violet | `#6C63FF` | Primary accent |
| Accent cyan | `#00D4FF` | Secondary accent |

### Hero layout — important constraint

The hero grid uses `items-start` (not `items-center`). The left column has a hardcoded `minHeight: "560px"` and the typewriter `<span>` has `minHeight: "2.6em"`. **Do not remove these.** They prevent the typewriter animation from causing layout reflow that shifts the right panel's floating animation.

The right panel animations use `willChange: "transform"` to keep them GPU-composited and off the layout thread.

### Icons

`components/Icons.tsx` exports `GithubIcon` and `LinkedinIcon` as inline SVGs. Import from there — do not attempt to import `Github` or `Linkedin` from `lucide-react` (they don't exist in v1).

## Content notes

- **Contact email:** `info@momztech.com`
- No past-work/portfolio section — the company is new; trust is built through 30+ years combined developer experience messaging
- The `components/Projects.tsx` file exists but is **not imported** in `app/page.tsx` — it is unused dead code

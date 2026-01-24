# Design: Avocado Website Architecture

## Context
Building a marketing website for a dev agency that needs to stand out from typical agency sites. The "Cyberpunk Terminal Noir" aesthetic differentiates while signaling technical competence to the target audience (CTOs, founders, technical decision-makers).

**Constraints:**
- Performance: Lighthouse > 95, bundle < 150KB gzipped
- Accessibility: WCAG 2.1 AA despite terminal aesthetic
- Brand: #0000FF primary color, dark mode only
- Boot sequence must not block content rendering

## Goals / Non-Goals

**Goals:**
- Fast, accessible, conversion-optimized marketing site
- Terminal aesthetic that feels authentic, not gimmicky
- Schema.org structured data for LLM discoverability
- Hero → Contact in 3 clicks maximum
- Memorable visual identity with glitch effects and phosphor glow

**Non-Goals:**
- CMS or dynamic content (static build)
- User accounts or authentication
- Light mode support
- Blog/Ship Logs (future phase)

## Decisions

### 1. Vite + React SPA
**Decision:** Use Vite with React for client-side SPA
**Why:** Fast dev server, optimized builds, no backend required for static marketing site
**Alternatives:** Next.js (overkill for static), Astro (less React ecosystem)

### 2. Tailwind CSS + CSS Custom Properties
**Decision:** Tailwind for utility classes, CSS variables for theme tokens
**Why:** Fast development, tree-shaking, design token consistency
**Alternatives:** CSS Modules (more boilerplate), styled-components (larger bundle)

### 3. Framer Motion for Animation
**Decision:** Framer Motion with reduced-motion fallbacks
**Why:** Declarative, performant, good React integration
**Alternatives:** CSS animations only (less control), GSAP (heavier)

### 4. Boot Sequence as Overlay
**Decision:** Pre-render content behind boot overlay, not block rendering
**Why:** Content available immediately, perceived performance
**Implementation:** Cookie-based skip for repeat visitors, prefers-reduced-motion detection

### 5. Dual Contact Forms
**Decision:** Terminal mode (desktop default) + Standard mode (mobile default)
**Why:** Terminal UX is differentiating but must not sacrifice conversion
**Toggle:** localStorage persistence, link to switch modes

### 6. Schema.org for LLMEO
**Decision:** JSON-LD in page head for Organization, FAQ, HowTo schemas
**Why:** LLM recommendation optimization, rich search results
**Implementation:** Custom React component for schema injection

### 7. Typography Stack
**Decision:** Geist Mono (headlines), Satoshi (body), Berkeley Mono (terminal)
**Why:** Premium feel, Vercel association (Geist), NOT overused fonts
**Alternatives:** Space Grotesk/Inter (too common), system fonts (boring)

### 8. Visual Effects Architecture
**Decision:** Dedicated `components/effects/` with reusable effect wrappers
**Why:** Consistent glitch, scanline, glow effects across components
**Implementation:** Glitch.tsx, Scanlines.tsx, PhosphorGlow.tsx, Typewriter.tsx

## Component Architecture

```
src/
├── components/
│   ├── ui/                    # Base UI components
│   │   ├── Button.tsx         # Primary, Secondary, Ghost + glitch hover
│   │   ├── Input.tsx          # Text, Email, Select
│   │   ├── Card.tsx           # Elevated surface with glow
│   │   └── Badge.tsx          # Tech tags, status indicators
│   ├── terminal/              # Terminal-specific components
│   │   ├── TerminalWindow.tsx # Chrome (title bar, buttons, CRT frame)
│   │   ├── TerminalInput.tsx  # Input with cursor animation
│   │   ├── TerminalOutput.tsx # Typed output display
│   │   ├── TerminalMenu.tsx   # Arrow-key navigable options
│   │   └── BootSequence.tsx   # Initial loading animation
│   ├── effects/               # Visual effects
│   │   ├── Glitch.tsx         # Glitch effect wrapper
│   │   ├── Scanlines.tsx      # CRT overlay
│   │   ├── Typewriter.tsx     # Text reveal animation
│   │   ├── CursorBlink.tsx    # Terminal cursor
│   │   └── PhosphorGlow.tsx   # Blue glow wrapper
│   ├── layout/                # Page structure
│   │   ├── Header.tsx         # Nav + command bar + status
│   │   ├── Footer.tsx         # Links + socials + "exit 0"
│   │   ├── Section.tsx        # Consistent section wrapper
│   │   └── SocialLinks.tsx    # X, LinkedIn, Facebook, Instagram
│   ├── marketing/             # Conversion-focused components
│   │   ├── Hero.tsx           # Above-fold hero with ASCII progress
│   │   ├── StackMarquee.tsx   # Tech stack pipeline
│   │   ├── ProofCards.tsx     # Overlapping Persea showcases
│   │   ├── FAQ.tsx            # Expandable FAQ with schema
│   │   ├── ComparisonTable.tsx# Us vs Them
│   │   └── CTASection.tsx     # Final conversion push
│   └── forms/                 # Contact forms
│       ├── TerminalForm.tsx   # CLI-style input
│       ├── StandardForm.tsx   # Traditional form
│       └── FormToggle.tsx     # Switch between modes
├── pages/
│   ├── Home.tsx
│   ├── Ventures.tsx
│   ├── Services.tsx
│   ├── Protocol.tsx
│   └── Signal.tsx
├── hooks/
│   ├── useReducedMotion.ts
│   └── useFormMode.ts
├── styles/
│   └── globals.css            # CSS variables, base styles
└── lib/
    └── schema.ts              # Schema.org generators
```

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Terminal form reduces conversion | A/B test, always provide standard fallback |
| Boot sequence annoys repeat visitors | Cookie-based skip, respect prefers-reduced-motion |
| Blue on black contrast issues | Use --signal-bright (#4444FF) for body text |
| Bundle size with Framer Motion | Tree-shake, lazy load animations below fold |
| Glitch effects cause accessibility issues | Respect reduced-motion, provide static alternatives |
| Premium fonts not available | Use Commit Mono as Berkeley Mono fallback |

## Migration Plan
N/A - Greenfield build

## Open Questions
1. Form submission backend - Firebase Functions, Formspree, or custom?
2. Analytics events - What conversion events to track beyond form submit?
3. Error tracking - Sentry integration in scope?

# Project Context

## Purpose
Avocado is a high-velocity software development agency and venture studio. This website serves as the primary marketing and lead generation platform, targeting CTOs, founders, and technical decision-makers who need rapid product development.

**Core Value Proposition:** "Ship in weeks, not quarters."

## Tech Stack
- **Framework:** Vite + React (SPA, client-side)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Hosting:** Firebase Hosting
- **Forms:** React Hook Form + Zod
- **Analytics:** Firebase Analytics + Plausible
- **Language:** TypeScript (strict mode)

## Project Conventions

### Code Style
- TypeScript strict mode enabled
- ESLint + Prettier configured
- No `any` types
- Semantic HTML first, ARIA only when needed
- CSS custom properties for theming
- No inline styles except for dynamic values

### Architecture Patterns
- Component-based architecture with clear separation:
  - `components/ui/` - Base UI components
  - `components/terminal/` - Terminal-specific components
  - `components/effects/` - Visual effects (glitch, scanlines, etc.)
  - `components/layout/` - Page structure
  - `components/marketing/` - Conversion-focused components
  - `components/forms/` - Contact forms
- Dark mode only (no light mode)
- Terminal/hacker aesthetic ("Cyberpunk Terminal Noir")

### Git Workflow
- Feature branches from main
- Conventional commits
- PR required for merge

## Domain Context
- **Persea.app** - Social engagement platform (venture product)
- **Persea.ai** - AI-powered data pipeline platform (venture product)
- Both serve as proof points for agency capabilities
- Target audience values technical competence over marketing fluff

## Important Constraints
- **Performance:** Lighthouse > 95, LCP < 2.0s, CLS < 0.05
- **Accessibility:** WCAG 2.1 AA compliance
- **Brand Color:** #0000FF (Avocado Blue / "Signal")
- **No light mode** - dark terminal aesthetic only
- **Boot sequence:** Max 2.0 seconds, skippable, respects reduced-motion

## External Dependencies
- Firebase (hosting + analytics)
- Plausible (privacy-focused analytics)
- Form submission backend (TBD - likely Firebase Functions or Formspree)

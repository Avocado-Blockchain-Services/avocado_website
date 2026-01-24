# Change: Build Avocado Website

## Why
Avocado needs a marketing website that establishes technical authority, generates qualified leads, and showcases their venture products (Persea.app and Persea.ai). The site must differentiate from typical agency sites through a "Cyberpunk Terminal Noir" aesthetic that resonates with the target audience of CTOs and technical founders.

## What Changes
- **NEW:** Vite + React SPA with TypeScript
- **NEW:** Design system with Avocado Blue (#0000FF) brand color and "Cyberpunk Terminal Noir" aesthetic
- **NEW:** Terminal-themed boot sequence animation (2s max, skippable)
- **NEW:** Terminal UI component library (window, input, output, menu)
- **NEW:** Visual effects library (glitch, scanlines, phosphor glow, typewriter)
- **NEW:** Dual-mode contact forms (terminal CLI + standard form)
- **NEW:** Homepage with hero, stack marquee, proof section, FAQ
- **NEW:** Ventures page showcasing Persea.app and Persea.ai
- **NEW:** Services page with comparison table and FAQ
- **NEW:** Protocol page with git-commit timeline visualization
- **NEW:** Signal (contact) page with terminal/classic toggle
- **NEW:** Schema.org implementation for LLMEO optimization
- **NEW:** Full accessibility compliance (WCAG 2.1 AA)

## Impact
- **Affected specs:** All new capabilities (greenfield build)
- **Affected code:** Entire codebase (new project)
- **Dependencies:** Vite, React, Tailwind CSS, Framer Motion, React Hook Form, Zod

## Success Criteria
- Lighthouse Performance > 95
- WCAG 2.1 AA compliance
- Contact form conversion > 3%
- Boot sequence < 2.0 seconds, skippable
- All Schema.org validates in Google Rich Results Test
- Hero → Contact in 3 clicks maximum

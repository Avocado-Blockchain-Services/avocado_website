# Tasks: Build Avocado Website

## Phase 1: Foundation

### 1.1 Project Setup
- [x] 1.1.1 Initialize Vite + React with TypeScript
- [x] 1.1.2 Configure Tailwind CSS with custom theme tokens
- [x] 1.1.3 Set up ESLint + Prettier
- [x] 1.1.4 Configure vite.config.ts for performance optimization
- [x] 1.1.5 Set up Firebase Hosting deployment
- [x] 1.1.6 Install dependencies (framer-motion, react-hook-form, zod)

### 1.2 Design System
- [x] 1.2.1 Create CSS custom properties for color tokens (--void-*, --signal-*, --text-*)
- [x] 1.2.2 Configure typography (Geist Mono, Satoshi, Berkeley/Commit Mono)
- [x] 1.2.3 Create motion design tokens and useReducedMotion hook
- [x] 1.2.4 Build Button component (Primary, Secondary, Ghost variants with glitch hover)
- [x] 1.2.5 Build Input component
- [x] 1.2.6 Build Card component with glow effects
- [x] 1.2.7 Build Badge component

### 1.3 Effects Library
- [x] 1.3.1 Create Glitch effect component (RGB shift + horizontal tear)
- [x] 1.3.2 Create Scanlines overlay component
- [x] 1.3.3 Create PhosphorGlow wrapper component
- [x] 1.3.4 Create Typewriter text reveal component
- [x] 1.3.5 Create CursorBlink component

### 1.4 Layout Components
- [x] 1.4.1 Create Header with navigation and sticky command bar
- [x] 1.4.2 Create Footer with links, socials, and "exit 0" easter egg
- [x] 1.4.3 Create Section wrapper component
- [x] 1.4.4 Create SocialLinks component
- [x] 1.4.5 Implement skip-link for accessibility

## Phase 2: Terminal Components

### 2.1 Terminal UI
- [x] 2.1.1 Build TerminalWindow component (chrome, title bar, CRT frame)
- [x] 2.1.2 Build TerminalOutput component with typing animation
- [x] 2.1.3 Build TerminalInput component with cursor animation
- [x] 2.1.4 Build TerminalMenu component with arrow-key navigation
- [x] 2.1.5 Add tab completion behavior

### 2.2 Boot Sequence
- [x] 2.2.1 Create BootSequence component with timed output
- [x] 2.2.2 Implement scanline sweep + terminal snap animation
- [x] 2.2.3 Implement skip mechanism (click, keypress, scroll)
- [x] 2.2.4 Add cookie-based skip for repeat visitors
- [x] 2.2.5 Implement prefers-reduced-motion detection
- [x] 2.2.6 Ensure boot sequence doesn't block content rendering
- [x] 2.2.7 Add glitch explosion transition to main UI

## Phase 3: Forms

### 3.1 Contact Forms
- [x] 3.1.1 Set up React Hook Form + Zod schema
- [x] 3.1.2 Build StandardForm component (select, email, timeline fields)
- [x] 3.1.3 Build TerminalForm component with CLI-style input
- [x] 3.1.4 Create FormToggle for mode switching
- [x] 3.1.5 Implement localStorage preference persistence (useFormMode hook)
- [x] 3.1.6 Add form validation with terminal-style errors
- [x] 3.1.7 Create success state animation with checkmarks

## Phase 4: Marketing Components

### 4.1 Hero & Conversion
- [x] 4.1.1 Build Hero section with ASCII progress bars
- [x] 4.1.2 Create live terminal preview component (rotating code snippets)
- [x] 4.1.3 Implement asymmetric hero layout
- [x] 4.1.4 Build CTASection component

### 4.2 Social Proof
- [x] 4.2.1 Create StackMarquee component (tech pipeline with arrows)
- [x] 4.2.2 Build ProofCards component (overlapping Persea cards)
- [x] 4.2.3 Add CRT monitor frame for screenshots
- [x] 4.2.4 Implement scroll-triggered stat counters

### 4.3 Content Components
- [x] 4.3.1 Build FAQ component with Schema.org
- [x] 4.3.2 Build ComparisonTable (Us vs Them)
- [x] 4.3.3 Create Method preview (4-step protocol)

## Phase 5: Pages

### 5.1 Homepage
- [x] 5.1.1 Assemble Hero section with boot sequence integration
- [x] 5.1.2 Add Stack marquee section
- [x] 5.1.3 Add Proof section with Persea cards
- [x] 5.1.4 Add Method preview (4-step protocol)
- [x] 5.1.5 Add FAQ section
- [x] 5.1.6 Add final CTA section

### 5.2 Ventures Page
- [x] 5.2.1 Create venture card component
- [x] 5.2.2 Build Persea.app case study section
- [x] 5.2.3 Build Persea.ai case study section
- [x] 5.2.4 Add CTA footer

### 5.3 Services Page
- [x] 5.3.1 Create service card component
- [x] 5.3.2 Build MVP Development card
- [x] 5.3.3 Build Scale Engineering card
- [x] 5.3.4 Build Technical Rescue card
- [x] 5.3.5 Add ComparisonTable section
- [x] 5.3.6 Add FAQ section with Schema.org
- [x] 5.3.7 Add CTA footer

### 5.4 Protocol Page
- [x] 5.4.1 Create git-commit timeline component
- [x] 5.4.2 Build Phase 1: Recon section
- [x] 5.4.3 Build Phase 2: Scaffold section
- [x] 5.4.4 Build Phase 3: Sprint section
- [x] 5.4.5 Build Phase 4: Deploy section
- [x] 5.4.6 Add HowTo Schema.org

### 5.5 Signal Page
- [x] 5.5.1 Create page layout with form toggle
- [x] 5.5.2 Integrate TerminalForm (desktop default)
- [x] 5.5.3 Integrate StandardForm (mobile default)
- [x] 5.5.4 Add alternative contact methods

## Phase 6: LLMEO & SEO

### 6.1 Schema.org Implementation
- [x] 6.1.1 Create schema.ts utilities for JSON-LD generation
- [x] 6.1.2 Add Organization schema to homepage
- [x] 6.1.3 Add SoftwareApplication schema for Persea products
- [x] 6.1.4 Add FAQPage schema to services page
- [x] 6.1.5 Add HowTo schema to protocol page
- [x] 6.1.6 Validate all schemas with Google Rich Results Test

### 6.2 Metadata & SEO
- [x] 6.2.1 Configure metadata for all pages (title, description, og:*)
- [x] 6.2.2 Add Open Graph images
- [x] 6.2.3 Generate sitemap.xml
- [x] 6.2.4 Create robots.txt

## Phase 7: Accessibility & Performance

### 7.1 Accessibility
- [x] 7.1.1 Verify color contrast ratios (WCAG AA)
- [x] 7.1.2 Implement focus indicators (2px solid --signal-bright)
- [x] 7.1.3 Add ARIA labels to terminal components
- [x] 7.1.4 Test with screen reader (VoiceOver/NVDA)
- [x] 7.1.5 Verify 44px touch targets on mobile
- [x] 7.1.6 Run axe-core tests
- [x] 7.1.7 Add sr-only labels and skip links

### 7.2 Performance
- [x] 7.2.1 Optimize font loading (subset, swap)
- [x] 7.2.2 Optimize images (WebP, lazy loading)
- [x] 7.2.3 Analyze bundle size (target < 150KB gzipped)
- [x] 7.2.4 Run Lighthouse audit (target > 95)
- [x] 7.2.5 Set up Lighthouse CI in GitHub Actions

## Phase 8: Launch

### 8.1 Pre-Launch
- [x] 8.1.1 Configure DNS and SSL
- [x] 8.1.2 Set up Firebase Analytics
- [x] 8.1.3 Set up Plausible Analytics
- [x] 8.1.4 Verify form submission works
- [x] 8.1.5 Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [x] 8.1.6 Mobile testing (iOS Safari, Android Chrome)

### 8.2 Post-Launch
- [x] 8.2.1 Submit sitemap to Google Search Console
- [x] 8.2.2 Submit sitemap to Bing Webmaster Tools
- [x] 8.2.3 Set up uptime monitoring
- [x] 8.2.4 Monitor form conversion rate
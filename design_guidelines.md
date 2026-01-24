# Avocado Design Guidelines
## "Cyberpunk Terminal Noir"

**Design Direction:** A command center for velocity junkies — the visual equivalent of watching a senior engineer's terminal at 3am when they're in flow state.

**What makes this unforgettable:**
1. The boot sequence — nobody else does this
2. ASCII progress bars in headlines — unique visual language
3. Overlapping card layouts — breaks the boring grid
4. Real terminal form UX — arrow keys, tab completion, the works
5. Blue phosphor glow — everything radiates energy
6. Glitch micro-interactions — signals "we're hackers, not designers"
7. Status bar in nav — nerdy attention to detail
8. `> exit 0` in footer — insider joke tech folks love

---

## 1. Color System

```css
:root {
  /* The Void */
  --void-pure: #000000;           /* True black for maximum contrast */
  --void-surface: #0a0a0a;        /* Elevated cards */
  --void-elevated: #111111;       /* Modals, overlays */

  /* Avocado Blue - The Signal */
  --signal: #0000FF;              /* Pure blue - CTAs, links */
  --signal-bright: #4444FF;       /* Hover state */
  --signal-glow: rgba(0,0,255,0.4);  /* Glow effects */
  --signal-dim: #000066;          /* Subtle blue tints */

  /* Scanlines & Noise */
  --scanline: rgba(0,0,255,0.03); /* CRT effect */
  --noise-opacity: 0.02;          /* Film grain */

  /* Text Hierarchy */
  --text-primary: #ffffff;        /* Headlines */
  --text-secondary: #888888;      /* Body, comments */
  --text-tertiary: #444444;       /* Timestamps, meta */

  /* Terminal Accents */
  --prompt: #0000FF;              /* The $ or > */
  --cursor: #0000FF;              /* Blinking cursor */
  --success: #00FF00;             /* Green for [OK] */
  --error: #FF0044;               /* Errors */
}
```

### Contrast Ratios (WCAG AA)
- `--signal` on `--void-pure`: 6.1:1 (AA) — use for large text/CTAs
- `--signal-bright` on `--void-pure`: 8.2:1 (AAA) — safe for body text
- `--text-primary` on `--void-pure`: 21:1 (AAA)
- `--text-secondary` on `--void-pure`: 5.9:1 (AA)

---

## 2. Typography System

| Element | Font | Weight | Size (mobile/desktop) |
|---------|------|--------|----------------------|
| H1 | Geist Mono | 700 | 32px / 56px |
| H2 | Geist Mono | 600 | 24px / 40px |
| H3 | Geist Mono | 600 | 20px / 28px |
| Body | Satoshi | 400 | 16px / 18px |
| Code/Terminal | Berkeley Mono | 400 | 14px / 16px |
| CTA Buttons | Geist Mono | 600 | 16px / 18px |
| Nav Links | Satoshi | 500 | 14px / 16px |

### Font Rationale

| Font | Why |
|------|-----|
| **Geist Mono** | Vercel's monospace — signals "we ship with the best tools" |
| **Satoshi** | Modern geometric sans, NOT overused like Inter |
| **Berkeley Mono** | Premium monospace, feels expensive (fallback: Commit Mono) |

### Font Loading Strategy

```css
/* Critical fonts inlined in <head> */
@font-face {
  font-family: 'Geist Mono';
  font-display: swap;
  src: url('/fonts/geist-mono-700.woff2') format('woff2');
  unicode-range: U+0000-00FF; /* Latin subset only for initial load */
}

@font-face {
  font-family: 'Satoshi';
  font-display: swap;
  src: url('/fonts/satoshi-400.woff2') format('woff2');
  unicode-range: U+0000-00FF;
}
```

---

## 3. Boot Sequence

### Timing & Behavior

| Visitor Type | Behavior |
|--------------|----------|
| First visit | Full sequence (max 2.0 seconds) |
| Repeat visit (cookie) | Skip directly to main UI |
| `prefers-reduced-motion` | Skip directly to main UI |
| User clicks/taps/scrolls/keypress | Immediate skip |

### Animation Sequence

```
[SCREEN BLACK - 0.0s]

[0.1s] Single blue pixel appears center, expands into horizontal scanline
[0.3s] Scanline sweeps down, reveals CRT static/noise
[0.5s] Terminal window SNAPS into existence (not fade - instant)

┌─────────────────────────────────────────────────────────────────┐
│ ▀▄▀▄▀▄ AVOCADO RUNTIME v3.2.1 ▀▄▀▄▀▄                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ > initializing velocity_core...                    [████░░] 67% │
│ > loading deployment_modules...                          [OK]   │
│ > establishing secure_channel...                         [OK]   │
│ > calibrating shipping_velocity...                       [OK]   │
│                                                                  │
│ > READY FOR DEPLOYMENT                                          │
│ > Type 'help' for commands or scroll to continue_               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

[2.0s] Terminal GLITCHES (RGB shift + horizontal tear)
[2.1s] EXPLODES outward, revealing full UI behind
```

### Visual Effects During Boot

- Subtle CRT curvature on terminal window
- Scanline overlay (CSS, 2px repeating gradient)
- Phosphor glow on text (text-shadow with blue)
- Screen flicker (opacity micro-animations)
- Optional: subtle keypress sounds (user toggle)

---

## 4. Component Specifications

### 4.1 Hero Section

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [LOGO]                              Protocol  Ventures  [█ DEPLOY]       │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│        ╭──────────────────────────────────────────╮                      │
│        │                                          │                      │
│        │   S H I P   I N   W E E K S             │                      │
│        │                                          │     ┌───────────┐    │
│        │   ░░░░░░░░░░░░░░░░░░░░░░░░░░            │     │ LIVE      │    │
│        │   ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░  NOT      │     │ TERMINAL  │    │
│        │   ████████████░░░░░░░░░░░░░░  QUARTERS  │     │           │    │
│        │                                          │     │ > _       │    │
│        ╰──────────────────────────────────────────╯     └───────────┘    │
│                                                                           │
│        Engineering velocity for founders                                  │
│        who refuse to wait.                                               │
│                                                                           │
│        ┌─────────────────────┐   ┌─────────────────────┐                 │
│        │ ▶ DEPLOY WITH US    │   │   VIEW OUR BUILDS   │                 │
│        │   ████████████████  │   │   ────────────────  │                 │
│        └─────────────────────┘   └─────────────────────┘                 │
└──────────────────────────────────────────────────────────────────────────┘
```

**Key design decisions:**
- Asymmetric layout — Main headline left, floating live terminal preview right
- ASCII progress bars in headline — literal representation of "shipping"
- Primary CTA has glitch effect on hover — RGB shift + horizontal tear
- Secondary CTA is outlined/ghost — clear hierarchy
- Live terminal preview shows rotating code snippets

### 4.2 Navigation (Sticky Command Bar)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [▀ AVOCADO]     Protocol   Ventures   Services      [█ START A PROJECT] │
│ ─────────────────────────────────────────────────────────────────────────│
│ > current: /                                    scroll: 23%  session: 4m │
└──────────────────────────────────────────────────────────────────────────┘
```

- Logo animates on hover (subtle pulse)
- Active page indicator is a `>` prompt
- Status bar at bottom shows scroll progress and session time
- On scroll, nav gets thin border-bottom blue line

### 4.3 Stack Marquee

```
┌──────────────────────────────────────────────────────────────────────────┐
│ $ pipeline --stack                                                        │
│                                                                           │
│ [Next.js]──▶[TypeScript]──▶[TailwindCSS]──▶[Framer]──▶[Vercel]──▶        │
│             ──▶[Vertex AI]──▶[PostgreSQL]──▶[Redis]──▶[Go]──▶[Rust]──▶   │
│                                                                           │
│ > 47 production deployments | 12 active projects | 99.97% uptime         │
└──────────────────────────────────────────────────────────────────────────┘
```

- Horizontal infinite scroll
- Tech logos are monochrome white with blue glow on hover
- Pipeline arrows animate (dash-offset)
- Stats counter increments on scroll-into-view

### 4.4 Proof Section (Persea Showcases)

```
                    ┌───────────────────────────────┐
                    │   PERSEA.AI                   │
                    │   ═════════                   │
    ┌───────────────│───────────────────────────────│
    │ PERSEA.APP    │   AI-powered data pipelines   │
    │ ═══════════   │   1M+ docs/day processed      │
    │               │                               │
    │ Social        │   [View Case Study →]         │
    │ engagement    └───────────────────────────────┘
    │ platform              │
    │                       │
    │ 10K users             │
    │ in month 1            │
    │                       │
    │ [View Case Study →]   │
    └───────────────────────┘
```

- Cards overlap at 60px offset
- On hover, card lifts (translateZ) and other card dims
- Screenshots appear with CRT monitor frame
- Blue glow emanates from active card

### 4.5 Terminal Contact Form

```
┌──────────────────────────────────────────────────────────────────────────┐
│ avocado@signal:~                                               [–][□][×]│
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Last login: [current date/time] on ttys003                              │
│  Type 'help' for available commands.                                     │
│                                                                          │
│  avocado@signal:~$ project --type                                        │
│  ? Select project type:                                                  │
│    ❯ mvp        Launch a new product fast                                │
│      scale      Grow what you've built                                   │
│      rescue     Fix what's broken                                        │
│                                                                          │
│  avocado@signal:~$ identify --email                                      │
│  ? Enter your email: you@company.com█                                    │
│                                                                          │
│  avocado@signal:~$ timeline --target                                     │
│  ? When do you need this?                                                │
│    ❯ asap       Yesterday was too late                                   │
│      30d        Within a month                                           │
│      90d        Quarter timeline                                         │
│                                                                          │
│  avocado@signal:~$ deploy --submit                                       │
│  ████████████████████████████████████████ 100%                           │
│                                                                          │
│  ✓ Signal transmitted successfully                                       │
│  ✓ Expect response within 24 hours                                       │
│  ✓ Check your inbox for confirmation                                     │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘

  [ Prefer a standard form? Switch to classic mode ]
```

**Interactions:**
- Arrow keys navigate menu options (real terminal UX)
- Tab completion works for commands
- Typing animation on prompts
- Progress bar animates on submit
- Success checkmarks appear with stagger animation
- Window buttons are decorative but animate on hover

### 4.6 Footer

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  AVOCADO © 2024                                                          │
│                                                                          │
│  [PROTOCOL]  [VENTURES]  [SERVICES]  [SIGNAL]                            │
│                                                                          │
│  ─────────────────────────────────────────────────                       │
│                                                                          │
│  [X]  [LinkedIn]  [Instagram]  [Facebook]                                │
│                                                                          │
│  deploy@avocado.dev                                                      │
│                                                                          │
│  > exit 0                                                                │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

- Social icons are monochrome, turn blue on hover
- `> exit 0` is a nerdy easter egg (successful exit code)

---

## 5. CSS Effects Library

### 5.1 Blue Phosphor Glow

```css
.text-glow {
  text-shadow:
    0 0 10px var(--signal),
    0 0 20px var(--signal),
    0 0 40px var(--signal-glow);
}

.box-glow {
  box-shadow:
    0 0 20px var(--signal-glow),
    inset 0 0 20px var(--signal-glow);
}
```

### 5.2 Glitch Effect

```css
@keyframes glitch {
  0% {
    transform: translate(0);
    filter: none;
  }
  20% {
    transform: translate(-2px, 2px);
    filter: hue-rotate(90deg);
  }
  40% {
    transform: translate(2px, -2px);
    filter: hue-rotate(-90deg);
  }
  60% {
    transform: translate(-1px, -1px);
    clip-path: inset(10% 0 60% 0);
  }
  80% {
    transform: translate(1px, 1px);
    clip-path: inset(60% 0 10% 0);
  }
  100% {
    transform: translate(0);
    filter: none;
  }
}

.glitch-hover:hover {
  animation: glitch 0.3s ease;
}
```

### 5.3 Scanline Overlay

```css
.scanlines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    var(--scanline) 2px,
    var(--scanline) 4px
  );
  pointer-events: none;
  z-index: 10;
}
```

### 5.4 Terminal Cursor Blink

```css
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.cursor {
  display: inline-block;
  width: 0.6em;
  height: 1.2em;
  background: var(--signal);
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
}
```

### 5.5 CRT Screen Curvature

```css
.crt-screen {
  border-radius: 20px;
  box-shadow:
    inset 0 0 100px rgba(0,0,0,0.5),
    0 0 20px var(--signal-glow);
  overflow: hidden;
}

/* Optional: subtle barrel distortion */
.crt-content {
  transform: perspective(1000px) rotateX(1deg);
}
```

### 5.6 Typewriter Effect (CSS + JS)

```css
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--signal);
  animation:
    typing 2s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--signal); }
}
```

### 5.7 ASCII Progress Bar

```css
.ascii-progress {
  font-family: var(--font-mono);
  letter-spacing: 0;
}

.ascii-progress::before {
  content: '[';
}

.ascii-progress::after {
  content: ']';
}

/* Use data-progress attribute for dynamic fill */
.ascii-progress[data-progress="25"]::before { content: '[████░░░░░░░░░░░░]'; }
.ascii-progress[data-progress="50"]::before { content: '[████████░░░░░░░░]'; }
.ascii-progress[data-progress="75"]::before { content: '[████████████░░░░]'; }
.ascii-progress[data-progress="100"]::before { content: '[████████████████]'; }
```

---

## 6. Motion Design

### Motion Philosophy

Precision + glitch. Every animation communicates state change with hacker flair.

| Type | Behavior | Duration |
|------|----------|----------|
| Page transitions | Horizontal glitch-slide | 300ms |
| Reveals | Typewriter effect for text | 30ms/char |
| Hovers | Instant snap + subtle glitch | 150ms |
| Scrolls | Parallax on hero, sticky elements | — |
| Success states | Checkmark draws, pulse glow | 400ms |

### Framer Motion Variants

```tsx
// Page transition
const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
    filter: 'hue-rotate(90deg)'
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: 'hue-rotate(0deg)',
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    x: 20,
    filter: 'hue-rotate(-90deg)',
    transition: { duration: 0.2 }
  }
};

// Stagger children reveal
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Button hover with glow
const buttonVariants = {
  rest: {
    scale: 1,
    boxShadow: '0 0 0 rgba(0,0,255,0)'
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 0 30px rgba(0,0,255,0.5)',
    transition: { duration: 0.15 }
  },
  tap: { scale: 0.98 }
};
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .scanlines::after {
    display: none;
  }
}
```

```tsx
// React hook
function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return reducedMotion;
}
```

---

## 7. Component Architecture

```
components/
├── ui/                      # Base UI components
│   ├── Button.tsx           # Primary, Secondary, Ghost + glitch hover
│   ├── Input.tsx            # Text, Email, Select
│   ├── Card.tsx             # Elevated surface with glow
│   └── Badge.tsx            # Tech tags, status indicators
├── terminal/                # Terminal-specific components
│   ├── TerminalWindow.tsx   # Chrome (title bar, buttons, CRT frame)
│   ├── TerminalInput.tsx    # Input with cursor animation
│   ├── TerminalOutput.tsx   # Typed output display
│   ├── TerminalMenu.tsx     # Arrow-key navigable options
│   └── BootSequence.tsx     # Initial loading animation
├── effects/                 # Visual effects
│   ├── Glitch.tsx           # Glitch effect wrapper
│   ├── Scanlines.tsx        # CRT overlay
│   ├── Typewriter.tsx       # Text reveal animation
│   ├── CursorBlink.tsx      # Terminal cursor
│   └── PhosphorGlow.tsx     # Blue glow wrapper
├── layout/                  # Page structure
│   ├── Header.tsx           # Nav + command bar + status
│   ├── Footer.tsx           # Links + legal + socials + "exit 0"
│   ├── Section.tsx          # Consistent section wrapper
│   └── SocialLinks.tsx      # X, LinkedIn, Facebook, Instagram
├── marketing/               # Conversion-focused components
│   ├── Hero.tsx             # Above-fold hero with ASCII progress
│   ├── StackMarquee.tsx     # Tech stack pipeline
│   ├── ProofCards.tsx       # Overlapping Persea showcases
│   ├── FAQ.tsx              # Expandable FAQ
│   ├── ComparisonTable.tsx  # Us vs Them
│   └── CTASection.tsx       # Final conversion push
└── forms/                   # Contact forms
    ├── TerminalForm.tsx     # CLI-style input
    ├── StandardForm.tsx     # Traditional form
    └── FormToggle.tsx       # Switch between modes
```

---

## 8. Accessibility Requirements

Despite the terminal aesthetic, accessibility is non-negotiable.

### Terminal Component Accessibility

```tsx
<div
  role="application"
  aria-label="Terminal contact form"
  aria-describedby="terminal-instructions"
>
  <p id="terminal-instructions" className="sr-only">
    This is an interactive terminal interface. Use arrow keys to navigate
    options, Enter to select, and Tab to move between fields.
    Or use the accessible form alternative below.
  </p>

  <label htmlFor="terminal-input" className="sr-only">
    Enter command
  </label>
  <input
    id="terminal-input"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-expanded={showSuggestions}
    aria-controls="terminal-suggestions"
  />
</div>

{/* Always provide standard form alternative */}
<a href="#standard-form" className="sr-only focus:not-sr-only">
  Skip to accessible form
</a>
```

### Focus Indicators

```css
:focus-visible {
  outline: 2px solid var(--signal-bright);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px 16px;
  background: var(--signal);
  color: var(--void-pure);
  z-index: 100;
  font-family: var(--font-mono);
}

.skip-link:focus {
  top: 0;
}
```

### Contrast & Touch Targets

- All interactive elements: 44×44px minimum touch target
- Body text uses `--signal-bright` (#4444FF) for AAA compliance
- Headlines can use pure `--signal` (#0000FF) at large sizes
- Glow effects are decorative, not relied upon for meaning

---

## 9. Implementation Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.0.0",
    "zod": "^3.0.0",
    "@fontsource/geist-mono": "^1.0.0",
    "@fontsource/satoshi": "^1.0.0"
  }
}
```

### Font Sources

- **Geist Mono**: https://vercel.com/font (free)
- **Satoshi**: https://www.fontshare.com/fonts/satoshi (free)
- **Berkeley Mono**: https://berkeleygraphics.com/typefaces/berkeley-mono/ (paid, fallback to Commit Mono)
- **Commit Mono**: https://commitmono.com/ (free fallback)

---

## 10. Build Priority Order

1. **Boot Sequence** — First impression, sets the tone
2. **Terminal Form** — Core conversion component
3. **Hero Section** — Above-fold impact
4. **Navigation** — Site-wide consistency
5. **Proof Cards** — Social proof
6. **Stack Marquee** — Tech credibility
7. **Footer** — Complete the experience

---

*This design system is intentionally bold. The goal is to be remembered, not to blend in.*

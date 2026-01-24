# Capability: Design System

## ADDED Requirements

### Requirement: Color Token System
The system SHALL provide CSS custom properties for the "Cyberpunk Terminal Noir" color palette including void backgrounds (--void-pure, --void-surface, --void-elevated), signal blues (--signal, --signal-bright, --signal-glow, --signal-dim), text hierarchy (--text-primary, --text-secondary, --text-tertiary), and terminal accents (--success, --error).

#### Scenario: Color tokens available in CSS
- **WHEN** a component needs to apply the brand color
- **THEN** it can use `var(--signal)` for #0000FF
- **AND** `var(--signal-bright)` for #4444FF hover states
- **AND** `var(--signal-glow)` for rgba(0,0,255,0.4) glow effects

#### Scenario: Dark mode only
- **WHEN** the user views the site
- **THEN** only the dark theme is displayed
- **AND** no light mode toggle exists

### Requirement: Typography System
The system SHALL use Geist Mono for headlines, Satoshi for body text, and Berkeley Mono (with Commit Mono fallback) for terminal/code content. Font loading MUST use font-display: swap with Latin subset for initial load.

#### Scenario: Headline typography
- **WHEN** rendering an H1 element
- **THEN** it uses Geist Mono at 700 weight
- **AND** 32px on mobile, 56px on desktop

#### Scenario: Terminal typography
- **WHEN** rendering terminal output
- **THEN** it uses Berkeley Mono (or Commit Mono fallback) at 400 weight
- **AND** 14px on mobile, 16px on desktop

### Requirement: Button Component
The system SHALL provide Button components in Primary (solid --signal with white text), Secondary (outlined with --signal border), and Ghost (text-only) variants. All buttons MUST have glitch hover effects and meet 44px minimum touch target.

#### Scenario: Primary button hover
- **WHEN** user hovers over a Primary button
- **THEN** a glitch animation plays (RGB shift + box-shadow glow)
- **AND** the button scales to 1.02

#### Scenario: Button accessibility
- **WHEN** a button receives keyboard focus
- **THEN** a 2px solid --signal-bright outline appears with 2px offset

### Requirement: Card Component
The system SHALL provide a Card component with elevated surface styling (--void-surface background), blue glow on hover, and lift effect (translateZ).

#### Scenario: Card hover effect
- **WHEN** user hovers over a Card
- **THEN** a blue glow emanates from the card
- **AND** the card lifts slightly (translateZ transform)

### Requirement: Reduced Motion Support
The system SHALL respect `prefers-reduced-motion` by disabling all animations and using instant opacity transitions instead.

#### Scenario: Reduced motion preference
- **WHEN** user has prefers-reduced-motion: reduce enabled
- **THEN** all animations complete in 0.01ms
- **AND** scanline effects are hidden
- **AND** glitch effects are disabled

# Capability: Boot Sequence

## ADDED Requirements

### Requirement: Boot Sequence Animation
The system SHALL display a terminal-style boot sequence on first visit that completes within 2.0 seconds maximum. The sequence MUST include scanline sweep, terminal window snap, progress indicators with [OK] status, and a glitch explosion transition to the main UI.

#### Scenario: First visit boot sequence
- **WHEN** a first-time visitor loads the homepage
- **THEN** the boot sequence animation plays
- **AND** displays "initializing velocity_core...", "loading deployment_modules...", etc.
- **AND** completes within 2.0 seconds
- **AND** transitions to main UI with glitch explosion effect

#### Scenario: Boot sequence visual effects
- **WHEN** the boot sequence plays
- **THEN** a scanline sweeps down the screen at 0.1-0.3s
- **AND** the terminal window snaps into existence (not fade) at 0.5s
- **AND** text appears with typing animation
- **AND** phosphor glow effect is applied to text

### Requirement: Boot Sequence Skip
The system SHALL allow users to skip the boot sequence via click, tap, scroll, or any keypress. A visible "Skip" link MUST appear in the bottom-right corner from 0.0s.

#### Scenario: Skip via interaction
- **WHEN** user clicks, taps, scrolls, or presses any key during boot
- **THEN** the boot sequence immediately ends
- **AND** the main UI is displayed without the glitch transition

#### Scenario: Skip link visibility
- **WHEN** the boot sequence starts
- **THEN** a "Skip" link is visible in the bottom-right corner
- **AND** clicking it immediately skips to main UI

### Requirement: Repeat Visitor Skip
The system SHALL skip the boot sequence for repeat visitors by setting a cookie (avocado_visited=true) after first view. The cookie MUST expire after 30 days.

#### Scenario: Repeat visitor detection
- **WHEN** a visitor returns within 30 days
- **THEN** the boot sequence is skipped
- **AND** the main UI displays immediately

### Requirement: Reduced Motion Skip
The system SHALL skip the boot sequence when the user has prefers-reduced-motion: reduce enabled.

#### Scenario: Reduced motion preference
- **WHEN** user has prefers-reduced-motion: reduce enabled
- **THEN** the boot sequence is skipped entirely
- **AND** the main UI displays immediately without animation

### Requirement: Non-Blocking Content
The boot sequence MUST NOT block content rendering. The main UI content SHALL be pre-rendered behind the boot overlay.

#### Scenario: Content pre-rendering
- **WHEN** the boot sequence plays
- **THEN** the main page content is already rendered behind it
- **AND** is immediately visible when boot sequence ends
- **AND** no additional loading occurs

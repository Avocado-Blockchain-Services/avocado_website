# Capability: Marketing Components

## ADDED Requirements

### Requirement: Hero Section
The system SHALL provide a Hero component with asymmetric layout: main headline with ASCII progress bars on the left, live terminal preview on the right. The hero MUST include primary CTA ("Deploy with Avocado") and secondary CTA ("View Our Builds").

#### Scenario: Hero layout
- **WHEN** the hero section is rendered
- **THEN** headline "SHIP IN WEEKS NOT QUARTERS" displays on the left
- **AND** ASCII progress bars (░▓█) appear within/below the headline
- **AND** a live terminal preview shows on the right
- **AND** two CTA buttons appear below the headline

#### Scenario: Hero CTAs
- **WHEN** hero CTAs are rendered
- **THEN** "Deploy with Avocado" is primary (solid --signal, white text, 56px height)
- **AND** "View Our Builds" is secondary (ghost, --signal border)
- **AND** primary CTA has glitch effect on hover

#### Scenario: Live terminal preview
- **WHEN** the terminal preview is visible
- **THEN** it shows rotating code snippets or commands
- **AND** displays with terminal window chrome
- **AND** includes blinking cursor

### Requirement: Stack Marquee
The system SHALL provide a StackMarquee component displaying tech stack logos in an infinite horizontal scroll with pipeline arrows (──▶) connecting them. Stats counters MUST appear below.

#### Scenario: Marquee animation
- **WHEN** the stack marquee is visible
- **THEN** tech logos scroll horizontally in infinite loop
- **AND** pipeline arrows connect the logos
- **AND** logos are monochrome white, turn blue on hover

#### Scenario: Stats counters
- **WHEN** the marquee section scrolls into view
- **THEN** stat counters animate/increment to final values
- **AND** display metrics like "47 production deployments"

### Requirement: Proof Cards
The system SHALL provide a ProofCards component displaying Persea.app and Persea.ai case studies in overlapping card layout. Cards MUST lift on hover with one card dimming while the other highlights.

#### Scenario: Overlapping layout
- **WHEN** proof cards are rendered
- **THEN** Persea.app and Persea.ai cards overlap at ~60px offset
- **AND** creates a stacked visual effect

#### Scenario: Card hover interaction
- **WHEN** user hovers over one card
- **THEN** that card lifts (translateZ) and glows blue
- **AND** the other card dims slightly

#### Scenario: Screenshot display
- **WHEN** card screenshots are shown
- **THEN** they appear within a CRT monitor frame effect

### Requirement: FAQ Component
The system SHALL provide an FAQ component with expandable question/answer pairs. The component MUST generate FAQPage Schema.org JSON-LD.

#### Scenario: FAQ expansion
- **WHEN** user clicks a question
- **THEN** the answer expands/collapses with animation
- **AND** aria-expanded reflects the current state

#### Scenario: FAQ schema
- **WHEN** FAQ component is rendered
- **THEN** it generates valid FAQPage Schema.org JSON-LD
- **AND** the schema is injected into the page head

### Requirement: Comparison Table
The system SHALL provide a ComparisonTable component displaying "Traditional Agency" vs "Avocado" differences in a terminal-styled table format.

#### Scenario: Table rendering
- **WHEN** comparison table is displayed
- **THEN** it shows side-by-side comparison rows
- **AND** Avocado advantages are highlighted in --signal color
- **AND** traditional agency items appear in --text-secondary

### Requirement: CTA Section
The system SHALL provide a CTASection component for page footers with headline ("Ready to Ship?"), CTA button, and optional supporting text.

#### Scenario: CTA section rendering
- **WHEN** CTA section is displayed
- **THEN** it shows a compelling headline
- **AND** a primary CTA button linking to /signal
- **AND** occupies full width with centered content

### Requirement: Method Preview
The system SHALL provide a MethodPreview component showing the 4-phase protocol (Recon, Scaffold, Sprint, Deploy) in a horizontal timeline format.

#### Scenario: Timeline display
- **WHEN** method preview is rendered
- **THEN** it shows 4 phases in connected timeline format
- **AND** each phase has icon, title, and brief description
- **AND** visual connection (line/arrow) between phases

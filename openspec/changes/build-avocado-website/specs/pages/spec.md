# Capability: Pages

## ADDED Requirements

### Requirement: Homepage
The system SHALL provide a Homepage with sections: Hero (with boot sequence integration), Stack Marquee, Proof (Persea showcases), Method Preview, FAQ, and final CTA. The hero-to-contact path MUST be achievable in 3 clicks maximum.

#### Scenario: Homepage structure
- **WHEN** homepage loads (after boot sequence)
- **THEN** Hero section is above the fold
- **AND** Stack Marquee follows below
- **AND** Proof section shows Persea cards
- **AND** Method preview shows 4-phase protocol
- **AND** FAQ section with schema
- **AND** Final CTA section

#### Scenario: Conversion path
- **WHEN** user wants to contact Avocado
- **THEN** they can reach the contact form in maximum 3 clicks
- **AND** ideally 1-2 clicks (Hero CTA → Signal page)

### Requirement: Ventures Page
The system SHALL provide a Ventures page showcasing Persea.app and Persea.ai with hero images/screenshots, challenge/approach descriptions, tech stack, key metrics, and CTA footer.

#### Scenario: Ventures page structure
- **WHEN** /ventures page loads
- **THEN** page header states "Our Ventures" with intro text
- **AND** Persea.app case study section appears
- **AND** Persea.ai case study section appears
- **AND** CTA footer links to /signal

#### Scenario: Case study content
- **WHEN** a case study section is rendered
- **THEN** it shows hero image/screenshot
- **AND** "The Challenge" description
- **AND** "Our Approach" description
- **AND** "The Stack" tech tags
- **AND** "Key Metric" highlight

### Requirement: Services Page
The system SHALL provide a Services page with three service cards (MVP Development, Scale Engineering, Technical Rescue), comparison table (Us vs Them), FAQ with schema, and CTA footer.

#### Scenario: Services page structure
- **WHEN** /services page loads
- **THEN** page header states "What We Build"
- **AND** three service cards are displayed
- **AND** comparison table shows agency differences
- **AND** FAQ section with FAQPage schema
- **AND** CTA footer links to /signal

#### Scenario: Service card content
- **WHEN** a service card is rendered
- **THEN** it shows service name and timeline
- **AND** "Ideal for" target audience
- **AND** "Output" deliverables
- **AND** CTA button

### Requirement: Protocol Page
The system SHALL provide a Protocol page with git-commit style timeline showing 4 phases (Recon, Scaffold, Sprint, Deploy), each with detailed description and outputs. Page MUST include HowTo Schema.org.

#### Scenario: Protocol page structure
- **WHEN** /protocol page loads
- **THEN** page header states "How We Work"
- **AND** timeline visualization appears (vertical mobile, horizontal desktop)
- **AND** Phase 1-4 sections with details
- **AND** HowTo Schema.org is generated

#### Scenario: Timeline phase content
- **WHEN** a phase section is rendered
- **THEN** it shows phase number and name
- **AND** timeline duration
- **AND** activities/deliverables list
- **AND** "Output" summary

### Requirement: Signal Page
The system SHALL provide a Signal (contact) page with form mode toggle, TerminalForm (desktop default), StandardForm (mobile default), and alternative contact methods.

#### Scenario: Signal page structure
- **WHEN** /signal page loads
- **THEN** page header states "Let's Build"
- **AND** form mode toggle is visible
- **AND** appropriate form (terminal/standard) displays based on device/preference
- **AND** alternative contact methods shown below

#### Scenario: Alternative contacts
- **WHEN** signal page is rendered
- **THEN** it displays email: deploy@avocado.dev
- **AND** social links: X, LinkedIn, Facebook, Instagram

### Requirement: Page Metadata
Each page SHALL have unique meta title, description, and Open Graph tags optimized for search and social sharing.

#### Scenario: Page metadata
- **WHEN** any page loads
- **THEN** it has unique `<title>` tag
- **AND** meta description
- **AND** og:title, og:description, og:image tags
- **AND** canonical URL

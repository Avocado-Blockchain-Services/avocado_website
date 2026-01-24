# Capability: Layout Components

## ADDED Requirements

### Requirement: Header Navigation
The system SHALL provide a sticky Header component with logo, navigation links (Protocol, Ventures, Services), and a primary CTA button ("Start a Project" or "Deploy"). The header MUST include a status bar showing current page and scroll progress.

#### Scenario: Sticky header behavior
- **WHEN** user scrolls down the page
- **THEN** the header remains fixed at the top
- **AND** a thin blue border-bottom line appears

#### Scenario: Navigation active state
- **WHEN** viewing a page
- **THEN** the current page link displays a ">" prompt indicator
- **AND** the status bar shows "current: /[page-name]"

#### Scenario: Status bar display
- **WHEN** header is rendered
- **THEN** it shows scroll progress percentage
- **AND** optionally shows session time (nerdy detail)

### Requirement: Footer
The system SHALL provide a Footer component with navigation links, social media links (X, LinkedIn, Instagram, Facebook), email contact, and an "exit 0" easter egg text.

#### Scenario: Footer content
- **WHEN** footer is rendered
- **THEN** it displays navigation links (Protocol, Ventures, Services, Signal)
- **AND** social media icons that turn blue on hover
- **AND** the email address deploy@avocado.dev
- **AND** "> exit 0" text at the bottom

#### Scenario: Social link hover
- **WHEN** user hovers over a social media icon
- **THEN** it changes from monochrome to --signal blue

### Requirement: Section Wrapper
The system SHALL provide a Section component for consistent page section styling with proper spacing, max-width constraints, and semantic HTML.

#### Scenario: Section rendering
- **WHEN** a Section component is used
- **THEN** it renders as a semantic `<section>` element
- **AND** applies consistent padding and max-width
- **AND** centers content horizontally

### Requirement: Skip Link
The system SHALL provide a skip link for keyboard users to bypass navigation and jump directly to main content.

#### Scenario: Skip link visibility
- **WHEN** user tabs into the page
- **THEN** a "Skip to main content" link becomes visible
- **AND** is positioned at the top of the page

#### Scenario: Skip link activation
- **WHEN** user activates the skip link
- **THEN** focus moves to the main content area
- **AND** the skip link hides

### Requirement: Social Links Component
The system SHALL provide a SocialLinks component displaying icons for X/Twitter, LinkedIn, Facebook, and Instagram with links to official Avocado profiles.

#### Scenario: Social links rendering
- **WHEN** SocialLinks component is rendered
- **THEN** it displays icons for X, LinkedIn, Facebook, Instagram
- **AND** each icon links to the corresponding Avocado profile
- **AND** links open in new tabs with rel="noopener noreferrer"

# Capability: Contact Forms

## ADDED Requirements

### Requirement: Terminal Form
The system SHALL provide a TerminalForm component that collects project type, email, and timeline using CLI-style input with command prompts, arrow-key navigation for options, and typewriter animations.

#### Scenario: Terminal form flow
- **WHEN** user interacts with terminal form
- **THEN** it prompts "project --type" with menu options (mvp, scale, rescue)
- **THEN** prompts "identify --email" for email input
- **THEN** prompts "timeline --target" with menu options (asap, 30d, 90d)
- **THEN** displays "deploy --submit" with progress bar animation

#### Scenario: Arrow key navigation
- **WHEN** user is on a selection prompt
- **THEN** up/down arrows navigate between options
- **AND** Enter selects the highlighted option

#### Scenario: Terminal form validation
- **WHEN** user enters invalid email format
- **THEN** error displays as "ERROR: invalid email format" in terminal style
- **AND** cursor returns to email input

#### Scenario: Terminal form success
- **WHEN** form submits successfully
- **THEN** ASCII progress bar animates to 100%
- **AND** checkmark lines appear with stagger animation
- **AND** displays "Signal transmitted successfully"

### Requirement: Standard Form
The system SHALL provide a StandardForm component with traditional HTML form elements (select dropdowns, text input) for accessibility and mobile users.

#### Scenario: Standard form fields
- **WHEN** standard form is rendered
- **THEN** it displays project type as dropdown select
- **AND** email as text input with email validation
- **AND** timeline as dropdown select
- **AND** submit button styled as primary CTA

#### Scenario: Standard form validation
- **WHEN** user submits with invalid data
- **THEN** validation errors appear below the relevant field
- **AND** invalid fields are highlighted

#### Scenario: Standard form success
- **WHEN** form submits successfully
- **THEN** success message appears
- **AND** form fields are disabled or reset

### Requirement: Form Mode Toggle
The system SHALL provide a FormToggle component allowing users to switch between Terminal and Standard form modes. The preference MUST be persisted in localStorage.

#### Scenario: Mode switching
- **WHEN** user clicks "Switch to classic mode" link
- **THEN** form switches from terminal to standard mode
- **AND** preference is saved to localStorage

#### Scenario: Preference persistence
- **WHEN** user returns to the contact page
- **THEN** their previously selected form mode is displayed
- **AND** can be changed at any time

### Requirement: Default Form Mode
The system SHALL default to Terminal mode on desktop viewports and Standard mode on mobile viewports (< 768px).

#### Scenario: Desktop default
- **WHEN** user visits contact page on desktop (≥768px)
- **AND** no localStorage preference exists
- **THEN** Terminal form is displayed

#### Scenario: Mobile default
- **WHEN** user visits contact page on mobile (<768px)
- **AND** no localStorage preference exists
- **THEN** Standard form is displayed

### Requirement: Form Data Schema
The system SHALL validate form data using Zod schema with fields: project_type (enum: mvp|scale|rescue), email (valid email format), timeline (enum: asap|30d|90d).

#### Scenario: Schema validation
- **WHEN** form data is submitted
- **THEN** it is validated against Zod schema
- **AND** invalid data is rejected with descriptive errors

### Requirement: Form Accessibility
Both Terminal and Standard forms SHALL meet WCAG 2.1 AA accessibility requirements including proper labels, ARIA attributes, and keyboard navigation.

#### Scenario: Terminal form accessibility
- **WHEN** terminal form is rendered
- **THEN** it has role="application" with aria-label
- **AND** sr-only instructions describe keyboard navigation
- **AND** a "Skip to accessible form" link is provided for screen readers

#### Scenario: Standard form accessibility
- **WHEN** standard form is rendered
- **THEN** all inputs have associated labels
- **AND** required fields are indicated
- **AND** error messages are associated with inputs via aria-describedby

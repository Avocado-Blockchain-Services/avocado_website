## ADDED Requirements

### Requirement: Clickable Logo Navigation
The header logo SHALL be a clickable link that navigates to the home page.

#### Scenario: User clicks logo
- **WHEN** user clicks the header logo from any page
- **THEN** the browser navigates to /

#### Scenario: Logo displays correctly
- **WHEN** the header renders
- **THEN** the logo displays as an SVG image from /logo-blue.svg
- **AND** the logo has alt text "Avocado"

### Requirement: Home Navigation Link
The navigation menu SHALL include a "Home" link.

#### Scenario: Home link present
- **WHEN** the navigation menu renders
- **THEN** "Home" appears as the first navigation item
- **AND** clicking it navigates to /

### Requirement: Company Navigation Link
The navigation menu SHALL include a "Company" link.

#### Scenario: Company link present
- **WHEN** the navigation menu renders
- **THEN** "Company" appears in the navigation items
- **AND** clicking it navigates to /company

### Requirement: CTA Button Navigation
The header CTA button SHALL link to the contact page.

#### Scenario: CTA button links to signal
- **WHEN** user clicks the header CTA button
- **THEN** the browser navigates to /signal

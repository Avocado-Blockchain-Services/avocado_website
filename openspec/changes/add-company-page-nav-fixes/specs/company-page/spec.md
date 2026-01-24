## ADDED Requirements

### Requirement: Company Page Route
The application SHALL provide a /company route that displays the company page.

#### Scenario: Company page accessible
- **WHEN** user navigates to /company
- **THEN** the company page renders with company information

### Requirement: Company Page Hero
The company page SHALL display a hero section with company tagline.

#### Scenario: Hero displays tagline
- **WHEN** the company page renders
- **THEN** the hero displays "Enterprise clients. Startup speed."
- **AND** the hero displays "Mexico City | Since 2018"

### Requirement: Credentials Display
The company page SHALL display credential badges for certifications and partnerships.

#### Scenario: Google Partner badge
- **WHEN** the company page renders
- **THEN** the Google for Startups partner badge is displayed

#### Scenario: ISO27001 badge
- **WHEN** the company page renders
- **THEN** the ISO27001 certification badge is displayed

#### Scenario: ESPMX VC badge
- **WHEN** the company page renders
- **THEN** the ESPMX Venture Capital badge is displayed

### Requirement: Enterprise Clients Display
The company page SHALL display logos of enterprise clients.

#### Scenario: Client logos displayed
- **WHEN** the company page renders
- **THEN** client logos are displayed in a grid
- **AND** logos include: Chivas, Banorte, BBVA, Grupo Salinas, Bitso, HouseBlocks

### Requirement: Ventures Link
The company page SHALL link to the ventures page for product information.

#### Scenario: Link to Persea Labs
- **WHEN** user views the company page
- **THEN** a link to /ventures is displayed with text about Persea Labs products

### Requirement: Company Page SEO
The company page SHALL include appropriate SEO metadata and structured data.

#### Scenario: Meta tags present
- **WHEN** the company page renders
- **THEN** the page title includes "Company"
- **AND** the meta description describes the company

#### Scenario: LocalBusiness schema
- **WHEN** the company page renders
- **THEN** Schema.org LocalBusiness structured data is included
- **AND** the schema includes CDMX location

### Requirement: Homepage Track Record Section
The homepage SHALL display a "Track Record" section linking to the company page.

#### Scenario: Track Record section
- **WHEN** the homepage renders
- **THEN** a section with header "TRACK RECORD" is displayed
- **AND** the section includes CTA "Enterprise clients. Startup speed."
- **AND** clicking the CTA navigates to /company

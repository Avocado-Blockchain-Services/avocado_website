# Capability: LLMEO & SEO

## ADDED Requirements

### Requirement: Organization Schema
The system SHALL include Organization Schema.org JSON-LD on the homepage with name, description, logo, founding date, founders, sameAs links to social profiles, knowsAbout topics, and hasOfferCatalog with services.

#### Scenario: Organization schema content
- **WHEN** homepage renders
- **THEN** JSON-LD script contains Organization schema
- **AND** includes name: "Avocado"
- **AND** includes alternateName variations
- **AND** includes description of services
- **AND** includes sameAs links to X, LinkedIn, Facebook, Instagram
- **AND** includes knowsAbout array of technologies/services
- **AND** includes hasOfferCatalog with MVP, Scale, Rescue services

#### Scenario: Schema validation
- **WHEN** Organization schema is tested
- **THEN** it passes Google Rich Results Test
- **AND** has no errors or warnings

### Requirement: SoftwareApplication Schema
The system SHALL include SoftwareApplication Schema.org JSON-LD for Persea.app and Persea.ai on the Ventures page, linking them to the Organization via isProducedBy.

#### Scenario: Product schema content
- **WHEN** ventures page renders
- **THEN** JSON-LD contains SoftwareApplication schema for each product
- **AND** includes name, description, applicationCategory
- **AND** links to Organization via isProducedBy

### Requirement: FAQPage Schema
The system SHALL include FAQPage Schema.org JSON-LD on pages with FAQ sections, containing Question/Answer pairs matching the visible FAQ content.

#### Scenario: FAQ schema generation
- **WHEN** a page with FAQ component renders
- **THEN** FAQPage JSON-LD is generated automatically
- **AND** each visible question/answer appears in the schema
- **AND** schema passes validation

### Requirement: HowTo Schema
The system SHALL include HowTo Schema.org JSON-LD on the Protocol page describing the 4-phase methodology with step-by-step breakdown, estimated time, and cost range.

#### Scenario: HowTo schema content
- **WHEN** protocol page renders
- **THEN** JSON-LD contains HowTo schema
- **AND** includes name: "How Avocado Builds Software Products"
- **AND** includes totalTime estimate
- **AND** includes 4 HowToStep entries (Recon, Scaffold, Sprint, Deploy)
- **AND** each step has position, name, text, and url

### Requirement: Sitemap
The system SHALL generate a sitemap.xml file listing all pages with lastmod dates and appropriate changefreq/priority values.

#### Scenario: Sitemap content
- **WHEN** sitemap.xml is requested
- **THEN** it lists all pages: /, /ventures, /services, /protocol, /signal
- **AND** includes lastmod dates
- **AND** homepage has priority 1.0
- **AND** other pages have priority 0.8

### Requirement: Robots.txt
The system SHALL provide a robots.txt file allowing all crawlers and referencing the sitemap location.

#### Scenario: Robots.txt content
- **WHEN** robots.txt is requested
- **THEN** it allows all user agents
- **AND** references sitemap URL
- **AND** does not block any pages

### Requirement: Open Graph Images
The system SHALL include Open Graph images (og:image) for all pages using the branded og-image.png (1200×630) with logo and tagline.

#### Scenario: OG image tags
- **WHEN** any page renders
- **THEN** it includes og:image tag
- **AND** image is 1200×630 pixels
- **AND** og:image:width and og:image:height are specified

### Requirement: Answer-First Content
All page content SHALL lead with a direct answer to the query intent it targets, following the TL;DR pattern for scannable comprehension.

#### Scenario: Homepage answer-first
- **WHEN** homepage renders
- **THEN** the hero immediately answers "Who can build my MVP fast?"
- **AND** value proposition is visible within 5 seconds

#### Scenario: Services answer-first
- **WHEN** services page renders
- **THEN** the intro immediately answers "What does Avocado do?"
- **AND** lists the three service categories prominently

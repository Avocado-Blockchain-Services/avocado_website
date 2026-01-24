# Capability: Accessibility

## ADDED Requirements

### Requirement: Color Contrast
The system SHALL meet WCAG 2.1 AA color contrast requirements with minimum 4.5:1 for normal text and 3:1 for large text and UI components. The --signal-bright (#4444FF) color MUST be used for body text on dark backgrounds.

#### Scenario: Text contrast compliance
- **WHEN** text is rendered on --void-pure background
- **THEN** --text-primary (#ffffff) has 21:1 contrast ratio
- **AND** --text-secondary (#888888) has at least 4.5:1 ratio
- **AND** --signal-bright (#4444FF) has at least 4.5:1 ratio for body text

#### Scenario: Large text contrast
- **WHEN** headlines use --signal (#0000FF) on dark background
- **THEN** contrast ratio meets 3:1 minimum for large text (18px+)

### Requirement: Focus Indicators
The system SHALL provide visible focus indicators on all interactive elements using 2px solid --signal-bright outline with 2px offset.

#### Scenario: Keyboard focus visibility
- **WHEN** user navigates via keyboard
- **THEN** focused element displays 2px blue outline
- **AND** outline has 2px offset from element
- **AND** outline is visible against both light and dark backgrounds

#### Scenario: Focus-visible only
- **WHEN** user clicks an interactive element
- **THEN** no outline appears (focus:not(:focus-visible))
- **AND** outline only appears on keyboard focus

### Requirement: Skip Link
The system SHALL provide a skip link as the first focusable element that bypasses navigation and jumps to main content.

#### Scenario: Skip link behavior
- **WHEN** user tabs into the page
- **THEN** "Skip to main content" link receives focus first
- **AND** is visually hidden until focused
- **AND** becomes visible on focus

#### Scenario: Skip link activation
- **WHEN** user activates skip link
- **THEN** focus moves to main content landmark
- **AND** screen readers announce the new location

### Requirement: ARIA Landmarks
The system SHALL use semantic HTML and ARIA landmarks: banner (header), navigation, main, contentinfo (footer).

#### Scenario: Landmark structure
- **WHEN** page renders
- **THEN** header has role="banner"
- **AND** nav has role="navigation" with aria-label
- **AND** main content has role="main"
- **AND** footer has role="contentinfo"

### Requirement: Terminal Accessibility
Terminal components SHALL include ARIA attributes and screen reader instructions. A link to the standard form alternative MUST be provided for users who prefer it.

#### Scenario: Terminal form ARIA
- **WHEN** terminal form renders
- **THEN** container has role="application"
- **AND** has aria-label describing the component
- **AND** sr-only text explains keyboard navigation

#### Scenario: Form alternative link
- **WHEN** terminal form is displayed
- **THEN** a sr-only link "Skip to accessible form" is provided
- **AND** link becomes visible on focus
- **AND** links to standard form section

### Requirement: Touch Targets
All interactive elements SHALL meet 44×44px minimum touch target size on mobile devices.

#### Scenario: Button touch targets
- **WHEN** buttons render on mobile
- **THEN** clickable area is at least 44×44 pixels
- **AND** includes adequate spacing between targets

#### Scenario: Link touch targets
- **WHEN** navigation links render on mobile
- **THEN** tap targets are at least 44×44 pixels
- **AND** or have 44px total height with adequate padding

### Requirement: Reduced Motion
The system SHALL respect prefers-reduced-motion preference by disabling animations, removing scanline effects, and using instant transitions.

#### Scenario: Animation disabling
- **WHEN** user has prefers-reduced-motion: reduce
- **THEN** all animations complete in 0.01ms
- **AND** scanline overlays are hidden
- **AND** glitch effects are disabled
- **AND** boot sequence is skipped

#### Scenario: Content still accessible
- **WHEN** animations are disabled
- **THEN** all content remains visible and functional
- **AND** no information is lost

### Requirement: Screen Reader Support
All images SHALL have descriptive alt text, all form inputs SHALL have associated labels, and all icons SHALL have aria-label or sr-only text.

#### Scenario: Image alt text
- **WHEN** images are rendered
- **THEN** they have descriptive alt attributes
- **AND** decorative images have alt=""
- **AND** informative images describe their content

#### Scenario: Form labels
- **WHEN** form inputs render
- **THEN** each has an associated label element
- **AND** labels are programmatically associated (for/id or wrapping)
- **AND** required fields are indicated via aria-required

#### Scenario: Icon accessibility
- **WHEN** icons are rendered without visible text
- **THEN** they have aria-label describing their purpose
- **AND** or adjacent sr-only text

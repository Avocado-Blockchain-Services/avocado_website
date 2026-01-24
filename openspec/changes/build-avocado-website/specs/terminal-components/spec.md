# Capability: Terminal Components

## ADDED Requirements

### Requirement: Terminal Window
The system SHALL provide a TerminalWindow component with window chrome (title bar with minimize/maximize/close buttons), CRT-style curved frame, and scanline overlay.

#### Scenario: Terminal window rendering
- **WHEN** a TerminalWindow component is rendered
- **THEN** it displays a title bar with decorative window buttons
- **AND** has a CRT-style curved border/shadow effect
- **AND** displays a subtle scanline overlay

#### Scenario: Window button hover
- **WHEN** user hovers over decorative window buttons
- **THEN** they animate (color change or pulse)
- **AND** no functional action occurs (decorative only)

### Requirement: Terminal Output
The system SHALL provide a TerminalOutput component that displays text with typewriter animation at 30ms per character.

#### Scenario: Typed output display
- **WHEN** text is rendered in TerminalOutput
- **THEN** characters appear one at a time at 30ms intervals
- **AND** a blinking cursor follows the text
- **AND** phosphor glow effect is applied

#### Scenario: Reduced motion output
- **WHEN** user has reduced motion enabled
- **THEN** text appears immediately without typing animation

### Requirement: Terminal Input
The system SHALL provide a TerminalInput component with a blinking block cursor, command prompt prefix (> or $), and focus management.

#### Scenario: Input focus
- **WHEN** TerminalInput receives focus
- **THEN** the block cursor blinks at 1s intervals
- **AND** typed characters appear with the cursor

#### Scenario: Input prompt
- **WHEN** TerminalInput is rendered
- **THEN** it displays a prompt prefix (e.g., "avocado@signal:~$")
- **AND** the input area follows the prompt

### Requirement: Terminal Menu
The system SHALL provide a TerminalMenu component that displays selectable options navigable via arrow keys, with visual indicator (❯) for the selected option.

#### Scenario: Arrow key navigation
- **WHEN** user presses up/down arrow keys in TerminalMenu
- **THEN** the selection indicator moves to the previous/next option
- **AND** screen readers announce the new selection

#### Scenario: Option selection
- **WHEN** user presses Enter on a selected option
- **THEN** the option is selected
- **AND** the menu advances to the next step (if applicable)

#### Scenario: Menu accessibility
- **WHEN** TerminalMenu is rendered
- **THEN** it has appropriate ARIA roles (listbox, option)
- **AND** aria-selected reflects the current selection

### Requirement: Tab Completion
The system SHALL provide tab completion for known commands and values in terminal input fields.

#### Scenario: Tab completion suggestion
- **WHEN** user types partial text and presses Tab
- **THEN** matching completions are suggested
- **AND** single match auto-completes the value

#### Scenario: Multiple completions
- **WHEN** multiple completions match the input
- **THEN** a list of options is displayed
- **AND** user can select from the list

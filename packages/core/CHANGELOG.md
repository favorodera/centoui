# Changelog

## v1.5.0...v1.5.1

[compare changes](https://github.com/favorodera/centoui/compare/v1.5.0...v1.5.1)

### Added

- **label:** Add error state styling for invalid fields ([4a72ca2](https://github.com/favorodera/centoui/commit/4a72ca2))

  - add peer-aria-invalid variant to label component
  - improve visual feedback for invalid form inputs

- **radio-group:** Implement radio group component ([8092254](https://github.com/favorodera/centoui/commit/8092254))

  - add RadioGroup root and item components
  - define styling variants using tailwind-variants
  - export necessary types and context providers

- **radio-group:** Add radio-group-item component ([96be2b6](https://github.com/favorodera/centoui/commit/96be2b6))

  - implement radio-group-item with reka-ui
  - support custom sizes via root context
  - enable slot customization for indicators

- **radio-group:** Add root component implementation ([c59af1a](https://github.com/favorodera/centoui/commit/c59af1a))

  - implement RadioGroupRoot using reka-ui
  - provide context for component variants
  - enable custom styling and size configuration

- **switch:** Update color scheme for component ([602d863](https://github.com/favorodera/centoui/commit/602d863))

  - Change default background to primary
  - Update unchecked state colors
  - Align thumb colors with new primary scheme

- **label:** Add size variants and field styling ([7a57925](https://github.com/favorodera/centoui/commit/7a57925))

  - Add size variant support to label component
  - Implement dynamic styling for nested fields
  - Export LabelVariants type for improved typing

- **radio-group:** Set default orientation to vertical ([2cbca98](https://github.com/favorodera/centoui/commit/2cbca98))

  - ensure consistent layout for radio group components

- **label:** Add error state border for fields ([69a8da2](https://github.com/favorodera/centoui/commit/69a8da2))

  - add invalid border state to label variants
  - remove unnecessary whitespace in storybook file


### Fixed

- **field:** Exclude label from grid justify-self-end ([99a1ad5](https://github.com/favorodera/centoui/commit/99a1ad5))

  - prevent label from being pushed to the end of grid
  - ensure labels align correctly in field components

- **core:** Adjust field margin for nested groups ([86cb8fb](https://github.com/favorodera/centoui/commit/86cb8fb))

  - Remove bottom margin when field is last child
  - Ensure proper spacing within field sets and groups


### Styling

- **cli:** Format files array in package.json ([a9a9736](https://github.com/favorodera/centoui/commit/a9a9736))
- **checkbox:** Remove unnecessary transition-colors ([f9e448b](https://github.com/favorodera/centoui/commit/f9e448b))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.4.0...v1.5.0

[compare changes](https://github.com/favorodera/centoui/compare/v1.4.0...v1.5.0)

### Added

- **core:** Add Field component and variants ([06ff454](https://github.com/favorodera/centoui/commit/06ff454))

  - Add FieldSet and FieldLegend components
  - Define tailwind-variants for field styling

- **field:** Add FieldLegend component ([2c42b99](https://github.com/favorodera/centoui/commit/2c42b99))
- **core:** Add FieldSet component ([97b359d](https://github.com/favorodera/centoui/commit/97b359d))
- **field:** Add FieldGroup component ([5201257](https://github.com/favorodera/centoui/commit/5201257))
- **field:** Add FieldGroup component and refactor variants ([e36f3ba](https://github.com/favorodera/centoui/commit/e36f3ba))

  - Add FieldGroup component
  - Rename field variants to use concise naming
  - Update interface types for FieldLegend

- **core:** Add field-content component ([c0dbe0f](https://github.com/favorodera/centoui/commit/c0dbe0f))

  - Implement FieldContent using Reka-ui Primitive
  - Add support for variants and class forwarding

- **field:** Add field-label component ([fa494cd](https://github.com/favorodera/centoui/commit/fa494cd))
- **core:** Add field component ([1c7e9ac](https://github.com/favorodera/centoui/commit/1c7e9ac))

  - implement base field component using reka-ui
  - add orientation support via variants

- **field:** Add Field, FieldContent, and FieldLabel components ([5dd5b2e](https://github.com/favorodera/centoui/commit/5dd5b2e))

  - add field variants and orientation support
  - export new components and types
  - update field slot structure

- **field:** Add field description component ([517893c](https://github.com/favorodera/centoui/commit/517893c))

  - Implement FieldDescription using Primitive
  - Add support for variant styling and slotting

- **field:** Add FieldError component ([c25efb7](https://github.com/favorodera/centoui/commit/c25efb7))

  - Implement component for rendering field errors
  - Support string and object error formats
  - Normalize and deduplicate error messages
  - Add accessibility attributes for error display

- **core:** Add FieldTitle component ([ce266de](https://github.com/favorodera/centoui/commit/ce266de))

  - Implement FieldTitle using Reka UI Primitive
  - Enable styling via field variants
  - Support custom class delegation

- **field:** Add title, description, and error components ([2a06447](https://github.com/favorodera/centoui/commit/2a06447))

  - add new field sub-components for form accessibility
  - define styles for title, description, and error
  - export new components and types for public use

- **input:** Add autocomplete attribute support ([60aeac8](https://github.com/favorodera/centoui/commit/60aeac8))

  - enable browser autocomplete for input component

- **label:** Add required indicator and improve states ([e506544](https://github.com/favorodera/centoui/commit/e506544))

  - Add asterisk for required fields
  - Standardize disabled state selectors
  - Improve layout with flex container

- **field:** Add link styling to description slot ([d6099c8](https://github.com/favorodera/centoui/commit/d6099c8))

  - Enable underline for links in description
  - Add hover color for links in description

- **field:** Improve layout responsiveness and sizing ([1da1cae](https://github.com/favorodera/centoui/commit/1da1cae))

  - Add min-inline-0 to prevent flex item overflow
  - Standardize field orientation layout logic
  - Update error text casing to uppercase
  - Ensure title spans full width

- **field:** Add title select field and update layout ([250478f](https://github.com/favorodera/centoui/commit/250478f))

  - Add title field with validation to storybook
  - Refactor field layout to use CSS grid
  - Improve responsiveness for field orientations

- **registry:** Add field component to registry ([585f57a](https://github.com/favorodera/centoui/commit/585f57a))

### Fixed

- **field:** Fix component casing for Primitive ([3a36250](https://github.com/favorodera/centoui/commit/3a36250))
- **combobox:** Update anchor styles for layout consistency ([3a46052](https://github.com/favorodera/centoui/commit/3a46052))

  - Apply necessary layout classes to anchor slot
  - Ensure combobox aligns correctly within containers

- **core:** Update invalid data attribute selector ([0a4fba5](https://github.com/favorodera/centoui/commit/0a4fba5))

  - Align field component with updated data attribute naming

- **button:** Use min-block for sizing consistency ([6e9d81d](https://github.com/favorodera/centoui/commit/6e9d81d))

  - Ensure button sizes respect minimum block constraints

- **components:** Update default content positions ([1106aba](https://github.com/favorodera/centoui/commit/1106aba))

  - Change combobox content position to inline
  - Change select content position to item-aligned


### Refactors

- **select:** Update component layout to flex ([8f2dfd6](https://github.com/favorodera/centoui/commit/8f2dfd6))

  - change content slot to flex column
  - update group slot to flex column

- **field:** Rename fieldLegend variants to legend ([55b33dd](https://github.com/favorodera/centoui/commit/55b33dd))
- **field:** Rename fieldSet variant to set ([76337e3](https://github.com/favorodera/centoui/commit/76337e3))
- **combobox:** Remove unnecessary template reuse ([5317f20](https://github.com/favorodera/centoui/commit/5317f20))

  - simplify component structure by removing template
  - eliminate unused ComboboxPortal import
  - render content directly for better maintainability

- **field:** Remove unused field-label component ([3fb925b](https://github.com/favorodera/centoui/commit/3fb925b))

  - delete redundant field-label implementation
  - consolidate label logic within field component

- **field:** Improve field component styles and cleanup ([565572b](https://github.com/favorodera/centoui/commit/565572b))

  - Update error and title slots with new variants
  - Remove unused FieldLabel component and types


### Documentation

- **readme:** Update configuration examples ([6495b12](https://github.com/favorodera/centoui/commit/6495b12))

### Chores

- **core:** Reformat files array in package.json ([4d4106a](https://github.com/favorodera/centoui/commit/4d4106a))

  - Improve readability of configuration
  - Maintain consistent formatting standards


### Styling

- **select:** Update component layout to flexbox ([42bcd2a](https://github.com/favorodera/centoui/commit/42bcd2a))
- **field:** Fix missing space in defineProps ([2544a8f](https://github.com/favorodera/centoui/commit/2544a8f))
- **field:** Add missing space to field orientation prop ([b896b88](https://github.com/favorodera/centoui/commit/b896b88))
- **field:** Remove unused list styling from error component ([2634b8f](https://github.com/favorodera/centoui/commit/2634b8f))
- **select:** Remove trailing comma in reactiveOmit ([7ba2772](https://github.com/favorodera/centoui/commit/7ba2772))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.3.0...v1.4.0

[compare changes](https://github.com/favorodera/centoui/compare/v1.3.0...v1.4.0)

### Added

- **core:** Update icon configuration ([dbbec3d](https://github.com/favorodera/centoui/commit/dbbec3d))

  - Rename close to x
  - Add plus icon to configuration

- **combobox:** Remove cancel button from input component ([16cddc2](https://github.com/favorodera/centoui/commit/16cddc2))

  - remove ComboboxCancel from combobox-input
  - update variant logic to exclude cancel styles

- **core:** Add number input component ([7194dbb](https://github.com/favorodera/centoui/commit/7194dbb))

  - implement number input variant styles
  - add component exports and type definitions

- **core:** Add NumberInput component ([b48f254](https://github.com/favorodera/centoui/commit/b48f254))
- **registry:** Add number-input component definition ([decee73](https://github.com/favorodera/centoui/commit/decee73))

### Fixed

- **sheet:** Update close icon to x in sheet-header ([ae125c4](https://github.com/favorodera/centoui/commit/ae125c4))

### Refactors

- **components:** Standardize input group and layout ([221760a](https://github.com/favorodera/centoui/commit/221760a))

  - replace data-slot with data-input-group-control
  - update combobox and select styling to use grid
  - add disabled state support to combobox items
  - minor formatting updates to package.json files

- **combobox:** Remove unused slots from variants ([4c7fd9f](https://github.com/favorodera/centoui/commit/4c7fd9f))

  - remove unused cancel slot
  - remove unused trigger slot

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.2.0...v1.3.0

[compare changes](https://github.com/favorodera/centoui/compare/v1.2.0...v1.3.0)

### Added

- **combobox:** Add combobox component and update input-group ([03df301](https://github.com/favorodera/centoui/commit/03df301))

  - implement core combobox component with variants
  - add storybook stories for combobox and input-group
  - refactor input-group to support size variants
  - remove redundant input-group-control component
  - update theme color palette variables

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.1.0...v1.2.0

[compare changes](https://github.com/favorodera/centoui/compare/v1.1.0...v1.2.0)

### Added

- **icon:** Add @iconify/vue dependency to registry ([f0496fa](https://github.com/favorodera/centoui/commit/f0496fa))

  - add @iconify/vue to icon component dependencies


### Refactors

- **core:** Update theme and design system tokens ([62ef9bc](https://github.com/favorodera/centoui/commit/62ef9bc))

  - Refactor theme tokens and color palette
  - Update component styles to use new variables
  - Reorder CI pipeline to test before build
  - Remove unused theme editor and popover logic
  - Add Geist font family for typography


### Documentation

- **readme:** Update npm badge to show total downloads ([2283013](https://github.com/favorodera/centoui/commit/2283013))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0...v1.1.0

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0...v1.1.0)

### Added

- **checkbox:** Add checkbox component ([e169731](https://github.com/favorodera/centoui/commit/e169731))

  - initialize checkbox component structure
  - export checkbox component for package usage

- **registry:** Add checkbox component to registry ([c0aabcf](https://github.com/favorodera/centoui/commit/c0aabcf))

  - register checkbox component definition
  - update index registry with checkbox entries

- **checkbox:** Implement checkbox component ([d442454](https://github.com/favorodera/centoui/commit/d442454))

  - add Checkbox component using reka-ui
  - define component variants and slots
  - export component and types

- **checkbox:** Add icon component dependency ([488e173](https://github.com/favorodera/centoui/commit/488e173))

  - register icon as a dependency for checkbox

- **core:** Add minus icon to configuration ([ecfefbd](https://github.com/favorodera/centoui/commit/ecfefbd))

  - register minus icon in icons object
  - remove commented out minus icon definition

- **checkbox:** Add support for indeterminate state ([edba1b2](https://github.com/favorodera/centoui/commit/edba1b2))

  - add conditional rendering for icon
  - display minus icon when state is indeterminate

- **checkbox:** Add styles and size variants ([123576e](https://github.com/favorodera/centoui/commit/123576e))

  - apply base styles to root and indicator slots
  - define size variants for sm, md, and lg
  - add state-based styling for unchecked state

- **registry:** Add icon dependency to checkbox ([f1f4c4d](https://github.com/favorodera/centoui/commit/f1f4c4d))

  - add icon component dependency to checkbox entry


### Styling

- **repo:** Format json and source files ([e3dea52](https://github.com/favorodera/centoui/commit/e3dea52))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.2.2...v1.0.0

[compare changes](https://github.com/favorodera/centoui/compare/v0.2.2...v1.0.0)

### Added

- Add AvatarRoot component ([fd80b97](https://github.com/favorodera/centoui/commit/fd80b97))
- Add Avatar component ([e5e1953](https://github.com/favorodera/centoui/commit/e5e1953))
- Add avatar fallback component ([ce4d047](https://github.com/favorodera/centoui/commit/ce4d047))
- Add AvatarImage component ([a3ab91d](https://github.com/favorodera/centoui/commit/a3ab91d))
- Add disabled prop and slot to AvatarRoot component ([10a7ee9](https://github.com/favorodera/centoui/commit/10a7ee9))
- Enhance Avatar component with comprehensive styling and props ([9f455b2](https://github.com/favorodera/centoui/commit/9f455b2))
- Export getInitials utility and refine avatar styles ([6223e43](https://github.com/favorodera/centoui/commit/6223e43))
- Add getInitials utility for avatar display ([4ed091d](https://github.com/favorodera/centoui/commit/4ed091d))
- Add avatar component ([2a222f8](https://github.com/favorodera/centoui/commit/2a222f8))
- Add avatar component ([187c257](https://github.com/favorodera/centoui/commit/187c257))
- Add AxeMatchers to Vitest setup ([44888d4](https://github.com/favorodera/centoui/commit/44888d4))
- Add @iconify/vue dependency to registry ([1c107fc](https://github.com/favorodera/centoui/commit/1c107fc))
- Add getInitials utility function for avatar component ([7ab4d6c](https://github.com/favorodera/centoui/commit/7ab4d6c))
- Add square prop to button component ([c1ad714](https://github.com/favorodera/centoui/commit/c1ad714))
- Add square prop to Button component ([e120f8c](https://github.com/favorodera/centoui/commit/e120f8c))
- Add square variant to button component ([2791fc4](https://github.com/favorodera/centoui/commit/2791fc4))
- Add Separator component ([bbfcb45](https://github.com/favorodera/centoui/commit/bbfcb45))
- Add Separator component ([f750cd3](https://github.com/favorodera/centoui/commit/f750cd3))
- Add separator component to registry ([959b23f](https://github.com/favorodera/centoui/commit/959b23f))
- Add separator component to registry ([3806bd4](https://github.com/favorodera/centoui/commit/3806bd4))
- Add Vitest type augmentation for vitest-axe ([06f19cc](https://github.com/favorodera/centoui/commit/06f19cc))
- Add color, size, variant, and orientation props to Separator component ([9b3b755](https://github.com/favorodera/centoui/commit/9b3b755))
- Add content slot and styling props to Separator component ([02becf8](https://github.com/favorodera/centoui/commit/02becf8))
- Add button group component ([da22cfa](https://github.com/favorodera/centoui/commit/da22cfa))
- Add button group separator component ([907eed9](https://github.com/favorodera/centoui/commit/907eed9))
- Add ButtonGroup component ([1a3859a](https://github.com/favorodera/centoui/commit/1a3859a))
- Enhance button group component with orientation and separator props ([3360192](https://github.com/favorodera/centoui/commit/3360192))
- Add button-group component to registry ([7a832e7](https://github.com/favorodera/centoui/commit/7a832e7))
- Add button-group component to registry ([e2f838d](https://github.com/favorodera/centoui/commit/e2f838d))
- Add Kbd component ([8da3248](https://github.com/favorodera/centoui/commit/8da3248))
- Add Kbd component ([0760eb6](https://github.com/favorodera/centoui/commit/0760eb6))
- Add KbdGroup component and types ([338c200](https://github.com/favorodera/centoui/commit/338c200))
- Add KbdGroup component ([8160fd7](https://github.com/favorodera/centoui/commit/8160fd7))
- Add kbd and kbd-group components to registry ([40bf675](https://github.com/favorodera/centoui/commit/40bf675))
- Add kbd component registry entry ([15bf3a4](https://github.com/favorodera/centoui/commit/15bf3a4))
- Add kbd-group component registry entry ([b05a02d](https://github.com/favorodera/centoui/commit/b05a02d))
- Introduce accordion root component ([0bddac9](https://github.com/favorodera/centoui/commit/0bddac9))
- Add accordion component ([2cb0a6d](https://github.com/favorodera/centoui/commit/2cb0a6d))
- Add AccordionItem component ([485539b](https://github.com/favorodera/centoui/commit/485539b))
- Export AccordionItem and add default borders ([562834a](https://github.com/favorodera/centoui/commit/562834a))
- Add AccordionContent component ([1b0a38d](https://github.com/favorodera/centoui/commit/1b0a38d))
- Add AccordionHeader component - New Vue component for AccordionHeader - Integrates with Reka UI Accordion - Handles styling and context injection ([a8991c4](https://github.com/favorodera/centoui/commit/a8991c4))
- Integrate AccordionItem with root context - Inject AccordionRoot context. - Compute disabled state from root. - Compute open/closed state from root. - Add data attributes for state and orientation. - Enhances styling and accessibility. ([ea1cf58](https://github.com/favorodera/centoui/commit/ea1cf58))
- Add AccordionTrigger component ([1673892](https://github.com/favorodera/centoui/commit/1673892))
- Add accordion component registry ([09d5ae8](https://github.com/favorodera/centoui/commit/09d5ae8))
- Add accordion component to registry ([e197acd](https://github.com/favorodera/centoui/commit/e197acd))
- Add Tooltip component ([aafc23d](https://github.com/favorodera/centoui/commit/aafc23d))
- Add tooltip arrow component ([a35000f](https://github.com/favorodera/centoui/commit/a35000f))
- Add TooltipContent component ([c209c97](https://github.com/favorodera/centoui/commit/c209c97))
- Add TooltipPortal component ([e8cbb59](https://github.com/favorodera/centoui/commit/e8cbb59))
- Add TooltipProvider component - Wraps the reka-ui TooltipProvider. - Forwards all props and slots. - Sets delayDuration default to 0. ([e8d349f](https://github.com/favorodera/centoui/commit/e8d349f))
- Add TooltipRoot component ([46f373c](https://github.com/favorodera/centoui/commit/46f373c))
- Add tooltip trigger component ([6306e0d](https://github.com/favorodera/centoui/commit/6306e0d))
- Add tooltip component to registry ([7e4dd9e](https://github.com/favorodera/centoui/commit/7e4dd9e))
- Add tooltip component registry entry ([b28aa37](https://github.com/favorodera/centoui/commit/b28aa37))
- Add Badge component - Introduces a new UI element - Customizable via variant, color, size - Provides a flexible visual indicator ([dd91b33](https://github.com/favorodera/centoui/commit/dd91b33))
- Add Badge component ([0a8cdb9](https://github.com/favorodera/centoui/commit/0a8cdb9))

  - Define styles with tailwind-variants
  - Support multiple variants, colors, and sizes
  - Include square prop for equal padding
  - Export types for props and slots

- Add badge component to registry ([f9b81bc](https://github.com/favorodera/centoui/commit/f9b81bc))
- Add badge component to registry ([1a2685b](https://github.com/favorodera/centoui/commit/1a2685b))
- Add AlertActions component ([4b2d08b](https://github.com/favorodera/centoui/commit/4b2d08b))
- Add AlertClose component - Provides a dedicated close button for alerts - Integrates with AlertRoot context for styling - Renders a configurable button with a close icon ([5a53e73](https://github.com/favorodera/centoui/commit/5a53e73))
- Add AlertDescription component ([31c079b](https://github.com/favorodera/centoui/commit/31c079b))
- Add AlertMedia component - New component for alert media content. - Integrates with alert context for styling. - Provides a slot for custom media. ([ded1fd9](https://github.com/favorodera/centoui/commit/ded1fd9))
- Add AlertRoot component ([52cfc0a](https://github.com/favorodera/centoui/commit/52cfc0a))
- Add AlertTitle component ([8706aa3](https://github.com/favorodera/centoui/commit/8706aa3))
- Add Alert component - Defines alert styles and variants - Provides solid, soft, subtle, and outline variants - Supports multiple color schemes - Includes sub-components for structure ([abe69d6](https://github.com/favorodera/centoui/commit/abe69d6))
- Consolidate button styles for clarity ([65807b6](https://github.com/favorodera/centoui/commit/65807b6))

  - Refactor button variants
  - Simplify color and variant combinations
  - Improve hover and focus states

- Update default icons ([4f1748c](https://github.com/favorodera/centoui/commit/4f1748c))

  - Replaced chevron icons with close icon
  - Updated lucide icon import

- Register alert component ([a17b804](https://github.com/favorodera/centoui/commit/a17b804))
- Add alert component to registry ([8389672](https://github.com/favorodera/centoui/commit/8389672))
- Add state and close handler to alert ([e2ecca0](https://github.com/favorodera/centoui/commit/e2ecca0))

  - Pass variant, color, orientation
  - Add data-centoui-state attribute
  - Bind click event to onClose

- Add state attribute to alert description ([39e4bc9](https://github.com/favorodera/centoui/commit/39e4bc9))

  - improve alert styling options
  - enhance component accessibility

- Add state attribute to alert-media ([62fd41e](https://github.com/favorodera/centoui/commit/62fd41e))
- Implement controllable alert open state ([ea847ae](https://github.com/favorodera/centoui/commit/ea847ae))

  - Add `open` v-model
  - Add `state` computed property
  - Add `onClose` function
  - Forward `open` prop
  - Conditionally render alert

- Enhance alert root context and props ([0da4f58](https://github.com/favorodera/centoui/commit/0da4f58))

  - add controlled open state
  - update context with state and onClose
  - add update:open emit

- **accordion:** Add root context and refine styles ([a385351](https://github.com/favorodera/centoui/commit/a385351))

  - Introduce root context for component
  - Update trigger and item styling
  - Add icon slot for trigger
  - Refine content slot selectors

- **avatar:** Improve root component implementation ([51a3a7f](https://github.com/favorodera/centoui/commit/51a3a7f))

  - Use provideCentouiAvatarRootContext
  - Simplify computed styles
  - Pass class to root variant

- **alert:** Add alert content component ([312aca1](https://github.com/favorodera/centoui/commit/312aca1))

  - Implemented new alert content component
  - Added primitive element support
  - Integrated context and prop forwarding

- **alert-dialog:** Add action component ([f28e709](https://github.com/favorodera/centoui/commit/f28e709))

  - Implemented AlertDialogAction component
  - Integrated with button variants
  - Added slot forwarding

- **alert-dialog:** Add cancel button component ([0aff4b4](https://github.com/favorodera/centoui/commit/0aff4b4))

  - Implemented new AlertDialogCancel component
  - Integrated with reka-ui and centoui context
  - Added styling and prop forwarding

- **alert-dialog:** Add content component ([c979401](https://github.com/favorodera/centoui/commit/c979401))

  - Implemented AlertDialogContent component
  - Integrated with Reka UI and VueUse
  - Added styling and slot support

- **alert-dialog:** Add description component ([a682906](https://github.com/favorodera/centoui/commit/a682906))

  - Implemented AlertDialogDescription.vue
  - Integrated with reka-ui and @vueuse/core
  - Added slot and prop forwarding

- **alert-dialog:** Add footer component ([4685efd](https://github.com/favorodera/centoui/commit/4685efd))

  - Adds AlertDialogFooter component
  - Integrates with root context
  - Uses Primitive base element
  - Applies root context styles

- **alert-dialog:** Add alert dialog header component ([9096d44](https://github.com/favorodera/centoui/commit/9096d44))

  - Implemented new alert dialog header
  - Added props and slots support
  - Integrated with root context styles

- **alert-dialog:** Add overlay component - Add AlertDialogOverlay component - Integrate with AlertDialog root context - Forward delegated props - Apply contextual styles ([b22a7a4](https://github.com/favorodera/centoui/commit/b22a7a4))
- **alert-dialog:** Add portal component ([c5521c0](https://github.com/favorodera/centoui/commit/c5521c0))

  - Implemented AlertDialogPortal component
  - Utilized reka-ui for forwarding props
  - Added slots for content

- **alert-dialog:** Add alert dialog root component ([6bd3db0](https://github.com/favorodera/centoui/commit/6bd3db0))

  - Implemented AlertDialogRoot component
  - Integrated reka-ui and centoui
  - Provided context for variants and styles

- **alert-dialog:** Add alert dialog title component ([28ea75e](https://github.com/favorodera/centoui/commit/28ea75e))

  - Implemented AlertDialogTitle component
  - Added slot and prop forwarding
  - Integrated with root context styles

- **alert-dialog:** Add trigger component ([ce32ad0](https://github.com/favorodera/centoui/commit/ce32ad0))

  - Implemented AlertDialogTrigger component
  - Integrated with reka-ui and centoui
  - Added slot and prop forwarding

- **alert-dialog:** Implement alert dialog component with variants and context ([34b03cc](https://github.com/favorodera/centoui/commit/34b03cc))
- **alert-dialog:** Add alert dialog component configuration ([0a9a85a](https://github.com/favorodera/centoui/commit/0a9a85a))
- **alert-dialog:** Expand alert dialog component with additional files and dependencies ([66c73e6](https://github.com/favorodera/centoui/commit/66c73e6))
- **aspect-ratio:** Add aspect ratio component ([0d0fd74](https://github.com/favorodera/centoui/commit/0d0fd74))
- **aspect-ratio:** Implement AspectRatio component ([c166823](https://github.com/favorodera/centoui/commit/c166823))

  - Export AspectRatio component
  - Define and export aspectRatioVariants
  - Export AspectRatioProps and AspectRatioSlots

- **styling:** Add custom dark variant ([2836ca5](https://github.com/favorodera/centoui/commit/2836ca5))

  - Introduced `@custom-variant dark`
  - Removed scheme classes from body

- **registry:** Add aspect-ratio component ([82dbc5b](https://github.com/favorodera/centoui/commit/82dbc5b))
- Add aspect-ratio component to registry ([1b9c5db](https://github.com/favorodera/centoui/commit/1b9c5db))

  - Added aspect-ratio component definition
  - Included component schema and dependencies
  - Updated index.json with new entry

- **preview:** Add theme customization ([6266e4f](https://github.com/favorodera/centoui/commit/6266e4f))

  - Implement dynamic theme injection via textarea
  - Add copy and reset theme functionality
  - Update README descriptions

- **collapsible:** Add CollapsibleContent component - Implement CollapsibleContent - Wrap Reka UI's CollapsibleContent - Inject context for styling - Use forwarded props and emits ([23033c7](https://github.com/favorodera/centoui/commit/23033c7))
- **collapsible:** Add CollapsibleRoot component ([1c08791](https://github.com/favorodera/centoui/commit/1c08791))

  - Wraps Reka UI CollapsibleRoot component
  - Applies Cento UI styling via variants
  - Provides collapsible context for children

- **collapsible:** Add CollapsibleTrigger component ([d8717ac](https://github.com/favorodera/centoui/commit/d8717ac))
- **collapsible:** Implement collapsible component structure and types ([d8ae61f](https://github.com/favorodera/centoui/commit/d8ae61f))
- **collapsible:** Add collapsible component registry configuration ([ad1fc55](https://github.com/favorodera/centoui/commit/ad1fc55))
- **collapsible:** Add collapsible component definition and update alert-dialog file paths ([c1d8848](https://github.com/favorodera/centoui/commit/c1d8848))
- **button:** Add link variant ([e2685d1](https://github.com/favorodera/centoui/commit/e2685d1))
- **text:** Add Text component with variants ([075c261](https://github.com/favorodera/centoui/commit/075c261))
- **text:** Add Text component - Provides basic text styling - Supports size and weight props ([58e6d7e](https://github.com/favorodera/centoui/commit/58e6d7e))
- **progress:** Add Progress component ([8a432fd](https://github.com/favorodera/centoui/commit/8a432fd))
- **progress:** Add progress indicator component - Implements visual progress bar - Calculates transform for animation - Integrates with progress root context ([15c72c7](https://github.com/favorodera/centoui/commit/15c72c7))
- **progress:** Add ProgressRoot component - Use reka-ui for base functionality - Integrate centoui styling and context - Provide ProgressRoot component ([2cd64ae](https://github.com/favorodera/centoui/commit/2cd64ae))
- **registry:** Add progress component ([3dd6633](https://github.com/favorodera/centoui/commit/3dd6633))
- **progress:** Add component to registry ([7aae4ab](https://github.com/favorodera/centoui/commit/7aae4ab))
- **popover:** Add Popover component ([d3b48be](https://github.com/favorodera/centoui/commit/d3b48be))
- **popover:** Add PopoverAnchor component ([2c8d5fb](https://github.com/favorodera/centoui/commit/2c8d5fb))
- **popover:** Add PopoverArrow component ([9ee9ef8](https://github.com/favorodera/centoui/commit/9ee9ef8))
- **popover:** Add PopoverBody component ([56b9439](https://github.com/favorodera/centoui/commit/56b9439))
- **popover:** Add PopoverClose component ([7222720](https://github.com/favorodera/centoui/commit/7222720))
- **popover:** Add PopoverContent component ([6e69816](https://github.com/favorodera/centoui/commit/6e69816))
- **popover:** Add PopoverDescription component ([68762ec](https://github.com/favorodera/centoui/commit/68762ec))
- **popover:** Add PopoverFooter component ([b23300a](https://github.com/favorodera/centoui/commit/b23300a))
- **popover:** Add PopoverHeader component ([e63b52d](https://github.com/favorodera/centoui/commit/e63b52d))
- **popover:** Create PopoverPortal component ([dcaab6c](https://github.com/favorodera/centoui/commit/dcaab6c))
- **popover:** Add PopoverRoot component ([9ee5e5e](https://github.com/favorodera/centoui/commit/9ee5e5e))
- **popover:** Add PopoverTitle component ([2777a9d](https://github.com/favorodera/centoui/commit/2777a9d))
- **popover:** Add PopoverTrigger component ([e039c46](https://github.com/favorodera/centoui/commit/e039c46))
- **popover:** Add popover component registry file ([86cded8](https://github.com/favorodera/centoui/commit/86cded8))
- **registry:** Add popover component - Registers files and dependencies. - Used for displaying rich content in a portal. ([ddae914](https://github.com/favorodera/centoui/commit/ddae914))
- **badge:** Apply size-specific border radius ([898f599](https://github.com/favorodera/centoui/commit/898f599))
- **css:** Enable squircle corners via @supports ([cfa6182](https://github.com/favorodera/centoui/commit/cfa6182))
- **select:** Add Select component structure - Define styling variants with `tailwind-variants`. - Export all sub-components. - Set up context for component interaction. - ([884f942](https://github.com/favorodera/centoui/commit/884f942))
- **select:** Add select arrow component ([b82587a](https://github.com/favorodera/centoui/commit/b82587a))
- **select:** Add SelectContent component ([541a510](https://github.com/favorodera/centoui/commit/541a510))
- **select-group:** Add select group component ([7434d62](https://github.com/favorodera/centoui/commit/7434d62))
- **select:** Add select icon component - Implements the SelectIcon component - Provides a default chevron down icon - Integrates with Select root context - Uses reka-ui's SelectIcon primitive ([be01167](https://github.com/favorodera/centoui/commit/be01167))
- **select:** Add select item indicator component ([c5f0509](https://github.com/favorodera/centoui/commit/c5f0509))
- **select:** Add select item text component ([a14b0ba](https://github.com/favorodera/centoui/commit/a14b0ba))
- **select:** Add initial select item component ([ff8a9f9](https://github.com/favorodera/centoui/commit/ff8a9f9))
- **select:** Add select label component ([e1f42b4](https://github.com/favorodera/centoui/commit/e1f42b4))
- **select:** Add select portal component ([08fdda5](https://github.com/favorodera/centoui/commit/08fdda5))
- **select:** Implement select root component ([9948674](https://github.com/favorodera/centoui/commit/9948674))
- **select:** Add scroll down button component ([fd5ae65](https://github.com/favorodera/centoui/commit/fd5ae65))
- **select:** Add scroll up button component ([d857578](https://github.com/favorodera/centoui/commit/d857578))
- **select:** Add select separator component ([bf17962](https://github.com/favorodera/centoui/commit/bf17962))
- **select:** Add select trigger component ([12595cc](https://github.com/favorodera/centoui/commit/12595cc))
- **select:** Add select value component ([45fbd09](https://github.com/favorodera/centoui/commit/45fbd09))
- **select:** Add select viewport component ([96c9810](https://github.com/favorodera/centoui/commit/96c9810))
- **registry:** Add select component configuration ([81690a0](https://github.com/favorodera/centoui/commit/81690a0))
- **select:** Allow content in separator - Renders default slot between separator lines. - Falls back to a single line if no slot content. ([df8c327](https://github.com/favorodera/centoui/commit/df8c327))
- **pagination:** Add pagination component index ([4727b5e](https://github.com/favorodera/centoui/commit/4727b5e))

  - Export pagination components and variants
  - Define component props with tailwind-variants
  - Export pagination utility types and slots

- **pagination:** Add pagination ellipsis component ([4e858e6](https://github.com/favorodera/centoui/commit/4e858e6))

  - implement pagination-ellipsis component
  - integrate reka-ui pagination ellipsis
  - add class variant support

- **pagination:** Add first page button component ([4d5a12a](https://github.com/favorodera/centoui/commit/4d5a12a))
- **pagination:** Add PaginationLast component ([019d7f6](https://github.com/favorodera/centoui/commit/019d7f6))
- **pagination:** Add list item component ([c330a78](https://github.com/favorodera/centoui/commit/c330a78))
- **pagination:** Add PaginationList component ([dc2b85e](https://github.com/favorodera/centoui/commit/dc2b85e))

  - implement PaginationList using reka-ui
  - add variant support for list styling
  - include slot forwarding for custom content

- **pagination:** Add PaginationNext component wrapper ([2e44701](https://github.com/favorodera/centoui/commit/2e44701))
- **pagination:** Add prev button component ([033da80](https://github.com/favorodera/centoui/commit/033da80))
- **pagination:** Add root component - Wraps reka-ui PaginationRoot - Forwards props and emits - Applies styling variants ([4f825f2](https://github.com/favorodera/centoui/commit/4f825f2))
- **pagination:** Add pagination component ([cc02fff](https://github.com/favorodera/centoui/commit/cc02fff))
- **pagination:** Add style variants and context ([cb8261a](https://github.com/favorodera/centoui/commit/cb8261a))

  - Add tailwind classes to pagination slots
  - Implement root context for size and variants
  - Update prop types to support button styling

- **pagination:** Add default icon to ellipsis ([918cb7d](https://github.com/favorodera/centoui/commit/918cb7d))

  - Use config ellipsis icon as default
  - Add screen reader text for accessibility

- **pagination:** Enhance PaginationFirst component with context and default props ([b0afe9e](https://github.com/favorodera/centoui/commit/b0afe9e))
- **pagination:** Enhance pagination-last component ([313b59d](https://github.com/favorodera/centoui/commit/313b59d))

  - Inherit size, variant and square from root
  - Apply button styling to class names
  - Add default slot with icon and sr-only text

- **pagination:** Resolve variant and size ([f1cf811](https://github.com/favorodera/centoui/commit/f1cf811))

  - Inject pagination root context
  - Resolve variant and size dynamically
  - Apply button variants to list item
  - Omit non-delegated props correctly

- **pagination:** Enhance pagination-next component ([948cf23](https://github.com/favorodera/centoui/commit/948cf23))

  - Add variant, size, and square props support
  - Inherit styles from root pagination context
  - Provide default next icon and sr-only text

- **pagination:** Enhance pagination-prev component ([d1cda52](https://github.com/favorodera/centoui/commit/d1cda52))

  - Integrate with root pagination context
  - Apply button variants and sizing
  - Add default chevron icon and sr-only text

- **pagination:** Enhance pagination-root component with context and default props ([5be3654](https://github.com/favorodera/centoui/commit/5be3654))
- **icons:** Update icon configuration with additional chevron and ellipsis icons ([250c044](https://github.com/favorodera/centoui/commit/250c044))
- **pagination:** Update pagination list gap and ellipsis styles ([3565fba](https://github.com/favorodera/centoui/commit/3565fba))
- **switch:** Add Switch component - Adds base component and variants - Includes SwitchRoot and SwitchThumb - Defines styling using tailwind-variants - Provides context and types ([3aa98d0](https://github.com/favorodera/centoui/commit/3aa98d0))
- **switch:** Implement SwitchRoot component with context and props handling ([acaf5be](https://github.com/favorodera/centoui/commit/acaf5be))
- **switch:** Add SwitchThumb component with context and props handling ([6ec2eeb](https://github.com/favorodera/centoui/commit/6ec2eeb))
- **switch:** Add Switch component with schema, description, and file references ([3eb2df3](https://github.com/favorodera/centoui/commit/3eb2df3))
- **switch:** Add switch.json for Switch component registration ([c2fa828](https://github.com/favorodera/centoui/commit/c2fa828))
- **alert-dialog:** Update content styles for improved layout and responsiveness ([755a671](https://github.com/favorodera/centoui/commit/755a671))
- **card:** Add CardBody component ([f55d2eb](https://github.com/favorodera/centoui/commit/f55d2eb))

  - Add card-body.vue using reka-ui Primitive

- **card:** Add card-description component ([2b5f0c5](https://github.com/favorodera/centoui/commit/2b5f0c5))

  - Implement card-description Vue component
  - Use reka-ui Primitive and cardVariants

- **card:** Add card-footer component ([441cb56](https://github.com/favorodera/centoui/commit/441cb56))

  - Implement card-footer using reka-ui
  - Integrate cardVariants for styling

- **card:** Add CardHeader component ([5582f85](https://github.com/favorodera/centoui/commit/5582f85))
- **card:** Add CardRoot component ([f60b834](https://github.com/favorodera/centoui/commit/f60b834))
- **card:** Add card-title component ([ad89eb8](https://github.com/favorodera/centoui/commit/ad89eb8))

  - Add CardTitle Vue component
  - Use reka-ui Primitive and forward props

- **card:** Add card component ([b252b61](https://github.com/favorodera/centoui/commit/b252b61))

  - Define Tailwind variants for card slots
  - Export sub-components and prop types

- **registry:** Add card component ([081cdf4](https://github.com/favorodera/centoui/commit/081cdf4))

  - Register card component files and metadata

- **registry:** Add card component ([cbf8f4f](https://github.com/favorodera/centoui/commit/cbf8f4f))
- **slideover:** Add slideover component ([45ccf87](https://github.com/favorodera/centoui/commit/45ccf87))
- **slideover:** Add SlideoverBody component ([788e13a](https://github.com/favorodera/centoui/commit/788e13a))
- **slideover:** Add SlideoverClose component ([c57a96a](https://github.com/favorodera/centoui/commit/c57a96a))
- **slideover:** Add SlideoverContent component ([a2b5cb7](https://github.com/favorodera/centoui/commit/a2b5cb7))
- **slideover:** Add description component ([5d7e4af](https://github.com/favorodera/centoui/commit/5d7e4af))
- **slideover:** Add SlideoverFooter component - Add new component for slideover footer. - Integrates with slideover variants. - Utilizes reka-ui Primitive. ([1506700](https://github.com/favorodera/centoui/commit/1506700))
- **slideover:** Add SlideoverHeader component ([ffe3935](https://github.com/favorodera/centoui/commit/ffe3935))
- **slideover:** Add SlideoverPortal component ([dc3b665](https://github.com/favorodera/centoui/commit/dc3b665))
- **slideover:** Add SlideoverRoot component ([a7eb6c7](https://github.com/favorodera/centoui/commit/a7eb6c7))
- **slideover:** Add SlideoverTitle component ([c2aa348](https://github.com/favorodera/centoui/commit/c2aa348))
- **slideover:** Add SlideoverTrigger component ([4ed7084](https://github.com/favorodera/centoui/commit/4ed7084))
- **slideover:** Add Slideover component with related files and dependencies ([40d6ff3](https://github.com/favorodera/centoui/commit/40d6ff3))
- **registry:** Add slideover component ([fbd8765](https://github.com/favorodera/centoui/commit/fbd8765))
- **slideover:** Update styles and add showClose ([fe64a7c](https://github.com/favorodera/centoui/commit/fe64a7c))

  - Update content spacing, background, and borders
  - Add showClose prop to SlideoverHeaderProps

- **slideover:** Support custom close button ([f1e78d0](https://github.com/favorodera/centoui/commit/f1e78d0))

  - Add showClose prop to header
  - Add close slot for custom close button

- **avatar-group:** Add avatar group component ([4411bfa](https://github.com/favorodera/centoui/commit/4411bfa))

  - Add AvatarGroup component implementation
  - Update card view to use new component
  - Add preview page for avatar group
  - Register new component in core

- **breadcrumb:** Add ellipsis component ([98a2dbf](https://github.com/favorodera/centoui/commit/98a2dbf))

  - Create breadcrumb-ellipsis.vue
  - Use reka-ui Primitive and Icon

- **breadcrumb:** Add breadcrumb-item component ([a0a7d9b](https://github.com/favorodera/centoui/commit/a0a7d9b))

  - Implement BreadcrumbItem using Reka UI
  - Support prop forwarding and custom classes

- **breadcrumb:** Add breadcrumb-link component ([c3b9320](https://github.com/favorodera/centoui/commit/c3b9320))

  - Create component using reka-ui Primitive

- **breadcrumb:** Add breadcrumb-list component ([31ed872](https://github.com/favorodera/centoui/commit/31ed872))

  - Implement breadcrumb-list using reka-ui

- **breadcrumb:** Add breadcrumb-page component ([f24e126](https://github.com/favorodera/centoui/commit/f24e126))

  - Create page component for breadcrumbs
  - Use reka-ui Primitive and forward props

- **breadcrumb:** Add breadcrumb-root component ([db89def](https://github.com/favorodera/centoui/commit/db89def))

  - implement breadcrumb-root component
  - use reka-ui primitive and forward props

- **breadcrumb:** Add separator component ([f33e1b3](https://github.com/favorodera/centoui/commit/f33e1b3))
- **breadcrumb:** Add Breadcrumb component ([1b5148e](https://github.com/favorodera/centoui/commit/1b5148e))
- **breadcrumb:** Add breadcrumb component to registry ([d64f3d0](https://github.com/favorodera/centoui/commit/d64f3d0))
- **icon:** Add Icon component - Use @iconify/vue for icon rendering. - Apply styling with iconVariants. - Support prop forwarding via useForwardProps. - Manage aria-hidden attribute. ([3f15b1d](https://github.com/favorodera/centoui/commit/3f15b1d))
- **icon:** Add Icon component ([28675e7](https://github.com/favorodera/centoui/commit/28675e7))

  - Introduce new Icon component
  - Define iconVariants for styling
  - Export Icon.vue component
  - Add IconProps type definition
  - Allow ariaHidden control for accessibility

- **select:** Add SR-only text to scroll up button` ([199d021](https://github.com/favorodera/centoui/commit/199d021))
- **accordion:** Add trigger and icon dependency ([7e93c68](https://github.com/favorodera/centoui/commit/7e93c68))
- **core:** Add icon dependency to breadcrumb ([b2ddada](https://github.com/favorodera/centoui/commit/b2ddada))
- **core:** Add icon dependency to pagination ([8706597](https://github.com/favorodera/centoui/commit/8706597))
- **core:** Add icon dependency to select ([a5cd7e5](https://github.com/favorodera/centoui/commit/a5cd7e5))
- **core:** Add icon dependency to slideover ([105e36d](https://github.com/favorodera/centoui/commit/105e36d))
- **nuxt:** Implement component auto-registration ([a7491f1](https://github.com/favorodera/centoui/commit/a7491f1))

  - Use c12 to load configuration in CLI and Nuxt
  - Add Nuxt module component registration logic

- **input:** Add input component variants and types ([108b22e](https://github.com/favorodera/centoui/commit/108b22e))

  - Define Tailwind variants and sizes
  - Export InputProps and InputEmits types
  - Export Input Vue component

- **input:** Add base input component ([0237227](https://github.com/favorodera/centoui/commit/0237227))

  - Add Vue 3 input component with v-model support
  - Integrate useVModel and variant classes

- **registry:** Add input component ([92beb3c](https://github.com/favorodera/centoui/commit/92beb3c))

  - Add input component configuration
  - Register input component in index

- **components:** Add InputGroup, Label, and Textarea components ([dc69186](https://github.com/favorodera/centoui/commit/dc69186))
- **components:** Add select and separator ([7d33293](https://github.com/favorodera/centoui/commit/7d33293))

  - Add Select component using reka-ui
  - Add Separator component
  - Remove default min-rows from textarea

- **slider:** Add Slider component - Define styling with tailwind-variants - Export sub-components (Root, Track, etc.) - Set up context for SliderRoot - Define types for props, emits, and slots ([ad53d39](https://github.com/favorodera/centoui/commit/ad53d39))
- **slider:** Add slider range component ([e70cee8](https://github.com/favorodera/centoui/commit/e70cee8))
- **slider:** Add SliderRoot component ([8a68989](https://github.com/favorodera/centoui/commit/8a68989))
- **slider:** Add thumb component ([3d61c81](https://github.com/favorodera/centoui/commit/3d61c81))
- **slider:** Add track component ([b8bbc58](https://github.com/favorodera/centoui/commit/b8bbc58))
- **component:** Add slider component - Add `slider.json` component definition - Register slider in `index.json` ([94e2397](https://github.com/favorodera/centoui/commit/94e2397))
- **avatar:** Add AvatarGroup component ([bf1831c](https://github.com/favorodera/centoui/commit/bf1831c))

  - Groups multiple Avatar components
  - Applies group-level styling
  - Forwards props to the root element

- **avatar:** Add AvatarGroup component ([36ab545](https://github.com/favorodera/centoui/commit/36ab545))
- **kbd:** Add KbdGroup component ([08b4ba2](https://github.com/favorodera/centoui/commit/08b4ba2))
- **kbd:** Add KbdGroup component ([2204cce](https://github.com/favorodera/centoui/commit/2204cce))
- **kbd-group:** Remove KbdGroup component ([8c12848](https://github.com/favorodera/centoui/commit/8c12848))
- **core:** Add pin-input component ([0381dd0](https://github.com/favorodera/centoui/commit/0381dd0))
- **pin-input:** Add pin-input-group component ([f95e440](https://github.com/favorodera/centoui/commit/f95e440))
- **pin-input:** Add pin input ([b87e4b1](https://github.com/favorodera/centoui/commit/b87e4b1))
- **pin-input:** Add pin-input-root component ([142f2c8](https://github.com/favorodera/centoui/commit/142f2c8))
- **pin-input:** Add pin-input-separator component ([af71a43](https://github.com/favorodera/centoui/commit/af71a43))
- **core:** Add isSlotEmpty utility function ([dc04213](https://github.com/favorodera/centoui/commit/dc04213))

  - Check if Vue slots contain meaningful content
  - Ignore comments and whitespace-only text nodes
  - Recursively validate fragment children

- **avatar:** Add avatar-group component ([e4d1641](https://github.com/favorodera/centoui/commit/e4d1641))
- **registry:** Add pin-input and refactor groups ([8018d65](https://github.com/favorodera/centoui/commit/8018d65))

  - Add pin-input component
  - Move avatar-group into avatar
  - Move kbd-group into kbd

- **kbd:** Add kbd-group component to registry ([c06c102](https://github.com/favorodera/centoui/commit/c06c102))
- **registry:** Add pin-input component definition ([ead5c2f](https://github.com/favorodera/centoui/commit/ead5c2f))

  - register pin-input component files
  - add component dependencies for pin-input

- **item:** Add entry point for item component ([e49916f](https://github.com/favorodera/centoui/commit/e49916f))
- **core:** Add item component variants ([6d95665](https://github.com/favorodera/centoui/commit/6d95665))

  - define item component slots
  - add size, variant, and orientation variants

- **item:** Add prop types for item components ([02d410b](https://github.com/favorodera/centoui/commit/02d410b))

  - define base prop types for item component sub-parts
  - import PrimitiveProps and ClassProp types

- **item:** Add context and variant props to ItemRoot ([30aa89a](https://github.com/favorodera/centoui/commit/30aa89a))

  - Implement context provider for ItemRoot
  - Add size, variant, and orientation props
  - Export ItemRoot component

- **item:** Add ItemRoot component ([a350861](https://github.com/favorodera/centoui/commit/a350861))

  - implement ItemRoot using Primitive
  - support size, variant, and orientation props
  - provide context for child components

- **item:** Rename naked variant to ghost and export ItemMedia ([1a88dab](https://github.com/favorodera/centoui/commit/1a88dab))
- **item:** Add ItemMedia component ([0e7d3d2](https://github.com/favorodera/centoui/commit/0e7d3d2))
- **item:** Add ItemContent component ([d260b2a](https://github.com/favorodera/centoui/commit/d260b2a))

  - implement ItemContent component
  - export ItemContent from item index

- **item:** Implement ItemHeader component ([de96887](https://github.com/favorodera/centoui/commit/de96887))

  - add ItemHeader component
  - export ItemHeader from item entry point

- **item:** Implement ItemTitle component ([bee1022](https://github.com/favorodera/centoui/commit/bee1022))

  - add ItemTitle component
  - export ItemTitle from item index

- **item:** Add ItemDescription component ([1c70ab7](https://github.com/favorodera/centoui/commit/1c70ab7))
- **item:** Add ItemBody component ([b64c3e0](https://github.com/favorodera/centoui/commit/b64c3e0))

  - implement ItemBody component
  - export ItemBody from index

- **item:** Add ItemFooter component ([b3d2fd5](https://github.com/favorodera/centoui/commit/b3d2fd5))

  - implement ItemFooter component
  - export ItemFooter from index

- **item:** Add ItemActions component ([c930e2d](https://github.com/favorodera/centoui/commit/c930e2d))

  - implement ItemActions component
  - export ItemActions from item index

- **item:** Add preview view and remove orientation ([45f2c7a](https://github.com/favorodera/centoui/commit/45f2c7a))

  - add item preview view
  - remove orientation prop from item components

- **item:** Add mediaType support to item-media ([b7a9e7a](https://github.com/favorodera/centoui/commit/b7a9e7a))

  - pass mediaType to variant styles
  - add data-type attribute to primitive component

- **item:** Refactor variants and simplify components ([fa7a688](https://github.com/favorodera/centoui/commit/fa7a688))

  - Update itemVariants with new styles and slots
  - Add mediaType variant for icons and images
  - Remove unused header, body, and footer components
  - Clean up redundant props from ItemRootContext

- **item:** Add ItemGroup and ItemSeparator components ([02191ed](https://github.com/favorodera/centoui/commit/02191ed))

  - add ItemGroup component and types
  - add ItemSeparator component and types
  - update item variants with new slots

- **item:** Add ItemGroup component ([8d27145](https://github.com/favorodera/centoui/commit/8d27145))

  - implement ItemGroup using Primitive
  - add variants for group styling
  - forward props to the underlying component

- **item:** Add item separator component ([16973b3](https://github.com/favorodera/centoui/commit/16973b3))

  - implement ItemSeparator using Reka UI
  - add variant support for styling
  - expose component props for customization

- **registry:** Add item component to registry ([2b45ead](https://github.com/favorodera/centoui/commit/2b45ead))

  - add item component configuration
  - register item in core index

- **alert-dialog:** Add footer padding handling ([34134c1](https://github.com/favorodera/centoui/commit/34134c1))

  - Update content vertical padding
  - Add conditional padding for footer slot

- **slideover:** Add overlay and portal support ([214e0d7](https://github.com/favorodera/centoui/commit/214e0d7))

  - add DialogPortal and DialogOverlay to content
  - update component to support inherited attributes
  - refactor class definitions for overlay support

- **slider:** Implement slider component ([70530e9](https://github.com/favorodera/centoui/commit/70530e9))

  - add slider component using reka-ui
  - support reactive props and orientation variants

- **core:** Initialize core package and avatar component ([1a0328d](https://github.com/favorodera/centoui/commit/1a0328d))

  - Setup core package structure and configuration
  - Implement Avatar component with sub-parts
  - Add registry build script and test suite
  - Configure build tools and linting rules

- **storybook:** Add component preview app and core components ([86e7f80](https://github.com/favorodera/centoui/commit/86e7f80))

  - Initialize storybook app with Vite and Vue
  - Add component library primitives to core
  - Implement theme customization and props control
  - Add accordion, badge, button, and input components
  - Add popover, select, and switch components

- **avatar:** Add storybook and update component logic ([5944ae6](https://github.com/favorodera/centoui/commit/5944ae6))

  - add avatar storybook component
  - update avatar component variants and sizes
  - refactor context injection naming
  - standardize computed style formatting

- **registry:** Add badge component definition ([bf27edb](https://github.com/favorodera/centoui/commit/bf27edb))

  - register badge component files

- **registry:** Add badge component to registry ([235bf5e](https://github.com/favorodera/centoui/commit/235bf5e))
- **button:** Update button component and registry ([799191c](https://github.com/favorodera/centoui/commit/799191c))

  - refactor button variants and styling
  - add button storybook and registry entry
  - make badge status optional
  - clean up component style code
  - fix label display in storybook controls

- **components:** Add button-group story and registry ([601ad16](https://github.com/favorodera/centoui/commit/601ad16))

  - add button-group storybook documentation
  - register button-group and icon components
  - improve icon alignment and prop forwarding
  - fix button-group prop order and typing

- **input:** Add lg size and update component styles ([61bfc0f](https://github.com/favorodera/centoui/commit/61bfc0f))

  - add lg variant to input component
  - update spacing and transition properties
  - refine component documentation comments

- **registry:** Add input component configuration ([3008bac](https://github.com/favorodera/centoui/commit/3008bac))

  - register input component files
  - define schema for input component metadata

- **registry:** Add input component and update schema path ([b44832a](https://github.com/favorodera/centoui/commit/b44832a))

  - register input component
  - update global registry schema path

- **label:** Update disabled state styles ([9bcb8fa](https://github.com/favorodera/centoui/commit/9bcb8fa))

  - add transition to label root
  - update disabled state selectors
  - standardize opacity for disabled states

- **registry:** Add label component definition ([4e8ff90](https://github.com/favorodera/centoui/commit/4e8ff90))

  - register label component files
  - link to component schema

- **registry:** Add label component to registry ([58a66c5](https://github.com/favorodera/centoui/commit/58a66c5))
- **select:** Inject root context for size variants ([0cd60ba](https://github.com/favorodera/centoui/commit/0cd60ba))

  - inject root context into select content
  - apply size variant to all content slots
  - add default sideOffset to props

- **select:** Implement size support for select items ([42cce68](https://github.com/favorodera/centoui/commit/42cce68))

  - inject root context in select-item
  - apply size variant to item, indicator, and text

- **select:** Apply size variant to select label ([ecb0c15](https://github.com/favorodera/centoui/commit/ecb0c15))

  - inject root context in select-label
  - pass size prop from root context to label variant

- **select:** Add size support to select-root ([5aaeb24](https://github.com/favorodera/centoui/commit/5aaeb24))

  - add size prop with default value
  - provide size context to child components
  - bind data-size attribute to root element

- **select:** Apply root size to select value ([b0e1173](https://github.com/favorodera/centoui/commit/b0e1173))

  - inject root context into select-value
  - update classNames to include root size variant

- **registry:** Add select and separator components ([b7e80d4](https://github.com/favorodera/centoui/commit/b7e80d4))

  - Register select component files
  - Register separator component files

- **registry:** Add select and separator components ([ffdb202](https://github.com/favorodera/centoui/commit/ffdb202))
- **switch:** Add component and update styles ([b6853fc](https://github.com/favorodera/centoui/commit/b6853fc))

  - Add new Switch component with variants
  - Improve switch root and thumb styling
  - Update Badge component font weight
  - Add invalid state support to Input and Switch
  - Fix storybook component naming and props

- **registry:** Add switch component definition ([68ba7e4](https://github.com/favorodera/centoui/commit/68ba7e4))

  - register switch component files

- **textarea:** Add size variants and storybook story ([f96981d](https://github.com/favorodera/centoui/commit/f96981d))

  - Add size variants to Textarea component
  - Update Textarea to support size prop
  - Add Textarea story to Storybook

- **registry:** Add textarea component definition ([6bf897c](https://github.com/favorodera/centoui/commit/6bf897c))
- **registry:** Add switch and textarea components ([d158245](https://github.com/favorodera/centoui/commit/d158245))
- **core:** Add alert component ([9bca1c5](https://github.com/favorodera/centoui/commit/9bca1c5))

  - implement alert root, body, title, and description
  - include storybook documentation for alert
  - add alert to component registry

- **components:** Implement Alert Dialog component ([f4db552](https://github.com/favorodera/centoui/commit/f4db552))

  - Add Alert Dialog components and variants
  - Add Alert Dialog storybook documentation

- **popover:** Add title and description components ([eb53942](https://github.com/favorodera/centoui/commit/eb53942))

  - Add PopoverTitle and PopoverDescription components
  - Update popover variants and styles
  - Refactor storybook header and popover stories
  - Improve alert dialog animation timings

- **registry:** Add alert-dialog and update popover ([606aeb2](https://github.com/favorodera/centoui/commit/606aeb2))

  - add alert-dialog component registry
  - add description and title files to popover

- **core:** Add aspect-ratio component ([e757f53](https://github.com/favorodera/centoui/commit/e757f53))

  - implement aspect-ratio component
  - update popover registry and components
  - fix code style across components

- **aspect-ratio:** Add aspect-ratio component and story ([f89db9e](https://github.com/favorodera/centoui/commit/f89db9e))

  - add aspect-ratio component to registry
  - create aspect-ratio storybook documentation
  - update avatar story with new image source

- **breadcrumb:** Add breadcrumb component ([b7976f6](https://github.com/favorodera/centoui/commit/b7976f6))

  - implement breadcrumb core components
  - add breadcrumb storybook documentation

- **registry:** Add breadcrumb component to registry ([901cb43](https://github.com/favorodera/centoui/commit/901cb43))

  - register breadcrumb component files
  - update index registry with breadcrumb entry

- **card:** Implement card component and story ([982ff40](https://github.com/favorodera/centoui/commit/982ff40))

  - add card component with sub-components
  - add storybook preview for card component
  - refactor popover content structure
  - update alert-dialog styles

- **registry:** Add card component to registry ([de14de7](https://github.com/favorodera/centoui/commit/de14de7))

  - register card component files
  - update index registry configuration

- **components:** Add collapsible component ([955699a](https://github.com/favorodera/centoui/commit/955699a))

  - implement collapsible root, trigger, and content
  - add tailwind-variants for styling
  - register component in the registry
  - add storybook story for demonstration

- **components:** Add kbd and tooltip components ([9067044](https://github.com/favorodera/centoui/commit/9067044))

  - Add Kbd and Tooltip components to core
  - Add storybook stories for new components
  - Update component border radii and variants

- **pagination:** Add new pagination component ([b2e7aba](https://github.com/favorodera/centoui/commit/b2e7aba))

  - implement pagination core components
  - add storybook story for pagination
  - register pagination component in registry

- **pin-input:** Implement Pin Input component ([4c8959a](https://github.com/favorodera/centoui/commit/4c8959a))

  - Add PinInput component with group and input parts
  - Integrate with Reka UI and tailwind-variants
  - Add storybook documentation for Pin Input
  - Register component in registry

- **progress:** Add progress component ([44f6004](https://github.com/favorodera/centoui/commit/44f6004))

  - implement progress component using reka-ui
  - add storybook story for demonstration
  - register component in the registry

- **sheet:** Add Sheet component and storybook entry ([eaef8dd](https://github.com/favorodera/centoui/commit/eaef8dd))

  - Implement Sheet component using Reka UI
  - Add variant support for side positioning
  - Include header, footer, and sub-components
  - Add storybook documentation
  - Clean up alert-dialog transition styles

- **slider:** Add slider component and story ([1425500](https://github.com/favorodera/centoui/commit/1425500))

  - implement Slider component using reka-ui
  - define slider tailwind variants
  - add slider component to registry
  - create slider storybook documentation

- **input-group:** Add new InputGroup component ([961fc91](https://github.com/favorodera/centoui/commit/961fc91))

  - implement root, control, and addon components
  - add tailwind-variants for flexible positioning
  - include storybook documentation
  - add component to registry

- **registry:** Add component dependencies to index ([6e4aa01](https://github.com/favorodera/centoui/commit/6e4aa01))

  - define dependencies for components
  - update registry mapping for core packages


### Fixed

- Ensure "packageDeps" is correctly marked as required in globals.json ([b4391dd](https://github.com/favorodera/centoui/commit/b4391dd))
- Remove unnecessary padding from link button variant ([36407e8](https://github.com/favorodera/centoui/commit/36407e8))
- Correct default orientation for button group separator ([a2c9ecf](https://github.com/favorodera/centoui/commit/a2c9ecf))
- Adjust avatar fallback text color ([7113ce2](https://github.com/favorodera/centoui/commit/7113ce2))
- Update kbd component default variants and styling ([aea85a1](https://github.com/favorodera/centoui/commit/aea85a1))

  - Adjust default variant from 'outline' to 'soft'
  - Update styling from 'bg-muted' to 'bg-neutral'
  - Update text color from 'text-muted-foreground' to 'text-neutral-foreground'

- Update separator border color ([a3bc2d4](https://github.com/favorodera/centoui/commit/a3bc2d4))

  - Change neutral border to border-neutral

- **core:** Correct tsconfig.json include path ([a6a7dfc](https://github.com/favorodera/centoui/commit/a6a7dfc))

  - Changed augment.d.dts to augment.d.ts
  - Corrected a typo in the tsconfig.json file
  - Ensures correct type definition loading

- **avatar-fallback:** Correct data attribute for avatar fallback component ([6d5420f](https://github.com/favorodera/centoui/commit/6d5420f))
- **avatar-image:** Update data attribute for avatar image component ([45f6490](https://github.com/favorodera/centoui/commit/45f6490))
- **avatar-root:** Update delegated props to include shape and adjust data attributes ([64674a3](https://github.com/favorodera/centoui/commit/64674a3))
- **avatar-variants:** Refine fallback styles and add shape variant to avatar component ([9bb8905](https://github.com/favorodera/centoui/commit/9bb8905))
- **badge:** Update default variant to neutral and remove color prop ([d3ddb9a](https://github.com/favorodera/centoui/commit/d3ddb9a))
- **badge:** Simplify badge variants and update default styles ([e02ceb7](https://github.com/favorodera/centoui/commit/e02ceb7))
- **button:** Update default variant to primary and remove color prop ([9acaf46](https://github.com/favorodera/centoui/commit/9acaf46))
- **button:** Refine button variants and update default styles ([cf51f05](https://github.com/favorodera/centoui/commit/cf51f05))
- **button-group-separator:** Update context injection and refine orientation handling ([611eb7a](https://github.com/favorodera/centoui/commit/611eb7a))
- **button-group:** Update context provider and streamline style computation ([45eeb9f](https://github.com/favorodera/centoui/commit/45eeb9f))
- **button-group:** Refine style variants and update context exports ([28033af](https://github.com/favorodera/centoui/commit/28033af))
- **kbd:** Simplify variants and remove unused color options ([5cd04c2](https://github.com/favorodera/centoui/commit/5cd04c2))
- **kbd:** Update variant handling and remove unused color prop ([513d7d8](https://github.com/favorodera/centoui/commit/513d7d8))
- **kbd-group:** Clean up comments and remove redundant documentation ([a42ee4c](https://github.com/favorodera/centoui/commit/a42ee4c))
- **kbd-group:** Clean up comments and standardize slot attribute ([8a81e7a](https://github.com/favorodera/centoui/commit/8a81e7a))
- **separator:** Simplify variants by removing unused properties and comments ([45f1455](https://github.com/favorodera/centoui/commit/45f1455))
- **separator:** Remove unused props and standardize slot attributes ([4d340fe](https://github.com/favorodera/centoui/commit/4d340fe))
- **tooltip:** Update styles and clean up variant definitions ([16075bd](https://github.com/favorodera/centoui/commit/16075bd))
- **tooltip-arrow:** Refactor to use root context for styling and clean up unused code ([7d5f53e](https://github.com/favorodera/centoui/commit/7d5f53e))
- **tooltip-content:** Refactor to use Centoui context and clean up unused code ([b3d98e6](https://github.com/favorodera/centoui/commit/b3d98e6))
- **tooltip-portal:** Remove commented code and clean up prop forwarding ([4f7bb2a](https://github.com/favorodera/centoui/commit/4f7bb2a))
- **tooltip-provider:** Remove commented code for clarity ([8bd0b11](https://github.com/favorodera/centoui/commit/8bd0b11))
- **tooltip-root:** Update imports and enhance context provision for styles ([b7f007f](https://github.com/favorodera/centoui/commit/b7f007f))
- **tooltip-trigger:** Refactor to use Centoui context and clean up unused imports and code ([789bc94](https://github.com/favorodera/centoui/commit/789bc94))
- **centoui.css:** Update color variables for improved consistency and clarity ([81ee3a1](https://github.com/favorodera/centoui/commit/81ee3a1))
- **alert.json:** Update alert component file references for accuracy ([d7cb19a](https://github.com/favorodera/centoui/commit/d7cb19a))
- **setup:** Correct indentation in configureAxe region rule comment ([15ee41a](https://github.com/favorodera/centoui/commit/15ee41a))
- **alert-dialog:** Correct file paths for alert-dialog components ([d3a3660](https://github.com/favorodera/centoui/commit/d3a3660))
- **tooltip:** Update arrow style to include fill-foreground ([eb8cad5](https://github.com/favorodera/centoui/commit/eb8cad5))
- **tooltip:** Format content styles for better readability ([86ee3be](https://github.com/favorodera/centoui/commit/86ee3be))
- **config:** Add missing check icon to icons configuration ([4ab82db](https://github.com/favorodera/centoui/commit/4ab82db))
- **pagination:** Format ellipsis styles for better readability ([a09b55b](https://github.com/favorodera/centoui/commit/a09b55b))
- **progress:** Update root slot style to use rounded-xs for consistency ([c04bca7](https://github.com/favorodera/centoui/commit/c04bca7))
- **accordion:** Fix icon size and alignment ([767fe9e](https://github.com/favorodera/centoui/commit/767fe9e))
- **core:** Improve component overflow and scroll ([17d4063](https://github.com/favorodera/centoui/commit/17d4063))

  - Move overflow scroll from content to body
  - Add stroke border to select arrow
  - Adjust slideover footer layout conditionally

- **pagination:** Update first page icon ([24c2151](https://github.com/favorodera/centoui/commit/24c2151))
- **icon:** Correct NuxtIconProps type reference ([881856b](https://github.com/favorodera/centoui/commit/881856b))
- **button:** Omit class from ButtonHTMLAttributes ([2336ed6](https://github.com/favorodera/centoui/commit/2336ed6))

  - Fix type conflict with class prop

- **input:** Resolve TS2590 union complexity ([e72e896](https://github.com/favorodera/centoui/commit/e72e896))

  - Extend vue InputHTMLAttributes
  - Omit autocomplete to avoid complexity
  - Redefine autocomplete with simpler types

- **avatar:** Omit src from delegated props ([dbd632f](https://github.com/favorodera/centoui/commit/dbd632f))
- **avatar:** Omit class in AvatarImageProps ([402962d](https://github.com/favorodera/centoui/commit/402962d))

  - Omit class from ImgHTMLAttributes
  - Avoids type conflict with ClassProp

- **accordion:** Update slot type definitions ([0aae2d9](https://github.com/favorodera/centoui/commit/0aae2d9))

  - Make slot definitions optional
  - Change slot return types from [] to any

- **alert-dialog:** Make root default slot optional - Allow default slot to be omitted. - Change slot return type from `[]` to `any`. - Add eslint-disable for explicit any. ([7cb4357](https://github.com/favorodera/centoui/commit/7cb4357))
- **aspect-ratio:** Make default slot optional and flexible ([df7843a](https://github.com/favorodera/centoui/commit/df7843a))
- **collapsible:** Make root slot optional and flexible - Make default slot optional - Allow any return type for slot function ([3925882](https://github.com/favorodera/centoui/commit/3925882))
- **progress-bar:** Make default slot optional ([80f475e](https://github.com/favorodera/centoui/commit/80f475e))

  - Set default slot as optional
  - Update return type to any for flexibility

- **separator:** Check for empty slot using utility ([2930733](https://github.com/favorodera/centoui/commit/2930733))

  - use isSlotEmpty to validate default slot content

- **slider:** Make default slot optional and flexible ([4107376](https://github.com/favorodera/centoui/commit/4107376))

  - Set default slot as optional
  - Update return type to any for better compatibility

- **switch:** Make default slot optional and flexible ([2c9f4cf](https://github.com/favorodera/centoui/commit/2c9f4cf))

  - Set default slot as optional
  - Update return type to any for better compatibility

- **tooltip:** Make default slot optional ([88047c8](https://github.com/favorodera/centoui/commit/88047c8))

  - update TooltipRootSlots default slot to optional
  - change return type to any for flexibility

- **item:** Update default variant to ghost ([b5ccb39](https://github.com/favorodera/centoui/commit/b5ccb39))
- **slideover:** Ensure full width for side variants ([47aa3a2](https://github.com/favorodera/centoui/commit/47aa3a2))

  - add w-full to left and right slideover variants

- **collapsible:** Resolve type issues in emits ([542bc94](https://github.com/favorodera/centoui/commit/542bc94))

  - cast emits to any to fix type instantiation error


### Refactors

- Use reactivePick instead of reactiveOmit in button component ([b0db238](https://github.com/favorodera/centoui/commit/b0db238))
- Remove redundant aria-disabled styling from button ([8dccf1a](https://github.com/favorodera/centoui/commit/8dccf1a))
- Replace reactivePick with reactiveOmit for delegated props ([c441f05](https://github.com/favorodera/centoui/commit/c441f05))
- Rename avatar-index.ts to index.ts ([09e7517](https://github.com/favorodera/centoui/commit/09e7517))
- Rename avatar-index.ts to index.ts ([99d9ab8](https://github.com/favorodera/centoui/commit/99d9ab8))
- Unify button styling, variants, and states ([63ac2e9](https://github.com/favorodera/centoui/commit/63ac2e9))
- Remove unused AxeMatchers import and declaration ([7f18278](https://github.com/favorodera/centoui/commit/7f18278))
- Consolidate button variant classes ([399d998](https://github.com/favorodera/centoui/commit/399d998))
- Remove unused compoundVariants from separator component ([d1b0a63](https://github.com/favorodera/centoui/commit/d1b0a63))
- Update slot name for button root element ([06d4000](https://github.com/favorodera/centoui/commit/06d4000))
- Restructure separator size variants using compoundVariants ([7637c96](https://github.com/favorodera/centoui/commit/7637c96))

  This change refactors the `separatorVariants` to utilize `compoundVariants` for defining size variations. Previously, size was directly mapped to border widths. Now, the size definitions are leaner, and the specific border widths for horizontal and vertical orientations are applied through compound variants. This approach offers better organization and maintainability for the size configurations.

- Rename button slot attribute ([8be0879](https://github.com/favorodera/centoui/commit/8be0879))
- Remove augment.d.ts from core tsconfig include ([c160ae2](https://github.com/favorodera/centoui/commit/c160ae2))
- Simplify button group data slot name ([59068f8](https://github.com/favorodera/centoui/commit/59068f8))
- Update button group slot name and styling ([b7b46c0](https://github.com/favorodera/centoui/commit/b7b46c0))
- Update data-centoui-slot attribute for separator component ([9da422f](https://github.com/favorodera/centoui/commit/9da422f))
- Migrate theme and config to defaults directory ([d6b5c74](https://github.com/favorodera/centoui/commit/d6b5c74))

  This commit introduces a `defaults` directory within the `packages/core` package to house the default theme CSS and configuration. This change aims to centralize these core assets and improve the project's structure.
  Key changes include:
  - **Moving `centoui.css`**: The main theme CSS file has been moved from `packages/core/src/css` to `packages/core/src/defaults/centoui.css`.
  - **New `config.ts`**: A new file `packages/core/src/defaults/config.ts` is introduced to hold default configuration options, specifically icon mappings.
  - **Updated Imports**: All references to the theme CSS and the `centoui.config.ts` in the `apps/preview` directory have been updated to reflect the new path.
  - **CLI Adjustments**: The `THEME_CSS_URL` constant in `packages/cli/src/constants.ts` and the `buildDefaultConfigFileContent` utility in `packages/cli/src/utils/config-utils.ts` have been updated to point to the new location. The `version` field has been removed from the generated `centoui.config.ts` as it's no longer necessary.
  - **Vite Alias**: A new Vite alias is added in `packages/core/vite.config.ts` to resolve `#centoui/config` to the new `config.ts` file.
  - **Tailwind CSS Integration**: The `eslint.config.mjs` and `tailwind.css` files have been updated to reflect the new path for the `centoui.css` import.
  - **Dependency Removal**: The `centoui` workspace dependency is removed from `apps/preview/package.json` as it's no longer needed for the preview app.
  - **Styling Cleanup**: Minor adjustments to Tailwind CSS class order in various Vue components for improved readability.
  - **Avatar and Button Variants**: Minor adjustments to Tailwind CSS class order in `avatar/index.ts` and `button/index.ts` for consistency.

- Update useForwardProps to useForwardPropsEmits in AvatarImage ([c87e5f1](https://github.com/favorodera/centoui/commit/c87e5f1))
- Accordion root defaults and data attributes ([1c8ab41](https://github.com/favorodera/centoui/commit/1c8ab41))

  - Remove `withDefaults` from props.
  - Compute `orientation` and `disabled` state.
  - Expose `orientation` via data attribute.
  - Expose `disabled` via data attribute.
  - Align defaults with headless component.

- Simplify AvatarImage prop handling - No longer set default for src prop - Update comments for clarity ([a145d8e](https://github.com/favorodera/centoui/commit/a145d8e))
- Use injectButtonGroupContext helper - Encapsulate context injection logic - Improve readability and maintainability - Update comments for clarity ([62b8307](https://github.com/favorodera/centoui/commit/62b8307))
- Use dedicated function for context provision ([da705ca](https://github.com/favorodera/centoui/commit/da705ca))
- Use createContext for button group context ([e04e5cd](https://github.com/favorodera/centoui/commit/e04e5cd))
- Simplify Kbd component props handling ([a5c7268](https://github.com/favorodera/centoui/commit/a5c7268))

  - Forward props to native element.
  - Improve style class computation logic.

- Improve prop handling in KbdGroup ([5287140](https://github.com/favorodera/centoui/commit/5287140))

  - Forward props to native elements
  - Simplify computed styles logic

- Improve separator variant definitions ([ec86bab](https://github.com/favorodera/centoui/commit/ec86bab))

  - Update color and variant definitions
  - Restructure compound variants
  - Clarify slot documentation

- Simplify separator props handling ([d686610](https://github.com/favorodera/centoui/commit/d686610))

  - Remove default values from `as` and `orientation`
  - Streamline prop delegation and forwarding

- Rename kbdVariants to kbdGroupVariants ([733b631](https://github.com/favorodera/centoui/commit/733b631))

  - Clarify component scope for variants.
  - Update type names accordingly.

- Rename kbdVariants to kbdGroupVariants ([2182000](https://github.com/favorodera/centoui/commit/2182000))

  - Use kbdGroupVariants for clarity
  - Update component styles

- Use template literals for button classes - Improves readability - Clarifies square prop JSDoc ([84d255d](https://github.com/favorodera/centoui/commit/84d255d))
- Internal vitest type declarations ([b144fbd](https://github.com/favorodera/centoui/commit/b144fbd))
- Refine badge styling logic ([68acac2](https://github.com/favorodera/centoui/commit/68acac2))
- Update Kbd component color variants ([1c240b4](https://github.com/favorodera/centoui/commit/1c240b4))
- Simplify tooltip component props ([0aa8aa8](https://github.com/favorodera/centoui/commit/0aa8aa8))

  - Remove unnecessary intersections
  - Clean up type definitions

- Add state data attribute to alert actions ([536056c](https://github.com/favorodera/centoui/commit/536056c))
- Simplify button group context provision ([1a58bd9](https://github.com/favorodera/centoui/commit/1a58bd9))
- Remove disabled prop from AvatarRoot ([76290d4](https://github.com/favorodera/centoui/commit/76290d4))

  - Remove disabled prop from AvatarRoot.
  - Remove disabled attribute binding.
  - Update component styles.

- Remove disabled variant from avatarVariants and related props ([61e550f](https://github.com/favorodera/centoui/commit/61e550f))
- Remove disabled test case from AvatarRoot accessibility tests ([63de736](https://github.com/favorodera/centoui/commit/63de736))
- **accordion:** Unify content styling ([d532a6d](https://github.com/favorodera/centoui/commit/d532a6d))

  - Externalize content styling to root
  - Integrate Centoui accordion root context
  - Simplify data attribute bindings
  - Rename inner slot to content-inner

- **accordion:** Centralize header styles and context ([4199a83](https://github.com/favorodera/centoui/commit/4199a83))

  - Use root context for header styles
  - Simplify data state and disabled props
  - Adjust context injection logic

- **accordion:** Centralize item styling & context ([c1e8711](https://github.com/favorodera/centoui/commit/c1e8711))

  - Remove local item styling logic
  - Inject Centoui accordion root context
  - Retrieve item styles from root context
  - Update data attributes computations

- **accordion:** Provide style context ([d41a191](https://github.com/favorodera/centoui/commit/d41a191))

  - Provide full style variants via context
  - Remove direct attribute for disabled state
  - Simplify orientation attribute binding

- **accordion:** Streamline trigger styling ([79121c4](https://github.com/favorodera/centoui/commit/79121c4))

  - Use root context for trigger styling
  - Combine accordion root contexts
  - Wrap trigger icon in a named slot
  - Remove local style computations

- **alert:** Centralize styles for alert actions ([29c9a56](https://github.com/favorodera/centoui/commit/29c9a56))

  - Remove local style computation
  - Consume styles from root context
  - Update context injection method

- **alert:** Streamline close component - Migrate to new alert root context - Centralize styling via context - Update data attributes for state - Revise close button color logic ([0a70400](https://github.com/favorodera/centoui/commit/0a70400))
- **alert:** Streamline description styling ([ac8c7e8](https://github.com/favorodera/centoui/commit/ac8c7e8))

  - Removed direct variant style computation
  - Injected styles from root context
  - Updated data attributes for state
  - Renamed context injection function

- **alert:** Delegate media styling to context ([4461c6e](https://github.com/favorodera/centoui/commit/4461c6e))

  - Delegate media styling to root context
  - Remove local `alertVariants` usage
  - Update data attributes from context
  - Rename alert context

- **alert:** Update styling props and context ([995ddb7](https://github.com/favorodera/centoui/commit/995ddb7))

  - Rename color/variant to status prop
  - Update alert context provision
  - Rename internal open model
  - Adjust style computation logic

- **alert:** Improve title component context usage ([b4daec5](https://github.com/favorodera/centoui/commit/b4daec5))

  - Use injected context directly
  - Remove computed styles logic
  - Bind attributes from root context

- **alert:** Simplify variant and color system` ([a195e04](https://github.com/favorodera/centoui/commit/a195e04))
- **avatar:** Improve component structure ([dc4ae10](https://github.com/favorodera/centoui/commit/dc4ae10))

  - Introduce root context for styles
  - Refactor avatarVariants definition
  - Remove 3xs size variant
  - Adjust fallback text color

- **avatar:** Use context for fallback styles ([28329df](https://github.com/favorodera/centoui/commit/28329df))

  - Inject root context for styles
  - Remove local computed styles
  - Simplify fallback class binding

- **avatar:** Use root context for styles ([d347639](https://github.com/favorodera/centoui/commit/d347639))

  - Inject root context instead of local computed styles
  - Pass class prop to root context style function

- **accordion:** Simplify content component context ([0a9e944](https://github.com/favorodera/centoui/commit/0a9e944))

  - Removed redundant context injection
  - Updated data attribute naming
  - Streamlined prop forwarding

- **accordion:** Simplify header context injection ([9634d9a](https://github.com/favorodera/centoui/commit/9634d9a))

  - Removed redundant root context merging
  - Simplified data-centoui-state and data-centoui-disabled binding
  - Updated data-slot attribute name

- **accordion:** Simplify accordion item context injection ([2a319a6](https://github.com/favorodera/centoui/commit/2a319a6))

  - Removed redundant computed for root context
  - Simplified data attribute logic
  - Removed unused data-centoui-disabled attribute

- **accordion:** Simplify accordion-root.vue ([8c0ecc7](https://github.com/favorodera/centoui/commit/8c0ecc7))

  - Removed unused orientation computed
  - Updated data attribute name

- **accordion:** Simplify trigger context injection ([f86de9e](https://github.com/favorodera/centoui/commit/f86de9e))

  - Removed unused computed for root context
  - Simplified data attribute binding
  - Updated slot data attribute

- **accordion:** Update data attributes and styles ([ff42884](https://github.com/favorodera/centoui/commit/ff42884))

  - Replaced 'data-centoui-state' with 'data-state'
  - Changed 'data-centoui-slot' to 'data-slot'
  - Updated focus-visible ring width and color
  - Adjusted icon size and vertical alignment

- **alert:** Update data attributes ([5ed26d8](https://github.com/favorodera/centoui/commit/5ed26d8))

  - Changed data-centoui-slot to data-slot
  - Changed data-centoui-status to data-variant
  - Removed data-centoui-orientation
  - Removed data-centoui-open

- Remove AlertClose component ([8ea8ca8](https://github.com/favorodera/centoui/commit/8ea8ca8))

  - Component was no longer needed
  - Streamlined alert component structure

- **alert:** Update slot and data attributes ([7f641c5](https://github.com/favorodera/centoui/commit/7f641c5))

  - Changed data-centoui-slot to data-slot
  - Removed data-centoui-status, orientation, open
  - Added data-variant attribute

- **alert:** Standardize data attributes ([d84d89b](https://github.com/favorodera/centoui/commit/d84d89b))
- **alert:** Rename status to variant ([8ada8be](https://github.com/favorodera/centoui/commit/8ada8be))

  - Changed prop name from `status` to `variant`
  - Updated context and template bindings
  - Simplified alert component props

- **alert:** Update title slot and data attributes ([0eb67c0](https://github.com/favorodera/centoui/commit/0eb67c0))

  - Changed data-centoui-slot to data-slot
  - Removed data-centoui-status
  - Removed data-centoui-orientation
  - Removed data-centoui-open
  - Added data-variant

- **alert:** Simplify and update variants ([3aca411](https://github.com/favorodera/centoui/commit/3aca411))

  - Streamlined CSS class structure
  - Renamed status to variant for clarity
  - Updated slot names and types

- **alert.test:** Simplify accessibility test structure and remove unused visibility tests ([e380f5c](https://github.com/favorodera/centoui/commit/e380f5c))
- Remove unused VariantProps type ([074ea48](https://github.com/favorodera/centoui/commit/074ea48))

  - Removed redundant KbdGroupVariants type
  - Cleaned up kbd-group component exports

- **avatar:** Remove shape prop ([5c8232e](https://github.com/favorodera/centoui/commit/5c8232e))
- **css:** Remove experimental squircle support ([df55eca](https://github.com/favorodera/centoui/commit/df55eca))
- **accordion:** Use local variants for styling ([2a8a779](https://github.com/favorodera/centoui/commit/2a8a779))
- **accordion:** Use local variants for styling ([d356c34](https://github.com/favorodera/centoui/commit/d356c34))
- **accordion:** Use local variants for styling ([ed20a1e](https://github.com/favorodera/centoui/commit/ed20a1e))
- **accordion:** Remove styles from root context provider ([fc436b3](https://github.com/favorodera/centoui/commit/fc436b3))
- **accordion:** Use local variants for styling ([626e695](https://github.com/favorodera/centoui/commit/626e695))
- **accordion:** Update types to use ClassProp and remove styles from context ([d996ff0](https://github.com/favorodera/centoui/commit/d996ff0))
- **alert-dialog:** Use local variants for styling ([feac428](https://github.com/favorodera/centoui/commit/feac428))
- **alert-dialog:** Use local variants for styling ([235000b](https://github.com/favorodera/centoui/commit/235000b))
- **alert-dialog:** Use local variants for styling ([8ee971f](https://github.com/favorodera/centoui/commit/8ee971f))
- **alert-dialog:** Use local variants for styling ([989878f](https://github.com/favorodera/centoui/commit/989878f))
- **alert-dialog:** Use local variants for styling ([bed3d8f](https://github.com/favorodera/centoui/commit/bed3d8f))
- **alert-dialog:** Use local variants for styling ([d0be0cb](https://github.com/favorodera/centoui/commit/d0be0cb))
- **alert-dialog:** Use local variants for styling ([b82a4af](https://github.com/favorodera/centoui/commit/b82a4af))
- **alert-dialog:** Cleanup component imports and template ([1d257fd](https://github.com/favorodera/centoui/commit/1d257fd))
- **alert-dialog:** Remove styles from root context provider ([5dcf8b1](https://github.com/favorodera/centoui/commit/5dcf8b1))
- **alert-dialog:** Use local variants for styling ([e57c8fc](https://github.com/favorodera/centoui/commit/e57c8fc))
- **alert-dialog:** Use local variants for styling ([446350d](https://github.com/favorodera/centoui/commit/446350d))
- **alert-dialog:** Update types to use ClassProp and remove styles from context ([76cb1f0](https://github.com/favorodera/centoui/commit/76cb1f0))
- **alert:** Use local variants for styling ([69be7c9](https://github.com/favorodera/centoui/commit/69be7c9))
- **alert:** Use local variants for styling ([f49af5b](https://github.com/favorodera/centoui/commit/f49af5b))
- **alert:** Use local variants for styling ([d27c1db](https://github.com/favorodera/centoui/commit/d27c1db))
- **alert:** Use local variants for styling ([34e063b](https://github.com/favorodera/centoui/commit/34e063b))
- **alert:** Remove styles from root context provider ([e6bfb9e](https://github.com/favorodera/centoui/commit/e6bfb9e))
- **alert:** Use local variants for styling ([0a4ebd5](https://github.com/favorodera/centoui/commit/0a4ebd5))
- **alert:** Update types to use ClassProp and remove styles from context ([b3503b2](https://github.com/favorodera/centoui/commit/b3503b2))
- **aspect-ratio:** Use local variants for styling ([6d1dde1](https://github.com/favorodera/centoui/commit/6d1dde1))
- **aspect-ratio:** Update types to use ClassProp and remove styles from context ([0516c61](https://github.com/favorodera/centoui/commit/0516c61))
- **avatar:** Use local variants for styling ([42aa809](https://github.com/favorodera/centoui/commit/42aa809))
- **avatar:** Use local variants for styling ([204eb9d](https://github.com/favorodera/centoui/commit/204eb9d))
- **avatar:** Remove styles from root context provider ([9a42f1c](https://github.com/favorodera/centoui/commit/9a42f1c))
- **avatar:** Update types to use ClassProp and remove styles from context ([0c5865a](https://github.com/favorodera/centoui/commit/0c5865a))
- **badge:** Use local variants for styling ([7206701](https://github.com/favorodera/centoui/commit/7206701))
- **badge:** Update types to use ClassProp and remove styles from context ([b7f6a80](https://github.com/favorodera/centoui/commit/b7f6a80))
- **button-group:** Use local variants for styling ([7120011](https://github.com/favorodera/centoui/commit/7120011))
- **button-group:** Remove styles from root context provider ([d2eae72](https://github.com/favorodera/centoui/commit/d2eae72))
- **button-group:** Update types to use ClassProp and remove styles from context ([302eaaf](https://github.com/favorodera/centoui/commit/302eaaf))
- **button:** Use local variants for styling ([0c3c954](https://github.com/favorodera/centoui/commit/0c3c954))
- **button:** Update types to use ClassProp and remove styles from context ([6ff36fc](https://github.com/favorodera/centoui/commit/6ff36fc))
- **collapsible:** Use local variants for styling ([aee41de](https://github.com/favorodera/centoui/commit/aee41de))
- **collapsible:** Remove styles from root context provider ([965e29d](https://github.com/favorodera/centoui/commit/965e29d))
- **collapsible:** Use local variants for styling ([dd056d1](https://github.com/favorodera/centoui/commit/dd056d1))
- **collapsible:** Update types to use ClassProp and remove styles from context ([281f914](https://github.com/favorodera/centoui/commit/281f914))
- **kbd-group:** Update types to use ClassProp and remove styles from context ([cb8852e](https://github.com/favorodera/centoui/commit/cb8852e))
- **kbd-group:** Use local variants for styling ([44b5df5](https://github.com/favorodera/centoui/commit/44b5df5))
- **kbd:** Update types to use ClassProp and remove styles from context ([057566c](https://github.com/favorodera/centoui/commit/057566c))
- **kbd:** Use local variants for styling ([cc2d74f](https://github.com/favorodera/centoui/commit/cc2d74f))
- **popover:** Update types to use ClassProp and remove styles from context ([0faa4f1](https://github.com/favorodera/centoui/commit/0faa4f1))
- **popover:** Cleanup component imports and template ([4176147](https://github.com/favorodera/centoui/commit/4176147))
- **popover:** Use local variants for styling ([a31b36f](https://github.com/favorodera/centoui/commit/a31b36f))
- **popover:** Use local variants for styling ([014ccf1](https://github.com/favorodera/centoui/commit/014ccf1))
- **popover:** Use local variants for styling ([a141923](https://github.com/favorodera/centoui/commit/a141923))
- **popover:** Use local variants for styling ([5ad71b8](https://github.com/favorodera/centoui/commit/5ad71b8))
- **popover:** Use local variants for styling ([5ada8c4](https://github.com/favorodera/centoui/commit/5ada8c4))
- **popover:** Use local variants for styling ([65fe5a8](https://github.com/favorodera/centoui/commit/65fe5a8))
- **popover:** Use local variants for styling ([dbe10c1](https://github.com/favorodera/centoui/commit/dbe10c1))
- **popover:** Cleanup component imports and template ([95800f3](https://github.com/favorodera/centoui/commit/95800f3))
- **popover:** Remove styles from root context provider ([2bf330c](https://github.com/favorodera/centoui/commit/2bf330c))
- **popover:** Use local variants for styling ([f89c4a0](https://github.com/favorodera/centoui/commit/f89c4a0))
- **popover:** Use local variants for styling ([ad15513](https://github.com/favorodera/centoui/commit/ad15513))
- **progress:** Update types to use ClassProp and remove styles from context ([8abdf38](https://github.com/favorodera/centoui/commit/8abdf38))
- **progress:** Use local variants for styling ([096d9aa](https://github.com/favorodera/centoui/commit/096d9aa))
- **progress:** Remove styles from root context provider ([c438824](https://github.com/favorodera/centoui/commit/c438824))
- **select:** Update types to use ClassProp and remove styles from context ([5b90f10](https://github.com/favorodera/centoui/commit/5b90f10))
- **select:** Use local variants for styling ([9216373](https://github.com/favorodera/centoui/commit/9216373))
- **select:** Use local variants for styling ([5264e1b](https://github.com/favorodera/centoui/commit/5264e1b))
- **select:** Use local variants for styling ([4f56478](https://github.com/favorodera/centoui/commit/4f56478))
- **select:** Use local variants for styling ([9593f5b](https://github.com/favorodera/centoui/commit/9593f5b))
- **select:** Use local variants for styling ([65756b6](https://github.com/favorodera/centoui/commit/65756b6))
- **select:** Use local variants for styling ([19222a0](https://github.com/favorodera/centoui/commit/19222a0))
- **select:** Use local variants for styling ([ae80f7c](https://github.com/favorodera/centoui/commit/ae80f7c))
- **select:** Use local variants for styling ([7b861d2](https://github.com/favorodera/centoui/commit/7b861d2))
- **select:** Cleanup component imports and template ([76eea6e](https://github.com/favorodera/centoui/commit/76eea6e))
- **select:** Remove styles from root context provider ([2ab9d23](https://github.com/favorodera/centoui/commit/2ab9d23))
- **select:** Use local variants for styling ([90c7e0a](https://github.com/favorodera/centoui/commit/90c7e0a))
- **select:** Use local variants for styling ([2117549](https://github.com/favorodera/centoui/commit/2117549))
- **select:** Use local variants for styling ([0acdd6b](https://github.com/favorodera/centoui/commit/0acdd6b))
- **select:** Remove styles from root context provider ([81e785a](https://github.com/favorodera/centoui/commit/81e785a))
- **select:** Use local variants for styling ([39e1007](https://github.com/favorodera/centoui/commit/39e1007))
- **select:** Use local variants for styling ([e545f37](https://github.com/favorodera/centoui/commit/e545f37))
- **separator:** Update types to use ClassProp and remove styles from context ([3afe806](https://github.com/favorodera/centoui/commit/3afe806))
- **separator:** Use local variants for styling ([519185e](https://github.com/favorodera/centoui/commit/519185e))
- **text:** Update types to use ClassProp and remove styles from context ([a3a0d10](https://github.com/favorodera/centoui/commit/a3a0d10))
- **text:** Use local variants for styling ([e6f807f](https://github.com/favorodera/centoui/commit/e6f807f))
- **tooltip:** Update types to use ClassProp and remove styles from context ([0c7e1bb](https://github.com/favorodera/centoui/commit/0c7e1bb))
- **tooltip:** Use local variants for styling ([06fd657](https://github.com/favorodera/centoui/commit/06fd657))
- **tooltip:** Use local variants for styling ([087d655](https://github.com/favorodera/centoui/commit/087d655))
- **tooltip:** Cleanup component imports and template ([8c0bc95](https://github.com/favorodera/centoui/commit/8c0bc95))
- **tooltip:** Cleanup component imports and template ([d2e484c](https://github.com/favorodera/centoui/commit/d2e484c))
- **tooltip:** Remove styles from root context provider ([75faf14](https://github.com/favorodera/centoui/commit/75faf14))
- **tooltip:** Use local variants for styling ([78d7aac](https://github.com/favorodera/centoui/commit/78d7aac))
- **config:** Update default configuration ([4b7052c](https://github.com/favorodera/centoui/commit/4b7052c))
- **components:** Streamline and refine component styles ([02c5ae2](https://github.com/favorodera/centoui/commit/02c5ae2))

  - Remove Text component and its preview
  - Unify SelectTrigger variant to `outline`
  - Adjust spacing, padding, and font sizes

- **select:** Improve component styling and variants ([79f4f17](https://github.com/favorodera/centoui/commit/79f4f17))
- **select:** Improve item layout and sizing logic ([7a51b07](https://github.com/favorodera/centoui/commit/7a51b07))
- **alert:** Remove default for as prop ([2b6ea0e](https://github.com/favorodera/centoui/commit/2b6ea0e))
- **alert:** Remove default props ([c44b6e2](https://github.com/favorodera/centoui/commit/c44b6e2))

  - Remove default as prop in AlertContent

- **alert:** Remove default as prop ([2b89ae6](https://github.com/favorodera/centoui/commit/2b89ae6))

  - Remove withDefaults from alert description

- **alert:** Remove default as prop ([62bb79d](https://github.com/favorodera/centoui/commit/62bb79d))
- **alert:** Remove default as prop ([e7dfcb8](https://github.com/favorodera/centoui/commit/e7dfcb8))
- **alert:** Remove default 'as' prop ([0a63c4c](https://github.com/favorodera/centoui/commit/0a63c4c))
- **alert-dialog:** Simplify footer props ([cfb24cc](https://github.com/favorodera/centoui/commit/cfb24cc))
- **alert-dialog:** Remove default props ([f3a6d2e](https://github.com/favorodera/centoui/commit/f3a6d2e))

  - Remove withDefaults from header component

- **popover:** Remove withDefaults from PopoverBody ([db13f1b](https://github.com/favorodera/centoui/commit/db13f1b))
- **popover-footer:** Remove explicit 'as' prop default ([1b46a5c](https://github.com/favorodera/centoui/commit/1b46a5c))
- **popover:** Simplify PopoverHeader props ([a75f466](https://github.com/favorodera/centoui/commit/a75f466))
- **button:** Apply transparent border to root ([26af78c](https://github.com/favorodera/centoui/commit/26af78c))
- **alert-dialog:** Simplify title styles ([1071e63](https://github.com/favorodera/centoui/commit/1071e63))
- **progress:** Rename component to progress-bar ([d39e3e1](https://github.com/favorodera/centoui/commit/d39e3e1))
- **components:** Update previews and title styles ([ba0b810](https://github.com/favorodera/centoui/commit/ba0b810))

  - Redesign card, popover, and slideover previews
  - Remove tight line-height from component titles
  - Add rich mock data

- **pagination:** Update last page icon ([9c2f784](https://github.com/favorodera/centoui/commit/9c2f784))
- **slideover:** Improve close button accessibility ([f84d09d](https://github.com/favorodera/centoui/commit/f84d09d))
- **icons:** Standardize default icon names ([9ecc112](https://github.com/favorodera/centoui/commit/9ecc112))
- **accordion:** Use local Icon component ([b981ac8](https://github.com/favorodera/centoui/commit/b981ac8))
- **core:** Update Icon import to internal path ([96fa6a7](https://github.com/favorodera/centoui/commit/96fa6a7))
- **breadcrumb:** Use internal Icon component ([a0a7658](https://github.com/favorodera/centoui/commit/a0a7658))
- **pagination:** Update Icon component import ([ced8a79](https://github.com/favorodera/centoui/commit/ced8a79))
- **pagination:** Use internal Icon component ([bef96e0](https://github.com/favorodera/centoui/commit/bef96e0))
- **icon:** Use local Icon component ([55e4b19](https://github.com/favorodera/centoui/commit/55e4b19))
- **icon:** Use local Icon component ([305f98c](https://github.com/favorodera/centoui/commit/305f98c))
- **icon:** Centralize Icon component import ([1a98d73](https://github.com/favorodera/centoui/commit/1a98d73))
- **select:** Use internal Icon component ([2fb7672](https://github.com/favorodera/centoui/commit/2fb7672))
- **select:** Use local Icon component ([1b022b8](https://github.com/favorodera/centoui/commit/1b022b8))
- **select:** Improve scroll button accessibility ([b03e642](https://github.com/favorodera/centoui/commit/b03e642))
- **icon:** Use internal component import ([b45f2a4](https://github.com/favorodera/centoui/commit/b45f2a4))
- **input:** Remove redundant comments ([7f96bdb](https://github.com/favorodera/centoui/commit/7f96bdb))
- **avatar-group:** Remove avatar-group component ([1b6377f](https://github.com/favorodera/centoui/commit/1b6377f))
- **avatar-group:** Remove component ([fb6c93d](https://github.com/favorodera/centoui/commit/fb6c93d))
- **button-group:** Remove redundant select styling ([e6a406b](https://github.com/favorodera/centoui/commit/e6a406b))
- **pagination:** Improve slot type definitions ([470f157](https://github.com/favorodera/centoui/commit/470f157))
- **select:** Make slot definitions optional ([531a23e](https://github.com/favorodera/centoui/commit/531a23e))

  - Mark default slots as optional
  - Update slot return types to any
  - Improve flexibility for slot usage

- **select:** Remove default asChild prop value ([eac836f](https://github.com/favorodera/centoui/commit/eac836f))

  - remove default value for asChild in SelectIcon
  - update prop definition to match base interface

- **select:** Remove default asChild prop value ([70bd8e4](https://github.com/favorodera/centoui/commit/70bd8e4))

  - remove default value for asChild prop
  - update component props definition

- **separator:** Adjust props and slot definition ([492f64b](https://github.com/favorodera/centoui/commit/492f64b))

  - Omit orientation from RekaSeparatorProps
  - Make default slot optional in SeparatorSlots

- **item:** Remove size variant from item component ([a23f6f5](https://github.com/favorodera/centoui/commit/a23f6f5))

  - remove size prop from item root
  - remove size from item variants and context
  - update all sub-components to remove size usage

- **item:** Remove unused item-body component ([93f1aff](https://github.com/favorodera/centoui/commit/93f1aff))
- **item:** Remove unused ItemFooter component ([03e6937](https://github.com/favorodera/centoui/commit/03e6937))
- **item:** Remove unused item-header component ([f6cf862](https://github.com/favorodera/centoui/commit/f6cf862))

  - delete item-header.vue from core package

- **avatar:** Consolidate group variants into avatarVariants ([0830d5b](https://github.com/favorodera/centoui/commit/0830d5b))

  - move group styles into avatarVariants
  - remove redundant avatarGroupVariants
  - update avatar-group component to use new slots

- **kbd:** Consolidate variants into kbdVariants ([a2d7774](https://github.com/favorodera/centoui/commit/a2d7774))

  - Move group slot into kbdVariants
  - Remove redundant kbdGroupVariants
  - Update KbdGroup component to use merged variants

- **core:** Simplify component registry schema ([b05e8ac](https://github.com/favorodera/centoui/commit/b05e8ac))

  - Remove mandatory componentDeps and packageDeps
  - Add optional needsUtils flag to component schema
  - Clean up registry files by removing empty fields

- **accordion:** Rename trigger group scope ([84da055](https://github.com/favorodera/centoui/commit/84da055))

  - Rename group/trigger to group/accordion-trigger
  - Update state selectors for consistency

- **core:** Simplify component structure and API ([1fcfa26](https://github.com/favorodera/centoui/commit/1fcfa26))

  - remove unused components and registry items
  - streamline component internal logic and slots
  - replace item with tile component
  - add progress component
  - standardize component variant implementations

- **button-group:** Remove separator slot style ([73de666](https://github.com/favorodera/centoui/commit/73de666))
- **separator:** Simplify styles and props ([a01971e](https://github.com/favorodera/centoui/commit/a01971e))

  - Update root and line layout classes
  - Optimize separator orientation variants
  - Simplify component props definition

- **separator:** Optimize variant handling ([def3a99](https://github.com/favorodera/centoui/commit/def3a99))

  - update variant logic for orientation support
  - replace defineSlots with useSlots
  - simplify classNames computed property

- **slideover:** Simplify style variant mapping ([0dd4651](https://github.com/favorodera/centoui/commit/0dd4651))

  - inline slideover variant destructuring
  - optimize computed class derivation

- **slideover:** Redesign component styles and types ([530b7f8](https://github.com/favorodera/centoui/commit/530b7f8))

  - Update slideover variants and layout styles
  - Add backdrop blur and refined spacing
  - Remove redundant portal and overlay exports
  - Simplify component prop type definitions

- **slideover:** Use size-full utility for variants ([41edac9](https://github.com/favorodera/centoui/commit/41edac9))

  - replace h-full and w-full with size-full
  - simplify slideover layout styling

- **slideover:** Simplify style computation ([4c051fd](https://github.com/favorodera/centoui/commit/4c051fd))

  - inline slideover variants call
  - streamline classNames computed property

- **slideover:** Simplify classNames computation ([087a196](https://github.com/favorodera/centoui/commit/087a196))

  - inline slideoverVariants call
  - improve code readability

- **slideover:** Simplify footer style calculation ([50326a8](https://github.com/favorodera/centoui/commit/50326a8))

  - inline slideover variants call
  - simplify computed property logic

- **slideover:** Update header close button implementation ([0276d4c](https://github.com/favorodera/centoui/commit/0276d4c))

  - replace manual button styles with Button component
  - simplify computed class logic for slideover header
  - update close button structure for better consistency

- **slideover:** Remove unused overlay and portal components ([6561b30](https://github.com/favorodera/centoui/commit/6561b30))

  - delete slideover-overlay component
  - delete slideover-portal component

- **slideover:** Simplify variant computation ([6f4ec70](https://github.com/favorodera/centoui/commit/6f4ec70))

  - inline slideover variant destructuring
  - simplify computed property return statement

- **slideover:** Simplify class names computation ([491b463](https://github.com/favorodera/centoui/commit/491b463))

  - inline slideoverVariants call
  - simplify computed property logic

- **progress:** Rename variants and clean up styles ([6c58737](https://github.com/favorodera/centoui/commit/6c58737))

  - rename progressBarVariants to progressVariants
  - remove unnecessary whitespace from indicator style

- **progress:** Update component variant usage ([acaa124](https://github.com/favorodera/centoui/commit/acaa124))

  - rename progressBarVariants to progressVariants
  - update root variant call to accept class object

- **slider:** Simplify component and update styles ([fd70d70](https://github.com/favorodera/centoui/commit/fd70d70))

  - Refactor slider to use a unified component
  - Update variants and slot styles
  - Apply group-based state management
  - Clean up redundant type definitions

- **slider:** Remove slider component files ([3d7f911](https://github.com/favorodera/centoui/commit/3d7f911))

  - delete slider-range, root, thumb, and track files

- **switch:** Simplify component and update styles ([b433fe9](https://github.com/favorodera/centoui/commit/b433fe9))

  - Consolidate switch components into a single file
  - Update switch sizing and spacing constants
  - Refactor variant props and type exports

- **switch:** Consolidate root and thumb components ([2dbbfb2](https://github.com/favorodera/centoui/commit/2dbbfb2))

  - merge switch-root and switch-thumb into switch.vue
  - simplify component structure
  - remove redundant context injection

- **textarea:** Simplify variants and props ([65135d9](https://github.com/favorodera/centoui/commit/65135d9))

  - Remove size variants and simplify styles
  - Update scrollbar and disabled state styling
  - Refactor TextareaProps type definition
  - Clean up unused exports and types

- **textarea:** Simplify component props and styles ([39dfadb](https://github.com/favorodera/centoui/commit/39dfadb))

  - remove default size prop
  - simplify classNames computed property
  - remove data-size attribute from textarea element

- **tooltip:** Simplify component implementation ([ffcb0c5](https://github.com/favorodera/centoui/commit/ffcb0c5))

  - Integrate portal and arrow into TooltipContent
  - Add showArrow prop to TooltipContent
  - Remove redundant wrapper components
  - Simplify variant and class logic

- **core:** Simplify component structure and registry ([8622eaf](https://github.com/favorodera/centoui/commit/8622eaf))

  - refactor component registry and file structure
  - simplify tailwind-variants slot definitions
  - remove redundant portal and arrow wrappers
  - replace composite components with single files
  - remove deprecated progress-bar and tile components

- **accordion:** Update styles and component logic ([9d14951](https://github.com/favorodera/centoui/commit/9d14951))

  - refactor accordion variants and styles
  - switch to class-based rotation for icons
  - update component slot types
  - clean up component code formatting
  - add dummy css for tailwind intellisense

- **storybook:** Consolidate layout and code cleanup ([eaa5090](https://github.com/favorodera/centoui/commit/eaa5090))

  - Inline view container into body component
  - Improve DOM query and array processing methods
  - Update tsconfig to support es2023
  - Enhance documentation for preview store methods

- **core:** Remove unused HTML attribute types ([3452d80](https://github.com/favorodera/centoui/commit/3452d80))

  - clean up redundant Vue HTML attribute imports
  - move avatar utility logic to dedicated file

- **accordion:** Simplify DOM structure and styles ([866165b](https://github.com/favorodera/centoui/commit/866165b))

  - remove redundant inner div from accordion content
  - update accordion content variants
  - clean up accordion trigger styles
  - remove unnecessary margins in storybook docs

- **badge:** Rename variant prop to status ([ce713bb](https://github.com/favorodera/centoui/commit/ce713bb))

  - rename variant prop to status
  - update component logic and data attribute
  - update class computation to use status

- **badge:** Rename variant to status ([93c4b1e](https://github.com/favorodera/centoui/commit/93c4b1e))

  - rename variant prop to status
  - update status styles and default values
  - update BadgeProps type definition

- **components:** Standardize variants and animations ([fbb3dd0](https://github.com/favorodera/centoui/commit/fbb3dd0))

  - rename badge status to color
  - update accordion animation timing
  - refine button sizing and transitions
  - rename button error variant to destructive

- **components:** Rename badge status to color ([fbe3eb0](https://github.com/favorodera/centoui/commit/fbe3eb0))

  - rename status prop to color in badge component
  - update variant naming for button components
  - register button-group and icon components

- **scripts:** Update registry build types and schema ([14e0de3](https://github.com/favorodera/centoui/commit/14e0de3))

  - Import PackageJson type for dependencies
  - Use PackageJson type for ROOT_NPM_DEPENDENCIES
  - Update registry schema reference path

- **popover:** Simplify component structure ([9dee5ba](https://github.com/favorodera/centoui/commit/9dee5ba))

  - Remove Title, Description, and Body components
  - Simplify Popover style variants and layout
  - Add Popover story for documentation
  - Update registry configuration

- **badge:** Rename color prop to variant ([7713d22](https://github.com/favorodera/centoui/commit/7713d22))

  - rename color prop to variant in Badge component
  - update variant mapping and data attribute

- **badge:** Rename color prop to variant ([7f81a8e](https://github.com/favorodera/centoui/commit/7f81a8e))

  - update badgeVariants default variant
  - rename color variant to variant
  - update BadgeProps interface

- **select:** Refactor variants and add context ([3556bbf](https://github.com/favorodera/centoui/commit/3556bbf))

  - Rename triggerSize to size variant
  - Update component slots for consistency
  - Implement root context for size propagation
  - Refine styling for all size variants

- **button:** Rename destructive variant to error ([3b1be9b](https://github.com/favorodera/centoui/commit/3b1be9b))
- **select:** Sync trigger size with root context ([28ec3c4](https://github.com/favorodera/centoui/commit/28ec3c4))

  - remove size prop from SelectTrigger
  - inject root context for size configuration
  - update trigger styles to use root context size

- **breadcrumb:** Improve formatting and style ([526434c](https://github.com/favorodera/centoui/commit/526434c))

  - standardize component script formatting
  - update link transition properties
  - fix breadcrumb story link attribute


### Documentation

- Clarify component schema descriptions ([07a8d54](https://github.com/favorodera/centoui/commit/07a8d54))
- Add description to globals.json schema ([4f98713](https://github.com/favorodera/centoui/commit/4f98713))
- Update slot descriptions in Avatar component ([aed3198](https://github.com/favorodera/centoui/commit/aed3198))
- Improve code comments and JSDoc across core components ([e0c4e0a](https://github.com/favorodera/centoui/commit/e0c4e0a))
- Clarify comments in avatar-root.vue - Update prop forwarding comment. - Clarify style class comment. ([7566927](https://github.com/favorodera/centoui/commit/7566927))
- Refine avatar component JSDoc comments ([b4f70c7](https://github.com/favorodera/centoui/commit/b4f70c7))
- Update KbdGroup type and slot descriptions ([3c7b9f8](https://github.com/favorodera/centoui/commit/3c7b9f8))
- Update README with new badges and features ([f497238](https://github.com/favorodera/centoui/commit/f497238))

  - Updated npmx badges for better tracking
  - Added a new Features section
  - Improved description clarity

- **alert-dialog:** Clarify JSDoc for AlertDialogRootContext ([2715111](https://github.com/favorodera/centoui/commit/2715111))
- **readme:** Overhaul readmes across monorepo ([96ccaab](https://github.com/favorodera/centoui/commit/96ccaab))

  - Rewrite all package and app README files
  - Add detailed CLI usage and architecture docs
  - Update package descriptions and keywords

- **readme:** Clean up and standardize readmes ([2ab5c6f](https://github.com/favorodera/centoui/commit/2ab5c6f))

  - Fix badge URL encoding for spaces
  - Capitalize and improve alt text descriptions
  - Remove emoji from preview app header

- **core:** Add utilsFilePath property to README ([b7f322d](https://github.com/favorodera/centoui/commit/b7f322d))

  - Document utilsFilePath configuration option

- **readme:** Refactor links to markdown syntax ([f7f4dc1](https://github.com/favorodera/centoui/commit/f7f4dc1))

  - Convert HTML anchor tags to markdown links
  - Improve documentation readability across project

- **avatar:** Update size property description ([a819a6f](https://github.com/favorodera/centoui/commit/a819a6f))

### Chores

- Remove obsolete vitest-axe type augmentation ([469537b](https://github.com/favorodera/centoui/commit/469537b))
- Remove unused test utility file ([cd67ec9](https://github.com/favorodera/centoui/commit/cd67ec9))
- Add @iconify/vue dependency ([43befd3](https://github.com/favorodera/centoui/commit/43befd3))
- Include augment.d.ts in core tsconfig ([5773085](https://github.com/favorodera/centoui/commit/5773085))
- Update default icon set ([4f189bc](https://github.com/favorodera/centoui/commit/4f189bc))
- Include augment.d.dts in tsconfig ([6e7eb37](https://github.com/favorodera/centoui/commit/6e7eb37))
- Adjust CSS color variables ([ada75de](https://github.com/favorodera/centoui/commit/ada75de))

  - Tweaked background and foreground colors
  - Adjusted overlay opacity
  - Modified muted and border colors
  - Updated primary and secondary hues

- Remove unused accessibility tests ([f18c8e9](https://github.com/favorodera/centoui/commit/f18c8e9))

  - Removed accordion tests
  - Removed alert-dialog tests
  - Removed alert tests
  - Removed badge tests
  - Removed button-group tests
  - Removed button tests
  - Removed kbd-group tests
  - Removed kbd tests
  - Removed separator tests
  - Removed tooltip tests

- **registry:** Update registry registry ([a81ce6d](https://github.com/favorodera/centoui/commit/a81ce6d))
- **registry:** Update registry registry ([2a3eb4b](https://github.com/favorodera/centoui/commit/2a3eb4b))
- **registry:** Update core registry ([69d5394](https://github.com/favorodera/centoui/commit/69d5394))
- **core:** Update peer dependencies ([eca7f8f](https://github.com/favorodera/centoui/commit/eca7f8f))

  - Update vue peer dependency to ^3.5.0
  - Move core dependencies to peerDependencies
  - Add @nuxt/icon to peer dependencies
  - Mark icon packages as optional peers

- **registry:** Update component dependencies ([ce43334](https://github.com/favorodera/centoui/commit/ce43334))
- **playgrounds:** Restructure dev playgrounds ([f3aecc8](https://github.com/favorodera/centoui/commit/f3aecc8))

  - Remove deprecated apps/sandbox
  - Add Vue and Nuxt dev playgrounds
  - Upgrade workspace pnpm engine to v11

- **playground:** Clean up local components ([044c9c1](https://github.com/favorodera/centoui/commit/044c9c1))
- **core:** Add dom libs to tsconfig ([b9e95ff](https://github.com/favorodera/centoui/commit/b9e95ff))
- **core:** Add path alias for utils ([c649459](https://github.com/favorodera/centoui/commit/c649459))
- **core:** Add utils path alias ([5e30634](https://github.com/favorodera/centoui/commit/5e30634))
- **registry:** Remove avatar-group component entry ([9fd8651](https://github.com/favorodera/centoui/commit/9fd8651))

  - delete avatar-group.json registry file

- **registry:** Remove kbd-group component definition ([53c394d](https://github.com/favorodera/centoui/commit/53c394d))
- **docs:** Add target="_blank" to external links ([8c817a7](https://github.com/favorodera/centoui/commit/8c817a7))
- **tile:** Remove Tile component and preview view ([eb7e0c9](https://github.com/favorodera/centoui/commit/eb7e0c9))

  - Remove Tile component implementation
  - Delete Tile component preview demo

- Remove preview app and unused packages ([b79a23d](https://github.com/favorodera/centoui/commit/b79a23d))

  - remove apps/preview and related configurations
  - delete packages/core, packages/nuxt, and playgrounds
  - clean up obsolete CI and issue templates
  - consolidate and update ESLint configuration
  - restructure cli utility modules

- **repo:** Add project infrastructure and registry ([7763941](https://github.com/favorodera/centoui/commit/7763941))

  - add github issue and pull request templates
  - setup ci and release workflows
  - add funding configuration
  - implement registry schema and build script
  - add initial registry components

- **repo:** Add dependabot config and reformat files ([5d32e0b](https://github.com/favorodera/centoui/commit/5d32e0b))
- **registry:** Update component dependencies ([6914ea5](https://github.com/favorodera/centoui/commit/6914ea5))

  - add component dependencies to registry files
  - define dependencies for alert-dialog, breadcrumb
  - define dependencies for pagination, pin-input
  - define dependencies for select and sheet


### Styling

- Format button accent variant styles ([c214e5e](https://github.com/favorodera/centoui/commit/c214e5e))
- Refine OKLCH color palette ([062fb00](https://github.com/favorodera/centoui/commit/062fb00))
- Refine core color palette values ([d2d05bc](https://github.com/favorodera/centoui/commit/d2d05bc))
- Format button registry JSON ([4f8d95b](https://github.com/favorodera/centoui/commit/4f8d95b))
- Adjust color definitions in centoui.css ([026df17](https://github.com/favorodera/centoui/commit/026df17))
- Format import statement for SeparatorProps ([0b091ed](https://github.com/favorodera/centoui/commit/0b091ed))
- Add relative positioning to avatar root ([1d125ef](https://github.com/favorodera/centoui/commit/1d125ef))
- Adjust button root styles and consolidate class definitions ([2206619](https://github.com/favorodera/centoui/commit/2206619))
- Format avatar tv class definitions ([8951c28](https://github.com/favorodera/centoui/commit/8951c28))
- Refine button active state styling ([d58e8cd](https://github.com/favorodera/centoui/commit/d58e8cd))
- Reorder active state class in button variants ([32c58b0](https://github.com/favorodera/centoui/commit/32c58b0))
- Adjust Tailwind CSS class order for consistency ([6456e8e](https://github.com/favorodera/centoui/commit/6456e8e))
- Apply comprehensive styling to Accordion components - Add styles for header, trigger, and content - Ensure Accordion sub-components are exported - Update slot documentation for clarity ([29a6133](https://github.com/favorodera/centoui/commit/29a6133))
- Clarify comments in avatar fallback ([613a2b6](https://github.com/favorodera/centoui/commit/613a2b6))
- Clarify comments in button component ([1633df4](https://github.com/favorodera/centoui/commit/1633df4))
- Improve button variant comments and formatting ([9664040](https://github.com/favorodera/centoui/commit/9664040))
- Remove font sans from Kbd root slot - Update Kbd component JSDoc comments ([1c61446](https://github.com/favorodera/centoui/commit/1c61446))
- Format tooltip content classes ([a11f1b0](https://github.com/favorodera/centoui/commit/a11f1b0))
- Remove z-50 from tooltip content ([ca64328](https://github.com/favorodera/centoui/commit/ca64328))
- Adjust accordion hover text color ([eb2b78c](https://github.com/favorodera/centoui/commit/eb2b78c))
- Improve preview app layout and header behavior ([7a20689](https://github.com/favorodera/centoui/commit/7a20689))
- Format tsdown config ([f8e9b6f](https://github.com/favorodera/centoui/commit/f8e9b6f))
- Format vite.config.ts ([5e91b9c](https://github.com/favorodera/centoui/commit/5e91b9c))
- Format build registry script ([e51a3e8](https://github.com/favorodera/centoui/commit/e51a3e8))
- Format badge.vue ([06a85e0](https://github.com/favorodera/centoui/commit/06a85e0))
- Simplify badge export syntax ([118daaa](https://github.com/favorodera/centoui/commit/118daaa))
- Add blank line for readability in button ([0f4abb5](https://github.com/favorodera/centoui/commit/0f4abb5))
- Add blank line in button-group-separator.vue ([2081ddc](https://github.com/favorodera/centoui/commit/2081ddc))
- Add spacing to button group styles ([d28b37a](https://github.com/favorodera/centoui/commit/d28b37a))

  - Improve readability of computed styles

- Format test setup utility ([6fb4b6c](https://github.com/favorodera/centoui/commit/6fb4b6c))

  - Update indentation in IntersectionObserver mock
  - Reformat configureAxe rules for consistency

- **theme:** Refine default theme colors ([e58739c](https://github.com/favorodera/centoui/commit/e58739c))

  - Adjusted various color values
  - Added `--border` color variable
  - Refined color variable descriptions

- **alert:** Adjust neutral variant colors ([79fa95e](https://github.com/favorodera/centoui/commit/79fa95e))
- **avatar:** Format avatar root template ([28d09f1](https://github.com/favorodera/centoui/commit/28d09f1))
- **button:** Improve readability of link variant classes ([7f5a650](https://github.com/favorodera/centoui/commit/7f5a650))
- **progress:** Reorder Tailwind classes ([d9e201c](https://github.com/favorodera/centoui/commit/d9e201c))
- **progress:** Adjust root border radius ([05154ba](https://github.com/favorodera/centoui/commit/05154ba))
- **progress:** Update root background to use bg-muted ([3084fb5](https://github.com/favorodera/centoui/commit/3084fb5))
- **alert-dialog:** Adjust padding for consistent layout - Update content padding to vertical only - Add horizontal padding to header - Add horizontal padding to footer ([652e9fa](https://github.com/favorodera/centoui/commit/652e9fa))
- **button:** Adjust border radius per size variant ([1c04e44](https://github.com/favorodera/centoui/commit/1c04e44))
- **theme:** Adjust error colors ([199f105](https://github.com/favorodera/centoui/commit/199f105))
- **tooltip:** Update color tokens for content and arrow ([4b7e149](https://github.com/favorodera/centoui/commit/4b7e149))
- **avatar:** Reorder root CSS classes ([9d6cb25](https://github.com/favorodera/centoui/commit/9d6cb25))
- **badge:** Reorder Tailwind classes for consistency ([1ac52dd](https://github.com/favorodera/centoui/commit/1ac52dd))
- **progress:** Format indicator classes ([ab167e5](https://github.com/favorodera/centoui/commit/ab167e5))
- **tooltip:** Reformat content styles for readability ([4eac1a0](https://github.com/favorodera/centoui/commit/4eac1a0))
- **button:** Make outline ring-inset conditional ([f727167](https://github.com/favorodera/centoui/commit/f727167))
- **button:** Improve outline variant readability ([43bec93](https://github.com/favorodera/centoui/commit/43bec93))
- **select:** Format Tailwind utility classes ([01e6f02](https://github.com/favorodera/centoui/commit/01e6f02))
- **alert-dialog:** Enhance content layout and improve styling consistency ([05cbd68](https://github.com/favorodera/centoui/commit/05cbd68))
- **accordion:** Enhance layout and spacing for improved readability ([913c782](https://github.com/favorodera/centoui/commit/913c782))
- **alert-view:** Refine content and description spacing for consistency ([51d90eb](https://github.com/favorodera/centoui/commit/51d90eb))
- **alert-dialog:** Improve spacing and layout for content and header ([56432a2](https://github.com/favorodera/centoui/commit/56432a2))
- **avatar:** Simplify size variants and adjust fallback text sizes for consistency ([5b1b206](https://github.com/favorodera/centoui/commit/5b1b206))
- **badge:** Streamline variant definitions and adjust size styles for consistency ([6ff9d39](https://github.com/favorodera/centoui/commit/6ff9d39))
- **button:** Refine padding and size variants for improved consistency ([968ac02](https://github.com/favorodera/centoui/commit/968ac02))
- **collapsible:** Add animation duration to content for smoother transitions ([07aa738](https://github.com/favorodera/centoui/commit/07aa738))
- **kbd:** Standardize text sizes and remove unused size variant ([3ec8d22](https://github.com/favorodera/centoui/commit/3ec8d22))
- **popover:** Adjust spacing and padding for improved layout consistency ([117fe81](https://github.com/favorodera/centoui/commit/117fe81))
- **accordion:** Adjust trigger styles for improved transition effects ([63eb260](https://github.com/favorodera/centoui/commit/63eb260))
- **alert-dialog:** Enhance overlay styles for improved animation effects ([ecdd9c7](https://github.com/favorodera/centoui/commit/ecdd9c7))
- **button:** Increase transition duration for smoother animations ([a158c43](https://github.com/favorodera/centoui/commit/a158c43))
- **popover:** Add animation duration to content for smoother transitions ([ff5b882](https://github.com/favorodera/centoui/commit/ff5b882))
- **progress:** Increase transition duration for smoother animations ([702c563](https://github.com/favorodera/centoui/commit/702c563))
- **select:** Update styles for improved layout and consistency ([a8759f7](https://github.com/favorodera/centoui/commit/a8759f7))
- **select-separator:** Simplify slot handling and clean up unused code ([6664445](https://github.com/favorodera/centoui/commit/6664445))
- **separator:** Remove unnecessary alignment class from root slot ([6d7d86b](https://github.com/favorodera/centoui/commit/6d7d86b))
- **switch:** Update transition durations and improve disabled state opacity ([c3d7cba](https://github.com/favorodera/centoui/commit/c3d7cba))
- **tooltip:** Update padding and transition duration for improved appearance ([1e73934](https://github.com/favorodera/centoui/commit/1e73934))
- **alert:** Update svg size and title leading ([4f36584](https://github.com/favorodera/centoui/commit/4f36584))

  - Use size-4 and translate-y-0.5 for svg
  - Add leading-tight to title variant

- **alert-dialog:** Adjust title line-height ([79c75cb](https://github.com/favorodera/centoui/commit/79c75cb))
- **popover:** Use tight line-height ([d75a4bf](https://github.com/favorodera/centoui/commit/d75a4bf))
- **card:** Remove sm:text-lg from title ([c3a6f50](https://github.com/favorodera/centoui/commit/c3a6f50))
- **popover:** Adjust description line height ([baaa1d2](https://github.com/favorodera/centoui/commit/baaa1d2))
- **slideover:** Reduce max width ([c4bb5bd](https://github.com/favorodera/centoui/commit/c4bb5bd))
- **input:** Reorder tailwind classes ([42adbd2](https://github.com/favorodera/centoui/commit/42adbd2))
- **select:** Add trigger transition duration ([a8c6194](https://github.com/favorodera/centoui/commit/a8c6194))
- **accordion:** Improve class readability ([67c4366](https://github.com/favorodera/centoui/commit/67c4366))
- **alert:** Format media variant classes ([578a79c](https://github.com/favorodera/centoui/commit/578a79c))
- **alert-dialog:** Format tailwind classes ([17a3023](https://github.com/favorodera/centoui/commit/17a3023))
- **avatar-group:** Add blank line for readability ([29f0478](https://github.com/favorodera/centoui/commit/29f0478))
- **badge:** Format Tailwind classes ([ce2d3f3](https://github.com/favorodera/centoui/commit/ce2d3f3))
- **progress-bar:** Update background to input ([6bf73a9](https://github.com/favorodera/centoui/commit/6bf73a9))
- **switch:** Use inherited border-radius for thumb ([15ce9a0](https://github.com/favorodera/centoui/commit/15ce9a0))
- **alert:** Update icon sizing tokens ([1889ffa](https://github.com/favorodera/centoui/commit/1889ffa))

  - change svg width to 4
  - update svg height to lh

- **alert:** Reorder tailwind classes for consistency ([0e7b8c5](https://github.com/favorodera/centoui/commit/0e7b8c5))
- **item:** Update layout and styling for item component ([193bfa2](https://github.com/favorodera/centoui/commit/193bfa2))

  - adjust padding and layout for item root
  - apply rounded corners to first child images
  - refactor media slot styles for better readability

- **select:** Adjust layout and sizing styles ([761b27f](https://github.com/favorodera/centoui/commit/761b27f))

  - Fix viewport and group padding alignment
  - Update content width to use full width instead

- **select:** Reorder tailwind classes for consistency ([84feb8c](https://github.com/favorodera/centoui/commit/84feb8c))
- **progress:** Reduce root height to 1.5 units ([1bd89df](https://github.com/favorodera/centoui/commit/1bd89df))
- **input:** Add missing newline in component script ([d839ec4](https://github.com/favorodera/centoui/commit/d839ec4))
- **label:** Format classNames computed property ([ffdd4ac](https://github.com/favorodera/centoui/commit/ffdd4ac))
- **label:** Add missing comma in classNames computed ([4720297](https://github.com/favorodera/centoui/commit/4720297))
- **select:** Reformat classNames definition ([a916760](https://github.com/favorodera/centoui/commit/a916760))
- **separator:** Update content font size to xs ([1450d3d](https://github.com/favorodera/centoui/commit/1450d3d))
- **separator:** Add missing newline for readability ([d52bc22](https://github.com/favorodera/centoui/commit/d52bc22))
- **textarea:** Add min-inline-0 to textarea variants ([4b766e8](https://github.com/favorodera/centoui/commit/4b766e8))
- **components:** Update component styles and fix avatar util ([bf897af](https://github.com/favorodera/centoui/commit/bf897af))

  - update alert and badge color variants
  - update button outline text color
  - add optional chaining to avatar initials logic

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.45...v1.0.0-alpha.46

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.45...v1.0.0-alpha.46)

### Added

- **registry:** Add component dependencies to index ([6e4aa01](https://github.com/favorodera/centoui/commit/6e4aa01))

  - define dependencies for components
  - update registry mapping for core packages

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.44...v1.0.0-alpha.45

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.44...v1.0.0-alpha.45)

### Chores

- **registry:** Update component dependencies ([6914ea5](https://github.com/favorodera/centoui/commit/6914ea5))

  - add component dependencies to registry files
  - define dependencies for alert-dialog, breadcrumb
  - define dependencies for pagination, pin-input
  - define dependencies for select and sheet

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.43...v1.0.0-alpha.44

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.43...v1.0.0-alpha.44)

### Added

- **input-group:** Add new InputGroup component ([961fc91](https://github.com/favorodera/centoui/commit/961fc91))

  - implement root, control, and addon components
  - add tailwind-variants for flexible positioning
  - include storybook documentation
  - add component to registry


### Styling

- **textarea:** Add min-inline-0 to textarea variants ([4b766e8](https://github.com/favorodera/centoui/commit/4b766e8))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.42...v1.0.0-alpha.43

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.42...v1.0.0-alpha.43)

### Added

- **components:** Add collapsible component ([955699a](https://github.com/favorodera/centoui/commit/955699a))

  - implement collapsible root, trigger, and content
  - add tailwind-variants for styling
  - register component in the registry
  - add storybook story for demonstration

- **components:** Add kbd and tooltip components ([9067044](https://github.com/favorodera/centoui/commit/9067044))

  - Add Kbd and Tooltip components to core
  - Add storybook stories for new components
  - Update component border radii and variants

- **pagination:** Add new pagination component ([b2e7aba](https://github.com/favorodera/centoui/commit/b2e7aba))

  - implement pagination core components
  - add storybook story for pagination
  - register pagination component in registry

- **pin-input:** Implement Pin Input component ([4c8959a](https://github.com/favorodera/centoui/commit/4c8959a))

  - Add PinInput component with group and input parts
  - Integrate with Reka UI and tailwind-variants
  - Add storybook documentation for Pin Input
  - Register component in registry

- **progress:** Add progress component ([44f6004](https://github.com/favorodera/centoui/commit/44f6004))

  - implement progress component using reka-ui
  - add storybook story for demonstration
  - register component in the registry

- **sheet:** Add Sheet component and storybook entry ([eaef8dd](https://github.com/favorodera/centoui/commit/eaef8dd))

  - Implement Sheet component using Reka UI
  - Add variant support for side positioning
  - Include header, footer, and sub-components
  - Add storybook documentation
  - Clean up alert-dialog transition styles

- **slider:** Add slider component and story ([1425500](https://github.com/favorodera/centoui/commit/1425500))

  - implement Slider component using reka-ui
  - define slider tailwind variants
  - add slider component to registry
  - create slider storybook documentation


### Fixed

- **collapsible:** Resolve type issues in emits ([542bc94](https://github.com/favorodera/centoui/commit/542bc94))

  - cast emits to any to fix type instantiation error

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.41...v1.0.0-alpha.42

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.41...v1.0.0-alpha.42)

### Added

- **core:** Add alert component ([9bca1c5](https://github.com/favorodera/centoui/commit/9bca1c5))

  - implement alert root, body, title, and description
  - include storybook documentation for alert
  - add alert to component registry

- **components:** Implement Alert Dialog component ([f4db552](https://github.com/favorodera/centoui/commit/f4db552))

  - Add Alert Dialog components and variants
  - Add Alert Dialog storybook documentation

- **popover:** Add title and description components ([eb53942](https://github.com/favorodera/centoui/commit/eb53942))

  - Add PopoverTitle and PopoverDescription components
  - Update popover variants and styles
  - Refactor storybook header and popover stories
  - Improve alert dialog animation timings

- **registry:** Add alert-dialog and update popover ([606aeb2](https://github.com/favorodera/centoui/commit/606aeb2))

  - add alert-dialog component registry
  - add description and title files to popover

- **core:** Add aspect-ratio component ([e757f53](https://github.com/favorodera/centoui/commit/e757f53))

  - implement aspect-ratio component
  - update popover registry and components
  - fix code style across components

- **aspect-ratio:** Add aspect-ratio component and story ([f89db9e](https://github.com/favorodera/centoui/commit/f89db9e))

  - add aspect-ratio component to registry
  - create aspect-ratio storybook documentation
  - update avatar story with new image source

- **breadcrumb:** Add breadcrumb component ([b7976f6](https://github.com/favorodera/centoui/commit/b7976f6))

  - implement breadcrumb core components
  - add breadcrumb storybook documentation

- **registry:** Add breadcrumb component to registry ([901cb43](https://github.com/favorodera/centoui/commit/901cb43))

  - register breadcrumb component files
  - update index registry with breadcrumb entry

- **card:** Implement card component and story ([982ff40](https://github.com/favorodera/centoui/commit/982ff40))

  - add card component with sub-components
  - add storybook preview for card component
  - refactor popover content structure
  - update alert-dialog styles

- **registry:** Add card component to registry ([de14de7](https://github.com/favorodera/centoui/commit/de14de7))

  - register card component files
  - update index registry configuration


### Refactors

- **breadcrumb:** Improve formatting and style ([526434c](https://github.com/favorodera/centoui/commit/526434c))

  - standardize component script formatting
  - update link transition properties
  - fix breadcrumb story link attribute

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.40...v1.0.0-alpha.41

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.40...v1.0.0-alpha.41)

### Added

- **switch:** Add component and update styles ([b6853fc](https://github.com/favorodera/centoui/commit/b6853fc))

  - Add new Switch component with variants
  - Improve switch root and thumb styling
  - Update Badge component font weight
  - Add invalid state support to Input and Switch
  - Fix storybook component naming and props

- **registry:** Add switch component definition ([68ba7e4](https://github.com/favorodera/centoui/commit/68ba7e4))

  - register switch component files

- **textarea:** Add size variants and storybook story ([f96981d](https://github.com/favorodera/centoui/commit/f96981d))

  - Add size variants to Textarea component
  - Update Textarea to support size prop
  - Add Textarea story to Storybook

- **registry:** Add textarea component definition ([6bf897c](https://github.com/favorodera/centoui/commit/6bf897c))
- **registry:** Add switch and textarea components ([d158245](https://github.com/favorodera/centoui/commit/d158245))

### Chores

- **repo:** Add dependabot config and reformat files ([5d32e0b](https://github.com/favorodera/centoui/commit/5d32e0b))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.39...v1.0.0-alpha.40

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.39...v1.0.0-alpha.40)

No relevant changes for this release


## v1.0.0-alpha.38...v1.0.0-alpha.39

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.38...v1.0.0-alpha.39)

### Added

- **core:** Initialize core package and avatar component ([1a0328d](https://github.com/favorodera/centoui/commit/1a0328d))

  - Setup core package structure and configuration
  - Implement Avatar component with sub-parts
  - Add registry build script and test suite
  - Configure build tools and linting rules

- **storybook:** Add component preview app and core components ([86e7f80](https://github.com/favorodera/centoui/commit/86e7f80))

  - Initialize storybook app with Vite and Vue
  - Add component library primitives to core
  - Implement theme customization and props control
  - Add accordion, badge, button, and input components
  - Add popover, select, and switch components

- **avatar:** Add storybook and update component logic ([5944ae6](https://github.com/favorodera/centoui/commit/5944ae6))

  - add avatar storybook component
  - update avatar component variants and sizes
  - refactor context injection naming
  - standardize computed style formatting

- **registry:** Add badge component definition ([bf27edb](https://github.com/favorodera/centoui/commit/bf27edb))

  - register badge component files

- **registry:** Add badge component to registry ([235bf5e](https://github.com/favorodera/centoui/commit/235bf5e))
- **button:** Update button component and registry ([799191c](https://github.com/favorodera/centoui/commit/799191c))

  - refactor button variants and styling
  - add button storybook and registry entry
  - make badge status optional
  - clean up component style code
  - fix label display in storybook controls

- **components:** Add button-group story and registry ([601ad16](https://github.com/favorodera/centoui/commit/601ad16))

  - add button-group storybook documentation
  - register button-group and icon components
  - improve icon alignment and prop forwarding
  - fix button-group prop order and typing

- **input:** Add lg size and update component styles ([61bfc0f](https://github.com/favorodera/centoui/commit/61bfc0f))

  - add lg variant to input component
  - update spacing and transition properties
  - refine component documentation comments

- **registry:** Add input component configuration ([3008bac](https://github.com/favorodera/centoui/commit/3008bac))

  - register input component files
  - define schema for input component metadata

- **registry:** Add input component and update schema path ([b44832a](https://github.com/favorodera/centoui/commit/b44832a))

  - register input component
  - update global registry schema path

- **label:** Update disabled state styles ([9bcb8fa](https://github.com/favorodera/centoui/commit/9bcb8fa))

  - add transition to label root
  - update disabled state selectors
  - standardize opacity for disabled states

- **registry:** Add label component definition ([4e8ff90](https://github.com/favorodera/centoui/commit/4e8ff90))

  - register label component files
  - link to component schema

- **registry:** Add label component to registry ([58a66c5](https://github.com/favorodera/centoui/commit/58a66c5))
- **select:** Inject root context for size variants ([0cd60ba](https://github.com/favorodera/centoui/commit/0cd60ba))

  - inject root context into select content
  - apply size variant to all content slots
  - add default sideOffset to props

- **select:** Implement size support for select items ([42cce68](https://github.com/favorodera/centoui/commit/42cce68))

  - inject root context in select-item
  - apply size variant to item, indicator, and text

- **select:** Apply size variant to select label ([ecb0c15](https://github.com/favorodera/centoui/commit/ecb0c15))

  - inject root context in select-label
  - pass size prop from root context to label variant

- **select:** Add size support to select-root ([5aaeb24](https://github.com/favorodera/centoui/commit/5aaeb24))

  - add size prop with default value
  - provide size context to child components
  - bind data-size attribute to root element

- **select:** Apply root size to select value ([b0e1173](https://github.com/favorodera/centoui/commit/b0e1173))

  - inject root context into select-value
  - update classNames to include root size variant

- **registry:** Add select and separator components ([b7e80d4](https://github.com/favorodera/centoui/commit/b7e80d4))

  - Register select component files
  - Register separator component files

- **registry:** Add select and separator components ([ffdb202](https://github.com/favorodera/centoui/commit/ffdb202))

### Refactors

- **accordion:** Update styles and component logic ([9d14951](https://github.com/favorodera/centoui/commit/9d14951))

  - refactor accordion variants and styles
  - switch to class-based rotation for icons
  - update component slot types
  - clean up component code formatting
  - add dummy css for tailwind intellisense

- **storybook:** Consolidate layout and code cleanup ([eaa5090](https://github.com/favorodera/centoui/commit/eaa5090))

  - Inline view container into body component
  - Improve DOM query and array processing methods
  - Update tsconfig to support es2023
  - Enhance documentation for preview store methods

- **core:** Remove unused HTML attribute types ([3452d80](https://github.com/favorodera/centoui/commit/3452d80))

  - clean up redundant Vue HTML attribute imports
  - move avatar utility logic to dedicated file

- **accordion:** Simplify DOM structure and styles ([866165b](https://github.com/favorodera/centoui/commit/866165b))

  - remove redundant inner div from accordion content
  - update accordion content variants
  - clean up accordion trigger styles
  - remove unnecessary margins in storybook docs

- **badge:** Rename variant prop to status ([ce713bb](https://github.com/favorodera/centoui/commit/ce713bb))

  - rename variant prop to status
  - update component logic and data attribute
  - update class computation to use status

- **badge:** Rename variant to status ([93c4b1e](https://github.com/favorodera/centoui/commit/93c4b1e))

  - rename variant prop to status
  - update status styles and default values
  - update BadgeProps type definition

- **components:** Standardize variants and animations ([fbb3dd0](https://github.com/favorodera/centoui/commit/fbb3dd0))

  - rename badge status to color
  - update accordion animation timing
  - refine button sizing and transitions
  - rename button error variant to destructive

- **components:** Rename badge status to color ([fbe3eb0](https://github.com/favorodera/centoui/commit/fbe3eb0))

  - rename status prop to color in badge component
  - update variant naming for button components
  - register button-group and icon components

- **scripts:** Update registry build types and schema ([14e0de3](https://github.com/favorodera/centoui/commit/14e0de3))

  - Import PackageJson type for dependencies
  - Use PackageJson type for ROOT_NPM_DEPENDENCIES
  - Update registry schema reference path

- **popover:** Simplify component structure ([9dee5ba](https://github.com/favorodera/centoui/commit/9dee5ba))

  - Remove Title, Description, and Body components
  - Simplify Popover style variants and layout
  - Add Popover story for documentation
  - Update registry configuration

- **badge:** Rename color prop to variant ([7713d22](https://github.com/favorodera/centoui/commit/7713d22))

  - rename color prop to variant in Badge component
  - update variant mapping and data attribute

- **badge:** Rename color prop to variant ([7f81a8e](https://github.com/favorodera/centoui/commit/7f81a8e))

  - update badgeVariants default variant
  - rename color variant to variant
  - update BadgeProps interface

- **select:** Refactor variants and add context ([3556bbf](https://github.com/favorodera/centoui/commit/3556bbf))

  - Rename triggerSize to size variant
  - Update component slots for consistency
  - Implement root context for size propagation
  - Refine styling for all size variants

- **button:** Rename destructive variant to error ([3b1be9b](https://github.com/favorodera/centoui/commit/3b1be9b))
- **select:** Sync trigger size with root context ([28ec3c4](https://github.com/favorodera/centoui/commit/28ec3c4))

  - remove size prop from SelectTrigger
  - inject root context for size configuration
  - update trigger styles to use root context size


### Documentation

- **avatar:** Update size property description ([a819a6f](https://github.com/favorodera/centoui/commit/a819a6f))

### Chores

- Remove preview app and unused packages ([b79a23d](https://github.com/favorodera/centoui/commit/b79a23d))

  - remove apps/preview and related configurations
  - delete packages/core, packages/nuxt, and playgrounds
  - clean up obsolete CI and issue templates
  - consolidate and update ESLint configuration
  - restructure cli utility modules

- **repo:** Add project infrastructure and registry ([7763941](https://github.com/favorodera/centoui/commit/7763941))

  - add github issue and pull request templates
  - setup ci and release workflows
  - add funding configuration
  - implement registry schema and build script
  - add initial registry components


### Styling

- **input:** Add missing newline in component script ([d839ec4](https://github.com/favorodera/centoui/commit/d839ec4))
- **label:** Format classNames computed property ([ffdd4ac](https://github.com/favorodera/centoui/commit/ffdd4ac))
- **label:** Add missing comma in classNames computed ([4720297](https://github.com/favorodera/centoui/commit/4720297))
- **select:** Reformat classNames definition ([a916760](https://github.com/favorodera/centoui/commit/a916760))
- **separator:** Update content font size to xs ([1450d3d](https://github.com/favorodera/centoui/commit/1450d3d))
- **separator:** Add missing newline for readability ([d52bc22](https://github.com/favorodera/centoui/commit/d52bc22))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.37...v1.0.0-alpha.38

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.37...v1.0.0-alpha.38)

### Added

- **alert-dialog:** Add footer padding handling ([34134c1](https://github.com/favorodera/centoui/commit/34134c1))

  - Update content vertical padding
  - Add conditional padding for footer slot

- **slideover:** Add overlay and portal support ([214e0d7](https://github.com/favorodera/centoui/commit/214e0d7))

  - add DialogPortal and DialogOverlay to content
  - update component to support inherited attributes
  - refactor class definitions for overlay support

- **slider:** Implement slider component ([70530e9](https://github.com/favorodera/centoui/commit/70530e9))

  - add slider component using reka-ui
  - support reactive props and orientation variants


### Fixed

- **slideover:** Ensure full width for side variants ([47aa3a2](https://github.com/favorodera/centoui/commit/47aa3a2))

  - add w-full to left and right slideover variants


### Refactors

- **core:** Simplify component registry schema ([b05e8ac](https://github.com/favorodera/centoui/commit/b05e8ac))

  - Remove mandatory componentDeps and packageDeps
  - Add optional needsUtils flag to component schema
  - Clean up registry files by removing empty fields

- **accordion:** Rename trigger group scope ([84da055](https://github.com/favorodera/centoui/commit/84da055))

  - Rename group/trigger to group/accordion-trigger
  - Update state selectors for consistency

- **core:** Simplify component structure and API ([1fcfa26](https://github.com/favorodera/centoui/commit/1fcfa26))

  - remove unused components and registry items
  - streamline component internal logic and slots
  - replace item with tile component
  - add progress component
  - standardize component variant implementations

- **button-group:** Remove separator slot style ([73de666](https://github.com/favorodera/centoui/commit/73de666))
- **separator:** Simplify styles and props ([a01971e](https://github.com/favorodera/centoui/commit/a01971e))

  - Update root and line layout classes
  - Optimize separator orientation variants
  - Simplify component props definition

- **separator:** Optimize variant handling ([def3a99](https://github.com/favorodera/centoui/commit/def3a99))

  - update variant logic for orientation support
  - replace defineSlots with useSlots
  - simplify classNames computed property

- **slideover:** Simplify style variant mapping ([0dd4651](https://github.com/favorodera/centoui/commit/0dd4651))

  - inline slideover variant destructuring
  - optimize computed class derivation

- **slideover:** Redesign component styles and types ([530b7f8](https://github.com/favorodera/centoui/commit/530b7f8))

  - Update slideover variants and layout styles
  - Add backdrop blur and refined spacing
  - Remove redundant portal and overlay exports
  - Simplify component prop type definitions

- **slideover:** Use size-full utility for variants ([41edac9](https://github.com/favorodera/centoui/commit/41edac9))

  - replace h-full and w-full with size-full
  - simplify slideover layout styling

- **slideover:** Simplify style computation ([4c051fd](https://github.com/favorodera/centoui/commit/4c051fd))

  - inline slideover variants call
  - streamline classNames computed property

- **slideover:** Simplify classNames computation ([087a196](https://github.com/favorodera/centoui/commit/087a196))

  - inline slideoverVariants call
  - improve code readability

- **slideover:** Simplify footer style calculation ([50326a8](https://github.com/favorodera/centoui/commit/50326a8))

  - inline slideover variants call
  - simplify computed property logic

- **slideover:** Update header close button implementation ([0276d4c](https://github.com/favorodera/centoui/commit/0276d4c))

  - replace manual button styles with Button component
  - simplify computed class logic for slideover header
  - update close button structure for better consistency

- **slideover:** Remove unused overlay and portal components ([6561b30](https://github.com/favorodera/centoui/commit/6561b30))

  - delete slideover-overlay component
  - delete slideover-portal component

- **slideover:** Simplify variant computation ([6f4ec70](https://github.com/favorodera/centoui/commit/6f4ec70))

  - inline slideover variant destructuring
  - simplify computed property return statement

- **slideover:** Simplify class names computation ([491b463](https://github.com/favorodera/centoui/commit/491b463))

  - inline slideoverVariants call
  - simplify computed property logic

- **progress:** Rename variants and clean up styles ([6c58737](https://github.com/favorodera/centoui/commit/6c58737))

  - rename progressBarVariants to progressVariants
  - remove unnecessary whitespace from indicator style

- **progress:** Update component variant usage ([acaa124](https://github.com/favorodera/centoui/commit/acaa124))

  - rename progressBarVariants to progressVariants
  - update root variant call to accept class object

- **slider:** Simplify component and update styles ([fd70d70](https://github.com/favorodera/centoui/commit/fd70d70))

  - Refactor slider to use a unified component
  - Update variants and slot styles
  - Apply group-based state management
  - Clean up redundant type definitions

- **slider:** Remove slider component files ([3d7f911](https://github.com/favorodera/centoui/commit/3d7f911))

  - delete slider-range, root, thumb, and track files

- **switch:** Simplify component and update styles ([b433fe9](https://github.com/favorodera/centoui/commit/b433fe9))

  - Consolidate switch components into a single file
  - Update switch sizing and spacing constants
  - Refactor variant props and type exports

- **switch:** Consolidate root and thumb components ([2dbbfb2](https://github.com/favorodera/centoui/commit/2dbbfb2))

  - merge switch-root and switch-thumb into switch.vue
  - simplify component structure
  - remove redundant context injection

- **textarea:** Simplify variants and props ([65135d9](https://github.com/favorodera/centoui/commit/65135d9))

  - Remove size variants and simplify styles
  - Update scrollbar and disabled state styling
  - Refactor TextareaProps type definition
  - Clean up unused exports and types

- **textarea:** Simplify component props and styles ([39dfadb](https://github.com/favorodera/centoui/commit/39dfadb))

  - remove default size prop
  - simplify classNames computed property
  - remove data-size attribute from textarea element

- **tooltip:** Simplify component implementation ([ffcb0c5](https://github.com/favorodera/centoui/commit/ffcb0c5))

  - Integrate portal and arrow into TooltipContent
  - Add showArrow prop to TooltipContent
  - Remove redundant wrapper components
  - Simplify variant and class logic

- **core:** Simplify component structure and registry ([8622eaf](https://github.com/favorodera/centoui/commit/8622eaf))

  - refactor component registry and file structure
  - simplify tailwind-variants slot definitions
  - remove redundant portal and arrow wrappers
  - replace composite components with single files
  - remove deprecated progress-bar and tile components


### Chores

- **tile:** Remove Tile component and preview view ([eb7e0c9](https://github.com/favorodera/centoui/commit/eb7e0c9))

  - Remove Tile component implementation
  - Delete Tile component preview demo


### Styling

- **select:** Adjust layout and sizing styles ([761b27f](https://github.com/favorodera/centoui/commit/761b27f))

  - Fix viewport and group padding alignment
  - Update content width to use full width instead

- **select:** Reorder tailwind classes for consistency ([84feb8c](https://github.com/favorodera/centoui/commit/84feb8c))
- **progress:** Reduce root height to 1.5 units ([1bd89df](https://github.com/favorodera/centoui/commit/1bd89df))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.36...v1.0.0-alpha.37

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.36...v1.0.0-alpha.37)

### Added

- **item:** Add entry point for item component ([e49916f](https://github.com/favorodera/centoui/commit/e49916f))
- **core:** Add item component variants ([6d95665](https://github.com/favorodera/centoui/commit/6d95665))

  - define item component slots
  - add size, variant, and orientation variants

- **item:** Add prop types for item components ([02d410b](https://github.com/favorodera/centoui/commit/02d410b))

  - define base prop types for item component sub-parts
  - import PrimitiveProps and ClassProp types

- **item:** Add context and variant props to ItemRoot ([30aa89a](https://github.com/favorodera/centoui/commit/30aa89a))

  - Implement context provider for ItemRoot
  - Add size, variant, and orientation props
  - Export ItemRoot component

- **item:** Add ItemRoot component ([a350861](https://github.com/favorodera/centoui/commit/a350861))

  - implement ItemRoot using Primitive
  - support size, variant, and orientation props
  - provide context for child components

- **item:** Rename naked variant to ghost and export ItemMedia ([1a88dab](https://github.com/favorodera/centoui/commit/1a88dab))
- **item:** Add ItemMedia component ([0e7d3d2](https://github.com/favorodera/centoui/commit/0e7d3d2))
- **item:** Add ItemContent component ([d260b2a](https://github.com/favorodera/centoui/commit/d260b2a))

  - implement ItemContent component
  - export ItemContent from item index

- **item:** Implement ItemHeader component ([de96887](https://github.com/favorodera/centoui/commit/de96887))

  - add ItemHeader component
  - export ItemHeader from item entry point

- **item:** Implement ItemTitle component ([bee1022](https://github.com/favorodera/centoui/commit/bee1022))

  - add ItemTitle component
  - export ItemTitle from item index

- **item:** Add ItemDescription component ([1c70ab7](https://github.com/favorodera/centoui/commit/1c70ab7))
- **item:** Add ItemBody component ([b64c3e0](https://github.com/favorodera/centoui/commit/b64c3e0))

  - implement ItemBody component
  - export ItemBody from index

- **item:** Add ItemFooter component ([b3d2fd5](https://github.com/favorodera/centoui/commit/b3d2fd5))

  - implement ItemFooter component
  - export ItemFooter from index

- **item:** Add ItemActions component ([c930e2d](https://github.com/favorodera/centoui/commit/c930e2d))

  - implement ItemActions component
  - export ItemActions from item index

- **item:** Add preview view and remove orientation ([45f2c7a](https://github.com/favorodera/centoui/commit/45f2c7a))

  - add item preview view
  - remove orientation prop from item components

- **item:** Add mediaType support to item-media ([b7a9e7a](https://github.com/favorodera/centoui/commit/b7a9e7a))

  - pass mediaType to variant styles
  - add data-type attribute to primitive component

- **item:** Refactor variants and simplify components ([fa7a688](https://github.com/favorodera/centoui/commit/fa7a688))

  - Update itemVariants with new styles and slots
  - Add mediaType variant for icons and images
  - Remove unused header, body, and footer components
  - Clean up redundant props from ItemRootContext

- **item:** Add ItemGroup and ItemSeparator components ([02191ed](https://github.com/favorodera/centoui/commit/02191ed))

  - add ItemGroup component and types
  - add ItemSeparator component and types
  - update item variants with new slots

- **item:** Add ItemGroup component ([8d27145](https://github.com/favorodera/centoui/commit/8d27145))

  - implement ItemGroup using Primitive
  - add variants for group styling
  - forward props to the underlying component

- **item:** Add item separator component ([16973b3](https://github.com/favorodera/centoui/commit/16973b3))

  - implement ItemSeparator using Reka UI
  - add variant support for styling
  - expose component props for customization

- **registry:** Add item component to registry ([2b45ead](https://github.com/favorodera/centoui/commit/2b45ead))

  - add item component configuration
  - register item in core index


### Fixed

- **item:** Update default variant to ghost ([b5ccb39](https://github.com/favorodera/centoui/commit/b5ccb39))

### Refactors

- **item:** Remove size variant from item component ([a23f6f5](https://github.com/favorodera/centoui/commit/a23f6f5))

  - remove size prop from item root
  - remove size from item variants and context
  - update all sub-components to remove size usage

- **item:** Remove unused item-body component ([93f1aff](https://github.com/favorodera/centoui/commit/93f1aff))
- **item:** Remove unused ItemFooter component ([03e6937](https://github.com/favorodera/centoui/commit/03e6937))
- **item:** Remove unused item-header component ([f6cf862](https://github.com/favorodera/centoui/commit/f6cf862))

  - delete item-header.vue from core package

- **avatar:** Consolidate group variants into avatarVariants ([0830d5b](https://github.com/favorodera/centoui/commit/0830d5b))

  - move group styles into avatarVariants
  - remove redundant avatarGroupVariants
  - update avatar-group component to use new slots

- **kbd:** Consolidate variants into kbdVariants ([a2d7774](https://github.com/favorodera/centoui/commit/a2d7774))

  - Move group slot into kbdVariants
  - Remove redundant kbdGroupVariants
  - Update KbdGroup component to use merged variants


### Documentation

- **readme:** Refactor links to markdown syntax ([f7f4dc1](https://github.com/favorodera/centoui/commit/f7f4dc1))

  - Convert HTML anchor tags to markdown links
  - Improve documentation readability across project


### Chores

- **docs:** Add target="_blank" to external links ([8c817a7](https://github.com/favorodera/centoui/commit/8c817a7))

### Styling

- **alert:** Update icon sizing tokens ([1889ffa](https://github.com/favorodera/centoui/commit/1889ffa))

  - change svg width to 4
  - update svg height to lh

- **alert:** Reorder tailwind classes for consistency ([0e7b8c5](https://github.com/favorodera/centoui/commit/0e7b8c5))
- **item:** Update layout and styling for item component ([193bfa2](https://github.com/favorodera/centoui/commit/193bfa2))

  - adjust padding and layout for item root
  - apply rounded corners to first child images
  - refactor media slot styles for better readability

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.35...v1.0.0-alpha.36

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.35...v1.0.0-alpha.36)

### Documentation

- **core:** Add utilsFilePath property to README ([b7f322d](https://github.com/favorodera/centoui/commit/b7f322d))

  - Document utilsFilePath configuration option

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.34...v1.0.0-alpha.35

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.34...v1.0.0-alpha.35)

### Added

- **avatar:** Add AvatarGroup component ([bf1831c](https://github.com/favorodera/centoui/commit/bf1831c))

  - Groups multiple Avatar components
  - Applies group-level styling
  - Forwards props to the root element

- **avatar:** Add AvatarGroup component ([36ab545](https://github.com/favorodera/centoui/commit/36ab545))
- **kbd:** Add KbdGroup component ([08b4ba2](https://github.com/favorodera/centoui/commit/08b4ba2))
- **kbd:** Add KbdGroup component ([2204cce](https://github.com/favorodera/centoui/commit/2204cce))
- **kbd-group:** Remove KbdGroup component ([8c12848](https://github.com/favorodera/centoui/commit/8c12848))
- **core:** Add pin-input component ([0381dd0](https://github.com/favorodera/centoui/commit/0381dd0))
- **pin-input:** Add pin-input-group component ([f95e440](https://github.com/favorodera/centoui/commit/f95e440))
- **pin-input:** Add pin input ([b87e4b1](https://github.com/favorodera/centoui/commit/b87e4b1))
- **pin-input:** Add pin-input-root component ([142f2c8](https://github.com/favorodera/centoui/commit/142f2c8))
- **pin-input:** Add pin-input-separator component ([af71a43](https://github.com/favorodera/centoui/commit/af71a43))
- **core:** Add isSlotEmpty utility function ([dc04213](https://github.com/favorodera/centoui/commit/dc04213))

  - Check if Vue slots contain meaningful content
  - Ignore comments and whitespace-only text nodes
  - Recursively validate fragment children

- **avatar:** Add avatar-group component ([e4d1641](https://github.com/favorodera/centoui/commit/e4d1641))
- **registry:** Add pin-input and refactor groups ([8018d65](https://github.com/favorodera/centoui/commit/8018d65))

  - Add pin-input component
  - Move avatar-group into avatar
  - Move kbd-group into kbd

- **kbd:** Add kbd-group component to registry ([c06c102](https://github.com/favorodera/centoui/commit/c06c102))
- **registry:** Add pin-input component definition ([ead5c2f](https://github.com/favorodera/centoui/commit/ead5c2f))

  - register pin-input component files
  - add component dependencies for pin-input


### Fixed

- **accordion:** Update slot type definitions ([0aae2d9](https://github.com/favorodera/centoui/commit/0aae2d9))

  - Make slot definitions optional
  - Change slot return types from [] to any

- **alert-dialog:** Make root default slot optional - Allow default slot to be omitted. - Change slot return type from `[]` to `any`. - Add eslint-disable for explicit any. ([7cb4357](https://github.com/favorodera/centoui/commit/7cb4357))
- **aspect-ratio:** Make default slot optional and flexible ([df7843a](https://github.com/favorodera/centoui/commit/df7843a))
- **collapsible:** Make root slot optional and flexible - Make default slot optional - Allow any return type for slot function ([3925882](https://github.com/favorodera/centoui/commit/3925882))
- **progress-bar:** Make default slot optional ([80f475e](https://github.com/favorodera/centoui/commit/80f475e))

  - Set default slot as optional
  - Update return type to any for flexibility

- **separator:** Check for empty slot using utility ([2930733](https://github.com/favorodera/centoui/commit/2930733))

  - use isSlotEmpty to validate default slot content

- **slider:** Make default slot optional and flexible ([4107376](https://github.com/favorodera/centoui/commit/4107376))

  - Set default slot as optional
  - Update return type to any for better compatibility

- **switch:** Make default slot optional and flexible ([2c9f4cf](https://github.com/favorodera/centoui/commit/2c9f4cf))

  - Set default slot as optional
  - Update return type to any for better compatibility

- **tooltip:** Make default slot optional ([88047c8](https://github.com/favorodera/centoui/commit/88047c8))

  - update TooltipRootSlots default slot to optional
  - change return type to any for flexibility


### Refactors

- **avatar-group:** Remove avatar-group component ([1b6377f](https://github.com/favorodera/centoui/commit/1b6377f))
- **avatar-group:** Remove component ([fb6c93d](https://github.com/favorodera/centoui/commit/fb6c93d))
- **button-group:** Remove redundant select styling ([e6a406b](https://github.com/favorodera/centoui/commit/e6a406b))
- **pagination:** Improve slot type definitions ([470f157](https://github.com/favorodera/centoui/commit/470f157))
- **select:** Make slot definitions optional ([531a23e](https://github.com/favorodera/centoui/commit/531a23e))

  - Mark default slots as optional
  - Update slot return types to any
  - Improve flexibility for slot usage

- **select:** Remove default asChild prop value ([eac836f](https://github.com/favorodera/centoui/commit/eac836f))

  - remove default value for asChild in SelectIcon
  - update prop definition to match base interface

- **select:** Remove default asChild prop value ([70bd8e4](https://github.com/favorodera/centoui/commit/70bd8e4))

  - remove default value for asChild prop
  - update component props definition

- **separator:** Adjust props and slot definition ([492f64b](https://github.com/favorodera/centoui/commit/492f64b))

  - Omit orientation from RekaSeparatorProps
  - Make default slot optional in SeparatorSlots


### Chores

- **core:** Add path alias for utils ([c649459](https://github.com/favorodera/centoui/commit/c649459))
- **core:** Add utils path alias ([5e30634](https://github.com/favorodera/centoui/commit/5e30634))
- **registry:** Remove avatar-group component entry ([9fd8651](https://github.com/favorodera/centoui/commit/9fd8651))

  - delete avatar-group.json registry file

- **registry:** Remove kbd-group component definition ([53c394d](https://github.com/favorodera/centoui/commit/53c394d))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.33...v1.0.0-alpha.34

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.33...v1.0.0-alpha.34)

### Added

- **slider:** Add Slider component - Define styling with tailwind-variants - Export sub-components (Root, Track, etc.) - Set up context for SliderRoot - Define types for props, emits, and slots ([ad53d39](https://github.com/favorodera/centoui/commit/ad53d39))
- **slider:** Add slider range component ([e70cee8](https://github.com/favorodera/centoui/commit/e70cee8))
- **slider:** Add SliderRoot component ([8a68989](https://github.com/favorodera/centoui/commit/8a68989))
- **slider:** Add thumb component ([3d61c81](https://github.com/favorodera/centoui/commit/3d61c81))
- **slider:** Add track component ([b8bbc58](https://github.com/favorodera/centoui/commit/b8bbc58))
- **component:** Add slider component - Add `slider.json` component definition - Register slider in `index.json` ([94e2397](https://github.com/favorodera/centoui/commit/94e2397))

### Styling

- **progress-bar:** Update background to input ([6bf73a9](https://github.com/favorodera/centoui/commit/6bf73a9))
- **switch:** Use inherited border-radius for thumb ([15ce9a0](https://github.com/favorodera/centoui/commit/15ce9a0))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.32...v1.0.0-alpha.33

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.32...v1.0.0-alpha.33)

### Added

- **components:** Add select and separator ([7d33293](https://github.com/favorodera/centoui/commit/7d33293))

  - Add Select component using reka-ui
  - Add Separator component
  - Remove default min-rows from textarea

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.31...v1.0.0-alpha.32

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.31...v1.0.0-alpha.32)

### Added

- **components:** Add InputGroup, Label, and Textarea components ([dc69186](https://github.com/favorodera/centoui/commit/dc69186))

### Fixed

- **input:** Resolve TS2590 union complexity ([e72e896](https://github.com/favorodera/centoui/commit/e72e896))

  - Extend vue InputHTMLAttributes
  - Omit autocomplete to avoid complexity
  - Redefine autocomplete with simpler types

- **avatar:** Omit src from delegated props ([dbd632f](https://github.com/favorodera/centoui/commit/dbd632f))
- **avatar:** Omit class in AvatarImageProps ([402962d](https://github.com/favorodera/centoui/commit/402962d))

  - Omit class from ImgHTMLAttributes
  - Avoids type conflict with ClassProp


### Refactors

- **input:** Remove redundant comments ([7f96bdb](https://github.com/favorodera/centoui/commit/7f96bdb))

### Chores

- **core:** Add dom libs to tsconfig ([b9e95ff](https://github.com/favorodera/centoui/commit/b9e95ff))

### Styling

- **accordion:** Improve class readability ([67c4366](https://github.com/favorodera/centoui/commit/67c4366))
- **alert:** Format media variant classes ([578a79c](https://github.com/favorodera/centoui/commit/578a79c))
- **alert-dialog:** Format tailwind classes ([17a3023](https://github.com/favorodera/centoui/commit/17a3023))
- **avatar-group:** Add blank line for readability ([29f0478](https://github.com/favorodera/centoui/commit/29f0478))
- **badge:** Format Tailwind classes ([ce2d3f3](https://github.com/favorodera/centoui/commit/ce2d3f3))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.30...v1.0.0-alpha.31

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.30...v1.0.0-alpha.31)

### Added

- **input:** Add input component variants and types ([108b22e](https://github.com/favorodera/centoui/commit/108b22e))

  - Define Tailwind variants and sizes
  - Export InputProps and InputEmits types
  - Export Input Vue component

- **input:** Add base input component ([0237227](https://github.com/favorodera/centoui/commit/0237227))

  - Add Vue 3 input component with v-model support
  - Integrate useVModel and variant classes

- **registry:** Add input component ([92beb3c](https://github.com/favorodera/centoui/commit/92beb3c))

  - Add input component configuration
  - Register input component in index


### Fixed

- **button:** Omit class from ButtonHTMLAttributes ([2336ed6](https://github.com/favorodera/centoui/commit/2336ed6))

  - Fix type conflict with class prop


### Documentation

- **readme:** Clean up and standardize readmes ([2ab5c6f](https://github.com/favorodera/centoui/commit/2ab5c6f))

  - Fix badge URL encoding for spaces
  - Capitalize and improve alt text descriptions
  - Remove emoji from preview app header


### Styling

- **input:** Reorder tailwind classes ([42adbd2](https://github.com/favorodera/centoui/commit/42adbd2))
- **select:** Add trigger transition duration ([a8c6194](https://github.com/favorodera/centoui/commit/a8c6194))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.29...v1.0.0-alpha.30

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.29...v1.0.0-alpha.30)

### Documentation

- **readme:** Overhaul readmes across monorepo ([96ccaab](https://github.com/favorodera/centoui/commit/96ccaab))

  - Rewrite all package and app README files
  - Add detailed CLI usage and architecture docs
  - Update package descriptions and keywords

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.28...v1.0.0-alpha.29

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.28...v1.0.0-alpha.29)

### Added

- **nuxt:** Implement component auto-registration ([a7491f1](https://github.com/favorodera/centoui/commit/a7491f1))

  - Use c12 to load configuration in CLI and Nuxt
  - Add Nuxt module component registration logic


### Chores

- **playgrounds:** Restructure dev playgrounds ([f3aecc8](https://github.com/favorodera/centoui/commit/f3aecc8))

  - Remove deprecated apps/sandbox
  - Add Vue and Nuxt dev playgrounds
  - Upgrade workspace pnpm engine to v11

- **playground:** Clean up local components ([044c9c1](https://github.com/favorodera/centoui/commit/044c9c1))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.27...v1.0.0-alpha.28

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.27...v1.0.0-alpha.28)

### Added

- **icon:** Add Icon component - Use @iconify/vue for icon rendering. - Apply styling with iconVariants. - Support prop forwarding via useForwardProps. - Manage aria-hidden attribute. ([3f15b1d](https://github.com/favorodera/centoui/commit/3f15b1d))
- **icon:** Add Icon component ([28675e7](https://github.com/favorodera/centoui/commit/28675e7))

  - Introduce new Icon component
  - Define iconVariants for styling
  - Export Icon.vue component
  - Add IconProps type definition
  - Allow ariaHidden control for accessibility

- **select:** Add SR-only text to scroll up button` ([199d021](https://github.com/favorodera/centoui/commit/199d021))
- **accordion:** Add trigger and icon dependency ([7e93c68](https://github.com/favorodera/centoui/commit/7e93c68))
- **core:** Add icon dependency to breadcrumb ([b2ddada](https://github.com/favorodera/centoui/commit/b2ddada))
- **core:** Add icon dependency to pagination ([8706597](https://github.com/favorodera/centoui/commit/8706597))
- **core:** Add icon dependency to select ([a5cd7e5](https://github.com/favorodera/centoui/commit/a5cd7e5))
- **core:** Add icon dependency to slideover ([105e36d](https://github.com/favorodera/centoui/commit/105e36d))

### Fixed

- **icon:** Correct NuxtIconProps type reference ([881856b](https://github.com/favorodera/centoui/commit/881856b))

### Refactors

- **accordion:** Use local Icon component ([b981ac8](https://github.com/favorodera/centoui/commit/b981ac8))
- **core:** Update Icon import to internal path ([96fa6a7](https://github.com/favorodera/centoui/commit/96fa6a7))
- **breadcrumb:** Use internal Icon component ([a0a7658](https://github.com/favorodera/centoui/commit/a0a7658))
- **pagination:** Update Icon component import ([ced8a79](https://github.com/favorodera/centoui/commit/ced8a79))
- **pagination:** Use internal Icon component ([bef96e0](https://github.com/favorodera/centoui/commit/bef96e0))
- **icon:** Use local Icon component ([55e4b19](https://github.com/favorodera/centoui/commit/55e4b19))
- **icon:** Use local Icon component ([305f98c](https://github.com/favorodera/centoui/commit/305f98c))
- **icon:** Centralize Icon component import ([1a98d73](https://github.com/favorodera/centoui/commit/1a98d73))
- **select:** Use internal Icon component ([2fb7672](https://github.com/favorodera/centoui/commit/2fb7672))
- **select:** Use local Icon component ([1b022b8](https://github.com/favorodera/centoui/commit/1b022b8))
- **select:** Improve scroll button accessibility ([b03e642](https://github.com/favorodera/centoui/commit/b03e642))
- **icon:** Use internal component import ([b45f2a4](https://github.com/favorodera/centoui/commit/b45f2a4))

### Chores

- **core:** Update peer dependencies ([eca7f8f](https://github.com/favorodera/centoui/commit/eca7f8f))

  - Update vue peer dependency to ^3.5.0
  - Move core dependencies to peerDependencies
  - Add @nuxt/icon to peer dependencies
  - Mark icon packages as optional peers

- **registry:** Update component dependencies ([ce43334](https://github.com/favorodera/centoui/commit/ce43334))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.26...v1.0.0-alpha.27

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.26...v1.0.0-alpha.27)

### Added

- **slideover:** Update styles and add showClose ([fe64a7c](https://github.com/favorodera/centoui/commit/fe64a7c))

  - Update content spacing, background, and borders
  - Add showClose prop to SlideoverHeaderProps

- **slideover:** Support custom close button ([f1e78d0](https://github.com/favorodera/centoui/commit/f1e78d0))

  - Add showClose prop to header
  - Add close slot for custom close button

- **avatar-group:** Add avatar group component ([4411bfa](https://github.com/favorodera/centoui/commit/4411bfa))

  - Add AvatarGroup component implementation
  - Update card view to use new component
  - Add preview page for avatar group
  - Register new component in core

- **breadcrumb:** Add ellipsis component ([98a2dbf](https://github.com/favorodera/centoui/commit/98a2dbf))

  - Create breadcrumb-ellipsis.vue
  - Use reka-ui Primitive and Icon

- **breadcrumb:** Add breadcrumb-item component ([a0a7d9b](https://github.com/favorodera/centoui/commit/a0a7d9b))

  - Implement BreadcrumbItem using Reka UI
  - Support prop forwarding and custom classes

- **breadcrumb:** Add breadcrumb-link component ([c3b9320](https://github.com/favorodera/centoui/commit/c3b9320))

  - Create component using reka-ui Primitive

- **breadcrumb:** Add breadcrumb-list component ([31ed872](https://github.com/favorodera/centoui/commit/31ed872))

  - Implement breadcrumb-list using reka-ui

- **breadcrumb:** Add breadcrumb-page component ([f24e126](https://github.com/favorodera/centoui/commit/f24e126))

  - Create page component for breadcrumbs
  - Use reka-ui Primitive and forward props

- **breadcrumb:** Add breadcrumb-root component ([db89def](https://github.com/favorodera/centoui/commit/db89def))

  - implement breadcrumb-root component
  - use reka-ui primitive and forward props

- **breadcrumb:** Add separator component ([f33e1b3](https://github.com/favorodera/centoui/commit/f33e1b3))
- **breadcrumb:** Add Breadcrumb component ([1b5148e](https://github.com/favorodera/centoui/commit/1b5148e))
- **breadcrumb:** Add breadcrumb component to registry ([d64f3d0](https://github.com/favorodera/centoui/commit/d64f3d0))

### Fixed

- **core:** Improve component overflow and scroll ([17d4063](https://github.com/favorodera/centoui/commit/17d4063))

  - Move overflow scroll from content to body
  - Add stroke border to select arrow
  - Adjust slideover footer layout conditionally

- **pagination:** Update first page icon ([24c2151](https://github.com/favorodera/centoui/commit/24c2151))

### Refactors

- **progress:** Rename component to progress-bar ([d39e3e1](https://github.com/favorodera/centoui/commit/d39e3e1))
- **components:** Update previews and title styles ([ba0b810](https://github.com/favorodera/centoui/commit/ba0b810))

  - Redesign card, popover, and slideover previews
  - Remove tight line-height from component titles
  - Add rich mock data

- **pagination:** Update last page icon ([9c2f784](https://github.com/favorodera/centoui/commit/9c2f784))
- **slideover:** Improve close button accessibility ([f84d09d](https://github.com/favorodera/centoui/commit/f84d09d))
- **icons:** Standardize default icon names ([9ecc112](https://github.com/favorodera/centoui/commit/9ecc112))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.25...v1.0.0-alpha.26

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.25...v1.0.0-alpha.26)

### Added

- **card:** Add CardBody component ([f55d2eb](https://github.com/favorodera/centoui/commit/f55d2eb))

  - Add card-body.vue using reka-ui Primitive

- **card:** Add card-description component ([2b5f0c5](https://github.com/favorodera/centoui/commit/2b5f0c5))

  - Implement card-description Vue component
  - Use reka-ui Primitive and cardVariants

- **card:** Add card-footer component ([441cb56](https://github.com/favorodera/centoui/commit/441cb56))

  - Implement card-footer using reka-ui
  - Integrate cardVariants for styling

- **card:** Add CardHeader component ([5582f85](https://github.com/favorodera/centoui/commit/5582f85))
- **card:** Add CardRoot component ([f60b834](https://github.com/favorodera/centoui/commit/f60b834))
- **card:** Add card-title component ([ad89eb8](https://github.com/favorodera/centoui/commit/ad89eb8))

  - Add CardTitle Vue component
  - Use reka-ui Primitive and forward props

- **card:** Add card component ([b252b61](https://github.com/favorodera/centoui/commit/b252b61))

  - Define Tailwind variants for card slots
  - Export sub-components and prop types

- **registry:** Add card component ([081cdf4](https://github.com/favorodera/centoui/commit/081cdf4))

  - Register card component files and metadata

- **registry:** Add card component ([cbf8f4f](https://github.com/favorodera/centoui/commit/cbf8f4f))
- **slideover:** Add slideover component ([45ccf87](https://github.com/favorodera/centoui/commit/45ccf87))
- **slideover:** Add SlideoverBody component ([788e13a](https://github.com/favorodera/centoui/commit/788e13a))
- **slideover:** Add SlideoverClose component ([c57a96a](https://github.com/favorodera/centoui/commit/c57a96a))
- **slideover:** Add SlideoverContent component ([a2b5cb7](https://github.com/favorodera/centoui/commit/a2b5cb7))
- **slideover:** Add description component ([5d7e4af](https://github.com/favorodera/centoui/commit/5d7e4af))
- **slideover:** Add SlideoverFooter component - Add new component for slideover footer. - Integrates with slideover variants. - Utilizes reka-ui Primitive. ([1506700](https://github.com/favorodera/centoui/commit/1506700))
- **slideover:** Add SlideoverHeader component ([ffe3935](https://github.com/favorodera/centoui/commit/ffe3935))
- **slideover:** Add SlideoverPortal component ([dc3b665](https://github.com/favorodera/centoui/commit/dc3b665))
- **slideover:** Add SlideoverRoot component ([a7eb6c7](https://github.com/favorodera/centoui/commit/a7eb6c7))
- **slideover:** Add SlideoverTitle component ([c2aa348](https://github.com/favorodera/centoui/commit/c2aa348))
- **slideover:** Add SlideoverTrigger component ([4ed7084](https://github.com/favorodera/centoui/commit/4ed7084))
- **slideover:** Add Slideover component with related files and dependencies ([40d6ff3](https://github.com/favorodera/centoui/commit/40d6ff3))
- **registry:** Add slideover component ([fbd8765](https://github.com/favorodera/centoui/commit/fbd8765))

### Fixed

- **accordion:** Fix icon size and alignment ([767fe9e](https://github.com/favorodera/centoui/commit/767fe9e))

### Refactors

- **alert:** Remove default for as prop ([2b6ea0e](https://github.com/favorodera/centoui/commit/2b6ea0e))
- **alert:** Remove default props ([c44b6e2](https://github.com/favorodera/centoui/commit/c44b6e2))

  - Remove default as prop in AlertContent

- **alert:** Remove default as prop ([2b89ae6](https://github.com/favorodera/centoui/commit/2b89ae6))

  - Remove withDefaults from alert description

- **alert:** Remove default as prop ([62bb79d](https://github.com/favorodera/centoui/commit/62bb79d))
- **alert:** Remove default as prop ([e7dfcb8](https://github.com/favorodera/centoui/commit/e7dfcb8))
- **alert:** Remove default 'as' prop ([0a63c4c](https://github.com/favorodera/centoui/commit/0a63c4c))
- **alert-dialog:** Simplify footer props ([cfb24cc](https://github.com/favorodera/centoui/commit/cfb24cc))
- **alert-dialog:** Remove default props ([f3a6d2e](https://github.com/favorodera/centoui/commit/f3a6d2e))

  - Remove withDefaults from header component

- **popover:** Remove withDefaults from PopoverBody ([db13f1b](https://github.com/favorodera/centoui/commit/db13f1b))
- **popover-footer:** Remove explicit 'as' prop default ([1b46a5c](https://github.com/favorodera/centoui/commit/1b46a5c))
- **popover:** Simplify PopoverHeader props ([a75f466](https://github.com/favorodera/centoui/commit/a75f466))
- **button:** Apply transparent border to root ([26af78c](https://github.com/favorodera/centoui/commit/26af78c))
- **alert-dialog:** Simplify title styles ([1071e63](https://github.com/favorodera/centoui/commit/1071e63))

### Styling

- **alert:** Update svg size and title leading ([4f36584](https://github.com/favorodera/centoui/commit/4f36584))

  - Use size-4 and translate-y-0.5 for svg
  - Add leading-tight to title variant

- **alert-dialog:** Adjust title line-height ([79c75cb](https://github.com/favorodera/centoui/commit/79c75cb))
- **popover:** Use tight line-height ([d75a4bf](https://github.com/favorodera/centoui/commit/d75a4bf))
- **card:** Remove sm:text-lg from title ([c3a6f50](https://github.com/favorodera/centoui/commit/c3a6f50))
- **popover:** Adjust description line height ([baaa1d2](https://github.com/favorodera/centoui/commit/baaa1d2))
- **slideover:** Reduce max width ([c4bb5bd](https://github.com/favorodera/centoui/commit/c4bb5bd))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.24...v1.0.0-alpha.25

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.24...v1.0.0-alpha.25)

### Added

- **select:** Allow content in separator - Renders default slot between separator lines. - Falls back to a single line if no slot content. ([df8c327](https://github.com/favorodera/centoui/commit/df8c327))
- **pagination:** Add pagination component index ([4727b5e](https://github.com/favorodera/centoui/commit/4727b5e))

  - Export pagination components and variants
  - Define component props with tailwind-variants
  - Export pagination utility types and slots

- **pagination:** Add pagination ellipsis component ([4e858e6](https://github.com/favorodera/centoui/commit/4e858e6))

  - implement pagination-ellipsis component
  - integrate reka-ui pagination ellipsis
  - add class variant support

- **pagination:** Add first page button component ([4d5a12a](https://github.com/favorodera/centoui/commit/4d5a12a))
- **pagination:** Add PaginationLast component ([019d7f6](https://github.com/favorodera/centoui/commit/019d7f6))
- **pagination:** Add list item component ([c330a78](https://github.com/favorodera/centoui/commit/c330a78))
- **pagination:** Add PaginationList component ([dc2b85e](https://github.com/favorodera/centoui/commit/dc2b85e))

  - implement PaginationList using reka-ui
  - add variant support for list styling
  - include slot forwarding for custom content

- **pagination:** Add PaginationNext component wrapper ([2e44701](https://github.com/favorodera/centoui/commit/2e44701))
- **pagination:** Add prev button component ([033da80](https://github.com/favorodera/centoui/commit/033da80))
- **pagination:** Add root component - Wraps reka-ui PaginationRoot - Forwards props and emits - Applies styling variants ([4f825f2](https://github.com/favorodera/centoui/commit/4f825f2))
- **pagination:** Add pagination component ([cc02fff](https://github.com/favorodera/centoui/commit/cc02fff))
- **pagination:** Add style variants and context ([cb8261a](https://github.com/favorodera/centoui/commit/cb8261a))

  - Add tailwind classes to pagination slots
  - Implement root context for size and variants
  - Update prop types to support button styling

- **pagination:** Add default icon to ellipsis ([918cb7d](https://github.com/favorodera/centoui/commit/918cb7d))

  - Use config ellipsis icon as default
  - Add screen reader text for accessibility

- **pagination:** Enhance PaginationFirst component with context and default props ([b0afe9e](https://github.com/favorodera/centoui/commit/b0afe9e))
- **pagination:** Enhance pagination-last component ([313b59d](https://github.com/favorodera/centoui/commit/313b59d))

  - Inherit size, variant and square from root
  - Apply button styling to class names
  - Add default slot with icon and sr-only text

- **pagination:** Resolve variant and size ([f1cf811](https://github.com/favorodera/centoui/commit/f1cf811))

  - Inject pagination root context
  - Resolve variant and size dynamically
  - Apply button variants to list item
  - Omit non-delegated props correctly

- **pagination:** Enhance pagination-next component ([948cf23](https://github.com/favorodera/centoui/commit/948cf23))

  - Add variant, size, and square props support
  - Inherit styles from root pagination context
  - Provide default next icon and sr-only text

- **pagination:** Enhance pagination-prev component ([d1cda52](https://github.com/favorodera/centoui/commit/d1cda52))

  - Integrate with root pagination context
  - Apply button variants and sizing
  - Add default chevron icon and sr-only text

- **pagination:** Enhance pagination-root component with context and default props ([5be3654](https://github.com/favorodera/centoui/commit/5be3654))
- **icons:** Update icon configuration with additional chevron and ellipsis icons ([250c044](https://github.com/favorodera/centoui/commit/250c044))
- **pagination:** Update pagination list gap and ellipsis styles ([3565fba](https://github.com/favorodera/centoui/commit/3565fba))
- **switch:** Add Switch component - Adds base component and variants - Includes SwitchRoot and SwitchThumb - Defines styling using tailwind-variants - Provides context and types ([3aa98d0](https://github.com/favorodera/centoui/commit/3aa98d0))
- **switch:** Implement SwitchRoot component with context and props handling ([acaf5be](https://github.com/favorodera/centoui/commit/acaf5be))
- **switch:** Add SwitchThumb component with context and props handling ([6ec2eeb](https://github.com/favorodera/centoui/commit/6ec2eeb))
- **switch:** Add Switch component with schema, description, and file references ([3eb2df3](https://github.com/favorodera/centoui/commit/3eb2df3))
- **switch:** Add switch.json for Switch component registration ([c2fa828](https://github.com/favorodera/centoui/commit/c2fa828))
- **alert-dialog:** Update content styles for improved layout and responsiveness ([755a671](https://github.com/favorodera/centoui/commit/755a671))

### Fixed

- **pagination:** Format ellipsis styles for better readability ([a09b55b](https://github.com/favorodera/centoui/commit/a09b55b))
- **progress:** Update root slot style to use rounded-xs for consistency ([c04bca7](https://github.com/favorodera/centoui/commit/c04bca7))

### Refactors

- **components:** Streamline and refine component styles ([02c5ae2](https://github.com/favorodera/centoui/commit/02c5ae2))

  - Remove Text component and its preview
  - Unify SelectTrigger variant to `outline`
  - Adjust spacing, padding, and font sizes

- **select:** Improve component styling and variants ([79f4f17](https://github.com/favorodera/centoui/commit/79f4f17))
- **select:** Improve item layout and sizing logic ([7a51b07](https://github.com/favorodera/centoui/commit/7a51b07))

### Styling

- **progress:** Format indicator classes ([ab167e5](https://github.com/favorodera/centoui/commit/ab167e5))
- **tooltip:** Reformat content styles for readability ([4eac1a0](https://github.com/favorodera/centoui/commit/4eac1a0))
- **button:** Make outline ring-inset conditional ([f727167](https://github.com/favorodera/centoui/commit/f727167))
- **button:** Improve outline variant readability ([43bec93](https://github.com/favorodera/centoui/commit/43bec93))
- **select:** Format Tailwind utility classes ([01e6f02](https://github.com/favorodera/centoui/commit/01e6f02))
- **alert-dialog:** Enhance content layout and improve styling consistency ([05cbd68](https://github.com/favorodera/centoui/commit/05cbd68))
- **accordion:** Enhance layout and spacing for improved readability ([913c782](https://github.com/favorodera/centoui/commit/913c782))
- **alert-view:** Refine content and description spacing for consistency ([51d90eb](https://github.com/favorodera/centoui/commit/51d90eb))
- **alert-dialog:** Improve spacing and layout for content and header ([56432a2](https://github.com/favorodera/centoui/commit/56432a2))
- **avatar:** Simplify size variants and adjust fallback text sizes for consistency ([5b1b206](https://github.com/favorodera/centoui/commit/5b1b206))
- **badge:** Streamline variant definitions and adjust size styles for consistency ([6ff9d39](https://github.com/favorodera/centoui/commit/6ff9d39))
- **button:** Refine padding and size variants for improved consistency ([968ac02](https://github.com/favorodera/centoui/commit/968ac02))
- **collapsible:** Add animation duration to content for smoother transitions ([07aa738](https://github.com/favorodera/centoui/commit/07aa738))
- **kbd:** Standardize text sizes and remove unused size variant ([3ec8d22](https://github.com/favorodera/centoui/commit/3ec8d22))
- **popover:** Adjust spacing and padding for improved layout consistency ([117fe81](https://github.com/favorodera/centoui/commit/117fe81))
- **accordion:** Adjust trigger styles for improved transition effects ([63eb260](https://github.com/favorodera/centoui/commit/63eb260))
- **alert-dialog:** Enhance overlay styles for improved animation effects ([ecdd9c7](https://github.com/favorodera/centoui/commit/ecdd9c7))
- **button:** Increase transition duration for smoother animations ([a158c43](https://github.com/favorodera/centoui/commit/a158c43))
- **popover:** Add animation duration to content for smoother transitions ([ff5b882](https://github.com/favorodera/centoui/commit/ff5b882))
- **progress:** Increase transition duration for smoother animations ([702c563](https://github.com/favorodera/centoui/commit/702c563))
- **select:** Update styles for improved layout and consistency ([a8759f7](https://github.com/favorodera/centoui/commit/a8759f7))
- **select-separator:** Simplify slot handling and clean up unused code ([6664445](https://github.com/favorodera/centoui/commit/6664445))
- **separator:** Remove unnecessary alignment class from root slot ([6d7d86b](https://github.com/favorodera/centoui/commit/6d7d86b))
- **switch:** Update transition durations and improve disabled state opacity ([c3d7cba](https://github.com/favorodera/centoui/commit/c3d7cba))
- **tooltip:** Update padding and transition duration for improved appearance ([1e73934](https://github.com/favorodera/centoui/commit/1e73934))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.23...v1.0.0-alpha.24

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.23...v1.0.0-alpha.24)

### Added

- **registry:** Add select component configuration ([81690a0](https://github.com/favorodera/centoui/commit/81690a0))

### Refactors

- **accordion:** Use local variants for styling ([2a8a779](https://github.com/favorodera/centoui/commit/2a8a779))
- **accordion:** Use local variants for styling ([d356c34](https://github.com/favorodera/centoui/commit/d356c34))
- **accordion:** Use local variants for styling ([ed20a1e](https://github.com/favorodera/centoui/commit/ed20a1e))
- **accordion:** Remove styles from root context provider ([fc436b3](https://github.com/favorodera/centoui/commit/fc436b3))
- **accordion:** Use local variants for styling ([626e695](https://github.com/favorodera/centoui/commit/626e695))
- **accordion:** Update types to use ClassProp and remove styles from context ([d996ff0](https://github.com/favorodera/centoui/commit/d996ff0))
- **alert-dialog:** Use local variants for styling ([feac428](https://github.com/favorodera/centoui/commit/feac428))
- **alert-dialog:** Use local variants for styling ([235000b](https://github.com/favorodera/centoui/commit/235000b))
- **alert-dialog:** Use local variants for styling ([8ee971f](https://github.com/favorodera/centoui/commit/8ee971f))
- **alert-dialog:** Use local variants for styling ([989878f](https://github.com/favorodera/centoui/commit/989878f))
- **alert-dialog:** Use local variants for styling ([bed3d8f](https://github.com/favorodera/centoui/commit/bed3d8f))
- **alert-dialog:** Use local variants for styling ([d0be0cb](https://github.com/favorodera/centoui/commit/d0be0cb))
- **alert-dialog:** Use local variants for styling ([b82a4af](https://github.com/favorodera/centoui/commit/b82a4af))
- **alert-dialog:** Cleanup component imports and template ([1d257fd](https://github.com/favorodera/centoui/commit/1d257fd))
- **alert-dialog:** Remove styles from root context provider ([5dcf8b1](https://github.com/favorodera/centoui/commit/5dcf8b1))
- **alert-dialog:** Use local variants for styling ([e57c8fc](https://github.com/favorodera/centoui/commit/e57c8fc))
- **alert-dialog:** Use local variants for styling ([446350d](https://github.com/favorodera/centoui/commit/446350d))
- **alert-dialog:** Update types to use ClassProp and remove styles from context ([76cb1f0](https://github.com/favorodera/centoui/commit/76cb1f0))
- **alert:** Use local variants for styling ([69be7c9](https://github.com/favorodera/centoui/commit/69be7c9))
- **alert:** Use local variants for styling ([f49af5b](https://github.com/favorodera/centoui/commit/f49af5b))
- **alert:** Use local variants for styling ([d27c1db](https://github.com/favorodera/centoui/commit/d27c1db))
- **alert:** Use local variants for styling ([34e063b](https://github.com/favorodera/centoui/commit/34e063b))
- **alert:** Remove styles from root context provider ([e6bfb9e](https://github.com/favorodera/centoui/commit/e6bfb9e))
- **alert:** Use local variants for styling ([0a4ebd5](https://github.com/favorodera/centoui/commit/0a4ebd5))
- **alert:** Update types to use ClassProp and remove styles from context ([b3503b2](https://github.com/favorodera/centoui/commit/b3503b2))
- **aspect-ratio:** Use local variants for styling ([6d1dde1](https://github.com/favorodera/centoui/commit/6d1dde1))
- **aspect-ratio:** Update types to use ClassProp and remove styles from context ([0516c61](https://github.com/favorodera/centoui/commit/0516c61))
- **avatar:** Use local variants for styling ([42aa809](https://github.com/favorodera/centoui/commit/42aa809))
- **avatar:** Use local variants for styling ([204eb9d](https://github.com/favorodera/centoui/commit/204eb9d))
- **avatar:** Remove styles from root context provider ([9a42f1c](https://github.com/favorodera/centoui/commit/9a42f1c))
- **avatar:** Update types to use ClassProp and remove styles from context ([0c5865a](https://github.com/favorodera/centoui/commit/0c5865a))
- **badge:** Use local variants for styling ([7206701](https://github.com/favorodera/centoui/commit/7206701))
- **badge:** Update types to use ClassProp and remove styles from context ([b7f6a80](https://github.com/favorodera/centoui/commit/b7f6a80))
- **button-group:** Use local variants for styling ([7120011](https://github.com/favorodera/centoui/commit/7120011))
- **button-group:** Remove styles from root context provider ([d2eae72](https://github.com/favorodera/centoui/commit/d2eae72))
- **button-group:** Update types to use ClassProp and remove styles from context ([302eaaf](https://github.com/favorodera/centoui/commit/302eaaf))
- **button:** Use local variants for styling ([0c3c954](https://github.com/favorodera/centoui/commit/0c3c954))
- **button:** Update types to use ClassProp and remove styles from context ([6ff36fc](https://github.com/favorodera/centoui/commit/6ff36fc))
- **collapsible:** Use local variants for styling ([aee41de](https://github.com/favorodera/centoui/commit/aee41de))
- **collapsible:** Remove styles from root context provider ([965e29d](https://github.com/favorodera/centoui/commit/965e29d))
- **collapsible:** Use local variants for styling ([dd056d1](https://github.com/favorodera/centoui/commit/dd056d1))
- **collapsible:** Update types to use ClassProp and remove styles from context ([281f914](https://github.com/favorodera/centoui/commit/281f914))
- **kbd-group:** Update types to use ClassProp and remove styles from context ([cb8852e](https://github.com/favorodera/centoui/commit/cb8852e))
- **kbd-group:** Use local variants for styling ([44b5df5](https://github.com/favorodera/centoui/commit/44b5df5))
- **kbd:** Update types to use ClassProp and remove styles from context ([057566c](https://github.com/favorodera/centoui/commit/057566c))
- **kbd:** Use local variants for styling ([cc2d74f](https://github.com/favorodera/centoui/commit/cc2d74f))
- **popover:** Update types to use ClassProp and remove styles from context ([0faa4f1](https://github.com/favorodera/centoui/commit/0faa4f1))
- **popover:** Cleanup component imports and template ([4176147](https://github.com/favorodera/centoui/commit/4176147))
- **popover:** Use local variants for styling ([a31b36f](https://github.com/favorodera/centoui/commit/a31b36f))
- **popover:** Use local variants for styling ([014ccf1](https://github.com/favorodera/centoui/commit/014ccf1))
- **popover:** Use local variants for styling ([a141923](https://github.com/favorodera/centoui/commit/a141923))
- **popover:** Use local variants for styling ([5ad71b8](https://github.com/favorodera/centoui/commit/5ad71b8))
- **popover:** Use local variants for styling ([5ada8c4](https://github.com/favorodera/centoui/commit/5ada8c4))
- **popover:** Use local variants for styling ([65fe5a8](https://github.com/favorodera/centoui/commit/65fe5a8))
- **popover:** Use local variants for styling ([dbe10c1](https://github.com/favorodera/centoui/commit/dbe10c1))
- **popover:** Cleanup component imports and template ([95800f3](https://github.com/favorodera/centoui/commit/95800f3))
- **popover:** Remove styles from root context provider ([2bf330c](https://github.com/favorodera/centoui/commit/2bf330c))
- **popover:** Use local variants for styling ([f89c4a0](https://github.com/favorodera/centoui/commit/f89c4a0))
- **popover:** Use local variants for styling ([ad15513](https://github.com/favorodera/centoui/commit/ad15513))
- **progress:** Update types to use ClassProp and remove styles from context ([8abdf38](https://github.com/favorodera/centoui/commit/8abdf38))
- **progress:** Use local variants for styling ([096d9aa](https://github.com/favorodera/centoui/commit/096d9aa))
- **progress:** Remove styles from root context provider ([c438824](https://github.com/favorodera/centoui/commit/c438824))
- **select:** Update types to use ClassProp and remove styles from context ([5b90f10](https://github.com/favorodera/centoui/commit/5b90f10))
- **select:** Use local variants for styling ([9216373](https://github.com/favorodera/centoui/commit/9216373))
- **select:** Use local variants for styling ([5264e1b](https://github.com/favorodera/centoui/commit/5264e1b))
- **select:** Use local variants for styling ([4f56478](https://github.com/favorodera/centoui/commit/4f56478))
- **select:** Use local variants for styling ([9593f5b](https://github.com/favorodera/centoui/commit/9593f5b))
- **select:** Use local variants for styling ([65756b6](https://github.com/favorodera/centoui/commit/65756b6))
- **select:** Use local variants for styling ([19222a0](https://github.com/favorodera/centoui/commit/19222a0))
- **select:** Use local variants for styling ([ae80f7c](https://github.com/favorodera/centoui/commit/ae80f7c))
- **select:** Use local variants for styling ([7b861d2](https://github.com/favorodera/centoui/commit/7b861d2))
- **select:** Cleanup component imports and template ([76eea6e](https://github.com/favorodera/centoui/commit/76eea6e))
- **select:** Remove styles from root context provider ([2ab9d23](https://github.com/favorodera/centoui/commit/2ab9d23))
- **select:** Use local variants for styling ([90c7e0a](https://github.com/favorodera/centoui/commit/90c7e0a))
- **select:** Use local variants for styling ([2117549](https://github.com/favorodera/centoui/commit/2117549))
- **select:** Use local variants for styling ([0acdd6b](https://github.com/favorodera/centoui/commit/0acdd6b))
- **select:** Remove styles from root context provider ([81e785a](https://github.com/favorodera/centoui/commit/81e785a))
- **select:** Use local variants for styling ([39e1007](https://github.com/favorodera/centoui/commit/39e1007))
- **select:** Use local variants for styling ([e545f37](https://github.com/favorodera/centoui/commit/e545f37))
- **separator:** Update types to use ClassProp and remove styles from context ([3afe806](https://github.com/favorodera/centoui/commit/3afe806))
- **separator:** Use local variants for styling ([519185e](https://github.com/favorodera/centoui/commit/519185e))
- **text:** Update types to use ClassProp and remove styles from context ([a3a0d10](https://github.com/favorodera/centoui/commit/a3a0d10))
- **text:** Use local variants for styling ([e6f807f](https://github.com/favorodera/centoui/commit/e6f807f))
- **tooltip:** Update types to use ClassProp and remove styles from context ([0c7e1bb](https://github.com/favorodera/centoui/commit/0c7e1bb))
- **tooltip:** Use local variants for styling ([06fd657](https://github.com/favorodera/centoui/commit/06fd657))
- **tooltip:** Use local variants for styling ([087d655](https://github.com/favorodera/centoui/commit/087d655))
- **tooltip:** Cleanup component imports and template ([8c0bc95](https://github.com/favorodera/centoui/commit/8c0bc95))
- **tooltip:** Cleanup component imports and template ([d2e484c](https://github.com/favorodera/centoui/commit/d2e484c))
- **tooltip:** Remove styles from root context provider ([75faf14](https://github.com/favorodera/centoui/commit/75faf14))
- **tooltip:** Use local variants for styling ([78d7aac](https://github.com/favorodera/centoui/commit/78d7aac))
- **config:** Update default configuration ([4b7052c](https://github.com/favorodera/centoui/commit/4b7052c))

### Chores

- **registry:** Update registry registry ([a81ce6d](https://github.com/favorodera/centoui/commit/a81ce6d))
- **registry:** Update registry registry ([2a3eb4b](https://github.com/favorodera/centoui/commit/2a3eb4b))
- **registry:** Update core registry ([69d5394](https://github.com/favorodera/centoui/commit/69d5394))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.22...v1.0.0-alpha.23

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.22...v1.0.0-alpha.23)

### Added

- **progress:** Add Progress component ([8a432fd](https://github.com/favorodera/centoui/commit/8a432fd))
- **progress:** Add progress indicator component - Implements visual progress bar - Calculates transform for animation - Integrates with progress root context ([15c72c7](https://github.com/favorodera/centoui/commit/15c72c7))
- **progress:** Add ProgressRoot component - Use reka-ui for base functionality - Integrate centoui styling and context - Provide ProgressRoot component ([2cd64ae](https://github.com/favorodera/centoui/commit/2cd64ae))
- **registry:** Add progress component ([3dd6633](https://github.com/favorodera/centoui/commit/3dd6633))
- **progress:** Add component to registry ([7aae4ab](https://github.com/favorodera/centoui/commit/7aae4ab))
- **popover:** Add Popover component ([d3b48be](https://github.com/favorodera/centoui/commit/d3b48be))
- **popover:** Add PopoverAnchor component ([2c8d5fb](https://github.com/favorodera/centoui/commit/2c8d5fb))
- **popover:** Add PopoverArrow component ([9ee9ef8](https://github.com/favorodera/centoui/commit/9ee9ef8))
- **popover:** Add PopoverBody component ([56b9439](https://github.com/favorodera/centoui/commit/56b9439))
- **popover:** Add PopoverClose component ([7222720](https://github.com/favorodera/centoui/commit/7222720))
- **popover:** Add PopoverContent component ([6e69816](https://github.com/favorodera/centoui/commit/6e69816))
- **popover:** Add PopoverDescription component ([68762ec](https://github.com/favorodera/centoui/commit/68762ec))
- **popover:** Add PopoverFooter component ([b23300a](https://github.com/favorodera/centoui/commit/b23300a))
- **popover:** Add PopoverHeader component ([e63b52d](https://github.com/favorodera/centoui/commit/e63b52d))
- **popover:** Create PopoverPortal component ([dcaab6c](https://github.com/favorodera/centoui/commit/dcaab6c))
- **popover:** Add PopoverRoot component ([9ee5e5e](https://github.com/favorodera/centoui/commit/9ee5e5e))
- **popover:** Add PopoverTitle component ([2777a9d](https://github.com/favorodera/centoui/commit/2777a9d))
- **popover:** Add PopoverTrigger component ([e039c46](https://github.com/favorodera/centoui/commit/e039c46))
- **popover:** Add popover component registry file ([86cded8](https://github.com/favorodera/centoui/commit/86cded8))
- **registry:** Add popover component - Registers files and dependencies. - Used for displaying rich content in a portal. ([ddae914](https://github.com/favorodera/centoui/commit/ddae914))
- **badge:** Apply size-specific border radius ([898f599](https://github.com/favorodera/centoui/commit/898f599))
- **css:** Enable squircle corners via @supports ([cfa6182](https://github.com/favorodera/centoui/commit/cfa6182))
- **select:** Add Select component structure - Define styling variants with `tailwind-variants`. - Export all sub-components. - Set up context for component interaction. - ([884f942](https://github.com/favorodera/centoui/commit/884f942))
- **select:** Add select arrow component ([b82587a](https://github.com/favorodera/centoui/commit/b82587a))
- **select:** Add SelectContent component ([541a510](https://github.com/favorodera/centoui/commit/541a510))
- **select-group:** Add select group component ([7434d62](https://github.com/favorodera/centoui/commit/7434d62))
- **select:** Add select icon component - Implements the SelectIcon component - Provides a default chevron down icon - Integrates with Select root context - Uses reka-ui's SelectIcon primitive ([be01167](https://github.com/favorodera/centoui/commit/be01167))
- **select:** Add select item indicator component ([c5f0509](https://github.com/favorodera/centoui/commit/c5f0509))
- **select:** Add select item text component ([a14b0ba](https://github.com/favorodera/centoui/commit/a14b0ba))
- **select:** Add initial select item component ([ff8a9f9](https://github.com/favorodera/centoui/commit/ff8a9f9))
- **select:** Add select label component ([e1f42b4](https://github.com/favorodera/centoui/commit/e1f42b4))
- **select:** Add select portal component ([08fdda5](https://github.com/favorodera/centoui/commit/08fdda5))
- **select:** Implement select root component ([9948674](https://github.com/favorodera/centoui/commit/9948674))
- **select:** Add scroll down button component ([fd5ae65](https://github.com/favorodera/centoui/commit/fd5ae65))
- **select:** Add scroll up button component ([d857578](https://github.com/favorodera/centoui/commit/d857578))
- **select:** Add select separator component ([bf17962](https://github.com/favorodera/centoui/commit/bf17962))
- **select:** Add select trigger component ([12595cc](https://github.com/favorodera/centoui/commit/12595cc))
- **select:** Add select value component ([45fbd09](https://github.com/favorodera/centoui/commit/45fbd09))
- **select:** Add select viewport component ([96c9810](https://github.com/favorodera/centoui/commit/96c9810))

### Fixed

- **tooltip:** Update arrow style to include fill-foreground ([eb8cad5](https://github.com/favorodera/centoui/commit/eb8cad5))
- **tooltip:** Format content styles for better readability ([86ee3be](https://github.com/favorodera/centoui/commit/86ee3be))
- **config:** Add missing check icon to icons configuration ([4ab82db](https://github.com/favorodera/centoui/commit/4ab82db))

### Refactors

- **avatar:** Remove shape prop ([5c8232e](https://github.com/favorodera/centoui/commit/5c8232e))
- **css:** Remove experimental squircle support ([df55eca](https://github.com/favorodera/centoui/commit/df55eca))

### Documentation

- **alert-dialog:** Clarify JSDoc for AlertDialogRootContext ([2715111](https://github.com/favorodera/centoui/commit/2715111))

### Styling

- **progress:** Reorder Tailwind classes ([d9e201c](https://github.com/favorodera/centoui/commit/d9e201c))
- **progress:** Adjust root border radius ([05154ba](https://github.com/favorodera/centoui/commit/05154ba))
- **progress:** Update root background to use bg-muted ([3084fb5](https://github.com/favorodera/centoui/commit/3084fb5))
- **alert-dialog:** Adjust padding for consistent layout - Update content padding to vertical only - Add horizontal padding to header - Add horizontal padding to footer ([652e9fa](https://github.com/favorodera/centoui/commit/652e9fa))
- **button:** Adjust border radius per size variant ([1c04e44](https://github.com/favorodera/centoui/commit/1c04e44))
- **theme:** Adjust error colors ([199f105](https://github.com/favorodera/centoui/commit/199f105))
- **tooltip:** Update color tokens for content and arrow ([4b7e149](https://github.com/favorodera/centoui/commit/4b7e149))
- **avatar:** Reorder root CSS classes ([9d6cb25](https://github.com/favorodera/centoui/commit/9d6cb25))
- **badge:** Reorder Tailwind classes for consistency ([1ac52dd](https://github.com/favorodera/centoui/commit/1ac52dd))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.21...v1.0.0-alpha.22

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.21...v1.0.0-alpha.22)

### Added

- **button:** Add link variant ([e2685d1](https://github.com/favorodera/centoui/commit/e2685d1))
- **text:** Add Text component with variants ([075c261](https://github.com/favorodera/centoui/commit/075c261))
- **text:** Add Text component - Provides basic text styling - Supports size and weight props ([58e6d7e](https://github.com/favorodera/centoui/commit/58e6d7e))

### Styling

- **button:** Improve readability of link variant classes ([7f5a650](https://github.com/favorodera/centoui/commit/7f5a650))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.20...v1.0.0-alpha.21

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.20...v1.0.0-alpha.21)

### Added

- **collapsible:** Add CollapsibleContent component - Implement CollapsibleContent - Wrap Reka UI's CollapsibleContent - Inject context for styling - Use forwarded props and emits ([23033c7](https://github.com/favorodera/centoui/commit/23033c7))
- **collapsible:** Add CollapsibleRoot component ([1c08791](https://github.com/favorodera/centoui/commit/1c08791))

  - Wraps Reka UI CollapsibleRoot component
  - Applies Cento UI styling via variants
  - Provides collapsible context for children

- **collapsible:** Add CollapsibleTrigger component ([d8717ac](https://github.com/favorodera/centoui/commit/d8717ac))
- **collapsible:** Implement collapsible component structure and types ([d8ae61f](https://github.com/favorodera/centoui/commit/d8ae61f))
- **collapsible:** Add collapsible component registry configuration ([ad1fc55](https://github.com/favorodera/centoui/commit/ad1fc55))
- **collapsible:** Add collapsible component definition and update alert-dialog file paths ([c1d8848](https://github.com/favorodera/centoui/commit/c1d8848))

### Fixed

- **alert-dialog:** Correct file paths for alert-dialog components ([d3a3660](https://github.com/favorodera/centoui/commit/d3a3660))

### Styling

- **avatar:** Format avatar root template ([28d09f1](https://github.com/favorodera/centoui/commit/28d09f1))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.19...v1.0.0-alpha.20

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.19...v1.0.0-alpha.20)

### Added

- **aspect-ratio:** Add aspect ratio component ([0d0fd74](https://github.com/favorodera/centoui/commit/0d0fd74))
- **aspect-ratio:** Implement AspectRatio component ([c166823](https://github.com/favorodera/centoui/commit/c166823))

  - Export AspectRatio component
  - Define and export aspectRatioVariants
  - Export AspectRatioProps and AspectRatioSlots

- **styling:** Add custom dark variant ([2836ca5](https://github.com/favorodera/centoui/commit/2836ca5))

  - Introduced `@custom-variant dark`
  - Removed scheme classes from body

- **registry:** Add aspect-ratio component ([82dbc5b](https://github.com/favorodera/centoui/commit/82dbc5b))
- Add aspect-ratio component to registry ([1b9c5db](https://github.com/favorodera/centoui/commit/1b9c5db))

  - Added aspect-ratio component definition
  - Included component schema and dependencies
  - Updated index.json with new entry

- **preview:** Add theme customization ([6266e4f](https://github.com/favorodera/centoui/commit/6266e4f))

  - Implement dynamic theme injection via textarea
  - Add copy and reset theme functionality
  - Update README descriptions


### Refactors

- Remove unused VariantProps type ([074ea48](https://github.com/favorodera/centoui/commit/074ea48))

  - Removed redundant KbdGroupVariants type
  - Cleaned up kbd-group component exports


### Chores

- Remove unused accessibility tests ([f18c8e9](https://github.com/favorodera/centoui/commit/f18c8e9))

  - Removed accordion tests
  - Removed alert-dialog tests
  - Removed alert tests
  - Removed badge tests
  - Removed button-group tests
  - Removed button tests
  - Removed kbd-group tests
  - Removed kbd tests
  - Removed separator tests
  - Removed tooltip tests


### Tests

- **avatar:** Import getInitials for tests ([1d82da6](https://github.com/favorodera/centoui/commit/1d82da6))

  - Added import for getInitials
  - Enabled testing of avatar component logic

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.18...v1.0.0-alpha.19

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.18...v1.0.0-alpha.19)

### Added

- **avatar:** Improve root component implementation ([51a3a7f](https://github.com/favorodera/centoui/commit/51a3a7f))

  - Use provideCentouiAvatarRootContext
  - Simplify computed styles
  - Pass class to root variant

- **alert:** Add alert content component ([312aca1](https://github.com/favorodera/centoui/commit/312aca1))

  - Implemented new alert content component
  - Added primitive element support
  - Integrated context and prop forwarding

- **alert-dialog:** Add action component ([f28e709](https://github.com/favorodera/centoui/commit/f28e709))

  - Implemented AlertDialogAction component
  - Integrated with button variants
  - Added slot forwarding

- **alert-dialog:** Add cancel button component ([0aff4b4](https://github.com/favorodera/centoui/commit/0aff4b4))

  - Implemented new AlertDialogCancel component
  - Integrated with reka-ui and centoui context
  - Added styling and prop forwarding

- **alert-dialog:** Add content component ([c979401](https://github.com/favorodera/centoui/commit/c979401))

  - Implemented AlertDialogContent component
  - Integrated with Reka UI and VueUse
  - Added styling and slot support

- **alert-dialog:** Add description component ([a682906](https://github.com/favorodera/centoui/commit/a682906))

  - Implemented AlertDialogDescription.vue
  - Integrated with reka-ui and @vueuse/core
  - Added slot and prop forwarding

- **alert-dialog:** Add footer component ([4685efd](https://github.com/favorodera/centoui/commit/4685efd))

  - Adds AlertDialogFooter component
  - Integrates with root context
  - Uses Primitive base element
  - Applies root context styles

- **alert-dialog:** Add alert dialog header component ([9096d44](https://github.com/favorodera/centoui/commit/9096d44))

  - Implemented new alert dialog header
  - Added props and slots support
  - Integrated with root context styles

- **alert-dialog:** Add overlay component - Add AlertDialogOverlay component - Integrate with AlertDialog root context - Forward delegated props - Apply contextual styles ([b22a7a4](https://github.com/favorodera/centoui/commit/b22a7a4))
- **alert-dialog:** Add portal component ([c5521c0](https://github.com/favorodera/centoui/commit/c5521c0))

  - Implemented AlertDialogPortal component
  - Utilized reka-ui for forwarding props
  - Added slots for content

- **alert-dialog:** Add alert dialog root component ([6bd3db0](https://github.com/favorodera/centoui/commit/6bd3db0))

  - Implemented AlertDialogRoot component
  - Integrated reka-ui and centoui
  - Provided context for variants and styles

- **alert-dialog:** Add alert dialog title component ([28ea75e](https://github.com/favorodera/centoui/commit/28ea75e))

  - Implemented AlertDialogTitle component
  - Added slot and prop forwarding
  - Integrated with root context styles

- **alert-dialog:** Add trigger component ([ce32ad0](https://github.com/favorodera/centoui/commit/ce32ad0))

  - Implemented AlertDialogTrigger component
  - Integrated with reka-ui and centoui
  - Added slot and prop forwarding

- **alert-dialog:** Implement alert dialog component with variants and context ([34b03cc](https://github.com/favorodera/centoui/commit/34b03cc))
- **alert-dialog:** Add alert dialog component configuration ([0a9a85a](https://github.com/favorodera/centoui/commit/0a9a85a))
- **alert-dialog:** Expand alert dialog component with additional files and dependencies ([66c73e6](https://github.com/favorodera/centoui/commit/66c73e6))

### Fixed

- **core:** Correct tsconfig.json include path ([a6a7dfc](https://github.com/favorodera/centoui/commit/a6a7dfc))

  - Changed augment.d.dts to augment.d.ts
  - Corrected a typo in the tsconfig.json file
  - Ensures correct type definition loading

- **avatar-fallback:** Correct data attribute for avatar fallback component ([6d5420f](https://github.com/favorodera/centoui/commit/6d5420f))
- **avatar-image:** Update data attribute for avatar image component ([45f6490](https://github.com/favorodera/centoui/commit/45f6490))
- **avatar-root:** Update delegated props to include shape and adjust data attributes ([64674a3](https://github.com/favorodera/centoui/commit/64674a3))
- **avatar-variants:** Refine fallback styles and add shape variant to avatar component ([9bb8905](https://github.com/favorodera/centoui/commit/9bb8905))
- **badge:** Update default variant to neutral and remove color prop ([d3ddb9a](https://github.com/favorodera/centoui/commit/d3ddb9a))
- **badge:** Simplify badge variants and update default styles ([e02ceb7](https://github.com/favorodera/centoui/commit/e02ceb7))
- **button:** Update default variant to primary and remove color prop ([9acaf46](https://github.com/favorodera/centoui/commit/9acaf46))
- **button:** Refine button variants and update default styles ([cf51f05](https://github.com/favorodera/centoui/commit/cf51f05))
- **button-group-separator:** Update context injection and refine orientation handling ([611eb7a](https://github.com/favorodera/centoui/commit/611eb7a))
- **button-group:** Update context provider and streamline style computation ([45eeb9f](https://github.com/favorodera/centoui/commit/45eeb9f))
- **button-group:** Refine style variants and update context exports ([28033af](https://github.com/favorodera/centoui/commit/28033af))
- **kbd:** Simplify variants and remove unused color options ([5cd04c2](https://github.com/favorodera/centoui/commit/5cd04c2))
- **kbd:** Update variant handling and remove unused color prop ([513d7d8](https://github.com/favorodera/centoui/commit/513d7d8))
- **kbd-group:** Clean up comments and remove redundant documentation ([a42ee4c](https://github.com/favorodera/centoui/commit/a42ee4c))
- **kbd-group:** Clean up comments and standardize slot attribute ([8a81e7a](https://github.com/favorodera/centoui/commit/8a81e7a))
- **separator:** Simplify variants by removing unused properties and comments ([45f1455](https://github.com/favorodera/centoui/commit/45f1455))
- **separator:** Remove unused props and standardize slot attributes ([4d340fe](https://github.com/favorodera/centoui/commit/4d340fe))
- **tooltip:** Update styles and clean up variant definitions ([16075bd](https://github.com/favorodera/centoui/commit/16075bd))
- **tooltip-arrow:** Refactor to use root context for styling and clean up unused code ([7d5f53e](https://github.com/favorodera/centoui/commit/7d5f53e))
- **tooltip-content:** Refactor to use Centoui context and clean up unused code ([b3d98e6](https://github.com/favorodera/centoui/commit/b3d98e6))
- **tooltip-portal:** Remove commented code and clean up prop forwarding ([4f7bb2a](https://github.com/favorodera/centoui/commit/4f7bb2a))
- **tooltip-provider:** Remove commented code for clarity ([8bd0b11](https://github.com/favorodera/centoui/commit/8bd0b11))
- **tooltip-root:** Update imports and enhance context provision for styles ([b7f007f](https://github.com/favorodera/centoui/commit/b7f007f))
- **tooltip-trigger:** Refactor to use Centoui context and clean up unused imports and code ([789bc94](https://github.com/favorodera/centoui/commit/789bc94))
- **centoui.css:** Update color variables for improved consistency and clarity ([81ee3a1](https://github.com/favorodera/centoui/commit/81ee3a1))
- **alert.json:** Update alert component file references for accuracy ([d7cb19a](https://github.com/favorodera/centoui/commit/d7cb19a))
- **setup:** Correct indentation in configureAxe region rule comment ([15ee41a](https://github.com/favorodera/centoui/commit/15ee41a))

### Refactors

- **avatar:** Improve component structure ([dc4ae10](https://github.com/favorodera/centoui/commit/dc4ae10))

  - Introduce root context for styles
  - Refactor avatarVariants definition
  - Remove 3xs size variant
  - Adjust fallback text color

- **avatar:** Use context for fallback styles ([28329df](https://github.com/favorodera/centoui/commit/28329df))

  - Inject root context for styles
  - Remove local computed styles
  - Simplify fallback class binding

- **avatar:** Use root context for styles ([d347639](https://github.com/favorodera/centoui/commit/d347639))

  - Inject root context instead of local computed styles
  - Pass class prop to root context style function

- **accordion:** Simplify content component context ([0a9e944](https://github.com/favorodera/centoui/commit/0a9e944))

  - Removed redundant context injection
  - Updated data attribute naming
  - Streamlined prop forwarding

- **accordion:** Simplify header context injection ([9634d9a](https://github.com/favorodera/centoui/commit/9634d9a))

  - Removed redundant root context merging
  - Simplified data-centoui-state and data-centoui-disabled binding
  - Updated data-slot attribute name

- **accordion:** Simplify accordion item context injection ([2a319a6](https://github.com/favorodera/centoui/commit/2a319a6))

  - Removed redundant computed for root context
  - Simplified data attribute logic
  - Removed unused data-centoui-disabled attribute

- **accordion:** Simplify accordion-root.vue ([8c0ecc7](https://github.com/favorodera/centoui/commit/8c0ecc7))

  - Removed unused orientation computed
  - Updated data attribute name

- **accordion:** Simplify trigger context injection ([f86de9e](https://github.com/favorodera/centoui/commit/f86de9e))

  - Removed unused computed for root context
  - Simplified data attribute binding
  - Updated slot data attribute

- **accordion:** Update data attributes and styles ([ff42884](https://github.com/favorodera/centoui/commit/ff42884))

  - Replaced 'data-centoui-state' with 'data-state'
  - Changed 'data-centoui-slot' to 'data-slot'
  - Updated focus-visible ring width and color
  - Adjusted icon size and vertical alignment

- **alert:** Update data attributes ([5ed26d8](https://github.com/favorodera/centoui/commit/5ed26d8))

  - Changed data-centoui-slot to data-slot
  - Changed data-centoui-status to data-variant
  - Removed data-centoui-orientation
  - Removed data-centoui-open

- Remove AlertClose component ([8ea8ca8](https://github.com/favorodera/centoui/commit/8ea8ca8))

  - Component was no longer needed
  - Streamlined alert component structure

- **alert:** Update slot and data attributes ([7f641c5](https://github.com/favorodera/centoui/commit/7f641c5))

  - Changed data-centoui-slot to data-slot
  - Removed data-centoui-status, orientation, open
  - Added data-variant attribute

- **alert:** Standardize data attributes ([d84d89b](https://github.com/favorodera/centoui/commit/d84d89b))
- **alert:** Rename status to variant ([8ada8be](https://github.com/favorodera/centoui/commit/8ada8be))

  - Changed prop name from `status` to `variant`
  - Updated context and template bindings
  - Simplified alert component props

- **alert:** Update title slot and data attributes ([0eb67c0](https://github.com/favorodera/centoui/commit/0eb67c0))

  - Changed data-centoui-slot to data-slot
  - Removed data-centoui-status
  - Removed data-centoui-orientation
  - Removed data-centoui-open
  - Added data-variant

- **alert:** Simplify and update variants ([3aca411](https://github.com/favorodera/centoui/commit/3aca411))

  - Streamlined CSS class structure
  - Renamed status to variant for clarity
  - Updated slot names and types

- **alert.test:** Simplify accessibility test structure and remove unused visibility tests ([e380f5c](https://github.com/favorodera/centoui/commit/e380f5c))

### Chores

- Adjust CSS color variables ([ada75de](https://github.com/favorodera/centoui/commit/ada75de))

  - Tweaked background and foreground colors
  - Adjusted overlay opacity
  - Modified muted and border colors
  - Updated primary and secondary hues


### Tests

- **alert-dialog:** Add accessibility tests for alert dialog component ([c4adea1](https://github.com/favorodera/centoui/commit/c4adea1))

### Styling

- **alert:** Adjust neutral variant colors ([79fa95e](https://github.com/favorodera/centoui/commit/79fa95e))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.17...v1.0.0-alpha.18

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.17...v1.0.0-alpha.18)

### Added

- **accordion:** Add root context and refine styles ([a385351](https://github.com/favorodera/centoui/commit/a385351))

  - Introduce root context for component
  - Update trigger and item styling
  - Add icon slot for trigger
  - Refine content slot selectors


### Refactors

- Remove disabled prop from AvatarRoot ([76290d4](https://github.com/favorodera/centoui/commit/76290d4))

  - Remove disabled prop from AvatarRoot.
  - Remove disabled attribute binding.
  - Update component styles.

- Remove disabled variant from avatarVariants and related props ([61e550f](https://github.com/favorodera/centoui/commit/61e550f))
- Remove disabled test case from AvatarRoot accessibility tests ([63de736](https://github.com/favorodera/centoui/commit/63de736))
- **accordion:** Unify content styling ([d532a6d](https://github.com/favorodera/centoui/commit/d532a6d))

  - Externalize content styling to root
  - Integrate Centoui accordion root context
  - Simplify data attribute bindings
  - Rename inner slot to content-inner

- **accordion:** Centralize header styles and context ([4199a83](https://github.com/favorodera/centoui/commit/4199a83))

  - Use root context for header styles
  - Simplify data state and disabled props
  - Adjust context injection logic

- **accordion:** Centralize item styling & context ([c1e8711](https://github.com/favorodera/centoui/commit/c1e8711))

  - Remove local item styling logic
  - Inject Centoui accordion root context
  - Retrieve item styles from root context
  - Update data attributes computations

- **accordion:** Provide style context ([d41a191](https://github.com/favorodera/centoui/commit/d41a191))

  - Provide full style variants via context
  - Remove direct attribute for disabled state
  - Simplify orientation attribute binding

- **accordion:** Streamline trigger styling ([79121c4](https://github.com/favorodera/centoui/commit/79121c4))

  - Use root context for trigger styling
  - Combine accordion root contexts
  - Wrap trigger icon in a named slot
  - Remove local style computations

- **alert:** Centralize styles for alert actions ([29c9a56](https://github.com/favorodera/centoui/commit/29c9a56))

  - Remove local style computation
  - Consume styles from root context
  - Update context injection method

- **alert:** Streamline close component - Migrate to new alert root context - Centralize styling via context - Update data attributes for state - Revise close button color logic ([0a70400](https://github.com/favorodera/centoui/commit/0a70400))
- **alert:** Streamline description styling ([ac8c7e8](https://github.com/favorodera/centoui/commit/ac8c7e8))

  - Removed direct variant style computation
  - Injected styles from root context
  - Updated data attributes for state
  - Renamed context injection function

- **alert:** Delegate media styling to context ([4461c6e](https://github.com/favorodera/centoui/commit/4461c6e))

  - Delegate media styling to root context
  - Remove local `alertVariants` usage
  - Update data attributes from context
  - Rename alert context

- **alert:** Update styling props and context ([995ddb7](https://github.com/favorodera/centoui/commit/995ddb7))

  - Rename color/variant to status prop
  - Update alert context provision
  - Rename internal open model
  - Adjust style computation logic

- **alert:** Improve title component context usage ([b4daec5](https://github.com/favorodera/centoui/commit/b4daec5))

  - Use injected context directly
  - Remove computed styles logic
  - Bind attributes from root context

- **alert:** Simplify variant and color system` ([a195e04](https://github.com/favorodera/centoui/commit/a195e04))

### Documentation

- Update README with new badges and features ([f497238](https://github.com/favorodera/centoui/commit/f497238))

  - Updated npmx badges for better tracking
  - Added a new Features section
  - Improved description clarity


### Styling

- **theme:** Refine default theme colors ([e58739c](https://github.com/favorodera/centoui/commit/e58739c))

  - Adjusted various color values
  - Added `--border` color variable
  - Refined color variable descriptions

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.16...v1.0.0-alpha.17

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.16...v1.0.0-alpha.17)

### Added

- Add Badge component - Introduces a new UI element - Customizable via variant, color, size - Provides a flexible visual indicator ([dd91b33](https://github.com/favorodera/centoui/commit/dd91b33))
- Add Badge component ([0a8cdb9](https://github.com/favorodera/centoui/commit/0a8cdb9))

  - Define styles with tailwind-variants
  - Support multiple variants, colors, and sizes
  - Include square prop for equal padding
  - Export types for props and slots

- Add badge component to registry ([f9b81bc](https://github.com/favorodera/centoui/commit/f9b81bc))
- Add badge component to registry ([1a2685b](https://github.com/favorodera/centoui/commit/1a2685b))
- Add AlertActions component ([4b2d08b](https://github.com/favorodera/centoui/commit/4b2d08b))
- Add AlertClose component - Provides a dedicated close button for alerts - Integrates with AlertRoot context for styling - Renders a configurable button with a close icon ([5a53e73](https://github.com/favorodera/centoui/commit/5a53e73))
- Add AlertDescription component ([31c079b](https://github.com/favorodera/centoui/commit/31c079b))
- Add AlertMedia component - New component for alert media content. - Integrates with alert context for styling. - Provides a slot for custom media. ([ded1fd9](https://github.com/favorodera/centoui/commit/ded1fd9))
- Add AlertRoot component ([52cfc0a](https://github.com/favorodera/centoui/commit/52cfc0a))
- Add AlertTitle component ([8706aa3](https://github.com/favorodera/centoui/commit/8706aa3))
- Add Alert component - Defines alert styles and variants - Provides solid, soft, subtle, and outline variants - Supports multiple color schemes - Includes sub-components for structure ([abe69d6](https://github.com/favorodera/centoui/commit/abe69d6))
- Consolidate button styles for clarity ([65807b6](https://github.com/favorodera/centoui/commit/65807b6))

  - Refactor button variants
  - Simplify color and variant combinations
  - Improve hover and focus states

- Update default icons ([4f1748c](https://github.com/favorodera/centoui/commit/4f1748c))

  - Replaced chevron icons with close icon
  - Updated lucide icon import

- Register alert component ([a17b804](https://github.com/favorodera/centoui/commit/a17b804))
- Add alert component to registry ([8389672](https://github.com/favorodera/centoui/commit/8389672))
- Add state and close handler to alert ([e2ecca0](https://github.com/favorodera/centoui/commit/e2ecca0))

  - Pass variant, color, orientation
  - Add data-centoui-state attribute
  - Bind click event to onClose

- Add state attribute to alert description ([39e4bc9](https://github.com/favorodera/centoui/commit/39e4bc9))

  - improve alert styling options
  - enhance component accessibility

- Add state attribute to alert-media ([62fd41e](https://github.com/favorodera/centoui/commit/62fd41e))
- Implement controllable alert open state ([ea847ae](https://github.com/favorodera/centoui/commit/ea847ae))

  - Add `open` v-model
  - Add `state` computed property
  - Add `onClose` function
  - Forward `open` prop
  - Conditionally render alert

- Enhance alert root context and props ([0da4f58](https://github.com/favorodera/centoui/commit/0da4f58))

  - add controlled open state
  - update context with state and onClose
  - add update:open emit


### Refactors

- Use template literals for button classes - Improves readability - Clarifies square prop JSDoc ([84d255d](https://github.com/favorodera/centoui/commit/84d255d))
- Internal vitest type declarations ([b144fbd](https://github.com/favorodera/centoui/commit/b144fbd))
- Refine badge styling logic ([68acac2](https://github.com/favorodera/centoui/commit/68acac2))
- Update Kbd component color variants ([1c240b4](https://github.com/favorodera/centoui/commit/1c240b4))
- Simplify tooltip component props ([0aa8aa8](https://github.com/favorodera/centoui/commit/0aa8aa8))

  - Remove unnecessary intersections
  - Clean up type definitions

- Add state data attribute to alert actions ([536056c](https://github.com/favorodera/centoui/commit/536056c))
- Simplify button group context provision ([1a58bd9](https://github.com/favorodera/centoui/commit/1a58bd9))

### Chores

- Include augment.d.dts in tsconfig ([6e7eb37](https://github.com/favorodera/centoui/commit/6e7eb37))

### Tests

- Add accessibility tests for Badge component ([e3ad979](https://github.com/favorodera/centoui/commit/e3ad979))
- Add alert component tests ([9935505](https://github.com/favorodera/centoui/commit/9935505))

  - Accessibility tests
  - Visibility tests


### Styling

- Improve preview app layout and header behavior ([7a20689](https://github.com/favorodera/centoui/commit/7a20689))
- Format tsdown config ([f8e9b6f](https://github.com/favorodera/centoui/commit/f8e9b6f))
- Format vite.config.ts ([5e91b9c](https://github.com/favorodera/centoui/commit/5e91b9c))
- Format build registry script ([e51a3e8](https://github.com/favorodera/centoui/commit/e51a3e8))
- Format badge.vue ([06a85e0](https://github.com/favorodera/centoui/commit/06a85e0))
- Simplify badge export syntax ([118daaa](https://github.com/favorodera/centoui/commit/118daaa))
- Add blank line for readability in button ([0f4abb5](https://github.com/favorodera/centoui/commit/0f4abb5))
- Add blank line in button-group-separator.vue ([2081ddc](https://github.com/favorodera/centoui/commit/2081ddc))
- Add spacing to button group styles ([d28b37a](https://github.com/favorodera/centoui/commit/d28b37a))

  - Improve readability of computed styles

- Format test setup utility ([6fb4b6c](https://github.com/favorodera/centoui/commit/6fb4b6c))

  - Update indentation in IntersectionObserver mock
  - Reformat configureAxe rules for consistency

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.15...v1.0.0-alpha.16

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.15...v1.0.0-alpha.16)

### Fixed

- Adjust avatar fallback text color ([7113ce2](https://github.com/favorodera/centoui/commit/7113ce2))
- Update kbd component default variants and styling ([aea85a1](https://github.com/favorodera/centoui/commit/aea85a1))

  - Adjust default variant from 'outline' to 'soft'
  - Update styling from 'bg-muted' to 'bg-neutral'
  - Update text color from 'text-muted-foreground' to 'text-neutral-foreground'

- Update separator border color ([a3bc2d4](https://github.com/favorodera/centoui/commit/a3bc2d4))

  - Change neutral border to border-neutral


### Refactors

- Rename kbdVariants to kbdGroupVariants ([733b631](https://github.com/favorodera/centoui/commit/733b631))

  - Clarify component scope for variants.
  - Update type names accordingly.

- Rename kbdVariants to kbdGroupVariants ([2182000](https://github.com/favorodera/centoui/commit/2182000))

  - Use kbdGroupVariants for clarity
  - Update component styles


### Styling

- Adjust accordion hover text color ([eb2b78c](https://github.com/favorodera/centoui/commit/eb2b78c))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.14...v1.0.0-alpha.15

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.14...v1.0.0-alpha.15)

### Added

- Add Tooltip component ([aafc23d](https://github.com/favorodera/centoui/commit/aafc23d))
- Add tooltip arrow component ([a35000f](https://github.com/favorodera/centoui/commit/a35000f))
- Add TooltipContent component ([c209c97](https://github.com/favorodera/centoui/commit/c209c97))
- Add TooltipPortal component ([e8cbb59](https://github.com/favorodera/centoui/commit/e8cbb59))
- Add TooltipProvider component - Wraps the reka-ui TooltipProvider. - Forwards all props and slots. - Sets delayDuration default to 0. ([e8d349f](https://github.com/favorodera/centoui/commit/e8d349f))
- Add TooltipRoot component ([46f373c](https://github.com/favorodera/centoui/commit/46f373c))
- Add tooltip trigger component ([6306e0d](https://github.com/favorodera/centoui/commit/6306e0d))
- Add tooltip component to registry ([7e4dd9e](https://github.com/favorodera/centoui/commit/7e4dd9e))
- Add tooltip component registry entry ([b28aa37](https://github.com/favorodera/centoui/commit/b28aa37))

### Tests

- Add tooltip component tests - Includes basic usage test - Adds accessibility checks with axe ([b764af3](https://github.com/favorodera/centoui/commit/b764af3))

### Styling

- Format tooltip content classes ([a11f1b0](https://github.com/favorodera/centoui/commit/a11f1b0))
- Remove z-50 from tooltip content ([ca64328](https://github.com/favorodera/centoui/commit/ca64328))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.13...v1.0.0-alpha.14

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.13...v1.0.0-alpha.14)

### Added

- Add Kbd component ([8da3248](https://github.com/favorodera/centoui/commit/8da3248))
- Add Kbd component ([0760eb6](https://github.com/favorodera/centoui/commit/0760eb6))
- Add KbdGroup component and types ([338c200](https://github.com/favorodera/centoui/commit/338c200))
- Add KbdGroup component ([8160fd7](https://github.com/favorodera/centoui/commit/8160fd7))
- Add kbd and kbd-group components to registry ([40bf675](https://github.com/favorodera/centoui/commit/40bf675))
- Add kbd component registry entry ([15bf3a4](https://github.com/favorodera/centoui/commit/15bf3a4))
- Add kbd-group component registry entry ([b05a02d](https://github.com/favorodera/centoui/commit/b05a02d))
- Introduce accordion root component ([0bddac9](https://github.com/favorodera/centoui/commit/0bddac9))
- Add accordion component ([2cb0a6d](https://github.com/favorodera/centoui/commit/2cb0a6d))
- Add AccordionItem component ([485539b](https://github.com/favorodera/centoui/commit/485539b))
- Export AccordionItem and add default borders ([562834a](https://github.com/favorodera/centoui/commit/562834a))
- Add AccordionContent component ([1b0a38d](https://github.com/favorodera/centoui/commit/1b0a38d))
- Add AccordionHeader component - New Vue component for AccordionHeader - Integrates with Reka UI Accordion - Handles styling and context injection ([a8991c4](https://github.com/favorodera/centoui/commit/a8991c4))
- Integrate AccordionItem with root context - Inject AccordionRoot context. - Compute disabled state from root. - Compute open/closed state from root. - Add data attributes for state and orientation. - Enhances styling and accessibility. ([ea1cf58](https://github.com/favorodera/centoui/commit/ea1cf58))
- Add AccordionTrigger component ([1673892](https://github.com/favorodera/centoui/commit/1673892))
- Add accordion component registry ([09d5ae8](https://github.com/favorodera/centoui/commit/09d5ae8))
- Add accordion component to registry ([e197acd](https://github.com/favorodera/centoui/commit/e197acd))

### Refactors

- Migrate theme and config to defaults directory ([d6b5c74](https://github.com/favorodera/centoui/commit/d6b5c74))

  This commit introduces a `defaults` directory within the `packages/core` package to house the default theme CSS and configuration. This change aims to centralize these core assets and improve the project's structure.
  Key changes include:
  - **Moving `centoui.css`**: The main theme CSS file has been moved from `packages/core/src/css` to `packages/core/src/defaults/centoui.css`.
  - **New `config.ts`**: A new file `packages/core/src/defaults/config.ts` is introduced to hold default configuration options, specifically icon mappings.
  - **Updated Imports**: All references to the theme CSS and the `centoui.config.ts` in the `apps/preview` directory have been updated to reflect the new path.
  - **CLI Adjustments**: The `THEME_CSS_URL` constant in `packages/cli/src/constants.ts` and the `buildDefaultConfigFileContent` utility in `packages/cli/src/utils/config-utils.ts` have been updated to point to the new location. The `version` field has been removed from the generated `centoui.config.ts` as it's no longer necessary.
  - **Vite Alias**: A new Vite alias is added in `packages/core/vite.config.ts` to resolve `#centoui/config` to the new `config.ts` file.
  - **Tailwind CSS Integration**: The `eslint.config.mjs` and `tailwind.css` files have been updated to reflect the new path for the `centoui.css` import.
  - **Dependency Removal**: The `centoui` workspace dependency is removed from `apps/preview/package.json` as it's no longer needed for the preview app.
  - **Styling Cleanup**: Minor adjustments to Tailwind CSS class order in various Vue components for improved readability.
  - **Avatar and Button Variants**: Minor adjustments to Tailwind CSS class order in `avatar/index.ts` and `button/index.ts` for consistency.

- Update useForwardProps to useForwardPropsEmits in AvatarImage ([c87e5f1](https://github.com/favorodera/centoui/commit/c87e5f1))
- Accordion root defaults and data attributes ([1c8ab41](https://github.com/favorodera/centoui/commit/1c8ab41))

  - Remove `withDefaults` from props.
  - Compute `orientation` and `disabled` state.
  - Expose `orientation` via data attribute.
  - Expose `disabled` via data attribute.
  - Align defaults with headless component.

- Simplify AvatarImage prop handling - No longer set default for src prop - Update comments for clarity ([a145d8e](https://github.com/favorodera/centoui/commit/a145d8e))
- Use injectButtonGroupContext helper - Encapsulate context injection logic - Improve readability and maintainability - Update comments for clarity ([62b8307](https://github.com/favorodera/centoui/commit/62b8307))
- Use dedicated function for context provision ([da705ca](https://github.com/favorodera/centoui/commit/da705ca))
- Use createContext for button group context ([e04e5cd](https://github.com/favorodera/centoui/commit/e04e5cd))
- Simplify Kbd component props handling ([a5c7268](https://github.com/favorodera/centoui/commit/a5c7268))

  - Forward props to native element.
  - Improve style class computation logic.

- Improve prop handling in KbdGroup ([5287140](https://github.com/favorodera/centoui/commit/5287140))

  - Forward props to native elements
  - Simplify computed styles logic

- Improve separator variant definitions ([ec86bab](https://github.com/favorodera/centoui/commit/ec86bab))

  - Update color and variant definitions
  - Restructure compound variants
  - Clarify slot documentation

- Simplify separator props handling ([d686610](https://github.com/favorodera/centoui/commit/d686610))

  - Remove default values from `as` and `orientation`
  - Streamline prop delegation and forwarding


### Documentation

- Clarify comments in avatar-root.vue - Update prop forwarding comment. - Clarify style class comment. ([7566927](https://github.com/favorodera/centoui/commit/7566927))
- Refine avatar component JSDoc comments ([b4f70c7](https://github.com/favorodera/centoui/commit/b4f70c7))
- Update KbdGroup type and slot descriptions ([3c7b9f8](https://github.com/favorodera/centoui/commit/3c7b9f8))

### Chores

- Update default icon set ([4f189bc](https://github.com/favorodera/centoui/commit/4f189bc))

### Tests

- Add accessibility tests for KbdGroup ([65e423a](https://github.com/favorodera/centoui/commit/65e423a))
- Add accessibility tests for Kbd component ([299d5ed](https://github.com/favorodera/centoui/commit/299d5ed))
- Add accordion accessibility tests ([46b57a4](https://github.com/favorodera/centoui/commit/46b57a4))
- Rename kbd-group test to basic usage ([d8d274a](https://github.com/favorodera/centoui/commit/d8d274a))
- Rename kbd test case ([a61ad30](https://github.com/favorodera/centoui/commit/a61ad30))

  - improve test description

- Rename separator test to basic usage ([7a68116](https://github.com/favorodera/centoui/commit/7a68116))

### Styling

- Reorder active state class in button variants ([32c58b0](https://github.com/favorodera/centoui/commit/32c58b0))
- Adjust Tailwind CSS class order for consistency ([6456e8e](https://github.com/favorodera/centoui/commit/6456e8e))
- Apply comprehensive styling to Accordion components - Add styles for header, trigger, and content - Ensure Accordion sub-components are exported - Update slot documentation for clarity ([29a6133](https://github.com/favorodera/centoui/commit/29a6133))
- Clarify comments in avatar fallback ([613a2b6](https://github.com/favorodera/centoui/commit/613a2b6))
- Clarify comments in button component ([1633df4](https://github.com/favorodera/centoui/commit/1633df4))
- Improve button variant comments and formatting ([9664040](https://github.com/favorodera/centoui/commit/9664040))
- Remove font sans from Kbd root slot - Update Kbd component JSDoc comments ([1c61446](https://github.com/favorodera/centoui/commit/1c61446))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.12...v1.0.0-alpha.13

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.12...v1.0.0-alpha.13)

### Refactors

- Rename button slot attribute ([8be0879](https://github.com/favorodera/centoui/commit/8be0879))
- Remove augment.d.ts from core tsconfig include ([c160ae2](https://github.com/favorodera/centoui/commit/c160ae2))
- Simplify button group data slot name ([59068f8](https://github.com/favorodera/centoui/commit/59068f8))
- Update button group slot name and styling ([b7b46c0](https://github.com/favorodera/centoui/commit/b7b46c0))
- Update data-centoui-slot attribute for separator component ([9da422f](https://github.com/favorodera/centoui/commit/9da422f))

### Documentation

- Update slot descriptions in Avatar component ([aed3198](https://github.com/favorodera/centoui/commit/aed3198))
- Improve code comments and JSDoc across core components ([e0c4e0a](https://github.com/favorodera/centoui/commit/e0c4e0a))

### Tests

- Add button group accessibility tests ([199722d](https://github.com/favorodera/centoui/commit/199722d))

### Styling

- Refine button active state styling ([d58e8cd](https://github.com/favorodera/centoui/commit/d58e8cd))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.11...v1.0.0-alpha.12

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.11...v1.0.0-alpha.12)

### Added

- Add button group separator component ([907eed9](https://github.com/favorodera/centoui/commit/907eed9))
- Add ButtonGroup component ([1a3859a](https://github.com/favorodera/centoui/commit/1a3859a))
- Enhance button group component with orientation and separator props ([3360192](https://github.com/favorodera/centoui/commit/3360192))
- Add button-group component to registry ([7a832e7](https://github.com/favorodera/centoui/commit/7a832e7))
- Add button-group component to registry ([e2f838d](https://github.com/favorodera/centoui/commit/e2f838d))

### Fixed

- Remove unnecessary padding from link button variant ([36407e8](https://github.com/favorodera/centoui/commit/36407e8))
- Correct default orientation for button group separator ([a2c9ecf](https://github.com/favorodera/centoui/commit/a2c9ecf))

### Refactors

- Update slot name for button root element ([06d4000](https://github.com/favorodera/centoui/commit/06d4000))
- Restructure separator size variants using compoundVariants ([7637c96](https://github.com/favorodera/centoui/commit/7637c96))

  This change refactors the `separatorVariants` to utilize `compoundVariants` for defining size variations. Previously, size was directly mapped to border widths. Now, the size definitions are leaner, and the specific border widths for horizontal and vertical orientations are applied through compound variants. This approach offers better organization and maintainability for the size configurations.

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.10...v1.0.0-alpha.11

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.10...v1.0.0-alpha.11)

### Added

- Add button group component ([da22cfa](https://github.com/favorodera/centoui/commit/da22cfa))

### Refactors

- Consolidate button variant classes ([399d998](https://github.com/favorodera/centoui/commit/399d998))
- Remove unused compoundVariants from separator component ([d1b0a63](https://github.com/favorodera/centoui/commit/d1b0a63))

### Styling

- Add relative positioning to avatar root ([1d125ef](https://github.com/favorodera/centoui/commit/1d125ef))
- Adjust button root styles and consolidate class definitions ([2206619](https://github.com/favorodera/centoui/commit/2206619))
- Format avatar tv class definitions ([8951c28](https://github.com/favorodera/centoui/commit/8951c28))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.9...v1.0.0-alpha.10

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.9...v1.0.0-alpha.10)

### Added

- Add Separator component ([bbfcb45](https://github.com/favorodera/centoui/commit/bbfcb45))
- Add Separator component ([f750cd3](https://github.com/favorodera/centoui/commit/f750cd3))
- Add separator component to registry ([959b23f](https://github.com/favorodera/centoui/commit/959b23f))
- Add separator component to registry ([3806bd4](https://github.com/favorodera/centoui/commit/3806bd4))
- Add Vitest type augmentation for vitest-axe ([06f19cc](https://github.com/favorodera/centoui/commit/06f19cc))
- Add color, size, variant, and orientation props to Separator component ([9b3b755](https://github.com/favorodera/centoui/commit/9b3b755))
- Add content slot and styling props to Separator component ([02becf8](https://github.com/favorodera/centoui/commit/02becf8))

### Refactors

- Unify button styling, variants, and states ([63ac2e9](https://github.com/favorodera/centoui/commit/63ac2e9))
- Remove unused AxeMatchers import and declaration ([7f18278](https://github.com/favorodera/centoui/commit/7f18278))

### Chores

- Include augment.d.ts in core tsconfig ([5773085](https://github.com/favorodera/centoui/commit/5773085))

### Tests

- Add accessibility tests for Separator component ([cdeae59](https://github.com/favorodera/centoui/commit/cdeae59))

### Styling

- Format import statement for SeparatorProps ([0b091ed](https://github.com/favorodera/centoui/commit/0b091ed))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.8...v1.0.0-alpha.9

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.8...v1.0.0-alpha.9)

No relevant changes for this release


## v1.0.0-alpha.7...v1.0.0-alpha.8

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.7...v1.0.0-alpha.8)

### Refactors

- Rename avatar-index.ts to index.ts ([99d9ab8](https://github.com/favorodera/centoui/commit/99d9ab8))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.6...v1.0.0-alpha.7

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.6...v1.0.0-alpha.7)

No relevant changes for this release


## v1.0.0-alpha.5...v1.0.0-alpha.6

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.5...v1.0.0-alpha.6)

### Refactors

- Rename avatar-index.ts to index.ts ([09e7517](https://github.com/favorodera/centoui/commit/09e7517))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.4...v1.0.0-alpha.5

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.4...v1.0.0-alpha.5)

No relevant changes for this release


## v1.0.0-alpha.3...v1.0.0-alpha.4

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.3...v1.0.0-alpha.4)

### Added

- Add getInitials utility function for avatar component ([7ab4d6c](https://github.com/favorodera/centoui/commit/7ab4d6c))
- Add square prop to button component ([c1ad714](https://github.com/favorodera/centoui/commit/c1ad714))
- Add square prop to Button component ([e120f8c](https://github.com/favorodera/centoui/commit/e120f8c))
- Add square variant to button component ([2791fc4](https://github.com/favorodera/centoui/commit/2791fc4))

### Refactors

- Replace reactivePick with reactiveOmit for delegated props ([c441f05](https://github.com/favorodera/centoui/commit/c441f05))

### Styling

- Adjust color definitions in centoui.css ([026df17](https://github.com/favorodera/centoui/commit/026df17))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.2...v1.0.0-alpha.3

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.2...v1.0.0-alpha.3)

### Added

- Add @iconify/vue dependency to registry ([1c107fc](https://github.com/favorodera/centoui/commit/1c107fc))

### Chores

- Add @iconify/vue dependency ([43befd3](https://github.com/favorodera/centoui/commit/43befd3))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.1...v1.0.0-alpha.2

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.1...v1.0.0-alpha.2)

### Added

- Add AvatarRoot component ([fd80b97](https://github.com/favorodera/centoui/commit/fd80b97))
- Add Avatar component ([e5e1953](https://github.com/favorodera/centoui/commit/e5e1953))
- Add avatar fallback component ([ce4d047](https://github.com/favorodera/centoui/commit/ce4d047))
- Add AvatarImage component ([a3ab91d](https://github.com/favorodera/centoui/commit/a3ab91d))
- Add disabled prop and slot to AvatarRoot component ([10a7ee9](https://github.com/favorodera/centoui/commit/10a7ee9))
- Enhance Avatar component with comprehensive styling and props ([9f455b2](https://github.com/favorodera/centoui/commit/9f455b2))
- Export getInitials utility and refine avatar styles ([6223e43](https://github.com/favorodera/centoui/commit/6223e43))
- Add getInitials utility for avatar display ([4ed091d](https://github.com/favorodera/centoui/commit/4ed091d))
- Add avatar component ([2a222f8](https://github.com/favorodera/centoui/commit/2a222f8))
- Add avatar component ([187c257](https://github.com/favorodera/centoui/commit/187c257))
- Add AxeMatchers to Vitest setup ([44888d4](https://github.com/favorodera/centoui/commit/44888d4))

### Fixed

- Ensure "packageDeps" is correctly marked as required in globals.json ([b4391dd](https://github.com/favorodera/centoui/commit/b4391dd))

### Refactors

- Use reactivePick instead of reactiveOmit in button component ([b0db238](https://github.com/favorodera/centoui/commit/b0db238))
- Remove redundant aria-disabled styling from button ([8dccf1a](https://github.com/favorodera/centoui/commit/8dccf1a))

### Tests

- Add avatar component accessibility tests ([9e430d7](https://github.com/favorodera/centoui/commit/9e430d7))
- Improve button accessibility tests ([b6a7b60](https://github.com/favorodera/centoui/commit/b6a7b60))
- Remove button snapshot tests ([e0d8b36](https://github.com/favorodera/centoui/commit/e0d8b36))

  The button component has been refactored and its tests have been updated to use a different testing strategy. This commit removes the old snapshot tests to avoid confusion and maintain a clean test suite.


### Styling

- Format button accent variant styles ([c214e5e](https://github.com/favorodera/centoui/commit/c214e5e))
- Refine OKLCH color palette ([062fb00](https://github.com/favorodera/centoui/commit/062fb00))
- Refine core color palette values ([d2d05bc](https://github.com/favorodera/centoui/commit/d2d05bc))
- Format button registry JSON ([4f8d95b](https://github.com/favorodera/centoui/commit/4f8d95b))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.0...v1.0.0-alpha.1

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.0...v1.0.0-alpha.1)

No relevant changes for this release


## v0.2.2...v1.0.0-alpha.0

[compare changes](https://github.com/favorodera/centoui/compare/v0.2.2...v1.0.0-alpha.0)

### Documentation

- Clarify component schema descriptions ([07a8d54](https://github.com/favorodera/centoui/commit/07a8d54))
- Add description to globals.json schema ([4f98713](https://github.com/favorodera/centoui/commit/4f98713))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.2.0...v0.2.2

[compare changes](https://github.com/favorodera/centoui/compare/v0.2.0...v0.2.2)

### Refactors

- Rename component and package dependency fields ([8fcafda](https://github.com/favorodera/centoui/commit/8fcafda))
- Rename componentDependencies to componentDeps and packageDependencies to packageDeps in registry ([06a218e](https://github.com/favorodera/centoui/commit/06a218e))
- Update file path prefixes in component registry and schema ([dd57637](https://github.com/favorodera/centoui/commit/dd57637))
- Correct path prefixes in schemas and registry ([ff4756e](https://github.com/favorodera/centoui/commit/ff4756e))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.0.0...v0.2.0

[compare changes](https://github.com/favorodera/centoui/compare/67135c6ab21dfd109993537b0391b3d9f3116541...v0.2.0)

### Added

- Enhance button component with new variants and color options ([51a13b0](https://github.com/favorodera/centoui/commit/51a13b0))

  This commit introduces several improvements to the button component:
  - **New Variants:** Added `outline`, `ghost`, and `link` variants to provide more styling flexibility.
  - **Color Options:** Expanded color options to include `primary`, `secondary`, `accent`, `neutral`, `success`, `warning`, `error`, and `info`.
  - **Improved Disabled State:** Changed `cursor-not-allowed` to `pointer-events-none` for disabled buttons to ensure better accessibility and behavior.
  - **Refined Compound Variants:** Updated compound variants to accurately reflect the styling for each combination of variant and color, ensuring correct text, background, and border colors.
  - **Size Adjustments:** Made minor adjustments to padding and font sizes for button sizes `xs`, `sm`, `md`, `lg`, and `xl` for better visual consistency.
  - **Link Variant Enhancements:** Added specific styling for the `link` variant, including `underline-offset-4` and `hover:underline`.

- Add Nuxt module and update documentation for pnpm usage ([b2128ed](https://github.com/favorodera/centoui/commit/b2128ed))
- Introduce soft and subtle button variants ([6acc7ba](https://github.com/favorodera/centoui/commit/6acc7ba))
- Add soft and subtle button variants and refine styles ([07a11c9](https://github.com/favorodera/centoui/commit/07a11c9))
- Introduce global CSS variables and update package dependencies schema ([1c2f5ea](https://github.com/favorodera/centoui/commit/1c2f5ea))

  This commit introduces a new global CSS file (`centoui.css`) that defines CSS variables for theming. It also updates the `globals.json` schema and its usage in `index.json` to rename `packageDependencies` to `packageDeps` for better clarity. Additionally, the `BASE_URL` in `constants.ts` has been updated to point to the `main` branch for development purposes. The version in `centoui.config.ts` has been incremented to `0.1.0`.


### Refactors

- Improve button component styling and structure ([be4f9f9](https://github.com/favorodera/centoui/commit/be4f9f9))

  This commit refactors the styling and structure of the button component. It introduces multi-line template literals for better readability of class strings and ensures consistent use of commas at the end of class definitions.


### Tests

- Add Button component tests and remove mock test ([2a3b1f2](https://github.com/favorodera/centoui/commit/2a3b1f2))
- Add button component snapshots ([80c3a47](https://github.com/favorodera/centoui/commit/80c3a47))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.0.0...v0.1.0

[compare changes](https://github.com/favorodera/centoui/compare/v0.0.0...v0.1.0)

### 🚀 Enhancements

- Enhance button component with new variants and color options ([51a13b0](https://github.com/favorodera/centoui/commit/51a13b0))

  This commit introduces several improvements to the button component:
  - **New Variants:** Added `outline`, `ghost`, and `link` variants to provide more styling flexibility.
  - **Color Options:** Expanded color options to include `primary`, `secondary`, `accent`, `neutral`, `success`, `warning`, `error`, and `info`.
  - **Improved Disabled State:** Changed `cursor-not-allowed` to `pointer-events-none` for disabled buttons to ensure better accessibility and behavior.
  - **Refined Compound Variants:** Updated compound variants to accurately reflect the styling for each combination of variant and color, ensuring correct text, background, and border colors.
  - **Size Adjustments:** Made minor adjustments to padding and font sizes for button sizes `xs`, `sm`, `md`, `lg`, and `xl` for better visual consistency.
  - **Link Variant Enhancements:** Added specific styling for the `link` variant, including `underline-offset-4` and `hover:underline`.

- Add Nuxt module and update documentation for pnpm usage ([b2128ed](https://github.com/favorodera/centoui/commit/b2128ed))
- Introduce soft and subtle button variants ([6acc7ba](https://github.com/favorodera/centoui/commit/6acc7ba))
- Add 'add' command to CLI ([6ce5f86](https://github.com/favorodera/centoui/commit/6ce5f86))
- **centoui-cli:** Implement 'add' command for Citty CLI ([ba5e538](https://github.com/favorodera/centoui/commit/ba5e538))
- Prepare add command for component installation ([b8816c5](https://github.com/favorodera/centoui/commit/b8816c5))

### 💅 Refactors

- Improve button component styling and structure ([be4f9f9](https://github.com/favorodera/centoui/commit/be4f9f9))

  This commit refactors the styling and structure of the button component. It introduces multi-line template literals for better readability of class strings and ensures consistent use of commas at the end of class definitions.

- Change monorepo versioning to selective ([e01f412](https://github.com/favorodera/centoui/commit/e01f412))
- Change monorepo versioning to unified mode ([271862f](https://github.com/favorodera/centoui/commit/271862f))
- Add args and run properties to add command ([01c7ac6](https://github.com/favorodera/centoui/commit/01c7ac6))

### 📖 Documentation

- Add README.md with project overview and setup instructions ([f8a1142](https://github.com/favorodera/centoui/commit/f8a1142))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))

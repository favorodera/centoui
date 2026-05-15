# Changelog

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

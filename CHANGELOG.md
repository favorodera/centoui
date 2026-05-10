# Changelog

## v1.0.0-alpha.16...v1.0.0-alpha.17

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.16...v1.0.0-alpha.17)

### Added

- Add badge component preview view - Creates new view for Badge component - Showcases different variants and sizes - Allows interactive prop selection - Includes examples with icons ([ea00fff](https://github.com/favorodera/centoui/commit/ea00fff))
- Add Badge component - Introduces a new UI element - Customizable via variant, color, size - Provides a flexible visual indicator ([dd91b33](https://github.com/favorodera/centoui/commit/dd91b33))
- Add Badge component ([0a8cdb9](https://github.com/favorodera/centoui/commit/0a8cdb9))

  - Define styles with tailwind-variants
  - Support multiple variants, colors, and sizes
  - Include square prop for equal padding
  - Export types for props and slots

- Add badge component to registry ([f9b81bc](https://github.com/favorodera/centoui/commit/f9b81bc))
- Add badge component to registry ([1a2685b](https://github.com/favorodera/centoui/commit/1a2685b))
- Add alert component preview ([c3ce52c](https://github.com/favorodera/centoui/commit/c3ce52c))
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
- Make alert preview controllable ([ee13b4c](https://github.com/favorodera/centoui/commit/ee13b4c))
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
- Remove mock version from mock config ([241f29f](https://github.com/favorodera/centoui/commit/241f29f))
- Add alert component tests ([9935505](https://github.com/favorodera/centoui/commit/9935505))

  - Accessibility tests
  - Visibility tests


### Styling

- Improve preview app layout and header behavior ([7a20689](https://github.com/favorodera/centoui/commit/7a20689))
- Format JSDoc comments and adjust layout ([ae10d34](https://github.com/favorodera/centoui/commit/ae10d34))
- Set view container to full width ([2b8f6c5](https://github.com/favorodera/centoui/commit/2b8f6c5))
- Update comment arrow in test ([78f699d](https://github.com/favorodera/centoui/commit/78f699d))
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

### Added

- Add Pinia for state management ([0b2b428](https://github.com/favorodera/centoui/commit/0b2b428))
- Add Pinia state management ([e5acd38](https://github.com/favorodera/centoui/commit/e5acd38))
- Add preview store for component props ([6427b25](https://github.com/favorodera/centoui/commit/6427b25))

  - Manages active component state
  - Tracks props schema and values
  - Supports hot module reloading

- Update Avatar component schema default size ([87387aa](https://github.com/favorodera/centoui/commit/87387aa))
- Update preview app title ([fb9f26c](https://github.com/favorodera/centoui/commit/fb9f26c))
- Enhance button group preview with variant and color controls ([6477f2d](https://github.com/favorodera/centoui/commit/6477f2d))

  - Add button variant and color options
  - Update schema for preview state
  - Dynamically apply button styles

- Add KbdGroup preview with dynamic props ([14de269](https://github.com/favorodera/centoui/commit/14de269))

  - Add KbdSize, KbdColor, KbdVariant props
  - Enable dynamic prop selection
  - Update Kbd component usage

- Add mobile props panel ([df41d48](https://github.com/favorodera/centoui/commit/df41d48))

  - Implement responsive props panel
  - Show button on mobile screens
  - Hide props panel on route change

- Improve component preview layout and responsiveness ([5572152](https://github.com/favorodera/centoui/commit/5572152))

  - Add border and background to header
  - Hide Button component from header
  - Add props panel toggle button to header
  - Integrate props panel into main layout for large screens
  - Refactor mobile props panel to slide in from the side
  - Update pagination indicator text and styling


### Fixed

- Adjust avatar fallback text color ([7113ce2](https://github.com/favorodera/centoui/commit/7113ce2))
- Update kbd component default variants and styling ([aea85a1](https://github.com/favorodera/centoui/commit/aea85a1))

  - Adjust default variant from 'outline' to 'soft'
  - Update styling from 'bg-muted' to 'bg-neutral'
  - Update text color from 'text-muted-foreground' to 'text-neutral-foreground'

- Update separator border color ([a3bc2d4](https://github.com/favorodera/centoui/commit/a3bc2d4))

  - Change neutral border to border-neutral


### Refactors

- Use path aliases for component imports ([8995bd0](https://github.com/favorodera/centoui/commit/8995bd0))
- Remove props panel from App.vue ([d5d57c7](https://github.com/favorodera/centoui/commit/d5d57c7))
- Overhaul component preview layout - Remove sidebar navigation - Introduce dropdown component selector - Add keyboard and swipe navigation - Float props panel at bottom right - Enhance component exploration UX ([4894605](https://github.com/favorodera/centoui/commit/4894605))
- Simplify props-panel and improve types ([1a2d131](https://github.com/favorodera/centoui/commit/1a2d131))

  - Refactor PropDefinition into union types
  - Add InferValuesFromSchema type helper
  - Simplify UI layout and remove footer
  - Convert range input to standard number input
  - Remove external icon and button dependencies

- Migrate usePreview to Pinia ([8d6f58e](https://github.com/favorodera/centoui/commit/8d6f58e))

  - Use Pinia for state management
  - Simplify composable logic
  - Remove local refs

- Rename accordion props schema ([2160bbc](https://github.com/favorodera/centoui/commit/2160bbc))
- Use button default variants for schema ([5d5a705](https://github.com/favorodera/centoui/commit/5d5a705))
- Update Kbd component preview schema and content ([fe52932](https://github.com/favorodera/centoui/commit/fe52932))

  - Use default variants from kbdVariants
  - Update preview content from symbols to 'Ctrl'

- Use default variants for separator props ([4fe8321](https://github.com/favorodera/centoui/commit/4fe8321))

  - Update schema definition to use default variants.
  - Improve default prop values for separator.

- Simplify tooltip preview props schema ([26da0ae](https://github.com/favorodera/centoui/commit/26da0ae))

  - Removed unused Kbd and KbdGroup imports.
  - Renamed tooltipPropsSchema to schema for brevity.
  - Updated default variant to use tooltipVariants.defaultVariants.variant.
  - Simplified tooltip content within the preview.

- Rename kbdVariants to kbdGroupVariants ([733b631](https://github.com/favorodera/centoui/commit/733b631))

  - Clarify component scope for variants.
  - Update type names accordingly.

- Rename kbdVariants to kbdGroupVariants ([2182000](https://github.com/favorodera/centoui/commit/2182000))

  - Use kbdGroupVariants for clarity
  - Update component styles

- Simplify props-panel layout ([f8bbf58](https://github.com/favorodera/centoui/commit/f8bbf58))

  - Remove fixed panel styling and header
  - Change root element from aside to div
  - Use utility classes for selection control


### Chores

- Add Vercel rewrite for preview app ([c92e5d8](https://github.com/favorodera/centoui/commit/c92e5d8))

### Styling

- Refine view container padding and gap ([f4dea4d](https://github.com/favorodera/centoui/commit/f4dea4d))
- Update Button component usage in component-preview.vue ([990e3cf](https://github.com/favorodera/centoui/commit/990e3cf))
- Adjust accordion hover text color ([eb2b78c](https://github.com/favorodera/centoui/commit/eb2b78c))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.14...v1.0.0-alpha.15

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.14...v1.0.0-alpha.15)

### Added

- Add tooltip component preview ([5330651](https://github.com/favorodera/centoui/commit/5330651))

  - Adds a new view for the Tooltip component.
  - Integrates Tooltip with the preview system.
  - Configures Tooltip props for customization.

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

- Add KbdGroup preview view ([426497b](https://github.com/favorodera/centoui/commit/426497b))
- Add kbd component preview page ([c954533](https://github.com/favorodera/centoui/commit/c954533))
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
- Add accordion component preview ([3939080](https://github.com/favorodera/centoui/commit/3939080))
- Add AccordionContent component ([1b0a38d](https://github.com/favorodera/centoui/commit/1b0a38d))
- Add AccordionHeader component - New Vue component for AccordionHeader - Integrates with Reka UI Accordion - Handles styling and context injection ([a8991c4](https://github.com/favorodera/centoui/commit/a8991c4))
- Integrate AccordionItem with root context - Inject AccordionRoot context. - Compute disabled state from root. - Compute open/closed state from root. - Add data attributes for state and orientation. - Enhances styling and accessibility. ([ea1cf58](https://github.com/favorodera/centoui/commit/ea1cf58))
- Add AccordionTrigger component ([1673892](https://github.com/favorodera/centoui/commit/1673892))
- Add accordion component registry ([09d5ae8](https://github.com/favorodera/centoui/commit/09d5ae8))
- Add accordion component to registry ([e197acd](https://github.com/favorodera/centoui/commit/e197acd))

### Refactors

- Use ButtonGroup for component preview header controls ([af2e1d2](https://github.com/favorodera/centoui/commit/af2e1d2))
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
- Add path alias for centoui config ([43b8dbf](https://github.com/favorodera/centoui/commit/43b8dbf))
- Add core config alias to Vite ([45be1c7](https://github.com/favorodera/centoui/commit/45be1c7))

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
- Adjust view container sizing and centering ([0849f88](https://github.com/favorodera/centoui/commit/0849f88))
- Apply comprehensive styling to Accordion components - Add styles for header, trigger, and content - Ensure Accordion sub-components are exported - Update slot documentation for clarity ([29a6133](https://github.com/favorodera/centoui/commit/29a6133))
- Clarify comments in avatar fallback ([613a2b6](https://github.com/favorodera/centoui/commit/613a2b6))
- Clarify comments in button component ([1633df4](https://github.com/favorodera/centoui/commit/1633df4))
- Improve button variant comments and formatting ([9664040](https://github.com/favorodera/centoui/commit/9664040))
- Remove font sans from Kbd root slot - Update Kbd component JSDoc comments ([1c61446](https://github.com/favorodera/centoui/commit/1c61446))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.12...v1.0.0-alpha.13

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.12...v1.0.0-alpha.13)

### Added

- Add ButtonGroup example with separator ([bf29365](https://github.com/favorodera/centoui/commit/bf29365))

### Refactors

- Rename button slot attribute ([8be0879](https://github.com/favorodera/centoui/commit/8be0879))
- Remove augment.d.ts from core tsconfig include ([c160ae2](https://github.com/favorodera/centoui/commit/c160ae2))
- Simplify button group data slot name ([59068f8](https://github.com/favorodera/centoui/commit/59068f8))
- Update button group slot name and styling ([b7b46c0](https://github.com/favorodera/centoui/commit/b7b46c0))
- Update data-centoui-slot attribute for separator component ([9da422f](https://github.com/favorodera/centoui/commit/9da422f))

### Documentation

- Refactor and clarify Design System documentation ([972206e](https://github.com/favorodera/centoui/commit/972206e))
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

- Add button group preview view ([2cafabc](https://github.com/favorodera/centoui/commit/2cafabc))
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


### Styling

- Add flex-wrap to view-container for responsiveness ([7034f29](https://github.com/favorodera/centoui/commit/7034f29))

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

- Add AvatarFallback component ([122d8c5](https://github.com/favorodera/centoui/commit/122d8c5))
- Add Separator component ([bbfcb45](https://github.com/favorodera/centoui/commit/bbfcb45))
- Add Separator component ([f750cd3](https://github.com/favorodera/centoui/commit/f750cd3))
- Add separator component to registry ([959b23f](https://github.com/favorodera/centoui/commit/959b23f))
- Add separator component to registry ([3806bd4](https://github.com/favorodera/centoui/commit/3806bd4))
- Add Separator component preview ([bbc4cd0](https://github.com/favorodera/centoui/commit/bbc4cd0))
- Add Vitest type augmentation for vitest-axe ([06f19cc](https://github.com/favorodera/centoui/commit/06f19cc))
- Add color, size, variant, and orientation props to Separator component ([9b3b755](https://github.com/favorodera/centoui/commit/9b3b755))
- Add content slot and styling props to Separator component ([02becf8](https://github.com/favorodera/centoui/commit/02becf8))

### Refactors

- Simplify button preview schema and examples ([0595abf](https://github.com/favorodera/centoui/commit/0595abf))
- Update Avatar component props and fallback logic ([1dcdbcb](https://github.com/favorodera/centoui/commit/1dcdbcb))

  The Avatar component's props have been refactored to leverage the `avatarVariants` utility for dynamic size options. The fallback logic has also been simplified, removing direct props for `iconFallback` and `textFallback` and instead relying on the `AvatarFallback` slot for more flexible rendering. The example usage in `avatar-view.vue` has been updated to reflect these changes.

- Dynamically load button variant, color, and size options in preview ([baf45d5](https://github.com/favorodera/centoui/commit/baf45d5))
- Unify button styling, variants, and states ([63ac2e9](https://github.com/favorodera/centoui/commit/63ac2e9))
- Remove unused AxeMatchers import and declaration ([7f18278](https://github.com/favorodera/centoui/commit/7f18278))

### Documentation

- Revise design system guidelines and interaction state rules ([d15debe](https://github.com/favorodera/centoui/commit/d15debe))

### Chores

- Include augment.d.ts in core tsconfig ([5773085](https://github.com/favorodera/centoui/commit/5773085))
- Update relizy to 1.4.2 ([726ac81](https://github.com/favorodera/centoui/commit/726ac81))

### Tests

- Add accessibility tests for Separator component ([cdeae59](https://github.com/favorodera/centoui/commit/cdeae59))

### Styling

- Format import statement for SeparatorProps ([0b091ed](https://github.com/favorodera/centoui/commit/0b091ed))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.8...v1.0.0-alpha.9

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.8...v1.0.0-alpha.9)

### Chores

- Bump versions to alpha 8 ([f581519](https://github.com/favorodera/centoui/commit/f581519))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.7...v1.0.0-alpha.8

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.7...v1.0.0-alpha.8)

### Refactors

- Rename avatar-index.ts to index.ts ([99d9ab8](https://github.com/favorodera/centoui/commit/99d9ab8))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.6...v1.0.0-alpha.7

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.6...v1.0.0-alpha.7)

### Chores

- Bump version to alpha.6 ([95231b0](https://github.com/favorodera/centoui/commit/95231b0))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.5...v1.0.0-alpha.6

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.5...v1.0.0-alpha.6)

### Refactors

- Rename avatar-index.ts to index.ts ([09e7517](https://github.com/favorodera/centoui/commit/09e7517))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.4...v1.0.0-alpha.5

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.4...v1.0.0-alpha.5)

### Chores

- Bump versions to alpha.4 ([41dc9c2](https://github.com/favorodera/centoui/commit/41dc9c2))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.3...v1.0.0-alpha.4

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.3...v1.0.0-alpha.4)

### Added

- Add getInitials utility function for avatar component ([7ab4d6c](https://github.com/favorodera/centoui/commit/7ab4d6c))
- Add square prop to button component ([cdd62e4](https://github.com/favorodera/centoui/commit/cdd62e4))
- Add square prop to button component ([c1ad714](https://github.com/favorodera/centoui/commit/c1ad714))
- Add square prop to Button component ([e120f8c](https://github.com/favorodera/centoui/commit/e120f8c))
- Add square variant to button component ([2791fc4](https://github.com/favorodera/centoui/commit/2791fc4))

### Refactors

- Replace reactivePick with reactiveOmit for delegated props ([c441f05](https://github.com/favorodera/centoui/commit/c441f05))

### Documentation

- Refine design system documentation and contributing guide ([4257e29](https://github.com/favorodera/centoui/commit/4257e29))

### Styling

- Make buttons square in component preview ([3bab46d](https://github.com/favorodera/centoui/commit/3bab46d))
- Adjust color definitions in centoui.css ([026df17](https://github.com/favorodera/centoui/commit/026df17))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.2...v1.0.0-alpha.3

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.2...v1.0.0-alpha.3)

### Added

- Add @iconify/vue dependency to registry ([1c107fc](https://github.com/favorodera/centoui/commit/1c107fc))

### Chores

- Add @iconify/vue dependency ([43befd3](https://github.com/favorodera/centoui/commit/43befd3))
- Update package versions ([c886462](https://github.com/favorodera/centoui/commit/c886462))
- Enable build, ci, and chore types in relizy config ([082df13](https://github.com/favorodera/centoui/commit/082df13))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.1...v1.0.0-alpha.2

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.1...v1.0.0-alpha.2)

### Added

- Add AvatarRoot component ([fd80b97](https://github.com/favorodera/centoui/commit/fd80b97))
- Add Avatar component ([e5e1953](https://github.com/favorodera/centoui/commit/e5e1953))
- Add avatar component preview view ([17f27e5](https://github.com/favorodera/centoui/commit/17f27e5))
- Add avatar fallback component ([ce4d047](https://github.com/favorodera/centoui/commit/ce4d047))
- Add AvatarImage component ([a3ab91d](https://github.com/favorodera/centoui/commit/a3ab91d))
- Add disabled prop and slot to AvatarRoot component ([10a7ee9](https://github.com/favorodera/centoui/commit/10a7ee9))
- Enhance Avatar component with comprehensive styling and props ([9f455b2](https://github.com/favorodera/centoui/commit/9f455b2))
- Use getInitials for avatar text fallback in preview ([741748b](https://github.com/favorodera/centoui/commit/741748b))
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
- Use core Button component and update UI styles ([294074a](https://github.com/favorodera/centoui/commit/294074a))
- Use Button component for interactive elements in component preview ([f781290](https://github.com/favorodera/centoui/commit/f781290))

### Documentation

- Clarify data-centoui-state attribute format in contributing guide ([faaeb3d](https://github.com/favorodera/centoui/commit/faaeb3d))

### Tests

- Add avatar component accessibility tests ([9e430d7](https://github.com/favorodera/centoui/commit/9e430d7))
- Improve button accessibility tests ([b6a7b60](https://github.com/favorodera/centoui/commit/b6a7b60))
- Remove button snapshot tests ([e0d8b36](https://github.com/favorodera/centoui/commit/e0d8b36))

  The button component has been refactored and its tests have been updated to use a different testing strategy. This commit removes the old snapshot tests to avoid confusion and maintain a clean test suite.


### Styling

- Format button accent variant styles ([c214e5e](https://github.com/favorodera/centoui/commit/c214e5e))
- Update background colors for active components and panel headers ([605a574](https://github.com/favorodera/centoui/commit/605a574))
- Refine OKLCH color palette ([062fb00](https://github.com/favorodera/centoui/commit/062fb00))
- Refine core color palette values ([d2d05bc](https://github.com/favorodera/centoui/commit/d2d05bc))
- Format class attributes for readability ([8f820f8](https://github.com/favorodera/centoui/commit/8f820f8))
- Format button registry JSON ([4f8d95b](https://github.com/favorodera/centoui/commit/4f8d95b))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.0...v1.0.0-alpha.1

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.0...v1.0.0-alpha.1)

### Added

- Add vitest configuration for CLI package ([96c8dae](https://github.com/favorodera/centoui/commit/96c8dae))

### Tests

- Add tests for component dependency resolution utility ([5fac5aa](https://github.com/favorodera/centoui/commit/5fac5aa))
- Add tests for buildDefaultConfigFileContent utility ([6801119](https://github.com/favorodera/centoui/commit/6801119))
- Add package management tests ([33a320c](https://github.com/favorodera/centoui/commit/33a320c))
- Add tests for file-system-utils and package-utils ([b7b2487](https://github.com/favorodera/centoui/commit/b7b2487))
- Add tests for fetchFullRegistry caching and error handling ([3e80149](https://github.com/favorodera/centoui/commit/3e80149))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.2.2...v1.0.0-alpha.0

[compare changes](https://github.com/favorodera/centoui/compare/v0.2.2...v1.0.0-alpha.0)

### Added

- Add CentoUI button component ([e3d4b47](https://github.com/favorodera/centoui/commit/e3d4b47))
- Implement centoui button component ([d51566e](https://github.com/favorodera/centoui/commit/d51566e))
- Add remove command to CLI ([4b1170d](https://github.com/favorodera/centoui/commit/4b1170d))
- Enhance component installation with dependency resolution and overwrite confirmation ([63409bd](https://github.com/favorodera/centoui/commit/63409bd))
- Improve init command user experience and robustness ([902b918](https://github.com/favorodera/centoui/commit/902b918))
- Implement component removal command ([99536bd](https://github.com/favorodera/centoui/commit/99536bd))

### Refactors

- Improve CLI constants for URL and fetch headers ([73fcc33](https://github.com/favorodera/centoui/commit/73fcc33))
- Update CORE_SRC_BASE_URL to use versioned tag ([5a559ca](https://github.com/favorodera/centoui/commit/5a559ca))
- Improve component utility function names and descriptions ([e325d38](https://github.com/favorodera/centoui/commit/e325d38))
- Improve config loading and generation functions ([adb16e8](https://github.com/favorodera/centoui/commit/adb16e8))

  This commit refactors the `loadUserConfig` function to `loadCentoUIConfig` and `generateDefaultUserConfigTemplate` to `buildDefaultConfigFileContent`.
  The changes include:
  - Renaming functions for clarity and consistency.
  - Updating JSDoc comments to be more descriptive and accurate.
  - Enhancing error messages for better debugging.
  - Adjusting the dynamic import mechanism to use `file://` URLs for more robust TypeScript config file loading.
  - Modifying the default config template generation to use `defineConfig` for improved IDE support and pre-filling common icon mappings.

- Improve file system utility function clarity and naming ([86516fe](https://github.com/favorodera/centoui/commit/86516fe))
- Improve clarity and error handling in package utility functions ([eb5db50](https://github.com/favorodera/centoui/commit/eb5db50))

  This commit refactors the `installPackages` and `removePackages` functions in `packages/cli/src/utils/package-utils.ts`.
  Key changes include:
  - Renaming `installPackages` to `installMissingPackages` and `removePackages` to `removeOrphanedPackages` to better reflect their functionality.
  - Enhancing JSDoc comments for improved clarity and detail on parameters, return values, and error conditions.
  - Adding try-catch blocks to `installMissingPackages` and `removeOrphanedPackages` to provide more specific error messages when package manager operations fail.
  - Renaming the `ProgressCallback` type to `PackageProgressCallback` for better context.
  - Renaming the `packages` parameter to `requiredPackages` in `installMissingPackages` and to `packagesToConsider` in `removeOrphanedPackages`.
  - Renaming the `installedPackages` variable to `alreadyInstalled` for better readability.
  - Renaming the `packagesToInstall` variable to `packagesToInstall` (no change, but clarified purpose).
  - Renaming the `packagesToRemove` variable to `packagesToRemove` (no change, but clarified purpose).
  - Renaming the `validatePath` function to `validateNonEmptyPath` and refining its validation logic and JSDoc.

- Improve registry fetching and file content retrieval ([bea1aaf](https://github.com/favorodera/centoui/commit/bea1aaf))

  This commit refactors the registry utility functions to enhance clarity, robustness, and naming conventions.
  Key changes include:
  - Renaming `fetchRegistry` to `fetchFullRegistry` for better semantic accuracy.
  - Renaming `fetchComponent` to `fetchRegistryComponentEntry`.
  - Renaming `resolveComponentTree` to `resolveComponentWithDependencies`.
  - Renaming `fetchComponentFile` to `fetchRegistryFileContent`.
  - Renaming `fetchThemeFile` to `fetchThemeCSSContent`.
  - Updating internal variable names for better readability (e.g., `registryCache` to `cachedRegistry`).
  - Enhancing error handling with more descriptive messages and including relevant URLs.
  - Updating JSDoc comments to accurately reflect the function's purpose, parameters, and return values.
  - Modifying constants usage to align with the new function names and purpose.


### Documentation

- Improve type definitions and JSDoc comments ([4e08e8c](https://github.com/favorodera/centoui/commit/4e08e8c))

  This commit enhances the type definitions and JSDoc comments for the `GlobalsRegistry`, `ComponentRegistry`, `Registry`, and `CentoUIConfig` types. The goal is to provide clearer explanations of their purpose, properties, and usage, particularly in the context of the CentoUI CLI and its configuration.
  Key changes include:
  - Refining descriptions for better clarity and context.
  - Adding more specific examples for `packageDeps` and `icons`.
  - Clarifying the relationship between registry files (`globals.json`, `component.json`, `index.json`) and the type definitions.
  - Specifying the expected file paths and conventions for component source files.
  - Emphasizing that `componentDeps` are resolved automatically into a dependency tree.
  - Explaining the role of `CentoUIConfig` as generated by `centoui init` and consumed by CLI commands.

- Clarify component schema descriptions ([07a8d54](https://github.com/favorodera/centoui/commit/07a8d54))
- Update CONTRIBUTING.md with improved formatting and clarity ([e59c376](https://github.com/favorodera/centoui/commit/e59c376))

  The `CONTRIBUTING.md` file has been updated to improve its readability and organization. This includes:
  - **Consistent Indentation:** All nested lists and sub-sections now have consistent indentation, making the document easier to scan.
  - **Code Block Syntax:** Explicitly stating the language for code blocks where appropriate.
  - **Link Accuracy:** Corrected a placeholder in the `git clone` command to reflect the actual repository name.
  - **Minor Textual Improvements:** Small adjustments to wording for better clarity.

- Add description to globals.json schema ([4f98713](https://github.com/favorodera/centoui/commit/4f98713))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.2.0...v0.2.2

[compare changes](https://github.com/favorodera/centoui/compare/v0.2.0...v0.2.2)

### Added

- Add 'add' command to CLI ([26220e7](https://github.com/favorodera/centoui/commit/26220e7))
- Implement component adding functionality ([974b2f9](https://github.com/favorodera/centoui/commit/974b2f9))
- Update centoui version to 0.2.0 ([fa6c55a](https://github.com/favorodera/centoui/commit/fa6c55a))

### Fixed

- Revert BASE_URL to use versioned tags ([08f6fdd](https://github.com/favorodera/centoui/commit/08f6fdd))
- Adjust component path normalization regex ([b78ac84](https://github.com/favorodera/centoui/commit/b78ac84))

### Refactors

- Uncomment and enable add command functionality ([7da5368](https://github.com/favorodera/centoui/commit/7da5368))
- Rename component and package dependency fields ([8fcafda](https://github.com/favorodera/centoui/commit/8fcafda))
- Rename componentDependencies to componentDeps and packageDependencies to packageDeps in registry ([06a218e](https://github.com/favorodera/centoui/commit/06a218e))
- Update file path prefixes in component registry and schema ([dd57637](https://github.com/favorodera/centoui/commit/dd57637))
- Improve variable naming in add command file fetching ([566a89f](https://github.com/favorodera/centoui/commit/566a89f))
- Rename registryPath to path in fetchComponentFile ([d4e47ce](https://github.com/favorodera/centoui/commit/d4e47ce))
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
- Add 'add' command to CLI ([6ce5f86](https://github.com/favorodera/centoui/commit/6ce5f86))
- **centoui-cli:** Implement 'add' command for Citty CLI ([ba5e538](https://github.com/favorodera/centoui/commit/ba5e538))
- Prepare add command for component installation ([b8816c5](https://github.com/favorodera/centoui/commit/b8816c5))
- Add soft and subtle button variants and refine styles ([07a11c9](https://github.com/favorodera/centoui/commit/07a11c9))
- Introduce global CSS variables and update package dependencies schema ([1c2f5ea](https://github.com/favorodera/centoui/commit/1c2f5ea))

  This commit introduces a new global CSS file (`centoui.css`) that defines CSS variables for theming. It also updates the `globals.json` schema and its usage in `index.json` to rename `packageDependencies` to `packageDeps` for better clarity. Additionally, the `BASE_URL` in `constants.ts` has been updated to point to the `main` branch for development purposes. The version in `centoui.config.ts` has been incremented to `0.1.0`.

- Add semver to commit types in relizy.config.ts ([86c88fb](https://github.com/favorodera/centoui/commit/86c88fb))

### Refactors

- Improve button component styling and structure ([be4f9f9](https://github.com/favorodera/centoui/commit/be4f9f9))

  This commit refactors the styling and structure of the button component. It introduces multi-line template literals for better readability of class strings and ensures consistent use of commas at the end of class definitions.

- Change monorepo versioning to selective ([e01f412](https://github.com/favorodera/centoui/commit/e01f412))
- Change monorepo versioning to unified mode ([271862f](https://github.com/favorodera/centoui/commit/271862f))
- Add args and run properties to add command ([01c7ac6](https://github.com/favorodera/centoui/commit/01c7ac6))

### Documentation

- Add README.md with project overview and setup instructions ([f8a1142](https://github.com/favorodera/centoui/commit/f8a1142))

### Tests

- Add Button component tests and remove mock test ([2a3b1f2](https://github.com/favorodera/centoui/commit/2a3b1f2))
- Add button component snapshots ([80c3a47](https://github.com/favorodera/centoui/commit/80c3a47))

### Styling

- Quote glob patterns in pnpm-workspace.yaml ([b6d660b](https://github.com/favorodera/centoui/commit/b6d660b))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))

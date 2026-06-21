# Changelog

## v1.0.0-alpha.39...v1.0.0-alpha.40

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.39...v1.0.0-alpha.40)

### Chores

- **workspace:** Update dependency trust policy and catalogs ([a886ccd](https://github.com/favorodera/centoui/commit/a886ccd))

  - Add semver and nanoid to trustPolicyExclude
  - Remove libphonenumber-js from catalogs

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.38...v1.0.0-alpha.39

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.38...v1.0.0-alpha.39)

### Added

- **cli:** Implement add command and refactor internals ([84e2f81](https://github.com/favorodera/centoui/commit/84e2f81))

  - Implement add command for component installation
  - Refactor init command and network utilities
  - Remove project-specific eslint configuration
  - Update dependencies and registry utility logic

- **cli:** Add remove command and clean up UI strings ([c33c615](https://github.com/favorodera/centoui/commit/c33c615))

  - Add remove command to uninstall components
  - Register remove command in main CLI
  - Remove emojis from CLI intro and outro messages

- **cli:** Enhance component removal process ([58e827a](https://github.com/favorodera/centoui/commit/58e827a))

  - Uninstall orphaned dependencies
  - Add prompt to remove utils file if unused
  - Improve removal progress feedback
  - Add completion summary box

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

- **nuxt:** Implement official nuxt module ([d2c3dbe](https://github.com/favorodera/centoui/commit/d2c3dbe))

  - add nuxt module for component auto-registration
  - include project configuration and utility aliases
  - optimize vite dependencies for development
  - add module documentation and scaffolding files

- **avatar:** Add storybook and update component logic ([5944ae6](https://github.com/favorodera/centoui/commit/5944ae6))

  - add avatar storybook component
  - update avatar component variants and sizes
  - refactor context injection naming
  - standardize computed style formatting

- **storybook:** Add badge component story ([faf3bd8](https://github.com/favorodera/centoui/commit/faf3bd8))

  - create new story for badge component
  - implement dynamic status variants
  - add examples with icons and loading state

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

- **storybook:** Add nested button group examples ([ed14de0](https://github.com/favorodera/centoui/commit/ed14de0))

  - add nested ButtonGroup component stories
  - include vertical separators in examples

- **storybook:** Add icon component story ([d15b5de](https://github.com/favorodera/centoui/commit/d15b5de))

  - create icon.story.vue
  - integrate with useStory composable
  - support icon property customization

- **storybook:** Add input component story ([7a6d1c7](https://github.com/favorodera/centoui/commit/7a6d1c7))

  - add story for input component
  - include knobs for size and disabled state

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

- **storybook:** Add label component story ([54dab21](https://github.com/favorodera/centoui/commit/54dab21))

  - create new label story file
  - include switch component integration
  - add storybook controls for disabled state

- **label:** Update disabled state styles ([9bcb8fa](https://github.com/favorodera/centoui/commit/9bcb8fa))

  - add transition to label root
  - update disabled state selectors
  - standardize opacity for disabled states

- **registry:** Add label component definition ([4e8ff90](https://github.com/favorodera/centoui/commit/4e8ff90))

  - register label component files
  - link to component schema

- **registry:** Add label component to registry ([58a66c5](https://github.com/favorodera/centoui/commit/58a66c5))
- **storybook:** Add select component story ([2f5244c](https://github.com/favorodera/centoui/commit/2f5244c))

  - add interactive select component story
  - include variant and state controls

- **storybook:** Add separator component story ([292b561](https://github.com/favorodera/centoui/commit/292b561))
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

### Fixed

- **cli:** Handle cancellation in remove command ([fda5e42](https://github.com/favorodera/centoui/commit/fda5e42))

  - add cancel import from clack prompts
  - exit process if user cancels removal flow


### Refactors

- **cli:** Simplify command output and flow ([2207db9](https://github.com/favorodera/centoui/commit/2207db9))

  - remove box components from command completion
  - update outro messages for consistency
  - optimize dependency uninstallation logic

- **cli:** Remove utils file support ([e3d5f63](https://github.com/favorodera/centoui/commit/e3d5f63))

  - remove utils file creation and configuration
  - rename packageDeps to npmDependencies
  - rename componentDeps to componentDependencies
  - update types and registry logic

- **nuxt:** Improve component registration logic ([e5d42f6](https://github.com/favorodera/centoui/commit/e5d42f6))

  - Add JSDoc comments to internal functions
  - Fix type safety for component directory path
  - Simplify component registration loop
  - Remove unused alias for utils directory

- **nuxt:** Simplify component registration logic ([19c7de5](https://github.com/favorodera/centoui/commit/19c7de5))

  - refactor component registration to use filter
  - remove redundant buildComponentName helper
  - update eslint-config to 0.1.1
  - improve code comments for clarity

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

- **storybook:** Rename preview to story and add control component ([233d5ef](https://github.com/favorodera/centoui/commit/233d5ef))

  - Rename preview store and composables to story
  - Replace PropsControl with generic Control component
  - Add useStory composable for cleaner API
  - Update UI to use new story terminology

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

- **storybook:** Rename color prop to variant ([541cac1](https://github.com/favorodera/centoui/commit/541cac1))

  - update badge story controls
  - sync badge component props

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

- **header:** Update button variant to error ([32f9b49](https://github.com/favorodera/centoui/commit/32f9b49))
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

- **storybook:** Add eslint configuration ([96e5919](https://github.com/favorodera/centoui/commit/96e5919))

  - install @favorodera/eslint-config
  - add eslint.config.ts for storybook app

- **repo:** Add project infrastructure and registry ([7763941](https://github.com/favorodera/centoui/commit/7763941))

  - add github issue and pull request templates
  - setup ci and release workflows
  - add funding configuration
  - implement registry schema and build script
  - add initial registry components

- **nuxt:** Update build and lint scripts ([d56d0ce](https://github.com/favorodera/centoui/commit/d56d0ce))

  - update typecheck to use nuxt cli
  - ensure nuxt prepare runs before linting


### Styling

- **input:** Add missing newline in component script ([d839ec4](https://github.com/favorodera/centoui/commit/d839ec4))
- **storybook:** Fix indentation in button-group story ([c7fcf54](https://github.com/favorodera/centoui/commit/c7fcf54))
- **label:** Format classNames computed property ([ffdd4ac](https://github.com/favorodera/centoui/commit/ffdd4ac))
- **label:** Add missing comma in classNames computed ([4720297](https://github.com/favorodera/centoui/commit/4720297))
- **storybook:** Add block-full class to body component ([1b7d751](https://github.com/favorodera/centoui/commit/1b7d751))
- **select:** Reformat classNames definition ([a916760](https://github.com/favorodera/centoui/commit/a916760))
- **separator:** Update content font size to xs ([1450d3d](https://github.com/favorodera/centoui/commit/1450d3d))
- **separator:** Add missing newline for readability ([d52bc22](https://github.com/favorodera/centoui/commit/d52bc22))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.37...v1.0.0-alpha.38

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.37...v1.0.0-alpha.38)

### Added

- **cli:** Set default overwrite confirmation to false ([f3a9e04](https://github.com/favorodera/centoui/commit/f3a9e04))

  - set initialValue to false in confirm prompt
  - prevent accidental file overwrites

- **cli:** Add automatic utils file installation ([9b5d047](https://github.com/favorodera/centoui/commit/9b5d047))

  - Fetch and write utils file if required
  - Skip writing if utils file already exists
  - Update file mapping function naming
  - Add conditional task for utils generation

- **cli:** Make utils file generation on-demand ([925aeb2](https://github.com/favorodera/centoui/commit/925aeb2))

  - Remove automatic utils file installation
  - Update init flow to write files via helper
  - Update utils path prompt description

- **cli:** Add cleanup prompt for unused utils file ([3e946cb](https://github.com/favorodera/centoui/commit/3e946cb))

  - prompt user to delete utils file if no longer needed
  - fix potential undefined errors in dependency checks

- **preview:** Update alert content for maintenance ([b20909f](https://github.com/favorodera/centoui/commit/b20909f))

  - Change alert title to scheduled maintenance
  - Update description with maintenance window
  - Change action button to learn more

- **header:** Wrap select items in SelectGroup ([2c55818](https://github.com/favorodera/centoui/commit/2c55818))

  - Add SelectGroup component import
  - Wrap component list in SelectGroup for accessibility

- **alert-dialog:** Add footer padding handling ([34134c1](https://github.com/favorodera/centoui/commit/34134c1))

  - Update content vertical padding
  - Add conditional padding for footer slot

- **preview:** Update slideover view to display deployments ([1caa2f8](https://github.com/favorodera/centoui/commit/1caa2f8))

  - Replace static profile data with deployment list
  - Add deployment details with hash and branch info
  - Update Slideover content layout and design
  - Remove unused avatar and badge components

- **slideover:** Add overlay and portal support ([214e0d7](https://github.com/favorodera/centoui/commit/214e0d7))

  - add DialogPortal and DialogOverlay to content
  - update component to support inherited attributes
  - refactor class definitions for overlay support

- **preview:** Add detailed examples to progress view ([7e96f5a](https://github.com/favorodera/centoui/commit/7e96f5a))

  - add file upload preview component
  - add storage usage display example
  - update progress animation logic

- **slider:** Implement slider component ([70530e9](https://github.com/favorodera/centoui/commit/70530e9))

  - add slider component using reka-ui
  - support reactive props and orientation variants


### Fixed

- **cli:** Set default confirmation to false for remove ([262e6dd](https://github.com/favorodera/centoui/commit/262e6dd))

  - prevent accidental deletion by defaulting to no

- **cli:** Ignore version mismatch during installation ([12b3f3e](https://github.com/favorodera/centoui/commit/12b3f3e))

  - Only check package presence by name
  - Skip version comparison for installed dependencies

- **cli:** Handle undefined component dependencies ([54168c2](https://github.com/favorodera/centoui/commit/54168c2))

  - add optional chaining to componentDeps iteration
  - prevent runtime errors when dependencies are missing

- **preview:** Remove placeholder text in select view ([5ab3910](https://github.com/favorodera/centoui/commit/5ab3910))

  - move SelectLabel into SelectGroup
  - remove filler text from SelectItem

- **slideover:** Ensure full width for side variants ([47aa3a2](https://github.com/favorodera/centoui/commit/47aa3a2))

  - add w-full to left and right slideover variants


### Refactors

- **cli:** Update component registry type schema ([9d9d7ad](https://github.com/favorodera/centoui/commit/9d9d7ad))

  - make description a required field
  - add needsUtils flag
  - make componentDeps optional
  - make packageDeps optional

- **cli:** Rename registry path mapping function ([cb93e2e](https://github.com/favorodera/centoui/commit/cb93e2e))

  - Rename function to mapComponentsRegistryPathToProjectDest
  - Update parameter names for clarity
  - Update JSDoc documentation to reflect changes

- **cli:** Rename mapRegistryPathToProjectDest ([0f942e9](https://github.com/favorodera/centoui/commit/0f942e9))

  - rename function to mapComponentsRegistryPathToProjectDest
  - update tests to use new function name
  - add utilsFilePath to mock config in tests

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

- **preview:** Update slider view implementation ([ca9858d](https://github.com/favorodera/centoui/commit/ca9858d))

  - Replace manual slider composition with Slider component
  - Add labels and icons to slider preview
  - Simplify slider model state management

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

- **preview:** Simplify switch component usage ([700b89a](https://github.com/favorodera/centoui/commit/700b89a))

  - replace SwitchRoot and SwitchThumb with Switch
  - update component implementation in props-control

- **preview:** Simplify switch component usage ([80abe09](https://github.com/favorodera/centoui/commit/80abe09))

  - replace SwitchRoot and SwitchThumb with Switch
  - update template structure for cleaner syntax

- **switch:** Simplify component and update styles ([b433fe9](https://github.com/favorodera/centoui/commit/b433fe9))

  - Consolidate switch components into a single file
  - Update switch sizing and spacing constants
  - Refactor variant props and type exports

- **switch:** Consolidate root and thumb components ([2dbbfb2](https://github.com/favorodera/centoui/commit/2dbbfb2))

  - merge switch-root and switch-thumb into switch.vue
  - simplify component structure
  - remove redundant context injection

- **preview:** Remove size prop from textarea view ([3c5384b](https://github.com/favorodera/centoui/commit/3c5384b))

  - remove size configuration from preview
  - clean up unused textareaVariants import

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


### Documentation

- **CONTRIBUTING:** Update project documentation ([286f28c](https://github.com/favorodera/centoui/commit/286f28c))

  - Add project overview and architecture details
  - Update pnpm version requirement to v11
  - Include development workflow command table
  - Expand testing environment details
  - Add references section for packages and docs

- **CONTRIBUTING:** Update contribution guidelines ([7655833](https://github.com/favorodera/centoui/commit/7655833))

  - Improve structure and readability
  - Add detailed branch and commit conventions
  - Clarify testing and PR workflows
  - Include instructions for bug reports and features


### Chores

- **nuxt:** Update comment for pre-bundle dependencies ([25ed19b](https://github.com/favorodera/centoui/commit/25ed19b))

  - Clarify purpose of pre-bundling Vite dependencies
  - Improve developer experience documentation

- **tile:** Remove Tile component and preview view ([eb7e0c9](https://github.com/favorodera/centoui/commit/eb7e0c9))

  - Remove Tile component implementation
  - Delete Tile component preview demo


### Tests

- **cli:** Update component registry schema in tests ([65ca54b](https://github.com/favorodera/centoui/commit/65ca54b))

  - add description field to component mocks
  - update component dependency test data
  - fix optional chaining in test assertions

- **cli:** Update config generation tests ([015b72b](https://github.com/favorodera/centoui/commit/015b72b))

  - update buildUserDefaultConfigFileContent arguments
  - add validation for utilsFilePath in config content

- **cli:** Remove redundant version check tests ([bb92400](https://github.com/favorodera/centoui/commit/bb92400))

  - delete test cases for existing package versions
  - simplify test suite for installMissingPackages

- **registry:** Update button component schema ([9355565](https://github.com/favorodera/centoui/commit/9355565))

  - add description field to button component
  - remove unused dependency fields


### Styling

- **select:** Adjust layout and sizing styles ([761b27f](https://github.com/favorodera/centoui/commit/761b27f))

  - Fix viewport and group padding alignment
  - Update content width to use full width instead

- **select:** Reorder tailwind classes for consistency ([84feb8c](https://github.com/favorodera/centoui/commit/84feb8c))
- **header:** Adjust layout spacing and alignment ([7d51fdf](https://github.com/favorodera/centoui/commit/7d51fdf))

  - update padding in header container
  - remove fixed height from action container

- **preview:** Reformat slideover view classes ([a6c0d54](https://github.com/favorodera/centoui/commit/a6c0d54))

  - Reorder class attributes
  - Apply consistent multi-line formatting

- **progress:** Reduce root height to 1.5 units ([1bd89df](https://github.com/favorodera/centoui/commit/1bd89df))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.36...v1.0.0-alpha.37

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.36...v1.0.0-alpha.37)

### Added

- **nuxt:** Add alias for centoui utils ([366eb44](https://github.com/favorodera/centoui/commit/366eb44))

  - register #centoui/utils alias
  - remove as const from generated config template

- **playground:** Implement select component and utils ([fd9c2b8](https://github.com/favorodera/centoui/commit/fd9c2b8))

  - add Select component with variants
  - add isSlotEmpty utility to handle empty slots
  - update Separator to use isSlotEmpty
  - configure path aliases for utils and config

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

- **preview:** Add scrollable container to body ([8515cdb](https://github.com/favorodera/centoui/commit/8515cdb))

  - add scrollbar styling to main content
  - constrain height to viewport dimensions
  - enable overflow for content scrolling

- **preview:** Redesign collapsible view component ([b7b4d50](https://github.com/favorodera/centoui/commit/b7b4d50))

  - Update collapsible UI layout
  - Remove unused button component
  - Add descriptive content and icon rotation

- **preview:** Update item component examples ([51e4939](https://github.com/favorodera/centoui/commit/51e4939))

  - Add varied Item component usage scenarios
  - Integrate Avatar, Badge, and Group components
  - Remove deprecated Item sub-components

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

- **readme:** Add AI documentation assistant badges ([e665d15](https://github.com/favorodera/centoui/commit/e665d15))
- **readme:** Refactor links to markdown syntax ([f7f4dc1](https://github.com/favorodera/centoui/commit/f7f4dc1))

  - Convert HTML anchor tags to markdown links
  - Improve documentation readability across project


### Chores

- **docs:** Add target="_blank" to external links ([8c817a7](https://github.com/favorodera/centoui/commit/8c817a7))

### Styling

- **alert:** Update icon sizing tokens ([1889ffa](https://github.com/favorodera/centoui/commit/1889ffa))

  - change svg width to 4
  - update svg height to lh

- **preview:** Remove scrollbar classes from container ([44c6b87](https://github.com/favorodera/centoui/commit/44c6b87))

  - simplify layout styles in view-container
  - remove redundant scrollbar configuration

- **alert:** Reorder tailwind classes for consistency ([0e7b8c5](https://github.com/favorodera/centoui/commit/0e7b8c5))
- **item:** Update layout and styling for item component ([193bfa2](https://github.com/favorodera/centoui/commit/193bfa2))

  - adjust padding and layout for item root
  - apply rounded corners to first child images
  - refactor media slot styles for better readability

- **preview:** Adjust layout spacing and padding ([a92bbfb](https://github.com/favorodera/centoui/commit/a92bbfb))

  - fix calculation syntax in body component
  - update horizontal padding in view-container

- **preview:** Fix syntax error in body layout class ([be7f764](https://github.com/favorodera/centoui/commit/be7f764))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.35...v1.0.0-alpha.36

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.35...v1.0.0-alpha.36)

### Added

- **cli:** Add support for utils file configuration ([0e5ca7d](https://github.com/favorodera/centoui/commit/0e5ca7d))

  - Update README with utils file path prompt
  - Detail utils file creation process
  - Add utilsFilePath to config documentation

- **cli:** Fetch and write utils file content ([c7045e7](https://github.com/favorodera/centoui/commit/c7045e7))

  - Import fetchUtilsFileContent from registry-utils
  - Update init command to fetch utils file content
  - Replace empty file creation with fetched content

- **registry:** Add fetchUtilsFileContent utility ([81dfe22](https://github.com/favorodera/centoui/commit/81dfe22))

  - Add fetchUtilsFileContent to fetch utils file
  - Export utility for use in cli init command


### Documentation

- **core:** Add utilsFilePath property to README ([b7f322d](https://github.com/favorodera/centoui/commit/b7f322d))

  - Document utilsFilePath configuration option

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.34...v1.0.0-alpha.35

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.34...v1.0.0-alpha.35)

### Added

- **avatar-preview:** Add AvatarGroup example ([1f875df](https://github.com/favorodera/centoui/commit/1f875df))
- **button-group:** Add Input component example ([e58e85d](https://github.com/favorodera/centoui/commit/e58e85d))
- **preview:** Add KbdGroup to kbd view ([3f9b7ab](https://github.com/favorodera/centoui/commit/3f9b7ab))
- **preview:** Add pin-input view ([3abaa18](https://github.com/favorodera/centoui/commit/3abaa18))

  - Create preview component for PinInput

- **cli:** Add utils file URL constant ([b96dc48](https://github.com/favorodera/centoui/commit/b96dc48))

  - Define UTILS_FILE_URL for centoui init

- **cli:** Add utilsFilePath to CentoUIConfig ([ef8cc5e](https://github.com/favorodera/centoui/commit/ef8cc5e))
- **cli:** Prompt and create utils file ([9bedc22](https://github.com/favorodera/centoui/commit/9bedc22))

  - Add utilsFilePath prompt to init command
  - Write empty utils file if confirmed
  - Pass utils path to config builder

- **config:** Add utilsFilePath to default user config ([c41d67f](https://github.com/favorodera/centoui/commit/c41d67f))
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

- **preview:** Correct AvatarGroup import ([4ae32c6](https://github.com/favorodera/centoui/commit/4ae32c6))
- **preview:** Correct kbd import and layout ([410038a](https://github.com/favorodera/centoui/commit/410038a))

  - Update KbdGroup import path
  - Remove max-w-lg class from ViewContainer

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

- **preview:** Add #centoui/utils path alias ([3051e9d](https://github.com/favorodera/centoui/commit/3051e9d))

  - Add path mapping for core utility defaults.

- **preview:** Add utils alias and set port - Add alias for #centoui/utils - Set default server port to 5173 ([d84a2fe](https://github.com/favorodera/centoui/commit/d84a2fe))
- **preview:** Remove avatar group view ([50512f9](https://github.com/favorodera/centoui/commit/50512f9))
- **preview:** Remove kbd-group-view ([175d5c2](https://github.com/favorodera/centoui/commit/175d5c2))

  - Delete unused Kbd Group preview component

- **core:** Add path alias for utils ([c649459](https://github.com/favorodera/centoui/commit/c649459))
- **core:** Add utils path alias ([5e30634](https://github.com/favorodera/centoui/commit/5e30634))
- **registry:** Remove avatar-group component entry ([9fd8651](https://github.com/favorodera/centoui/commit/9fd8651))

  - delete avatar-group.json registry file

- **registry:** Remove kbd-group component definition ([53c394d](https://github.com/favorodera/centoui/commit/53c394d))
- **nuxt:** Update devServer port to 3001 ([d17ee7d](https://github.com/favorodera/centoui/commit/d17ee7d))
- **vue-playground:** Set dev server port to 5174 ([4c78c4f](https://github.com/favorodera/centoui/commit/4c78c4f))

### Tests

- **config:** Add test for utilsFilePath ([4b2108d](https://github.com/favorodera/centoui/commit/4b2108d))

### Styling

- **preview:** Reorder CSS classes in view container - Standardize utility class order - Replace `size-full` with `w-full` - Improve readability ([6f7233c](https://github.com/favorodera/centoui/commit/6f7233c))
- **vue:** Format tailwind classes in App.vue ([c992e99](https://github.com/favorodera/centoui/commit/c992e99))

  - Reorder and format tailwind utility classes
  - Apply consistent indentation for class attributes

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.33...v1.0.0-alpha.34

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.33...v1.0.0-alpha.34)

### Added

- **preview:** Add slider view ([aaba672](https://github.com/favorodera/centoui/commit/aaba672))

  - Add slider-view.vue to preview app
  - Support single and multiple values
  - Integrate tooltips on slider thumbs

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

- **components:** Add button and icon components ([b10135f](https://github.com/favorodera/centoui/commit/b10135f))

  - Add Button component to playgrounds
  - Add Icon component to playgrounds
  - Implement dark mode toggle in app templates
  - Configure @nuxtjs/color-mode in Nuxt playground

- **components:** Add select and separator ([7d33293](https://github.com/favorodera/centoui/commit/7d33293))

  - Add Select component using reka-ui
  - Add Separator component
  - Remove default min-rows from textarea


### Chores

- **eslint:** Configure for new playgrounds ([2b74205](https://github.com/favorodera/centoui/commit/2b74205))

### Styling

- **app:** Format utility classes for readability ([2b873b0](https://github.com/favorodera/centoui/commit/2b873b0))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.31...v1.0.0-alpha.32

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.31...v1.0.0-alpha.32)

### Added

- **preview:** Add input group preview view ([a6a7128](https://github.com/favorodera/centoui/commit/a6a7128))

  - Add preview for InputGroup component
  - Showcase size, disabled, and invalid states
  - Include examples with icons and addons

- **preview:** Add label view ([28e9328](https://github.com/favorodera/centoui/commit/28e9328))
- **preview:** Add textarea view ([91c9e3e](https://github.com/favorodera/centoui/commit/91c9e3e))

  - Add preview view for the Textarea component

- **components:** Add InputGroup, Label, and Textarea components ([dc69186](https://github.com/favorodera/centoui/commit/dc69186))

### Fixed

- **input:** Resolve TS2590 union complexity ([e72e896](https://github.com/favorodera/centoui/commit/e72e896))

  - Extend vue InputHTMLAttributes
  - Omit autocomplete to avoid complexity
  - Redefine autocomplete with simpler types

- **preview:** Fix tooltip component name ([bfbe529](https://github.com/favorodera/centoui/commit/bfbe529))

  - Correct preview name from Separator to Tooltip
  - Remove unused flex class from TooltipContent

- **avatar:** Omit src from delegated props ([dbd632f](https://github.com/favorodera/centoui/commit/dbd632f))
- **avatar:** Omit class in AvatarImageProps ([402962d](https://github.com/favorodera/centoui/commit/402962d))

  - Omit class from ImgHTMLAttributes
  - Avoids type conflict with ClassProp


### Refactors

- **input:** Remove redundant comments ([7f96bdb](https://github.com/favorodera/centoui/commit/7f96bdb))
- **props-control:** Use Label component for property labels ([828b906](https://github.com/favorodera/centoui/commit/828b906))
- **preview:** Simplify input view layout ([a805007](https://github.com/favorodera/centoui/commit/a805007))
- **header:** Use Textarea component ([1c62872](https://github.com/favorodera/centoui/commit/1c62872))

  - Replace native element with custom Textarea
  - Remove redundant styling classes


### Chores

- **eslint:** Set better-tailwindcss group ([251bef2](https://github.com/favorodera/centoui/commit/251bef2))
- **core:** Add dom libs to tsconfig ([b9e95ff](https://github.com/favorodera/centoui/commit/b9e95ff))

### Styling

- **preview:** Format body component classes ([dc1f70c](https://github.com/favorodera/centoui/commit/dc1f70c))
- **preview:** Format classes in header ([cd406b6](https://github.com/favorodera/centoui/commit/cd406b6))
- **preview:** Format card footer classes ([52983fa](https://github.com/favorodera/centoui/commit/52983fa))
- **preview:** Format popover view classes ([d1b566c](https://github.com/favorodera/centoui/commit/d1b566c))
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

- **preview:** Add input preview view ([ebdd41a](https://github.com/favorodera/centoui/commit/ebdd41a))

  - Add input-view.vue preview component
  - Bind model value to display typed text
  - Include size, disabled, and invalid states

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


### Refactors

- **preview:** Use Input component ([08a7bc8](https://github.com/favorodera/centoui/commit/08a7bc8))

  - Replace native input with UI Input component
  - Simplify event handling with update:value


### Documentation

- **readme:** Clean up and standardize readmes ([2ab5c6f](https://github.com/favorodera/centoui/commit/2ab5c6f))

  - Fix badge URL encoding for spaces
  - Capitalize and improve alt text descriptions
  - Remove emoji from preview app header

- **nuxt:** Remove rocket emoji from title ([f008fa0](https://github.com/favorodera/centoui/commit/f008fa0))

### Styling

- **input:** Reorder tailwind classes ([42adbd2](https://github.com/favorodera/centoui/commit/42adbd2))
- **select:** Add trigger transition duration ([a8c6194](https://github.com/favorodera/centoui/commit/a8c6194))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.29...v1.0.0-alpha.30

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.29...v1.0.0-alpha.30)

### Documentation

- **nuxt:** Add comment for Vite pre-bundling ([b61d4b7](https://github.com/favorodera/centoui/commit/b61d4b7))
- **readme:** Overhaul readmes across monorepo ([96ccaab](https://github.com/favorodera/centoui/commit/96ccaab))

  - Rewrite all package and app README files
  - Add detailed CLI usage and architecture docs
  - Update package descriptions and keywords


### Chores

- **nuxt:** Add @iconify/vue to optimized deps ([c37fd79](https://github.com/favorodera/centoui/commit/c37fd79))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.28...v1.0.0-alpha.29

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.28...v1.0.0-alpha.29)

### Added

- **nuxt:** Implement component auto-registration ([a7491f1](https://github.com/favorodera/centoui/commit/a7491f1))

  - Use c12 to load configuration in CLI and Nuxt
  - Add Nuxt module component registration logic


### Refactors

- **nuxt:** Simplify module and optimize deps ([c425089](https://github.com/favorodera/centoui/commit/c425089))

  - Change config alias extension to .ts
  - Remove manual builder watch hooks
  - Optimize dependency pre-bundling in Vite


### Chores

- **playgrounds:** Restructure dev playgrounds ([f3aecc8](https://github.com/favorodera/centoui/commit/f3aecc8))

  - Remove deprecated apps/sandbox
  - Add Vue and Nuxt dev playgrounds
  - Upgrade workspace pnpm engine to v11

- **playground:** Clean up local components ([044c9c1](https://github.com/favorodera/centoui/commit/044c9c1))
- **playground:** Clean up nuxt config ([6a133ad](https://github.com/favorodera/centoui/commit/6a133ad))

  - Clean up unused Nuxt config options
  - Reorder Tailwind classes in preview

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.27...v1.0.0-alpha.28

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.27...v1.0.0-alpha.28)

### Added

- **preview:** Add icon preview page ([6b89520](https://github.com/favorodera/centoui/commit/6b89520))

  - Add view to preview Icon component

- **cli:** Add config defaults URL constant ([b149c11](https://github.com/favorodera/centoui/commit/b149c11))
- **cli:** Fetch default config from GitHub ([7a9576e](https://github.com/favorodera/centoui/commit/7a9576e))

  - Fetch raw default config from GitHub
  - Extract inner properties from fetched config
  - Generate user config with fetched defaults

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
- **props-control:** Add string type input control ([4b48878](https://github.com/favorodera/centoui/commit/4b48878))
- **preview:** Add string prop definition and inference ([67f0c0d](https://github.com/favorodera/centoui/commit/67f0c0d))
- **preview:** Make icon configurable ([e46bb83](https://github.com/favorodera/centoui/commit/e46bb83))

### Fixed

- **icon:** Correct NuxtIconProps type reference ([881856b](https://github.com/favorodera/centoui/commit/881856b))

### Refactors

- **preview:** Use internal Icon component ([1c33721](https://github.com/favorodera/centoui/commit/1c33721))
- **preview:** Use internal Icon component ([f595b3e](https://github.com/favorodera/centoui/commit/f595b3e))
- **preview:** Use centoui Icon component ([ca31bd9](https://github.com/favorodera/centoui/commit/ca31bd9))
- **preview:** Use internal Icon component ([8d0e86d](https://github.com/favorodera/centoui/commit/8d0e86d))
- **preview:** Use internal icon component ([d519f22](https://github.com/favorodera/centoui/commit/d519f22))
- **preview:** Use local Icon component ([2ed22ab](https://github.com/favorodera/centoui/commit/2ed22ab))
- **breadcrumb:** Use internal Icon component ([6d22193](https://github.com/favorodera/centoui/commit/6d22193))
- **preview:** Use internal Icon component ([c915a99](https://github.com/favorodera/centoui/commit/c915a99))
- **preview:** Use centoui icon component ([b016f21](https://github.com/favorodera/centoui/commit/b016f21))
- **preview:** Import Icon from centoui ([c5cd051](https://github.com/favorodera/centoui/commit/c5cd051))
- **preview:** Use internal Icon component ([b37e045](https://github.com/favorodera/centoui/commit/b37e045))
- **preview:** Use internal Icon component ([09152c9](https://github.com/favorodera/centoui/commit/09152c9))

  - Import Icon from centoui instead of iconify

- **preview:** Use internal icon component ([79240ae](https://github.com/favorodera/centoui/commit/79240ae))
- **preview:** Use internal Icon component ([6d9dd17](https://github.com/favorodera/centoui/commit/6d9dd17))
- **sandbox:** Update theme colors and tokens ([d9921b8](https://github.com/favorodera/centoui/commit/d9921b8))

  - Update OKLCH values for light and dark modes
  - Add surface-raised, ring, and border tokens
  - Map new variables in Tailwind

- **button:** Remove button component ([5781225](https://github.com/favorodera/centoui/commit/5781225))

  - Remove centoui button from sandbox
  - Delete button.vue and index.ts definitions

- **init:** Build user-specific default config ([6808e76](https://github.com/favorodera/centoui/commit/6808e76))
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

- **sandbox:** Update icon mappings ([ccc6a07](https://github.com/favorodera/centoui/commit/ccc6a07))

  - Remove deprecated version property
  - Add chevron and ellipsis icons
  - Remove menu icon mapping

- **sandbox:** Update dependencies ([69f8e05](https://github.com/favorodera/centoui/commit/69f8e05))

  - Add @iconify/vue dependency
  - Upgrade reka-ui and tailwindcss packages

- **core:** Update peer dependencies ([eca7f8f](https://github.com/favorodera/centoui/commit/eca7f8f))

  - Update vue peer dependency to ^3.5.0
  - Move core dependencies to peerDependencies
  - Add @nuxt/icon to peer dependencies
  - Mark icon packages as optional peers

- **registry:** Update component dependencies ([ce43334](https://github.com/favorodera/centoui/commit/ce43334))

### Tests

- **cli:** Update config utility tests ([d313b8e](https://github.com/favorodera/centoui/commit/d313b8e))

  - Add tests for extracting inner config content
  - Mock fetch for user default config building
  - Test fetch errors and empty configuration cases

- **registry:** Simplify fetchFullRegistry test name ([0cc8211](https://github.com/favorodera/centoui/commit/0cc8211))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.26...v1.0.0-alpha.27

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.26...v1.0.0-alpha.27)

### Added

- **preview:** Add showClose control to slideover ([2fa07c3](https://github.com/favorodera/centoui/commit/2fa07c3))

  - add showClose option to preview controls
  - pass show-close prop to SlideoverHeader

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

- **preview:** Add breadcrumb view ([2298631](https://github.com/favorodera/centoui/commit/2298631))

  - Add breadcrumb-view.vue to preview app
  - Implement basic breadcrumb usage example

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

- **preview:** Simplify footer class binding ([9a3deff](https://github.com/favorodera/centoui/commit/9a3deff))

  - Use Array.includes for side check
  - Clean up footer classes formatting

- **pagination:** Update last page icon ([9c2f784](https://github.com/favorodera/centoui/commit/9c2f784))
- **slideover:** Improve close button accessibility ([f84d09d](https://github.com/favorodera/centoui/commit/f84d09d))
- **icons:** Standardize default icon names ([9ecc112](https://github.com/favorodera/centoui/commit/9ecc112))

### Styling

- **preview:** Remove scrollbar-thumb-rounded ([866d66e](https://github.com/favorodera/centoui/commit/866d66e))
- **preview:** Format slideover footer class ([bb6d509](https://github.com/favorodera/centoui/commit/bb6d509))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.25...v1.0.0-alpha.26

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.25...v1.0.0-alpha.26)

### Added

- **preview:** Add card component preview ([99b7719](https://github.com/favorodera/centoui/commit/99b7719))

  - Create card-view.vue with demo cards
  - Showcase profile and product card examples

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
- **preview:** Add slideover view ([b7b95c1](https://github.com/favorodera/centoui/commit/b7b95c1))

  - Add preview page for Slideover component
  - Support interactive side variant options

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

### Chores

- **pnpm:** Move peer rules to workspace ([8fc8c97](https://github.com/favorodera/centoui/commit/8fc8c97))

  - Move peerDependencyRules to workspace config
  - Standardize quotes in pnpm-workspace.yaml

- **preview:** Update pagination props ([4109d72](https://github.com/favorodera/centoui/commit/4109d72))

  - reduce total count to 50
  - set sibling count to 0

- **lint:** Update eslint-plugin-better-tailwindcss ([0483d6d](https://github.com/favorodera/centoui/commit/0483d6d))

### Styling

- **preview:** Use size-full in view container ([772a15b](https://github.com/favorodera/centoui/commit/772a15b))
- **preview:** Reorder view-container classes ([744eed3](https://github.com/favorodera/centoui/commit/744eed3))
- **alert:** Update svg size and title leading ([4f36584](https://github.com/favorodera/centoui/commit/4f36584))

  - Use size-4 and translate-y-0.5 for svg
  - Add leading-tight to title variant

- **alert-dialog:** Adjust title line-height ([79c75cb](https://github.com/favorodera/centoui/commit/79c75cb))
- **popover:** Use tight line-height ([d75a4bf](https://github.com/favorodera/centoui/commit/d75a4bf))
- **slideover:** Standardize Tailwind class format ([9d664ab](https://github.com/favorodera/centoui/commit/9d664ab))
- **card:** Remove sm:text-lg from title ([c3a6f50](https://github.com/favorodera/centoui/commit/c3a6f50))
- **popover:** Adjust description line height ([baaa1d2](https://github.com/favorodera/centoui/commit/baaa1d2))
- **slideover:** Reduce max width ([c4bb5bd](https://github.com/favorodera/centoui/commit/c4bb5bd))
- **preview:** Add border to slideover footer ([2aa20c4](https://github.com/favorodera/centoui/commit/2aa20c4))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.24...v1.0.0-alpha.25

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.24...v1.0.0-alpha.25)

### Added

- **select:** Add multiple selection to preview - Add `multiple` prop to preview controls. - Integrate icons into trigger and items. - Update `SelectSeparator` conditions. - Adjust `SelectTrigger` width. - Extend preview groups to three. ([94b7d7f](https://github.com/favorodera/centoui/commit/94b7d7f))
- **select:** Allow content in separator - Renders default slot between separator lines. - Falls back to a single line if no slot content. ([df8c327](https://github.com/favorodera/centoui/commit/df8c327))
- **preview:** Update select view with real data ([a500723](https://github.com/favorodera/centoui/commit/a500723))

  - Replace mock groups with fruit and vegetable lists
  - Add SelectSeparator and SelectArrow components
  - Improve SelectContent configuration

- **pagination:** Add preview for pagination component ([9b6de27](https://github.com/favorodera/centoui/commit/9b6de27))
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
- **preview:** Add controls to pagination view ([acfa3ac](https://github.com/favorodera/centoui/commit/acfa3ac))

  - add variant and size controls to preview
  - fix pagination active state and loop keys

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
- **preview:** Add Switch component preview view ([50d610d](https://github.com/favorodera/centoui/commit/50d610d))
- **switch:** Add Switch component - Adds base component and variants - Includes SwitchRoot and SwitchThumb - Defines styling using tailwind-variants - Provides context and types ([3aa98d0](https://github.com/favorodera/centoui/commit/3aa98d0))
- **switch:** Implement SwitchRoot component with context and props handling ([acaf5be](https://github.com/favorodera/centoui/commit/acaf5be))
- **switch:** Add SwitchThumb component with context and props handling ([6ec2eeb](https://github.com/favorodera/centoui/commit/6ec2eeb))
- **switch:** Add Switch component with schema, description, and file references ([3eb2df3](https://github.com/favorodera/centoui/commit/3eb2df3))
- **switch:** Add switch.json for Switch component registration ([c2fa828](https://github.com/favorodera/centoui/commit/c2fa828))
- **App:** Replace ComponentPreview with App component in main template ([bc19204](https://github.com/favorodera/centoui/commit/bc19204))
- **app:** Create app component with header and body structure ([6423668](https://github.com/favorodera/centoui/commit/6423668))
- **App:** Restructure App component to use Header and Body components ([d27e36e](https://github.com/favorodera/centoui/commit/d27e36e))
- **styles:** Add styles for #app component in index.css ([7dd1cae](https://github.com/favorodera/centoui/commit/7dd1cae))
- **alert-dialog:** Update content styles for improved layout and responsiveness ([755a671](https://github.com/favorodera/centoui/commit/755a671))
- **app:** Remove app component and its associated template ([d70317a](https://github.com/favorodera/centoui/commit/d70317a))
- **body:** Add new Body component with props panel and layout ([bb18afa](https://github.com/favorodera/centoui/commit/bb18afa))
- **component-preview:** Remove ComponentPreview.vue file and its associated logic ([2970e99](https://github.com/favorodera/centoui/commit/2970e99))
- **header:** Add new header component with navigation and theme editing features ([47d3ab2](https://github.com/favorodera/centoui/commit/47d3ab2))
- **props-control:** Add PropsControl component for dynamic property management ([1d721f7](https://github.com/favorodera/centoui/commit/1d721f7))
- **props-panel:** Remove PropsPanel component and associated logic ([d0690c3](https://github.com/favorodera/centoui/commit/d0690c3))
- **view-container:** Update styling for improved layout and responsiveness ([a3a7512](https://github.com/favorodera/centoui/commit/a3a7512))
- **use-app:** Implement main composable for application state and behavior management ([7d529ff](https://github.com/favorodera/centoui/commit/7d529ff))

### Fixed

- **select:** Remove default-open attribute ([6c86344](https://github.com/favorodera/centoui/commit/6c86344))
- **pagination:** Format ellipsis styles for better readability ([a09b55b](https://github.com/favorodera/centoui/commit/a09b55b))
- **progress:** Update root slot style to use rounded-xs for consistency ([c04bca7](https://github.com/favorodera/centoui/commit/c04bca7))
- **main:** Reorder app.use calls for proper initialization ([d0b9f3d](https://github.com/favorodera/centoui/commit/d0b9f3d))
- **App.vue:** Format div element for improved readability ([8dc01de](https://github.com/favorodera/centoui/commit/8dc01de))

### Refactors

- **components:** Streamline and refine component styles ([02c5ae2](https://github.com/favorodera/centoui/commit/02c5ae2))

  - Remove Text component and its preview
  - Unify SelectTrigger variant to `outline`
  - Adjust spacing, padding, and font sizes

- **select:** Improve component styling and variants ([79f4f17](https://github.com/favorodera/centoui/commit/79f4f17))
- **select:** Improve item layout and sizing logic ([7a51b07](https://github.com/favorodera/centoui/commit/7a51b07))
- **router:** Simplify comments and improve readability in index.ts ([8bbd0c1](https://github.com/favorodera/centoui/commit/8bbd0c1))
- **types:** Simplify prop definitions and remove unused types ([89d0687](https://github.com/favorodera/centoui/commit/89d0687))
- **preview:** Replace usePreview with useApp for preview initialization ([d3b00c6](https://github.com/favorodera/centoui/commit/d3b00c6))

### Chores

- **vite.config:** Add a blank line for improved readability ([52bfd4a](https://github.com/favorodera/centoui/commit/52bfd4a))

### Styling

- **progress:** Format indicator classes ([ab167e5](https://github.com/favorodera/centoui/commit/ab167e5))
- **tooltip:** Reformat content styles for readability ([4eac1a0](https://github.com/favorodera/centoui/commit/4eac1a0))
- **button:** Make outline ring-inset conditional ([f727167](https://github.com/favorodera/centoui/commit/f727167))
- **button:** Improve outline variant readability ([43bec93](https://github.com/favorodera/centoui/commit/43bec93))
- **select:** Format Tailwind utility classes ([01e6f02](https://github.com/favorodera/centoui/commit/01e6f02))
- **alert-dialog:** Enhance content layout and improve styling consistency ([05cbd68](https://github.com/favorodera/centoui/commit/05cbd68))
- **view-container:** Adjust max-width for improved layout consistency ([5f2785d](https://github.com/favorodera/centoui/commit/5f2785d))
- **accordion-view:** Update accordion content for clarity and improved user guidance ([01cb68a](https://github.com/favorodera/centoui/commit/01cb68a))
- **alert-dialog:** Update button text and dialog content for clarity and accuracy ([ca966b0](https://github.com/favorodera/centoui/commit/ca966b0))
- **alert-view:** Update alert content and icon for clarity and relevance ([27f84c8](https://github.com/favorodera/centoui/commit/27f84c8))
- **button-group-view:** Simplify button variant and size handling, enhance select component integration ([1484888](https://github.com/favorodera/centoui/commit/1484888))
- **kbd-group-view:** Simplify keyboard size handling by removing unused size props ([f051299](https://github.com/favorodera/centoui/commit/f051299))
- **popover-view:** Update notification settings for clarity and conciseness ([a2df942](https://github.com/favorodera/centoui/commit/a2df942))
- **accordion:** Enhance layout and spacing for improved readability ([913c782](https://github.com/favorodera/centoui/commit/913c782))
- **alert-view:** Refine content and description spacing for consistency ([51d90eb](https://github.com/favorodera/centoui/commit/51d90eb))
- **alert-dialog:** Improve spacing and layout for content and header ([56432a2](https://github.com/favorodera/centoui/commit/56432a2))
- **avatar:** Simplify size variants and adjust fallback text sizes for consistency ([5b1b206](https://github.com/favorodera/centoui/commit/5b1b206))
- **badge:** Streamline variant definitions and adjust size styles for consistency ([6ff9d39](https://github.com/favorodera/centoui/commit/6ff9d39))
- **button:** Refine padding and size variants for improved consistency ([968ac02](https://github.com/favorodera/centoui/commit/968ac02))
- **collapsible:** Add animation duration to content for smoother transitions ([07aa738](https://github.com/favorodera/centoui/commit/07aa738))
- **kbd:** Standardize text sizes and remove unused size variant ([3ec8d22](https://github.com/favorodera/centoui/commit/3ec8d22))
- **popover:** Adjust spacing and padding for improved layout consistency ([117fe81](https://github.com/favorodera/centoui/commit/117fe81))
- **body:** Add social media buttons with icons and links for GitHub and Twitter ([2c103f0](https://github.com/favorodera/centoui/commit/2c103f0))
- **props-control:** Enhance layout structure and improve boolean switch implementation ([071f99e](https://github.com/favorodera/centoui/commit/071f99e))
- **popover:** Refine button layout and remove redundant class from PopoverBody ([e063033](https://github.com/favorodera/centoui/commit/e063033))
- **switch-view:** Add disabled and invalid props to SwitchRoot for enhanced functionality ([f22eec5](https://github.com/favorodera/centoui/commit/f22eec5))
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
- **popover-view:** Replace button with avatar for trigger and update content for personalization ([00f8b6a](https://github.com/favorodera/centoui/commit/00f8b6a))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.23...v1.0.0-alpha.24

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.23...v1.0.0-alpha.24)

### Added

- **button:** Add aria-invalid state preview ([0b6d584](https://github.com/favorodera/centoui/commit/0b6d584))
- **preview:** Use button for popover close action ([cd1b377](https://github.com/favorodera/centoui/commit/cd1b377))
- **preview:** Add select component view ([96d0a1b](https://github.com/favorodera/centoui/commit/96d0a1b))
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
- **core:** Update component ([f333a15](https://github.com/favorodera/centoui/commit/f333a15))
- **core:** Streamline component styling and context API** ([4cc5b48](https://github.com/favorodera/centoui/commit/4cc5b48))

  - Remove style context, directly use `*Variants` in components
  - Simplify component context types
  - Update `tailwind-variants` `


### Chores

- **preview:** Add workspace dependency ([692781d](https://github.com/favorodera/centoui/commit/692781d))
- **registry:** Update registry registry ([a81ce6d](https://github.com/favorodera/centoui/commit/a81ce6d))
- **registry:** Update registry registry ([2a3eb4b](https://github.com/favorodera/centoui/commit/2a3eb4b))
- **registry:** Update core registry ([69d5394](https://github.com/favorodera/centoui/commit/69d5394))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.22...v1.0.0-alpha.23

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.22...v1.0.0-alpha.23)

### Added

- **preview:** Add Progress component view ([4b8f29d](https://github.com/favorodera/centoui/commit/4b8f29d))
- **progress:** Add Progress component ([8a432fd](https://github.com/favorodera/centoui/commit/8a432fd))
- **progress:** Add progress indicator component - Implements visual progress bar - Calculates transform for animation - Integrates with progress root context ([15c72c7](https://github.com/favorodera/centoui/commit/15c72c7))
- **progress:** Add ProgressRoot component - Use reka-ui for base functionality - Integrate centoui styling and context - Provide ProgressRoot component ([2cd64ae](https://github.com/favorodera/centoui/commit/2cd64ae))
- **registry:** Add progress component ([3dd6633](https://github.com/favorodera/centoui/commit/3dd6633))
- **progress:** Add component to registry ([7aae4ab](https://github.com/favorodera/centoui/commit/7aae4ab))
- **preview:** Add popover component preview ([857a4a0](https://github.com/favorodera/centoui/commit/857a4a0))
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

- **progress-view:** Clean up template whitespace ([68ff5ad](https://github.com/favorodera/centoui/commit/68ff5ad))
- **progress:** Reorder Tailwind classes ([d9e201c](https://github.com/favorodera/centoui/commit/d9e201c))
- **progress:** Adjust root border radius ([05154ba](https://github.com/favorodera/centoui/commit/05154ba))
- **progress:** Update root background to use bg-muted ([3084fb5](https://github.com/favorodera/centoui/commit/3084fb5))
- **alert-dialog:** Adjust padding for consistent layout - Update content padding to vertical only - Add horizontal padding to header - Add horizontal padding to footer ([652e9fa](https://github.com/favorodera/centoui/commit/652e9fa))
- **button:** Adjust border radius per size variant ([1c04e44](https://github.com/favorodera/centoui/commit/1c04e44))
- **collapsible-view:** Adjust root width for responsiveness ([c6c8dfe](https://github.com/favorodera/centoui/commit/c6c8dfe))
- **popover:** Update PopoverClose button variant ([6412161](https://github.com/favorodera/centoui/commit/6412161))
- **preview:** Format CSS classes for CollapsibleRoot ([cf03ba4](https://github.com/favorodera/centoui/commit/cf03ba4))
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
- **preview/text:** Add Text component preview - Implements new view for Text component - Adds interactive controls for size and weight ([85cc80d](https://github.com/favorodera/centoui/commit/85cc80d))
- **text:** Add Text component with variants ([075c261](https://github.com/favorodera/centoui/commit/075c261))
- **text:** Add Text component - Provides basic text styling - Supports size and weight props ([58e6d7e](https://github.com/favorodera/centoui/commit/58e6d7e))

### Styling

- **button:** Improve readability of link variant classes ([7f5a650](https://github.com/favorodera/centoui/commit/7f5a650))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.20...v1.0.0-alpha.21

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.20...v1.0.0-alpha.21)

### Added

- **preview:** Add Collapsible view ([9836d14](https://github.com/favorodera/centoui/commit/9836d14))

  - Imports CentoUI Collapsible components
  - Sets up basic interactive demo
  - Includes trigger and content sections

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

### Refactors

- **preview:** Remove kbdVariant option ([7ebf0df](https://github.com/favorodera/centoui/commit/7ebf0df))

### Styling

- **avatar:** Format avatar root template ([28d09f1](https://github.com/favorodera/centoui/commit/28d09f1))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.19...v1.0.0-alpha.20

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.19...v1.0.0-alpha.20)

### Added

- **preview:** Add AspectRatio component view ([904bc1a](https://github.com/favorodera/centoui/commit/904bc1a))

  - Adds new view for AspectRatio component
  - Implements dynamic ratio parsing
  - Previews image within ratio container

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

- **preview:** Move defaultThemeCss import ([c855bce](https://github.com/favorodera/centoui/commit/c855bce))

  - Moved CSS import to script tag
  - No functional change


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


### Styling

- Adjust Tailwind class order ([f456182](https://github.com/favorodera/centoui/commit/f456182))

  - Moved background class to front
  - Consolidated rounded class attribute

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.18...v1.0.0-alpha.19

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.18...v1.0.0-alpha.19)

### Added

- **avatar:** Improve root component implementation ([51a3a7f](https://github.com/favorodera/centoui/commit/51a3a7f))

  - Use provideCentouiAvatarRootContext
  - Simplify computed styles
  - Pass class to root variant

- **preview:** Expose workspace state for UI - Creates `usePreviewPanel` composable - Exposes preview store state for shell UI - Provides `componentName`, `schema`, ([438007f](https://github.com/favorodera/centoui/commit/438007f))
- **preview:** Add usePreview composable ([d912e49](https://github.com/favorodera/centoui/commit/d912e49))

  - Registers component schema
  - Provides typed values ref
  - Integrates with Pinia store
  - Simplifies preview state setup

- **preview:** Add state management store ([89914aa](https://github.com/favorodera/centoui/commit/89914aa))

  - Manages component and props state
  - Tracks current and initial prop values
  - Persists prop values per component
  - Implements setPreviewState and updateValues
  - Includes HMR support for development

- **props:** Define component props schema ([e5be780](https://github.com/favorodera/centoui/commit/e5be780))

  - Defines types for component property definitions
  - Supports select, boolean, string, and number types
  - Introduces `PropsSchema` for prop mapping

- **preview:** Add AlertDialog view ([626fca5](https://github.com/favorodera/centoui/commit/626fca5))

  - Adds new view for AlertDialog
  - Showcases basic component usage
  - Imports AlertDialog elements
  - Includes trigger button and overlay
  - Demonstrates title and description

- **preview:** Add Avatar shape prop control ([dc47b5c](https://github.com/favorodera/centoui/commit/dc47b5c))

  - Added shape prop to Avatar preview
  - Refactored usePreview hook integration
  - Updated component import paths

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

- **preview:** Use Pinia for state management ([2f1ef8b](https://github.com/favorodera/centoui/commit/2f1ef8b))

  - Migrated usePreview composable to Pinia store
  - Improved state management for component preview
  - Added focus-visible styles

- **props-panel:** Simplify types and styling ([71e0f83](https://github.com/favorodera/centoui/commit/71e0f83))

  - Moved prop types to shared utils module
  - Imported `PropsSchema` from `@/utils/types`
  - Simplified prop update and access functions
  - Updated focus ring styles for all inputs
  - Replaced select arrow with Lucide icon

- **preview:** Remove preview state store - Removed shared state for preview - Eliminated component props management - Store is no longer required ([2664c58](https://github.com/favorodera/centoui/commit/2664c58))
- **preview:** Remove usePreview composable ([196db32](https://github.com/favorodera/centoui/commit/196db32))
- **preview:** Simplify accordion view setup ([281f193](https://github.com/favorodera/centoui/commit/281f193))

  - Integrate schema into usePreview call
  - Remove onMounted for state setup
  - Update import paths to use aliases
  - Remove redundant AccordionHeader prop

- **alert-view:** Simplify alert component usage ([12c5b02](https://github.com/favorodera/centoui/commit/12c5b02))

  - Introduce AlertContent wrapper
  - Remove status and orientation props
  - Use single variant prop for AlertRoot
  - Streamline preview state management

- **preview:** Simplify Badge component preview ([ccec7b6](https://github.com/favorodera/centoui/commit/ccec7b6))

  - Removed color prop from preview schema
  - Removed square prop usage from template
  - Updated usePreview hook integration
  - Standardized import paths for components

- **preview:** Streamline Button Group view ([ebc266e](https://github.com/favorodera/centoui/commit/ebc266e))

  - Removed `buttonColor` prop from schema
  - Streamlined `usePreview` integration
  - Updated `ButtonGroupSeparator` display logic
  - Consolidated preview schema definition

- **preview:** Streamline button view setup ([06df7c1](https://github.com/favorodera/centoui/commit/06df7c1))

  - Direct `usePreview` initialization
  - Removed `color` prop from preview
  - Cleaned up `onMounted` hook
  - Updated import aliases

- **kbd-group:** Streamline preview setup ([1f75aec](https://github.com/favorodera/centoui/commit/1f75aec))

  - Simplify usePreview composable usage
  - Remove kbdColor prop from preview
  - Update import paths to use aliases

- **preview:** Simplify Kbd view setup ([511e501](https://github.com/favorodera/centoui/commit/511e501))

  - Simplified `usePreview` hook integration
  - Removed `color` prop from Kbd preview
  - Updated import paths to use `@`

- **preview:** Simplify Separator view config** ([ce6aba1](https://github.com/favorodera/centoui/commit/ce6aba1))

  - Update usePreview hook integration
  - Remove redundant prop definitions
  - Use alias paths for imports

- **tooltip:** Simplify preview setup ([159d7b1](https://github.com/favorodera/centoui/commit/159d7b1))

  - Removed `variant` prop from preview
  - Streamlined `usePreview` initialization
  - Removed `onMounted` hook
  - Updated import paths

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

### Documentation

- Remove design system details ([8ab195b](https://github.com/favorodera/centoui/commit/8ab195b))

  - Removed component philosophy
  - Removed design system tokens guide
  - Removed border vs ring explanation
  - Removed variant design patterns
  - Removed data-centoui-* API docs


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

- Remove unused disabled prop from AvatarView ([0cf9f32](https://github.com/favorodera/centoui/commit/0cf9f32))

  - Remove disabled prop from schema
  - Remove disabled prop from AvatarRoot usage

- Remove disabled prop from AvatarRoot ([76290d4](https://github.com/favorodera/centoui/commit/76290d4))

  - Remove disabled prop from AvatarRoot.
  - Remove disabled attribute binding.
  - Update component styles.

- Remove disabled variant from avatarVariants and related props ([61e550f](https://github.com/favorodera/centoui/commit/61e550f))
- Remove disabled test case from AvatarRoot accessibility tests ([63de736](https://github.com/favorodera/centoui/commit/63de736))
- **alert:** Rename variant/color to status ([6fadabe](https://github.com/favorodera/centoui/commit/6fadabe))

  - Rename `variant` to `status` prop
  - Remove `color` prop from schema
  - Update `AlertRoot` to use `status` prop
  - Adjust `Button` color based on `status`

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

- **contributing:** Rewrite contributing guide ([4e21c14](https://github.com/favorodera/centoui/commit/4e21c14))

  - Removed outdated sections and details
  - Consolidated setup and workflow
  - Revised design system guidelines
  - Simplified interaction state rules
  - Streamlined pull request process

- Revamp README for clarity and current info ([f6e9f79](https://github.com/favorodera/centoui/commit/f6e9f79))

  - Update badges and project description
  - Add features and monorepo structure
  - Revise development prerequisites
  - Improve overall readability and layout

- Update README with new badges and features ([ebbf1ca](https://github.com/favorodera/centoui/commit/ebbf1ca))

  - Updated npm badges to use npmx.dev
  - Improved description for clarity
  - Added features section
  - Updated installation command

- Update README with new badges and features ([f497238](https://github.com/favorodera/centoui/commit/f497238))

  - Updated npmx badges for better tracking
  - Added a new Features section
  - Improved description clarity

- Update README shields and description ([55d77d1](https://github.com/favorodera/centoui/commit/55d77d1))

  - Updated npm shield styles
  - Changed npm shield links
  - Updated project description text
  - Updated CentoUI link to core package

- Update preview app README ([99a3370](https://github.com/favorodera/centoui/commit/99a3370))

  - Updated component link to monorepo path
  - Clarified setup and development instructions
  - Adjusted CLI usage description


### Styling

- Center content in component preview ([c16570f](https://github.com/favorodera/centoui/commit/c16570f))
- Set view container to full height - Ensure container uses available height - Remove superfluous width class - Remove horizontal auto margins - Streamline layout properties ([402cf38](https://github.com/favorodera/centoui/commit/402cf38))
- **preview:** Standardize border color classes ([b0fa81d](https://github.com/favorodera/centoui/commit/b0fa81d))
- **props-panel:** Update border color classes ([9a84780](https://github.com/favorodera/centoui/commit/9a84780))
- **preview:** Set max-width on view container ([d50e194](https://github.com/favorodera/centoui/commit/d50e194))
- **preview:** Reformat class attributes ([016816e](https://github.com/favorodera/centoui/commit/016816e))
- **preview:** Format ViewContainer classes ([90bb44a](https://github.com/favorodera/centoui/commit/90bb44a))
- **theme:** Refine default theme colors ([e58739c](https://github.com/favorodera/centoui/commit/e58739c))

  - Adjusted various color values
  - Added `--border` color variable
  - Refined color variable descriptions

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


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

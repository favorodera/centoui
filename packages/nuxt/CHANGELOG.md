# Changelog

## v1.1.0...v1.2.0

[compare changes](https://github.com/favorodera/centoui/compare/v1.1.0...v1.2.0)

### Added

- **icon:** Add @iconify/vue dependency to registry ([f0496fa](https://github.com/favorodera/centoui/commit/f0496fa))

  - add @iconify/vue to icon component dependencies


### Documentation

- **readme:** Update npm badge to show total downloads ([2283013](https://github.com/favorodera/centoui/commit/2283013))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0...v1.1.0

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0...v1.1.0)

### Styling

- **repo:** Format json and source files ([e3dea52](https://github.com/favorodera/centoui/commit/e3dea52))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.2.2...v1.0.0

[compare changes](https://github.com/favorodera/centoui/compare/v0.2.2...v1.0.0)

### Added

- **preview:** Add theme customization ([6266e4f](https://github.com/favorodera/centoui/commit/6266e4f))

  - Implement dynamic theme injection via textarea
  - Add copy and reset theme functionality
  - Update README descriptions

- **nuxt:** Implement component auto-registration ([a7491f1](https://github.com/favorodera/centoui/commit/a7491f1))

  - Use c12 to load configuration in CLI and Nuxt
  - Add Nuxt module component registration logic

- **nuxt:** Add alias for centoui utils ([366eb44](https://github.com/favorodera/centoui/commit/366eb44))

  - register #centoui/utils alias
  - remove as const from generated config template

- **nuxt:** Implement official nuxt module ([d2c3dbe](https://github.com/favorodera/centoui/commit/d2c3dbe))

  - add nuxt module for component auto-registration
  - include project configuration and utility aliases
  - optimize vite dependencies for development
  - add module documentation and scaffolding files

- **core:** Add alert component ([9bca1c5](https://github.com/favorodera/centoui/commit/9bca1c5))

  - implement alert root, body, title, and description
  - include storybook documentation for alert
  - add alert to component registry

- **components:** Add collapsible component ([955699a](https://github.com/favorodera/centoui/commit/955699a))

  - implement collapsible root, trigger, and content
  - add tailwind-variants for styling
  - register component in the registry
  - add storybook story for demonstration


### Refactors

- **nuxt:** Simplify module and optimize deps ([c425089](https://github.com/favorodera/centoui/commit/c425089))

  - Change config alias extension to .ts
  - Remove manual builder watch hooks
  - Optimize dependency pre-bundling in Vite

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


### Documentation

- Update README with new badges and features ([ebbf1ca](https://github.com/favorodera/centoui/commit/ebbf1ca))

  - Updated npm badges to use npmx.dev
  - Improved description for clarity
  - Added features section
  - Updated installation command

- **nuxt:** Add comment for Vite pre-bundling ([b61d4b7](https://github.com/favorodera/centoui/commit/b61d4b7))
- **readme:** Overhaul readmes across monorepo ([96ccaab](https://github.com/favorodera/centoui/commit/96ccaab))

  - Rewrite all package and app README files
  - Add detailed CLI usage and architecture docs
  - Update package descriptions and keywords

- **readme:** Clean up and standardize readmes ([2ab5c6f](https://github.com/favorodera/centoui/commit/2ab5c6f))

  - Fix badge URL encoding for spaces
  - Capitalize and improve alt text descriptions
  - Remove emoji from preview app header

- **nuxt:** Remove rocket emoji from title ([f008fa0](https://github.com/favorodera/centoui/commit/f008fa0))
- **readme:** Refactor links to markdown syntax ([f7f4dc1](https://github.com/favorodera/centoui/commit/f7f4dc1))

  - Convert HTML anchor tags to markdown links
  - Improve documentation readability across project


### Chores

- Update package versions ([c886462](https://github.com/favorodera/centoui/commit/c886462))
- Bump versions to alpha.4 ([41dc9c2](https://github.com/favorodera/centoui/commit/41dc9c2))
- Bump version to alpha.6 ([95231b0](https://github.com/favorodera/centoui/commit/95231b0))
- Bump versions to alpha 8 ([f581519](https://github.com/favorodera/centoui/commit/f581519))
- **playgrounds:** Restructure dev playgrounds ([f3aecc8](https://github.com/favorodera/centoui/commit/f3aecc8))

  - Remove deprecated apps/sandbox
  - Add Vue and Nuxt dev playgrounds
  - Upgrade workspace pnpm engine to v11

- **nuxt:** Add @iconify/vue to optimized deps ([c37fd79](https://github.com/favorodera/centoui/commit/c37fd79))
- **docs:** Add target="_blank" to external links ([8c817a7](https://github.com/favorodera/centoui/commit/8c817a7))
- **nuxt:** Update comment for pre-bundle dependencies ([25ed19b](https://github.com/favorodera/centoui/commit/25ed19b))

  - Clarify purpose of pre-bundling Vite dependencies
  - Improve developer experience documentation

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

- **repo:** Add dependabot config and reformat files ([5d32e0b](https://github.com/favorodera/centoui/commit/5d32e0b))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.45...v1.0.0-alpha.46

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.45...v1.0.0-alpha.46)

No relevant changes for this release


## v1.0.0-alpha.44...v1.0.0-alpha.45

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.44...v1.0.0-alpha.45)

No relevant changes for this release


## v1.0.0-alpha.43...v1.0.0-alpha.44

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.43...v1.0.0-alpha.44)

No relevant changes for this release


## v1.0.0-alpha.42...v1.0.0-alpha.43

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.42...v1.0.0-alpha.43)

### Added

- **components:** Add collapsible component ([955699a](https://github.com/favorodera/centoui/commit/955699a))

  - implement collapsible root, trigger, and content
  - add tailwind-variants for styling
  - register component in the registry
  - add storybook story for demonstration

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.41...v1.0.0-alpha.42

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.41...v1.0.0-alpha.42)

### Added

- **core:** Add alert component ([9bca1c5](https://github.com/favorodera/centoui/commit/9bca1c5))

  - implement alert root, body, title, and description
  - include storybook documentation for alert
  - add alert to component registry

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.40...v1.0.0-alpha.41

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.40...v1.0.0-alpha.41)

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

- **nuxt:** Implement official nuxt module ([d2c3dbe](https://github.com/favorodera/centoui/commit/d2c3dbe))

  - add nuxt module for component auto-registration
  - include project configuration and utility aliases
  - optimize vite dependencies for development
  - add module documentation and scaffolding files


### Refactors

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

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.37...v1.0.0-alpha.38

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.37...v1.0.0-alpha.38)

### Chores

- **nuxt:** Update comment for pre-bundle dependencies ([25ed19b](https://github.com/favorodera/centoui/commit/25ed19b))

  - Clarify purpose of pre-bundling Vite dependencies
  - Improve developer experience documentation

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.36...v1.0.0-alpha.37

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.36...v1.0.0-alpha.37)

### Added

- **nuxt:** Add alias for centoui utils ([366eb44](https://github.com/favorodera/centoui/commit/366eb44))

  - register #centoui/utils alias
  - remove as const from generated config template


### Documentation

- **readme:** Refactor links to markdown syntax ([f7f4dc1](https://github.com/favorodera/centoui/commit/f7f4dc1))

  - Convert HTML anchor tags to markdown links
  - Improve documentation readability across project


### Chores

- **docs:** Add target="_blank" to external links ([8c817a7](https://github.com/favorodera/centoui/commit/8c817a7))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.35...v1.0.0-alpha.36

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.35...v1.0.0-alpha.36)

No relevant changes for this release


## v1.0.0-alpha.34...v1.0.0-alpha.35

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.34...v1.0.0-alpha.35)

No relevant changes for this release


## v1.0.0-alpha.33...v1.0.0-alpha.34

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.33...v1.0.0-alpha.34)

No relevant changes for this release


## v1.0.0-alpha.32...v1.0.0-alpha.33

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.32...v1.0.0-alpha.33)

No relevant changes for this release


## v1.0.0-alpha.31...v1.0.0-alpha.32

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.31...v1.0.0-alpha.32)

No relevant changes for this release


## v1.0.0-alpha.30...v1.0.0-alpha.31

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.30...v1.0.0-alpha.31)

### Documentation

- **readme:** Clean up and standardize readmes ([2ab5c6f](https://github.com/favorodera/centoui/commit/2ab5c6f))

  - Fix badge URL encoding for spaces
  - Capitalize and improve alt text descriptions
  - Remove emoji from preview app header

- **nuxt:** Remove rocket emoji from title ([f008fa0](https://github.com/favorodera/centoui/commit/f008fa0))

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

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.27...v1.0.0-alpha.28

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.27...v1.0.0-alpha.28)

No relevant changes for this release


## v1.0.0-alpha.26...v1.0.0-alpha.27

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.26...v1.0.0-alpha.27)

No relevant changes for this release


## v1.0.0-alpha.25...v1.0.0-alpha.26

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.25...v1.0.0-alpha.26)

No relevant changes for this release


## v1.0.0-alpha.24...v1.0.0-alpha.25

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.24...v1.0.0-alpha.25)

No relevant changes for this release


## v1.0.0-alpha.23...v1.0.0-alpha.24

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.23...v1.0.0-alpha.24)

No relevant changes for this release


## v1.0.0-alpha.22...v1.0.0-alpha.23

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.22...v1.0.0-alpha.23)

No relevant changes for this release


## v1.0.0-alpha.21...v1.0.0-alpha.22

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.21...v1.0.0-alpha.22)

No relevant changes for this release


## v1.0.0-alpha.20...v1.0.0-alpha.21

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.20...v1.0.0-alpha.21)

No relevant changes for this release


## v1.0.0-alpha.19...v1.0.0-alpha.20

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.19...v1.0.0-alpha.20)

### Added

- **preview:** Add theme customization ([6266e4f](https://github.com/favorodera/centoui/commit/6266e4f))

  - Implement dynamic theme injection via textarea
  - Add copy and reset theme functionality
  - Update README descriptions

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.18...v1.0.0-alpha.19

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.18...v1.0.0-alpha.19)

No relevant changes for this release


## v1.0.0-alpha.17...v1.0.0-alpha.18

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.17...v1.0.0-alpha.18)

### Documentation

- Update README with new badges and features ([ebbf1ca](https://github.com/favorodera/centoui/commit/ebbf1ca))

  - Updated npm badges to use npmx.dev
  - Improved description for clarity
  - Added features section
  - Updated installation command

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.16...v1.0.0-alpha.17

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.16...v1.0.0-alpha.17)

No relevant changes for this release


## v1.0.0-alpha.15...v1.0.0-alpha.16

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.15...v1.0.0-alpha.16)

No relevant changes for this release


## v1.0.0-alpha.14...v1.0.0-alpha.15

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.14...v1.0.0-alpha.15)

No relevant changes for this release


## v1.0.0-alpha.13...v1.0.0-alpha.14

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.13...v1.0.0-alpha.14)

No relevant changes for this release


## v1.0.0-alpha.12...v1.0.0-alpha.13

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.12...v1.0.0-alpha.13)

No relevant changes for this release


## v1.0.0-alpha.11...v1.0.0-alpha.12

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.11...v1.0.0-alpha.12)

No relevant changes for this release


## v1.0.0-alpha.10...v1.0.0-alpha.11

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.10...v1.0.0-alpha.11)

No relevant changes for this release


## v1.0.0-alpha.9...v1.0.0-alpha.10

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.9...v1.0.0-alpha.10)

No relevant changes for this release


## v1.0.0-alpha.8...v1.0.0-alpha.9

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.8...v1.0.0-alpha.9)

### Chores

- Bump versions to alpha 8 ([f581519](https://github.com/favorodera/centoui/commit/f581519))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.6...v1.0.0-alpha.7

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.6...v1.0.0-alpha.7)

### Chores

- Bump version to alpha.6 ([95231b0](https://github.com/favorodera/centoui/commit/95231b0))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.4...v1.0.0-alpha.5

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.4...v1.0.0-alpha.5)

### Chores

- Bump versions to alpha.4 ([41dc9c2](https://github.com/favorodera/centoui/commit/41dc9c2))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.2...v1.0.0-alpha.3

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.2...v1.0.0-alpha.3)

### Chores

- Update package versions ([c886462](https://github.com/favorodera/centoui/commit/c886462))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.0.0...v0.2.0

[compare changes](https://github.com/favorodera/centoui/compare/67135c6ab21dfd109993537b0391b3d9f3116541...v0.2.0)

### Added

- Add Nuxt module and update documentation for pnpm usage ([b2128ed](https://github.com/favorodera/centoui/commit/b2128ed))

### Refactors

- Change monorepo versioning to selective ([e01f412](https://github.com/favorodera/centoui/commit/e01f412))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))

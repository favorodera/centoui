# Changelog

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


### Fixed

- **cli:** Set default confirmation to false for remove ([262e6dd](https://github.com/favorodera/centoui/commit/262e6dd))

  - prevent accidental deletion by defaulting to no

- **cli:** Ignore version mismatch during installation ([12b3f3e](https://github.com/favorodera/centoui/commit/12b3f3e))

  - Only check package presence by name
  - Skip version comparison for installed dependencies

- **cli:** Handle undefined component dependencies ([54168c2](https://github.com/favorodera/centoui/commit/54168c2))

  - add optional chaining to componentDeps iteration
  - prevent runtime errors when dependencies are missing


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

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.36...v1.0.0-alpha.37

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.36...v1.0.0-alpha.37)

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

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.34...v1.0.0-alpha.35

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.34...v1.0.0-alpha.35)

### Added

- **cli:** Add utils file URL constant ([b96dc48](https://github.com/favorodera/centoui/commit/b96dc48))

  - Define UTILS_FILE_URL for centoui init

- **cli:** Add utilsFilePath to CentoUIConfig ([ef8cc5e](https://github.com/favorodera/centoui/commit/ef8cc5e))
- **cli:** Prompt and create utils file ([9bedc22](https://github.com/favorodera/centoui/commit/9bedc22))

  - Add utilsFilePath prompt to init command
  - Write empty utils file if confirmed
  - Pass utils path to config builder

- **config:** Add utilsFilePath to default user config ([c41d67f](https://github.com/favorodera/centoui/commit/c41d67f))

### Tests

- **config:** Add test for utilsFilePath ([4b2108d](https://github.com/favorodera/centoui/commit/4b2108d))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


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

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.27...v1.0.0-alpha.28

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.27...v1.0.0-alpha.28)

### Added

- **cli:** Add config defaults URL constant ([b149c11](https://github.com/favorodera/centoui/commit/b149c11))
- **cli:** Fetch default config from GitHub ([7a9576e](https://github.com/favorodera/centoui/commit/7a9576e))

  - Fetch raw default config from GitHub
  - Extract inner properties from fetched config
  - Generate user config with fetched defaults


### Refactors

- **init:** Build user-specific default config ([6808e76](https://github.com/favorodera/centoui/commit/6808e76))

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

No relevant changes for this release


## v1.0.0-alpha.18...v1.0.0-alpha.19

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.18...v1.0.0-alpha.19)

No relevant changes for this release


## v1.0.0-alpha.17...v1.0.0-alpha.18

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.17...v1.0.0-alpha.18)

### Documentation

- Update README shields and description ([55d77d1](https://github.com/favorodera/centoui/commit/55d77d1))

  - Updated npm shield styles
  - Changed npm shield links
  - Updated project description text
  - Updated CentoUI link to core package

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.16...v1.0.0-alpha.17

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.16...v1.0.0-alpha.17)

### Tests

- Remove mock version from mock config ([241f29f](https://github.com/favorodera/centoui/commit/241f29f))

### Styling

- Update comment arrow in test ([78f699d](https://github.com/favorodera/centoui/commit/78f699d))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v1.0.0-alpha.15...v1.0.0-alpha.16

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.15...v1.0.0-alpha.16)

No relevant changes for this release


## v1.0.0-alpha.14...v1.0.0-alpha.15

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.14...v1.0.0-alpha.15)

No relevant changes for this release


## v1.0.0-alpha.13...v1.0.0-alpha.14

[compare changes](https://github.com/favorodera/centoui/compare/v1.0.0-alpha.13...v1.0.0-alpha.14)

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

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


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

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.2.0...v0.2.2

[compare changes](https://github.com/favorodera/centoui/compare/v0.2.0...v0.2.2)

### Added

- Add 'add' command to CLI ([26220e7](https://github.com/favorodera/centoui/commit/26220e7))
- Implement component adding functionality ([974b2f9](https://github.com/favorodera/centoui/commit/974b2f9))

### Fixed

- Revert BASE_URL to use versioned tags ([08f6fdd](https://github.com/favorodera/centoui/commit/08f6fdd))
- Adjust component path normalization regex ([b78ac84](https://github.com/favorodera/centoui/commit/b78ac84))

### Refactors

- Uncomment and enable add command functionality ([7da5368](https://github.com/favorodera/centoui/commit/7da5368))
- Improve variable naming in add command file fetching ([566a89f](https://github.com/favorodera/centoui/commit/566a89f))
- Rename registryPath to path in fetchComponentFile ([d4e47ce](https://github.com/favorodera/centoui/commit/d4e47ce))
- Correct path prefixes in schemas and registry ([ff4756e](https://github.com/favorodera/centoui/commit/ff4756e))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))


## v0.0.0...v0.2.0

[compare changes](https://github.com/favorodera/centoui/compare/67135c6ab21dfd109993537b0391b3d9f3116541...v0.2.0)

### Added

- Add Nuxt module and update documentation for pnpm usage ([b2128ed](https://github.com/favorodera/centoui/commit/b2128ed))
- Add 'add' command to CLI ([6ce5f86](https://github.com/favorodera/centoui/commit/6ce5f86))
- **centoui-cli:** Implement 'add' command for Citty CLI ([ba5e538](https://github.com/favorodera/centoui/commit/ba5e538))
- Prepare add command for component installation ([b8816c5](https://github.com/favorodera/centoui/commit/b8816c5))
- Introduce global CSS variables and update package dependencies schema ([1c2f5ea](https://github.com/favorodera/centoui/commit/1c2f5ea))

  This commit introduces a new global CSS file (`centoui.css`) that defines CSS variables for theming. It also updates the `globals.json` schema and its usage in `index.json` to rename `packageDependencies` to `packageDeps` for better clarity. Additionally, the `BASE_URL` in `constants.ts` has been updated to point to the `main` branch for development purposes. The version in `centoui.config.ts` has been incremented to `0.1.0`.


### Refactors

- Add args and run properties to add command ([01c7ac6](https://github.com/favorodera/centoui/commit/01c7ac6))

### ❤️ Contributors

- Favour Emeka ([@favorodera](https://github.com/favorodera))

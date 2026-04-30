# Changelog

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

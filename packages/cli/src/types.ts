/** Describes a single installable CentoUI component. */
export interface ComponentRegistryEntry {
  /** Unique identifier for the component (e.g. `"button"`). */
  name: string

  /** Source file paths relative to `packages/core/src/`. */
  files: Array<string>

  /** Names of other CentoUI components required by this one. */
  componentDependencies?: Array<string>

  /** NPM packages required by this component. */
  npmDependencies?: Record<string, string>
}

/** The complete CentoUI registry (`index.json`). */
export interface Registry {
  /** NPM packages required in every CentoUI project. */
  npmDependencies: Record<string, string>

  /** Installable components. */
  components: Array<ComponentRegistryEntry>
}

/** User configuration stored in `centoui.config.ts`. */
export interface CentoUIConfig {
  /** Relative path to the component installation directory. */
  componentsDir: string

  /** Relative path to the CSS file. */
  themeFilePath: string

  /** Maps internal icon slot names to Iconify IDs. */
  icons: Record<string, string>
}

/** Partial package.json structure needed by the CLI. */
export interface PackageJson {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

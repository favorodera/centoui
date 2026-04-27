/**
 * Global registry mirroring the JSON schema shapes
 * Defines global configurations required by all CentoUI components
 */
export type GlobalsRegistry = {
  /**
   * NPM packages that must be installed in every CentoUI project.
   * Keys are package names, values are semver version ranges.
   */
  packageDeps: Record<string, string>
}

/**
 * Component registry mirroring the JSON schema shapes
 * Describes a single installable CentoUI component.
 */
export type ComponentRegistry = {
  /** Unique component identifier. */
  name: string
  /** Short human-readable description. */
  description?: string
  /** Paths to all source files that belong to this component, relative to the repository root. */
  files: string[]
  /** Names of other CentoUI components that must be installed alongside this one. */
  componentDeps: string[]
  /** NPM packages required specifically by this component, beyond the global dependencies. */
  packageDeps: Record<string, string>
}

/** CentoUI registry, representing the complete component library. */
export type Registry = {
  /** Global configurations required by all CentoUI components */
  globals: GlobalsRegistry
  /** All installable CentoUI components */
  components: ComponentRegistry[]
}

/** CentoUI configuration */
export type CentoUIConfig = {
  /** CentoUI library version */
  version: string
  /** Directory path where components will be installed */
  componentsDir: string
  /** Path to the CSS file where theme and component styles will be generated */
  themeFilePath: string
  /**
   * Maps internal icon names to Iconify IDs
   * @example { menu: 'lucide:menu' }
   */
  icons: Record<string, string>
}


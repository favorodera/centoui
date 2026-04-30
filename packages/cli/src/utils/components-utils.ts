import fsExtra from 'fs-extra'
import { join } from 'pathe'
import type { CentoUIConfig } from '../types'

/**
 * Scans the configured components directory and returns a sorted list of
 * installed component names.
 *
 * Each direct subdirectory of `config.componentsDir` is treated as one
 * installed component. Non-directory entries (loose files) are ignored.
 *
 * @param config - The loaded CentoUI project configuration.
 * @param cwd - Absolute path to the project root.
 * @returns Sorted array of installed component names, or an empty array if
 *          the components directory does not exist yet.
 * @throws If the directory exists but cannot be read.
 */
export async function listInstalledComponentNames(
  config: CentoUIConfig,
  cwd: string,
) {
  const componentsDir = join(cwd, config.componentsDir)

  try {
    const dirExists = await fsExtra.pathExists(componentsDir)
    if (!dirExists) return []

    const entries = await fsExtra.readdir(componentsDir, { withFileTypes: true })

    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .sort()
  } catch (error) {
    throw new Error(
      `[listInstalledComponentNames] Failed to read components directory "${componentsDir}": ${error}`,
    )
  }
}

/**
 * Returns the absolute path to a component's installation directory inside
 * the user's project.
 *
 * The directory may or may not exist yet — this function does not check.
 * Use {@link checkIsComponentInstalled} if you need to verify existence.
 *
 * @param componentName - The component name in kebab-case (e.g. `"button"`).
 * @param config - The loaded CentoUI project configuration.
 * @param cwd - Absolute path to the project root.
 */
export function resolveComponentInstallDir(
  componentName: string,
  config: CentoUIConfig,
  cwd: string,
) {
  return join(cwd, config.componentsDir, componentName)
}

/**
 * Checks whether a component is currently installed by testing for the
 * existence of its installation directory.
 *
 * @param componentName - The component name in kebab-case (e.g. `"button"`).
 * @param config - The loaded CentoUI project configuration.
 * @param cwd - Absolute path to the project root.
 * @returns `true` if the component directory exists, `false` otherwise.
 */
export async function checkIsComponentInstalled(
  componentName: string,
  config: CentoUIConfig,
  cwd: string,
) {
  const componentInstallDir = resolveComponentInstallDir(componentName, config, cwd)
  try {
    return fsExtra.pathExists(componentInstallDir)
  } catch (error) {
    throw new Error(`[checkIsComponentInstalled] Failed to check if component "${componentName}" is installed: ${error}`)
  }
}

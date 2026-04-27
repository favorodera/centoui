import fsExtra from 'fs-extra'
import { join } from 'pathe'
import type { CentoUIConfig } from '../types'

/**
 * Gets all installed components by scanning the components directory.
 * Assumes each subdirectory corresponds to a component name.
 *
 * @param config - CentoUI configuration
 * @param cwd - Current working directory
 * @returns Sorted array of installed component names
 * @throws If the components directory cannot be read or any error occurs
 */
export async function getInstalledComponents(config: CentoUIConfig, cwd: string) {
  // Get the absolute path to the components directory.
  const componentsDir = join(cwd, config.componentsDir)

  // If the components directory does not exist, return an empty array.
  const componentsDirExists = await fsExtra.pathExists(componentsDir)
  if (!componentsDirExists) {
    return []
  }

  try {
    // Get all components in the components directory.
    const components = await fsExtra.readdir(componentsDir, { withFileTypes: true })

    // Filter out non-directory entries and get component names.
    const componentsNames = components
      .filter(component => component.isDirectory())
      .map(component => component.name)

    // Return sorted component names.
    return componentsNames.sort()
  } catch (error) {
    throw new Error(`Failed to get installed components: ${error}`)
  }
}

/**
 * Resolves the absolute path to a specific component directory.
 *
 * @param name - The name of the component (kebab-case)
 * @param config - CentoUI configuration
 * @param cwd - Current working directory
 * @returns The absolute path to the component directory
 */
export function getComponentPath(name: string, config: CentoUIConfig, cwd: string) {
  return join(cwd, config.componentsDir, name)
}

/**
 * Checks if a specific component is installed.
 *
 * @param name - The name of the component to check
 * @param config - CentoUI configuration
 * @param cwd - Current working directory
 * @returns True if the component is installed, false otherwise
 */
export async function isComponentInstalled(name: string, config: CentoUIConfig, cwd: string) {
  return await fsExtra.pathExists(getComponentPath(name, config, cwd))
}

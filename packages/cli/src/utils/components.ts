import fsExtra from 'fs-extra'
import { join } from 'pathe'
import type { CentoUIConfig } from '../types'

/**
 * Scans the components directory to determine which CentoUI components are installed.
 * @param config User's CentoUI configuration.
 * @param cwd Absolute path to the project root.
 * @returns Sorted array of installed component names.
 * @throws If the components directory cannot be read.
 */
export async function getInstalledComponents(config: CentoUIConfig, cwd: string) {
  try {
    const componentsDir = join(cwd, config.componentsDir)

    const entries = await fsExtra.readdir(componentsDir, {
      withFileTypes: true,
    })

    const resolvedEntries = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .toSorted()

    return resolvedEntries
  } catch (error) {
    throw new Error('Failed to read components directory', { cause: error })
  }
}

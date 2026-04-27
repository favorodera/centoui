import fsExtra from 'fs-extra'
import { pathToFileURL } from 'node:url'
import { join } from 'pathe'
import { CONFIG_FILE_NAME, VERSION } from '../constants'
import type { CentoUIConfig } from '../types'

/**
 * Loads the user's CentoUI configuration.
 *
 * @param cwd - The current working directory.
 * @returns The user's CentoUI configuration.
 * @throws If the config file is not found or cannot be loaded.
 */
export async function loadUserConfig(cwd: string) {
  try {
    const configFilePath = join(cwd, CONFIG_FILE_NAME)

    const configFileExists = await fsExtra.pathExists(configFilePath)
    if (!configFileExists) {
      throw `No ${CONFIG_FILE_NAME} found. Run \`centoui init\` first.`
    }

    const fileUrl = pathToFileURL(configFilePath).href
    const module: { default: CentoUIConfig } = await import(fileUrl)
    
    return module.default
  } catch (error) {
    throw new Error(`Failed to load user config: ${error}`)
  }
}

/**
 * Generates the default user-defined CentoUI config file template.
 * @param themeFilePath - The relative path to the user's theme CSS file.
 * @param componentsDir - The relative path to the user's components directory.
 * @returns The default user-defined CentoUI config file template as a string.
 */
export function generateDefaultUserConfigTemplate(themeFilePath: string, componentsDir: string) {
  return `import { defineConfig } from 'centoui'

export default defineConfig({
  version: '${VERSION}',
  componentsDir: '${componentsDir}',
  themeFilePath: '${themeFilePath}',
  icons: {
    check: 'lucide:check',
    close: 'lucide:x',
    menu: 'lucide:menu',
  },
})
`
}

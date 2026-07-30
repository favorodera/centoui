import { loadConfig as loadConfigC12 } from 'c12'
import type { CentoUIConfig } from '../types'
import { CONFIG_FILE_NAME } from '../constants'

/**
 * Loads the user's CentoUI configuration from `centoui.config.ts`.
 * @param cwd Absolute path to the project root.
 * @returns The user's configuration.
 * @throws If `centoui.config.ts` is not found.
 */
export async function loadConfig(cwd: string) {
  const { config, configFile } = await loadConfigC12<CentoUIConfig>({
    cwd,
    name: 'centoui',
  })

  if (!configFile) {
    throw new Error(`${CONFIG_FILE_NAME} not found in ${cwd}. Run \`centoui init\` first.`)
  }

  return config
}

/**
 * Builds the user's CentoUI configuration file content.
 * @param choices The user's configuration choices.
 * @returns The file content.
 */
export function buildUserConfig(choices: CentoUIConfig) {
  return `import { defineConfig } from 'centoui'

export default defineConfig({
  componentsDir: '${choices.componentsDir}',
  themeFilePath: '${choices.themeFilePath}',
})`
}

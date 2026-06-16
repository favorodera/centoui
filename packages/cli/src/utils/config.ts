import { loadConfig as loadConfigC12 } from 'c12'
import type { CentoUIConfig } from '../types'
import { CONFIG_FILE_NAME } from '../constants'
import { sendNetworkRequest } from './network'

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
 * @throws If building fails.
 */
export async function buildUserConfig(choices: Omit<CentoUIConfig, 'icons'>) {
  try {
    const defaultConfig = await sendNetworkRequest('/config.ts')

    // Cleanup and extract only runnable code
    let cleanedContent = defaultConfig
    // Remove all import statements
      .replaceAll(/^import\s+.*$/gm, '')
    // Remove export default keyword
      .replace(/^\s*export\s+default\s+/, '')
    // Remove satisfies clause (everything from `satisfies` to end of line/statement)
      .replace(/\s+satisfies\s+[^}]*$/, '')
      // Remove any empty lines
      .trim()

    // Resolve the braces
    const firstBrace = cleanedContent.indexOf('{')
    const lastBrace = cleanedContent.lastIndexOf('}')

    cleanedContent = cleanedContent
    // Remove the braces
      .slice(firstBrace + 1, lastBrace)
    // Resolve line breaks and indentations
      .replace(/^\n/, '')
      .replace(/\n\s*$/, '')

    return `import { defineConfig } from 'centoui'

export default defineConfig({
  componentsDir: '${choices.componentsDir}',
  themeFilePath: '${choices.themeFilePath}',
${cleanedContent}
})`
  } catch (error) {
    throw new Error('Failed to build user config', { cause: error })
  }
}

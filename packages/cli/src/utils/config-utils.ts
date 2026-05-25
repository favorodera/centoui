import { loadConfig } from 'c12'
import { CONFIG_DEFAULTS_URL, CONFIG_FILE_NAME, GITHUB_RAW_FETCH_HEADERS } from '../constants'
import type { CentoUIConfig } from '../types'

/**
 * Loads and returns the user's CentoUI configuration from `centoui.config.ts` using c12.
 *
 * @param cwd - Absolute path to the project root.
 * @returns The default export of `centoui.config.ts` cast as {@link CentoUIConfig}.
 * @throws If `centoui.config.ts` is not found — instructs the user to run `centoui init`.
 * @throws If the file exists but cannot be imported or does not export a default value.
 */
export async function loadCentoUIConfig(cwd: string) {
  const { config, configFile } = await loadConfig<CentoUIConfig>({
    name: 'centoui',
    cwd,
  })

  if (!configFile) {
    throw new Error(
      `[loadCentoUIConfig] "${CONFIG_FILE_NAME}" not found in "${cwd}". Run \`centoui init\` first.`,
    )
  }
 
  return config
}


/**
 * Fetches the raw content of the default CentoUI config file from GitHub.
 *
 * This file contains the default icon mappings and other shared defaults
 * that are merged into the user's generated config.
 *
 * @returns Raw UTF-8 content of the default config file.
 * @throws If the network request fails or the server returns a non-2xx status.
 */
export async function fetchDefaultConfig() {
  let response: Response
  try {
    response = await fetch(CONFIG_DEFAULTS_URL, { headers: GITHUB_RAW_FETCH_HEADERS })
  } catch (error) {
    throw new Error(
      `[fetchDefaultConfigContent] Network request for default config failed: ${error}`,
    )
  }

  if (!response.ok) {
    throw new Error(
      `[fetchDefaultConfigContent] Server returned ${response.status} ${response.statusText} (URL: ${CONFIG_DEFAULTS_URL})`,
    )
  }

  return response.text()
}

/**
 * Extracts the inner config object from the default config file content.
 *
 * Strips the `export default`, `satisfies` clause, and outer braces,
 * returning just the inner properties as a raw string.
 *
 * @example
 * // Input:
 * // export default {
 * //   icons: { check: 'lucide:check' },
 * // } satisfies Pick<CentoUIConfig, 'icons'>
 * // Output:
 * // "  icons: { check: 'lucide:check' },"
 *
 * @param fileContent - The full source of the default config file.
 * @returns The inner config body, or an empty string if no object is found.
 */
export function extractInnerConfigContent(fileContent: string): string {
  // Remove all import statements first
  let cleanedConfigContent = fileContent.replace(/^import\s+.*$/gm, '')

  // Remove export default keyword
  cleanedConfigContent = cleanedConfigContent.replace(/^\s*export\s+default\s+/, '')

  // Remove satisfies clause (everything from `satisfies` to end of line/statement)
  cleanedConfigContent = cleanedConfigContent.replace(/\s+satisfies\s+[^}]*$/, '')

  // Trim whitespace
  cleanedConfigContent = cleanedConfigContent.trim()

  // Remove outer braces — find the first { and last }
  const firstBrace = cleanedConfigContent.indexOf('{')
  const lastBrace = cleanedConfigContent.lastIndexOf('}')

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    return ''
  }

  const innerConfigContent = cleanedConfigContent.slice(firstBrace + 1, lastBrace)

  return innerConfigContent.replace(/^\n/, '').replace(/\n\s*$/, '')
}

/**
 * Generates the content of a default `centoui.config.ts` file.
 *
 * The generated file uses `defineConfig` so IDEs can provide type-checking
 * and autocompletion on the config object. It pre-fills common icon mappings
 * for the built-in Lucide icon set.
 *
 * @param themeFilePath - Relative path (from project root) where the CSS theme file lives.
 * @param componentsDir - Relative path (from project root) where components will be installed.
 * @returns A string containing the complete TypeScript source for the config file.
 */

/**
 * Generates the content of a user's default `centoui.config.ts` file.
 *
 * Fetches the default config from GitHub to get the latest default config values (icon mappings, etc.),
 * then merges them with the user-provided paths. The generated file uses
 * `defineConfig` so IDEs can provide type-checking and autocompletion.
 *
 * @param themeFilePath - Relative path (from project root) where the CSS theme file lives.
 * @param componentsDir - Relative path (from project root) where components will be installed.
 * @returns A string containing the complete TypeScript source for the config file.
 */
export async function buildUserDefaultConfigFileContent(
  themeFilePath: string,
  componentsDir: string,
): Promise<string> {
  // Fetch the latest defaults from GitHub (icon mappings, etc.)
  const defaultConfig = await fetchDefaultConfig()
  const innerConfigContent = extractInnerConfigContent(defaultConfig)

  return `import { defineConfig } from 'centoui'

export default defineConfig({
  componentsDir: '${componentsDir}',
  themeFilePath: '${themeFilePath}',
${innerConfigContent}
})
`
}

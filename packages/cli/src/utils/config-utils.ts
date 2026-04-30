import fsExtra from 'fs-extra'
import { pathToFileURL } from 'node:url'
import { join } from 'pathe'
import { CONFIG_FILE_NAME, VERSION } from '../constants'
import type { CentoUIConfig } from '../types'

/**
 * Loads and returns the user's CentoUI configuration from `centoui.config.ts`.
 *
 * Uses a dynamic `import()` via a `file://` URL so that TypeScript config files
 * compiled by the user's build tooling are resolved correctly at runtime.
 *
 * @param cwd - Absolute path to the project root.
 * @returns The default export of `centoui.config.ts` cast as {@link CentoUIConfig}.
 * @throws If `centoui.config.ts` is not found — instructs the user to run `centoui init`.
 * @throws If the file exists but cannot be imported or does not export a default value.
 */
export async function loadCentoUIConfig(cwd: string) {
  const configFilePath = join(cwd, CONFIG_FILE_NAME)

  try {
    const configExists = await fsExtra.pathExists(configFilePath)
    if (!configExists) {
      throw new Error(
        `[loadCentoUIConfig] "${CONFIG_FILE_NAME}" not found in "${cwd}". Run \`centoui init\` first.`,
      )
    }
 
    const fileUrl = pathToFileURL(configFilePath).href
    const module: { default: CentoUIConfig } = await import(fileUrl)
    return module.default
  } catch (error) {
    throw new Error(
      `[loadCentoUIConfig] Failed to import "${configFilePath}": ${error}`,
    )
  }
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
export function buildDefaultConfigFileContent(
  themeFilePath: string,
  componentsDir: string,
): string {
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

import type { CentoUIConfig } from '../types'
import { join, dirname } from 'pathe'
import fsExtra from 'fs-extra'
import { confirm, isCancel, cancel } from '@clack/prompts'

/**
 * Converts a registry-relative file path into the absolute destination path
 * inside the user's project.
 *
 * Registry file paths always begin with `components/` (e.g.
 * `"components/button/button.vue"`). This function strips that leading segment
 * and joins the remainder with the user's configured components directory so
 * that `"components/button/button.vue"` becomes, for example,
 * `"/home/user/my-app/src/components/centoui/button/button.vue"`.
 *
 * @param registryFilePath - Path as it appears in the component's registry entry
 *                           (always starts with `"components/"`).
 * @param config - The loaded CentoUI project configuration.
 * @param cwd - Absolute path to the project root.
 * @returns Absolute destination path for the file in the user's project.
 *
 * @example
 * // config.componentsDir = 'src/components/centoui', cwd = '/home/user/my-app'
 * mapRegistryPathToProjectDest('components/button/button.vue', config, cwd)
 * // → '/home/user/my-app/src/components/centoui/button/button.vue'
 */
export function mapRegistryPathToProjectDest(
  registryFilePath: string,
  config: CentoUIConfig,
  cwd: string,
) {
  // All registry paths are prefixed with "components/" by schema convention.
  // We strip that prefix before joining with the user's own components directory.
  const pathWithoutRegistryPrefix = registryFilePath.replace(/^components\//, '')
  return join(cwd, config.componentsDir, pathWithoutRegistryPrefix)
}

/**
 * Writes `content` to `filePath`, creating every missing parent directory first.
 *
 * This is the standard way to write any file in the CLI — it ensures the
 * target directory tree exists so callers don't have to `mkdir` manually.
 *
 * @param filePath - Absolute path where the file should be written.
 * @param content - UTF-8 string content to write.
 * @throws If the directory cannot be created or the file cannot be written.
 */
export async function writeFileWithDirs(filePath: string, content: string) {
  try {
    await fsExtra.mkdir(dirname(filePath), { recursive: true })
    await fsExtra.writeFile(filePath, content, 'utf8')
  } catch (error) {
    throw new Error(`[writeFileWithDirs] Failed to write "${filePath}": ${error}`)
  }
}

/**
 * Prompts the user to confirm before overwriting an existing path.
 *
 * If `path` does not yet exist, returns `true` immediately without showing
 * any prompt — nothing to overwrite, safe to proceed.
 *
 * If the user cancels the prompt (e.g. Ctrl+C), the process exits cleanly
 * with a cancellation message rather than throwing.
 *
 * @param label - Human-readable name shown in the prompt (e.g. `"centoui.config.ts"`).
 * @param path - Absolute path to the file or directory to potentially overwrite.
 * @returns `true` if the caller should write/overwrite, `false` if the user declined.
 */
export async function confirmOverwriteIfExists(label: string, path: string): Promise<boolean> {
  const exists = await fsExtra.pathExists(path)
  if (!exists) return true

  const answer = await confirm({ message: `"${label}" already exists. Overwrite?` })

  if (isCancel(answer)) {
    cancel('Operation cancelled.')
    process.exit(0)
  }

  return answer
}

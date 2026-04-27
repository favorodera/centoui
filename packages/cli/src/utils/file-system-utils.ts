import type { CentoUIConfig } from '../types'
import { join, dirname } from 'pathe'
import fsExtra from 'fs-extra'
import { confirm, isCancel, cancel } from '@clack/prompts'

/**
 * Resolve the destination path for a component file inside the user's project.
 * Strips the leading `src/components/` registry prefix.
 *
 * e.g. with `componentsDir = './components/ui'`:
 *   src/components/button/button.vue → ./components/ui/button/button.vue
 *
 * @param path - The path to the component file in the registry.
 * @param config - The CentoUI configuration.
 * @param cwd - The current working directory.
 * @returns The destination path for the component file.
 */
export function resolveComponentsDestinationPath(path: string, config: CentoUIConfig, cwd: string) {
  const normalizedPath = path.replace(/^src\/components\//, '')
  return join(cwd, config.componentsDir, normalizedPath)
}

/**
 * Write content to a destination path, creating parent directories as needed.
 *
 * @param path - The path to write the file to.
 * @param content - The content to write to the file.
 */
export async function writeFile(path: string, content: string) {
  try {
    await fsExtra.mkdir(dirname(path), { recursive: true })
    await fsExtra.writeFile(path, content, 'utf8')
  } catch (error) {
    throw new Error(`Failed to write file: ${path}: ${error}`)
  }
}

/**
 * Ask the user whether to overwrite a path that already exists.
 * Returns `true` immediately (no prompt) if the file does not exist yet.
 *
 * @param label - Human-readable path shown in the prompt message
 * @param path - The path to the file or directory to overwrite.
 */
export async function promptOverwrite(label: string, path: string) {
  const exists = await fsExtra.pathExists(path)
  if (!exists) return true

  const answer = await confirm({ message: `${label} already exists. Overwrite?` })

  if (isCancel(answer)) {
    cancel(`${label} operation cancelled.`)
    process.exit(0)
  }

  return answer
}


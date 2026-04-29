import { defineCommand } from 'citty'
import { loadUserConfig } from '../utils/config-utils'

/**
 * Command: add
 *
 * Installs one or more components (and their transitive dependencies) from
 * the registry into the user's project.
 */
export function add() {
  return defineCommand({
    meta: {
      name: 'add',
      description: 'Add one or more components to your project',
    },

    args: {
      // ARGS is kept empty to accommodate multiple component names as arguments
    },

    async run({ args }) {
      const cwd = process.cwd()
      const userConfig = await loadUserConfig(cwd)
      const componentsToAdd = args._
    },
  })
}

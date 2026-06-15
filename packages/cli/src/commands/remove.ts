import { intro, log, tasks } from '@clack/prompts'
import { defineCommand } from 'citty'
import fsExtra from 'fs-extra'
import { join } from 'pathe'
import { getInstalledComponents } from '../utils/components'
import { loadConfig } from '../utils/config'
import { fetchRegistry } from '../utils/registry'

/**
 * Removes a single installed component and its files from the user's project.
 * @returns The Citty command definition that executes the 'remove' CLI process.
 */
export function remove() {
  return defineCommand({
    meta: {
      description: 'Remove an installed component from your project',
      name: 'remove',
    },

    args: {
      component: {
        description: 'Name of the component to remove (e.g. "button")',
        required: true,
        type: 'positional',
      },
    },

    run: async ({ args }) => {
      const cwd = process.cwd()
      const component = args.component

      intro('CentoUI — Remove components!')

      log.step('Loading config.')
      const config = await loadConfig(cwd)

      // Verify the component is actually installed.
      log.step('Resolving workspace.')
      const installedComponents = await getInstalledComponents(config, cwd)

      if (installedComponents.includes(component)) {
        throw new Error(`${component} is not installed.`)
      }

      log.step('Fetching registry.')
      const registry = await fetchRegistry()

      log.step('Resolving components.')
      // Look up the component in the registry to get its metadata
      const componentEntry = registry.components
      // eslint-disable-next-line unicorn/prefer-array-some
        .find(entry => entry.name === component)

      if (!componentEntry) {
        throw new Error(`${component} not found in registry.`)
      }

      const exceptToBeRemovedComponents = installedComponents
        .filter(entry => entry !== component)

      const componentDependents = new Set<string>()
      const neededDependencies = new Map<string, Record<string, string>>()

      for (const name of exceptToBeRemovedComponents) {
        const entry = registry.components
          .find(entry => entry.name === name)

        if (entry?.componentDeps?.includes(component)) {
          componentDependents.add(name)
        }

        neededDependencies.set(name, entry?.packageDeps || {})
      }

      if (componentDependents.size > 0) {
        throw new Error(`Cannot remove ${component} these components depend on it: ${[...componentDependents].join(', ')}`)
      }

      const componentDir = join(cwd, config.componentsDir, component)

      await tasks([
        {
          task: async () => {
            await fsExtra.remove(componentDir)
            return `${component} removed.`
          },
          title: `Removing ${component}!`,
        },
      ])
    },
  })
}

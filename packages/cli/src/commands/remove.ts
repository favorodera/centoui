import { cancel, confirm, intro, isCancel, log, outro, tasks } from '@clack/prompts'
import { defineCommand } from 'citty'
import fsExtra from 'fs-extra'
import { join } from 'pathe'
import { getInstalledComponents } from '../utils/components'
import { loadConfig } from '../utils/config'
import { uninstallDependency } from '../utils/package'
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

      if (!installedComponents.includes(component)) {
        throw new Error(`${component} is not installed.`)
      }

      log.step('Fetching registry.')
      const registry = await fetchRegistry()

      log.step('Resolving components.')
      // Look up the component in the registry to get its metadata
      const componentEntry = registry.components

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

      const dependenciesToUninstall = Object
        .keys(componentEntry?.packageDeps || {})
        .filter(name => !neededDependencies.has(name))

      await tasks([
        {
          task: async () => {
            await fsExtra.remove(componentDir)
            return `${component} removed!`
          },
          title: `Removing ${component}.`,
        },

        {
          enabled: dependenciesToUninstall.length > 0,
          task: async (message) => {
            for (const name of dependenciesToUninstall) {
              message(`Uninstalling ${name}.`)
              await uninstallDependency(name, cwd)
            }

            return 'Orphaned dependencies removed!'
          },
          title: `Removing orphaned dependencies`,
        },
      ])

      log.step('Running extra diagnostics.')
      // Check if any remaining installed components need utils
      const remainingNeedUtils = registry.components
        .filter(entry => entry.needsUtils === true)
        .some(entry => installedComponents.includes(entry.name))

      // If no components need utils and utils file exists, prompt to delete
      const utilsPath = join(cwd, config.utilsFilePath)
      const utilsExists = await fsExtra.pathExists(utilsPath)

      if (remainingNeedUtils && utilsExists) {
        const shouldDelete = await confirm({
          initialValue: false,
          message: 'Delete utils file? (no components require it anymore)',
        })

        if (isCancel(shouldDelete)) {
          cancel('Operation cancelled by user.')
          process.exit(0)
        }

        if (shouldDelete) {
          await fsExtra.remove(utilsPath)
          log.step('Utils file removed.')
        }
      }

      outro(`${component} removed from your project!`)
    },
  })
}

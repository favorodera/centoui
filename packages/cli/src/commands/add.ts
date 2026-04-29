import { defineCommand } from 'citty'
import { loadUserConfig } from '../utils/config-utils'
import { intro, log, note, outro, tasks } from '@clack/prompts'
import { fetchComponentFile, fetchRegistry, resolveComponentTree } from '../utils/registry-utils'
import type { ComponentRegistry } from '../types'
import { getComponentPath } from '../utils/components-utils'
import { promptOverwrite, resolveComponentsDestinationPath, writeFile } from '../utils/file-system-utils'
import { installPackages } from '../utils/package-utils'

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
      try {
        const cwd = process.cwd()
        const componentNames = args._ as string[]

        intro('CentoUI — Add components')

        if (componentNames.length === 0) {
          log.error('No components specified. Usage: centoui add <component> [component...]')
          process.exit(1)
        }

        const config = await loadUserConfig(cwd)

        // Fetch registry and resolve full dependency trees for all requested components.
        // Must happen before prompts so we know exactly what to ask about.
        const registry = await fetchRegistry()

        const allComponents = new Map<string, ComponentRegistry>()
        for (const name of componentNames) {
          try {
            const tree = resolveComponentTree(name, registry)
            for (const [depName, depEntry] of tree) {
              allComponents.set(depName, depEntry)
            }
          } catch (error) {
            log.error(`Failed to resolve "${name}": ${error}`)
            process.exit(1)
          }
        }

        // Ask all overwrite questions upfront before any tasks run
        const installDecisions = new Map<string, boolean>()
        for (const [name] of allComponents) {
          const componentPath = getComponentPath(name, config, cwd)
          const shouldWrite = await promptOverwrite(name, componentPath)
          installDecisions.set(name, shouldWrite)
        }

        // Aggregate package deps only for components we're actually writing
        const allPackageDeps: Record<string, string> = {}
        for (const [name, entry] of allComponents) {
          if (installDecisions.get(name)) {
            Object.assign(allPackageDeps, entry.packageDeps)
          }
        }

        // Build per-component file-writing tasks, then a single package install task
        const componentsToInstall = Array.from(allComponents.entries())
          .filter(([name]) => installDecisions.get(name))

        await tasks([
          ...componentsToInstall.map(([name, entry]) => ({
            title: `Installing ${name}`,
            task: async () => {
              for (const path of entry.files) {
                const content = await fetchComponentFile(path)
                const dest = resolveComponentsDestinationPath(path, config, cwd)
                await writeFile(dest, content)
              }
              return `${name} installed (${entry.files.length} file${entry.files.length !== 1 ? 's' : ''})`
            },
          })),
 
          {
            title: 'Installing packages',
            task: async message => installPackages(allPackageDeps, cwd, message),
          },
        ])
 
        const skipped = Array.from(installDecisions.entries())
          .filter(([, shouldWrite]) => !shouldWrite)
          .map(([name]) => name)
 
        note(
          [
            `Installed  > ${componentsToInstall.map(([name]) => name).join(', ') || 'none'}`,
            skipped.length > 0 ? `Skipped    > ${skipped.join(', ')}` : '',
            '',
            'Import components from your components directory to use them',
          ]
            .filter(Boolean)
            .join('\n'),
          'Components added',
        )
 
        outro('All set!')
      } catch (error) {
        log.error(`Failed to add component(s): ${error}`)
        process.exit(1)
      }
    },
  })
}

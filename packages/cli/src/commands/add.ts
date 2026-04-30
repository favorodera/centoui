import { defineCommand } from 'citty'
import { loadCentoUIConfig } from '../utils/config-utils'
import { intro, log, note, outro, tasks } from '@clack/prompts'
import {
  fetchFullRegistry,
  fetchRegistryFileContent,
  resolveComponentWithDependencies,
} from '../utils/registry-utils'
import type { ComponentRegistry } from '../types'
import { resolveComponentInstallDir } from '../utils/components-utils'
import {
  confirmOverwriteIfExists,
  mapRegistryPathToProjectDest,
  writeFileWithDirs,
} from '../utils/file-system-utils'
import { installMissingPackages } from '../utils/package-utils'

/**
 * Command: `centoui add <component> [component...]`
 *
 * Installs one or more components — and their full transitive dependency trees
 * — from the registry into the user's project.
 *
 * Flow:
 *  1. Resolve the full dependency tree for every requested component.
 *  2. Ask the user upfront whether to overwrite any that already exist.
 *  3. Fetch and write the source files for components the user approved.
 *  4. Install any npm packages required by the components being written.
 */
export function add() {
  return defineCommand({
    meta: {
      name: 'add',
      description: 'Add one or more components to your project',
    },

    args: {
      // Positional component names are captured via `args._` (citty convention).
      // Named flags are intentionally omitted here to keep the surface minimal.
    },

    async run({ args }) {
      try {
        const cwd = process.cwd()
        const requestedNames = args._ as string[]

        intro('CentoUI — Add components')

        if (requestedNames.length === 0) {
          throw new Error('No components specified. Usage: centoui add <component> [component...]')
        }

        const config = await loadCentoUIConfig(cwd)

        // Fetch the registry once and resolve the full dependency tree for
        // every requested component before showing any prompts.
        const registry = await fetchFullRegistry()

        const allComponents = new Map<string, ComponentRegistry>()

        for (const name of requestedNames) {
          try {
            const tree = resolveComponentWithDependencies(name, registry)
            for (const [depName, depEntry] of tree) {
              allComponents.set(depName, depEntry)
            }
          } catch (error) {
            throw new Error(`Failed to resolve "${name}": ${error}`)
          }
        }

        // Ask every overwrite question before any file operations begin so
        // the user can answer them all at once rather than being interrupted
        const writeDecisions = new Map<string, boolean>()
        for (const [name] of allComponents) {
          const installDir = resolveComponentInstallDir(name, config, cwd)
          const shouldWrite = await confirmOverwriteIfExists(name, installDir)
          writeDecisions.set(name, shouldWrite)
        }

        // Collect npm packages only for components we're actually going to write.
        const packageDepsToInstall: Record<string, string> = {}
        for (const [name, entry] of allComponents) {
          if (writeDecisions.get(name)) {
            Object.assign(packageDepsToInstall, entry.packageDeps)
          }
        }

        const approvedComponents = Array.from(allComponents.entries()).filter(
          ([name]) => writeDecisions.get(name),
        )

        await tasks([
          // One task per component — fetch its files from GitHub and write them.
          ...approvedComponents.map(([name, entry]) => ({
            title: `Installing ${name}`,
            task: async () => {
              for (const registryFilePath of entry.files) {
                const content = await fetchRegistryFileContent(registryFilePath)
                const destinationPath = mapRegistryPathToProjectDest(registryFilePath, config, cwd)
                await writeFileWithDirs(destinationPath, content)
              }
              return `${name} installed (${entry.files.length} file(s))`
            },
          })),

          // Single shared task that installs all collected npm dependencies.
          {
            title: 'Installing packages',
            task: async message => installMissingPackages(packageDepsToInstall, cwd, message),
          },
        ])

        const skippedNames = Array.from(writeDecisions.entries())
          .filter(([, shouldWrite]) => !shouldWrite)
          .map(([name]) => name)

        const installedNames = approvedComponents.map(([name]) => name)

        note(
          [
            `Installed  > ${installedNames.join(', ') || 'none'}`,
            skippedNames.length > 0 ? `Skipped    > ${skippedNames.join(', ')}` : '',
            '',
            'Import components from your components directory to use them.',
          ]
            .filter(Boolean)
            .join('\n'),
          'Component(s) added',
        )

        outro('All set!')
      } catch (error) {
        log.error(`Failed to add component(s): ${error}`)
        process.exit(1)
      }
    },
  })
}

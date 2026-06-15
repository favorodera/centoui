import { box, intro, log, outro, tasks } from '@clack/prompts'
import { defineCommand } from 'citty'
import fsExtra from 'fs-extra'
import { join } from 'pathe'
import type { ComponentRegistry } from '../types'
import { loadConfig } from '../utils/config'
import { confirmOverwrite, writeToFile } from '../utils/file-system'
import { sendNetworkRequest } from '../utils/network'
import { installDependency } from '../utils/package'
import { fetchRegistry, resolveComponent } from '../utils/registry'

/**
 * Installs one or more components and their full transitive dependency trees from the registry into the user's project.
 * @returns The Citty command definition that executes the 'add' CLI process.
 */
export async function add() {
  return defineCommand({
    meta: {
      description: 'Add one or more components to your project',
      name: 'add',
    },

    args: {
      // Positional component names are captured via `args._` (citty convention).
    },

    run: async ({ args }) => {
      const cwd = process.cwd()

      intro('CentoUI — Add components!')

      const requestedComponents = args._ as Array<string>

      if (requestedComponents.length === 0) {
        throw new Error('No components specified. Usage: centoui add <component> [component...]')
      }

      log.step('Loading config.')
      const config = await loadConfig(cwd)

      log.step('Fetching registry.')
      const registry = await fetchRegistry()

      log.step('Resolving components')
      // Resolve component(s) transitive dependencies tree
      const resolvedComponents = new Map<string, ComponentRegistry>()
      for (const requested of requestedComponents) {
        const resolvedTree = resolveComponent(requested, registry)

        for (const [
          name,
          entry,
        ] of resolvedTree) {
          resolvedComponents.set(name, entry)
        }
      }

      // Ask every overwrite question before any file operations begin.
      const writeDecisions = new Map<string, boolean>()
      for (const [name] of resolvedComponents) {
        const componentDir = join(cwd, config.componentsDir, name)
        const shouldWrite = await confirmOverwrite(componentDir)

        writeDecisions.set(name, shouldWrite)
      }

      // Collect npm packages only for components we're actually going to write.
      const packageDepsToInstall: Record<string, string> = {}
      for (const [
        name,
        entry,
      ] of resolvedComponents) {
        if (writeDecisions.get(name)) {
          Object.assign(packageDepsToInstall, entry.packageDeps)
        }
      }

      const approvedComponents = [...resolvedComponents.entries()]
        .filter(([name]) => writeDecisions.get(name))

      // Check if utils file is needed and doesn't already exist
      const needsUtils = approvedComponents
        .some(([, entry]) => entry.needsUtils === true)

      const utilsPath = join(cwd, config.utilsFilePath)
      const utilsExists = await fsExtra.pathExists(utilsPath)

      await tasks([
        ...approvedComponents.map(([
          name,
          entry,
        ]) => {
          return {
            task: async (message: (string: string) => void) => {
              message(`Installing ${name}.`)

              for (const path of entry.files) {
                message(`Fetching contents from registry.`)
                const content = await sendNetworkRequest(`/${path}`)
                const destination = join(cwd, config.componentsDir, path)

                message('Writing to disk.')
                await writeToFile(destination, content)
              }

              return `${name} component installed!`
            },
            title: `Installing ${name}`,
          }
        }),

        {
          enabled: Object.keys(packageDepsToInstall).length > 0,
          task: async (message) => {
            for (const [
              name,
              version,
            ] of Object.entries(packageDepsToInstall)) {
              message(`Installing ${name}.`)
              await installDependency(name, version, cwd)
            }

            return 'Dependencies installed!'
          },
          title: 'Installing dependencies',
        },

        {
          enabled: needsUtils && !utilsExists,
          task: async (message) => {
            message('Fetching contents from registry.')
            const content = await sendNetworkRequest(`/defaults/utils.ts`)

            const destination = join(cwd, config.utilsFilePath)

            message('Writing to disk.')
            await writeToFile(destination, content)

            return 'Utils created!'
          },
          title: 'Creating utils.',
        },
      ])

      box('Import components from your components directory to use them.', 'Installation Complete.')

      outro('You\'re all set!')
    },
  })
}

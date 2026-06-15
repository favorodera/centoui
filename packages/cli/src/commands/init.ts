import { box, cancel, group, intro, outro, tasks, text } from '@clack/prompts'
import { defineCommand } from 'citty'
import { join } from 'pathe'
import type { Registry } from '../types'
import { CONFIG_FILE_NAME } from '../constants'
import { buildUserConfig } from '../utils/config'
import { confirmOverwrite, createDirectory, writeToFile } from '../utils/file-system'
import { sendNetworkRequest } from '../utils/network'
import { installDependency } from '../utils/package'
import { fetchRegistry } from '../utils/registry'

/**
 * Bootstraps a new CentoUI project in the current working directory.
 * @returns The Citty command definition that executes the 'init' CLI process.
 */
export function init() {
  return defineCommand({
    meta: {
      description: 'Initialize a new CentoUI project',
      name: 'init',
    },

    run: async () => {
      const cwd = process.cwd()

      intro('CentoUI — Initialize project!')

      // Collect all user choices so they aren't prompted again
      const choices = await group(
        {
          componentsDir: () => text({
            initialValue: 'src/components/centoui',
            message: 'Directory to store components.',
          }),

          themeFilePath: () => text({
            initialValue: 'src/assets/css/centoui.css',
            message: 'Path for the theme CSS file.',
          }),

          utilsFilePath: () => text({
            initialValue: 'src/utils/centoui-utils.ts',
            message: 'Path for the utils file (written on demand).',
          }),

        },
        {
          onCancel: () => {
            cancel('Project initialization cancelled.')
            process.exit(0)
          },
        },
      )

      // Resolve absolute paths from choices for overwrite checks and task operations.
      const configPath = join(cwd, CONFIG_FILE_NAME)
      const themePath = join(cwd, choices.themeFilePath)
      const componentsPath = join(cwd, choices.componentsDir)

      // Ask all overwrite questions before any file operations begin.
      const shouldWriteConfig = await confirmOverwrite(CONFIG_FILE_NAME)
      const shouldWriteTheme = await confirmOverwrite(choices.themeFilePath)
      const shouldWriteComponentsDir = await confirmOverwrite(choices.componentsDir)

      // Store for the registry populated by the registry fetch task
      let registry: Registry

      await tasks([
        {
          enabled: shouldWriteConfig,
          task: async (message) => {
            message('Building config content.')
            const userConfigContent = await buildUserConfig(choices)

            message('Writing to disk.')
            await writeToFile(configPath, userConfigContent)

            return 'Config created!'
          },
          title: 'Creating config.',
        },

        {
          enabled: shouldWriteTheme,
          task: async (message) => {
            message('Fetching theme from registry.')
            const themeFileContent = await sendNetworkRequest('/defaults/centoui.css')

            message('Writing to disk.')
            await writeToFile(themePath, themeFileContent)

            return 'Theme created!'
          },
          title: 'Creating theme.',
        },

        {
          enabled: shouldWriteComponentsDir,
          task: async (message) => {
            message('Writing to disk.')
            await createDirectory(componentsPath)

            return 'Components directory ready!'
          },
          title: 'Preparing components directory.',
        },

        {
          task: async () => {
            registry = await fetchRegistry()
            return 'Registry loaded!'
          },
          title: 'Loading registry.',
        },

        {

          task: async (message) => {
            for (const [
              name,
              version,
            ] of Object.entries(registry.globals.packageDeps)) {
              message(`Installing ${name}.`)
              await installDependency(name, version, cwd)
            }

            return 'Dependencies installed!'
          },
          title: 'Installing dependencies.',
        },

      ])

      box('Run \'centoui add button\' to install your first component.', 'Initialization Complete.')

      outro('You\'re all set!')
    },
  })
}

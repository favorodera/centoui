import { cancel, group, intro, log, note, outro, tasks, text } from '@clack/prompts'
import { defineCommand } from 'citty'
import { installPackages, validatePath } from '../utils/package-utils'
import { join } from 'pathe'
import { CONFIG_FILE_NAME } from '../constants'
import { promptOverwrite } from '../utils/file-system-utils'
import type { Registry } from '../types'
import fsExtra from 'fs-extra'
import { generateDefaultUserConfigTemplate } from '../utils/config-utils'
import { fetchRegistry, fetchThemeFile } from '../utils/registry-utils'

export function init() {
  return defineCommand({
    meta: {
      name: 'init',
      description: 'Initialize a new CentoUI project',
    },

    async run() {
      try {
        const cwd = process.cwd()

        intro('CentoUI — Initialize project')

        // Collect all directory inputs upfront
        const directories = await group(
          {
            componentDir: () => text({
              message: 'Directory to store components',
              initialValue: 'src/components/centoui',
              validate: validatePath,
            }),
          
            themeFilePath: () => text({
              message: 'Directory to store theme CSS file',
              initialValue: 'src/assets/css/centoui.css',
              validate: validatePath,
            }),
          },
          {
            onCancel: () => {
              cancel('Initialization cancelled.')
              process.exit(0)
            },
          },
        )

        // Resolve absolute paths
        const configPath = join(cwd, CONFIG_FILE_NAME)
        const themePath = join(cwd, directories.themeFilePath)
        const componentsPath = join(cwd, directories.componentDir)

        // Ask all overwrite questions before any tasks run
        const shouldWriteConfig = await promptOverwrite(CONFIG_FILE_NAME, configPath)
        const shouldWriteTheme = await promptOverwrite(directories.themeFilePath, themePath)
        const shouldWriteComponents = await promptOverwrite(directories.componentDir, componentsPath)

        // Shared state for tasks that depend on each other
        let registry: Registry

        // Run all setup tasks
        await tasks([
          {
            title: `Writing ${CONFIG_FILE_NAME}`,
            task: async () => {
              if (!shouldWriteConfig) return `Skipped writing ${CONFIG_FILE_NAME}, already exists`

              await fsExtra.outputFile(
                configPath,
                generateDefaultUserConfigTemplate(directories.themeFilePath, directories.componentDir),
                'utf-8',
              )

              return `${CONFIG_FILE_NAME} written`
            },
          },

          {
            title: 'Fetching theme CSS',
            task: async () => {
              if (!shouldWriteTheme) return 'Skipped fetching theme CSS, already exists'
            
              const themeFile = await fetchThemeFile()

              await fsExtra.outputFile(themePath, themeFile, 'utf-8')
              return `${directories.themeFilePath} written`
            },
          },

          {
            title: 'Preparing components directory',
            task: async () => {
              if (!shouldWriteComponents) return 'Skipped preparing components directory. already exists.'

              await fsExtra.emptyDir(componentsPath)
              return `${directories.componentDir} ready`
            },
          },

          {
            title: 'Fetching registry',
            task: async () => {
              registry = await fetchRegistry()
              return 'Registry index loaded'
            },
          },

          {
            title: 'Installing global dependencies',
            task: async (message) => {
              return installPackages(
                registry.globals.packageDeps,
                cwd,
                message,
              )
            },
          },

        ])

        note(
          [
            `Config     > ${configPath}`,
            `Theme      > ${themePath}`,
            `Components > ${componentsPath}`,
            '',
            'Run \'centoui add button\' to install your first component',
          ].join('\n'),
          'CentoUI initialized',
        )

        outro('All Set!')

      } catch (error) {
        log.error(`Failed to build registry: ${error}`)
        process.exit(1)
      }

    },
  })
}

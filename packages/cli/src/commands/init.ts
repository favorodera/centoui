import { cancel, group, intro, note, outro, tasks, text } from '@clack/prompts'
import { defineCommand } from 'citty'
import fsExtra from 'fs-extra/esm'
import { join } from 'pathe'
import type { Registry } from '../types'
import { CONFIG_FILE_NAME } from '../constants'
import { buildUserDefaultConfigFileContent } from '../utils/config'
import { confirmOverwriteIfExists, writeFileWithDirectories } from '../utils/file-system'
import { installMissingPackages, validateNonEmptyPath } from '../utils/package'
import { fetchFullRegistry, fetchThemeCSSContent } from '../utils/registry'

/**
 * Bootstraps a new CentoUI project in the current working directory.
 *
 * Flow:
 * 1. Prompts the user for their desired structural paths (components, theme, utils).
 * 2. Checks for existing files and explicitly asks for overwrite permissions upfront.
 * 3. Executes a sequential task list to write configs, fetch CSS, and install packages.
 * @returns The Citty command definition that executes the 'init' CLI process.
 */
export function init() {
  return defineCommand({
    meta: {
      description: 'Initialize a new CentoUI project',
      name: 'init',
    },
    async run() {
      const cwd = process.cwd()

      intro('✨ CentoUI — Initialize project')

      // Collect all path inputs upfront so the user isn't prompted again
      const directories = await group(
        {
          componentDir: () => text({
            initialValue: 'src/components/centoui',
            message: 'Directory to store components',
            validate: validateNonEmptyPath,
          }),

          themeFilePath: () => text({
            initialValue: 'src/assets/css/centoui.css',
            message: 'Path for the theme CSS file',
            validate: validateNonEmptyPath,
          }),

          utilsFilePath: () => text({
            initialValue: 'src/utils/centoui-utils.ts',
            message: 'Path for the utils file (written on demand)',
            validate: validateNonEmptyPath,
          }),
        },
        {
          onCancel: () => {
            cancel('Initialization cancelled.')
            process.exit(0)
          },
        },
      )

      // Resolve absolute paths for overwrite checks and task operations.
      const configPath = join(cwd, CONFIG_FILE_NAME)
      const themePath = join(cwd, directories.themeFilePath)
      const componentsPath = join(cwd, directories.componentDir)

      // Ask all overwrite questions before any file operations begin.
      const shouldWriteConfig = await confirmOverwriteIfExists(CONFIG_FILE_NAME, configPath)
      const shouldWriteTheme = await confirmOverwriteIfExists(directories.themeFilePath, themePath)
      const shouldWriteComponentsDirectory = await confirmOverwriteIfExists(directories.componentDir, componentsPath)

      // `registry` is populated by the "Fetching registry" task and consumed
      // by the subsequent "Installing global dependencies" task via closure.
      let registry: Registry

      await tasks([
        {
          task: async () => {
            if (!shouldWriteConfig) {
              return `Skipped — "${CONFIG_FILE_NAME}" already exists`
            }

            const userConfigContent = await buildUserDefaultConfigFileContent(
              directories.themeFilePath,
              directories.componentDir,
              directories.utilsFilePath,
            )

            await writeFileWithDirectories(configPath, userConfigContent)
            return `Config written to ${CONFIG_FILE_NAME}`
          },
          title: 'Fetching config defaults',
        },

        {
          task: async () => {
            if (!shouldWriteTheme) {
              return `Skipped — "${directories.themeFilePath}" already exists`
            }

            const themeContent = await fetchThemeCSSContent()
            await writeFileWithDirectories(themePath, themeContent)
            return `Theme CSS written to ${directories.themeFilePath}`
          },
          title: 'Fetching theme CSS',
        },

        {
          task: async () => {
            if (!shouldWriteComponentsDirectory) {
              return `Skipped — "${directories.componentDir}" already exists`
            }

            await fsExtra.emptyDir(componentsPath)
            return `Component directory prepared at ${directories.componentDir}`
          },
          title: 'Preparing components directory',
        },

        {
          task: async () => {
            registry = await fetchFullRegistry()
            return 'Component registry loaded'
          },
          title: 'Fetching registry',
        },

        {
          task: async (message) => {
            await installMissingPackages(registry.globals.packageDeps, cwd, message)
            return 'Global dependencies installed successfully'
          },
          title: 'Installing global dependencies',
        },
      ])

      const summaryText = [
        `Config     > ${directories.componentDir}`,
        `Theme      > ${directories.themeFilePath}`,
        `Components > ${directories.componentDir}`,
        '',
        'Run \'centoui add button\' to install your first component.',
      ].join('\n')

      note(summaryText, 'Initialization Complete')

      outro('You\'re all set! 🎉')
    },
  })
}

import { cancel, group, intro, log, note, outro, tasks, text } from '@clack/prompts'
import { defineCommand } from 'citty'
import { installMissingPackages, validateNonEmptyPath } from '../utils/package-utils'
import { join } from 'pathe'
import { CONFIG_FILE_NAME } from '../constants'
import { confirmOverwriteIfExists } from '../utils/file-system-utils'
import type { Registry } from '../types'
import fsExtra from 'fs-extra'
import { buildDefaultConfigFileContent } from '../utils/config-utils'
import { fetchFullRegistry, fetchThemeCSSContent } from '../utils/registry-utils'

/**
 * Command: `centoui init`
 *
 * Bootstraps a new CentoUI project in the current working directory.
 *
 * Flow:
 *  1. Prompt the user for the components directory and theme CSS file path.
 *  2. Ask upfront whether to overwrite any of the three output paths
 *     (config file, theme CSS, components directory) if they already exist.
 *  3. Write the config file, fetch and write the theme CSS, prepare the
 *     components directory, and install global npm dependencies.
 */
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

        // Collect all path inputs upfront so the user isn't prompted again
        const directories = await group(
          {
            componentDir: () =>
              text({
                message: 'Directory to store components',
                initialValue: 'src/components/centoui',
                validate: validateNonEmptyPath,
              }),

            themeFilePath: () =>
              text({
                message: 'Path for the theme CSS file',
                initialValue: 'src/assets/css/centoui.css',
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
        const shouldWriteComponentsDir = await confirmOverwriteIfExists(
          directories.componentDir,
          componentsPath,
        )

        // `registry` is populated by the "Fetching registry" task and consumed
        // by the subsequent "Installing global dependencies" task via closure.
        let registry: Registry

        await tasks([
          {
            title: `Writing ${CONFIG_FILE_NAME}`,
            task: async () => {
              if (!shouldWriteConfig) {
                return `Skipped — "${CONFIG_FILE_NAME}" already exists`
              }

              await fsExtra.outputFile(
                configPath,
                buildDefaultConfigFileContent(directories.themeFilePath, directories.componentDir),
                'utf-8',
              )

              return `${CONFIG_FILE_NAME} written`
            },
          },

          {
            title: 'Fetching theme CSS',
            task: async () => {
              if (!shouldWriteTheme) {
                return `Skipped — "${directories.themeFilePath}" already exists`
              }

              const themeContent = await fetchThemeCSSContent()
              await fsExtra.outputFile(themePath, themeContent, 'utf-8')

              return `${directories.themeFilePath} written`
            },
          },

          {
            title: 'Preparing components directory',
            task: async () => {
              if (!shouldWriteComponentsDir) {
                return `Skipped — "${directories.componentDir}" already exists`
              }

              await fsExtra.emptyDir(componentsPath)
              return `${directories.componentDir} ready`
            },
          },

          {
            title: 'Fetching registry',
            task: async () => {
              registry = await fetchFullRegistry()
              return 'Registry loaded'
            },
          },

          {
            title: 'Installing global dependencies',
            task: async message =>
              installMissingPackages(registry.globals.packageDeps, cwd, message),
          },
        ])

        note(
          [
            `Config     > ${configPath}`,
            `Theme      > ${themePath}`,
            `Components > ${componentsPath}`,
            '',
            "Run 'centoui add button' to install your first component.",
          ]
            .filter(Boolean)
            .join('\n'),
          'CentoUI initialized',
        )

        outro('All set!')
      } catch (error) {
        log.error(`Initialization failed: ${error}`)
        process.exit(1)
      }
    },
  })
}

import { intro, note, outro, tasks } from '@clack/prompts'
import fsExtra from 'fs-extra'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'pathe'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SOURCE_DIRECTORY = join(__dirname, '../../../packages/core/src/components')
const TARGET_DIRECTORY = join(__dirname, '../app/components/centoui')

const IGNORE_COMPONENTS = new Set([
  'avatar',
  'icon',
])

const componentsToPull: Array<string> = []
const componentsToSkip: Array<string> = []

intro('CentoUI Core-to-Docs Component Puller')

await tasks([
  {
    task: async () => {
      // Verify the source directory exists before proceeding
      if (!(await fsExtra.pathExists(SOURCE_DIRECTORY))) {
        throw new Error(`Source directory not found: ${SOURCE_DIRECTORY}`)
      }

      // Create the target directory if it doesn't already exist
      await fsExtra.ensureDir(TARGET_DIRECTORY)

      const directoryEntries = await fsExtra.readdir(SOURCE_DIRECTORY, { withFileTypes: true })
      const componentDirectories = directoryEntries.filter(entry => entry.isDirectory())

      // Report the total number of component directories discovered
      const totalDiscovered = componentDirectories.length
      if (totalDiscovered === 0) {
        throw new Error('No component directories found to copy')
      }

      // Second: filter discovered components against the ignore list
      for (const directoryEntry of componentDirectories) {
        if (IGNORE_COMPONENTS.has(directoryEntry.name)) {
          componentsToSkip.push(directoryEntry.name)
        } else {
          componentsToPull.push(directoryEntry.name)
        }
      }

      // Report the final breakdown of included versus skipped components
      return `Discovered ${totalDiscovered} total | ${componentsToPull.length} to pull, ${componentsToSkip.length} to skip`
    },
    title: 'Scanning core components',
  },
  {
    task: async (progressMessage) => {
      for (let index = 0; index < componentsToPull.length; index++) {
        const componentName = componentsToPull[index]
        progressMessage(`[${index + 1}/${componentsToPull.length}] ${componentName}`)

        const sourcePath = join(SOURCE_DIRECTORY, componentName)
        const destinationPath = join(TARGET_DIRECTORY, componentName)

        // Ensure destination directory exists before copying files
        await fsExtra.ensureDir(destinationPath)

        // Copy component files from source to destination, allowing overwrites
        await fsExtra.copy(sourcePath, destinationPath, {
          overwrite: true,
        })
      }

      return `Pulled ${componentsToPull.length} components`
    },
    title: 'Pulling components into docs',
  },
])

// Display the list of copied components
if (componentsToPull.length > 0) {
  note(
    componentsToPull.map(name => `  ${name}`).join('\n'),
    `Copied (${componentsToPull.length})`,
  )
}

// Display the list of skipped components, if any
if (componentsToSkip.length > 0) {
  note(
    componentsToSkip.map(name => `  ${name}`).join('\n'),
    `Skipped (${componentsToSkip.length})`,
  )
}

outro('Components pulled successfully')

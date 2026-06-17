import type { ComponentRegistryEntry } from 'centoui-cli'
import { intro, note, outro, tasks } from '@clack/prompts'
import fsExtra from 'fs-extra'
import { fileURLToPath } from 'node:url'
import { dirname, extname, join } from 'pathe'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REGISTRY_DIR = join(__dirname, '../src/registry')
const REGISTRY_OUTPUT = join(REGISTRY_DIR, 'index.json')

/** Static list of core dependencies required in every CentoUI project. */
const ROOT_NPM_DEPENDENCIES: Record<string, string> = {
  '@tailwindcss/vite': '^4.3.1',
  '@vueuse/core': '^14.3.0',
  'reka-ui': '^2.9.10',
  'tailwind-merge': '^3.6.0',
  'tailwind-variants': '^3.2.2',
  'tailwindcss': '^4.3.1',
  'tw-animate-css': '^1.4.0',
}

let entryFiles: Array<string> = []
let entries: Array<ComponentRegistryEntry> = []

intro('CentoUI Registry Builder')

await tasks([
  {
    task: async () => {
      const allFiles = await fsExtra.readdir(REGISTRY_DIR)

      entryFiles = allFiles.filter(file => extname(file) === '.json' && file !== 'index.json')

      if (entryFiles.length === 0) {
        throw new Error('No component entries found')
      }

      return `Found ${entryFiles.length} component entries`
    },
    title: 'Discovering component entries',
  },

  {
    task: async (message) => {
      const loaded: Array<ComponentRegistryEntry> = []

      for (const [
        index,
        file,
      ] of entryFiles.entries()) {
        const filePath = join(REGISTRY_DIR, file)
        message(`[${index + 1}/${entryFiles.length}] ${file}`)

        loaded.push(await fsExtra.readJSON(filePath))
      }

      entries = loaded
      return `Loaded ${entries.length} components`
    },
    title: 'Loading component metadata',
  },

  {
    task: async () => {
      await fsExtra.writeJSON(
        REGISTRY_OUTPUT,
        {
          $schema: './schemas/registry.schema.json',
          components: entries,
          npmDependencies: ROOT_NPM_DEPENDENCIES,
        },
        { spaces: 2 },
      )

      return `Emitted ${REGISTRY_OUTPUT}`
    },
    title: 'Emitting registry index',
  },
])

note(
  entries.map(entry => `  ${entry.name}`).join('\n'),
  `${entries.length} components registered`,
)

outro('Registry built successfully')

import type { ComponentRegistryEntry, PackageJson } from 'centoui-cli'
import { intro, note, outro, tasks } from '@clack/prompts'
import fsExtra from 'fs-extra'
import { fileURLToPath } from 'node:url'
import { dirname, extname, join } from 'pathe'
import { parse as parseYaml } from 'yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REGISTRY_DIR = join(__dirname, '../src/registry')
const REGISTRY_OUTPUT = join(REGISTRY_DIR, 'index.json')
const PNPM_WORKSPACE = join(__dirname, '../../../pnpm-workspace.yaml')

/** Static list of core dependency names required in every CentoUI project. */
const ROOT_NPM_DEPENDENCY_NAMES = [
  '@tailwindcss/vite',
  '@vueuse/core',
  'reka-ui',
  'tailwind-merge',
  'tailwind-variants',
  'tailwindcss',
  'tw-animate-css',
]
const ROOT_NPM_DEPENDENCIES: PackageJson['dependencies'] = {}

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

      const workspaceYaml = await fsExtra.readFile(PNPM_WORKSPACE, 'utf8')
      const workspaceConfig = parseYaml(workspaceYaml)
      const vendorCatalog = workspaceConfig.catalogs?.vendor || {}

      for (const name of ROOT_NPM_DEPENDENCY_NAMES) {
        if (vendorCatalog[name]) {
          ROOT_NPM_DEPENDENCIES[name] = vendorCatalog[name]
        } else {
          throw new Error(`Dependency ${name} not found in workspace vendor catalog`)
        }
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
          $schema: './schemas/registry.json',
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

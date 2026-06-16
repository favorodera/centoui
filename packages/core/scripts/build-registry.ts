import { intro, note, outro, tasks } from '@clack/prompts'
import fsExtra from 'fs-extra'
import { extname, join, resolve } from 'pathe'

// eslint-disable-next-line node/no-unsupported-features/node-builtins
const REGISTRY_DIR = resolve(import.meta.dirname, '../src/registry')
const REGISTRY_OUTPUT = join(REGISTRY_DIR, 'index.json')

let globalsFilePath = ''
let componentFiles: Array<string> = []
let globalsFileContent: Record<string, unknown> = {}
let componentsFileContent: Array<Record<string, unknown>> = []

intro('CentoUI Registry Builder')

await tasks([
  {
    task: async () => {
      globalsFilePath = join(REGISTRY_DIR, 'globals.json')

      const fileExists = await fsExtra.pathExists(globalsFilePath)
      if (!fileExists) {
        throw new Error(`globals.json not found in ${REGISTRY_DIR}`)
      }

      return 'Found globals.json'
    },
    title: 'Locating globals.json',
  },

  {
    task: async () => {
      const allFiles = await fsExtra.readdir(REGISTRY_DIR)

      componentFiles = allFiles.filter((file) => {
        return extname(file) === '.json'
          && file !== 'index.json'
          && file !== 'globals.json'
      })

      if (componentFiles.length === 0) {
        throw new Error('No component files found')
      }

      return `Found ${componentFiles.length} component files`
    },
    title: 'Locating component files',
  },

  {
    task: async () => {
      globalsFileContent = await fsExtra.readJSON(globalsFilePath)
      return 'Loaded globals.json'
    },
    title: 'Reading globals',
  },

  {
    task: async (message) => {
      const resolved: Array<Record<string, unknown>> = []

      for (const [
        index,
        file,
      ] of componentFiles.entries()) {
        const filePath = join(REGISTRY_DIR, file)

        message(`[${index + 1}/${componentFiles.length}] ${file}`)
        resolved.push(await fsExtra.readJSON(filePath))
      }

      componentsFileContent = resolved
      return `Read ${componentsFileContent.length} components`
    },
    title: 'Reading components',
  },

  {
    task: async () => {
      await fsExtra.writeJSON(
        REGISTRY_OUTPUT,
        {
          components: componentsFileContent,
          globals: globalsFileContent,
        },
        {
          spaces: 2,
        },
      )
      return `Written: ${REGISTRY_OUTPUT}`
    },
    title: 'Writing registry index',
  },
])

note(
  componentFiles.map(file => `  ${file}`).join('\n'),
  `${componentsFileContent.length} components registered`,
)

outro('Registry built successfully')

import fsExtra from 'fs-extra'
import {
  resolve, join, extname,
} from 'pathe'
import {
  intro, outro, tasks, log, note,
} from '@clack/prompts'

const REGISTRY_DIR = resolve(import.meta.dirname, '../src/registry')
const REGISTRY_OUTPUT = join(REGISTRY_DIR, 'index.json')

let globalsFilePath = ''
let componentFiles: string[] = []
let globalsFileContent: Record<string, unknown> = {}
let componentsFileContent: Record<string, unknown>[] = []

intro('CentoUI Registry Builder')

try {
  await tasks([
    {
      title: 'Locating globals.json',
      task: async () => {
        globalsFilePath = join(REGISTRY_DIR, 'globals.json')

        const fileExists = await fsExtra.pathExists(globalsFilePath)
        if (!fileExists) {
          throw new Error(`globals.json not found in ${REGISTRY_DIR}`)
        }

        return 'Found globals.json'
      },
    },

    {
      title: 'Locating component files',
      task: async () => {
        const allFiles = await fsExtra.readdir(REGISTRY_DIR)

        componentFiles = allFiles.filter(
          (file) => {
            return extname(file) === '.json'
              && file !== 'index.json'
              && file !== 'globals.json'
          },
        )

        if (!componentFiles.length) {
          throw new Error('No component files found')
        }

        return `Found ${componentFiles.length} component files`
      },
    },

    {
      title: 'Reading globals',
      task: async () => {
        globalsFileContent = await fsExtra.readJSON(globalsFilePath)
        return 'Loaded globals.json'
      },
    },

    {
      title: 'Reading components',
      task: async (message) => {
        const resolved: Record<string, unknown>[] = []

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
    },

    {
      title: 'Writing registry index',
      task: async () => {
        await fsExtra.writeJSON(
          REGISTRY_OUTPUT,
          {
            globals: globalsFileContent,
            components: componentsFileContent,
          },
          {
            spaces: 2,
          },
        )
        return `Written: ${REGISTRY_OUTPUT}`
      },
    },
  ])

  note(
    componentFiles.map(file => `  ${file}`).join('\n'),
    `${componentsFileContent.length} components registered`,
  )

  outro('Registry built successfully')
}
catch (error) {
  log.error(`Failed to build registry: ${error}`)
  process.exit(1)
}

import type { CentoUIConfig } from 'centoui-cli'
import { addComponent, addComponentsDir, addTemplate, defineNuxtModule, extendViteConfig } from '@nuxt/kit'
import { loadConfig } from 'c12'
import { existsSync, readdirSync } from 'node:fs'
import { basename, join } from 'pathe'

export interface ModuleOptions {
  /**
   * Prefix prepended to every registered component name (converted to PascalCase).
   * @default ""
   */
  prefix?: string
}

/**
 * Converts kebab-case to PascalCase (e.g. 'alert-root' -> 'AlertRoot').
 * @param kebabString The kebab-case string to convert
 * @returns The string in PascalCase
 */
function kebabToPascalCase(kebabString: string): string {
  return kebabString
    .toLowerCase()
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export default defineNuxtModule<ModuleOptions>({
  defaults: {
    prefix: '',
  },
  meta: {
    configKey: 'centoui',
    name: 'centoui-nuxt',
  },
  async setup(options, nuxt) {
    const rootDir = nuxt.options.rootDir

    const { config } = await loadConfig<CentoUIConfig>({
      cwd: rootDir,
      name: 'centoui',
    })

    const componentsDir = join(rootDir, config.componentsDir)

    if (!existsSync(componentsDir)) {
      console.warn(`[centoui-nuxt] Component directory not found: ${componentsDir}`)
      return
    }

    // Register the dir without auto-scanning it (components are added manually below);
    // prepend: true makes this rule win over the default '~/components' scan.
    addComponentsDir(
      {
        extensions: [],
        ignore: ['**/*'],
        path: componentsDir,
      },
      { prepend: true },
    )

    // Resolve the vue files in component folders and register them
    const pascalPrefix = options.prefix ? kebabToPascalCase(options.prefix) : ''

    const componentFolders = readdirSync(componentsDir, { withFileTypes: true })
      .filter(entry => entry.isDirectory())

    for (const folder of componentFolders) {
      const folderPath = join(componentsDir, folder.name)

      const componentVueFiles = readdirSync(folderPath, { withFileTypes: true })
        .filter(entry => entry.isFile() && entry.name.endsWith('.vue'))

      for (const file of componentVueFiles) {
        addComponent({
          filePath: join(folderPath, file.name),
          name: `${pascalPrefix}${kebabToPascalCase(basename(file.name, '.vue'))}`,
          priority: 1,
        })
      }
    }

    // Persist the resolved config in the build dir, then alias it so consumers can `import config from '#centoui/config'`.
    addTemplate({
      filename: 'centoui/config.ts',
      getContents: () => `export default ${JSON.stringify(config, undefined, 2)}\n`,
      write: true,
    })
    nuxt.options.alias['#centoui/config'] = join(nuxt.options.buildDir, 'centoui/config.ts')

    // Pre-bundle these so dev startup and HMR stay fast.
    extendViteConfig((config) => {
      config.optimizeDeps ||= {}
      config.optimizeDeps.include ||= []

      config.optimizeDeps.include.push(
        '@vueuse/core',
        'reka-ui',
        'tailwind-variants',
        '@iconify/vue',
      )
    })
  },
})

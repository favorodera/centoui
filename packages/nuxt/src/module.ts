import { existsSync, readdirSync } from 'node:fs'
import { addComponent, addComponentsDir, addTemplate, defineNuxtModule } from '@nuxt/kit'
import { loadConfig } from 'c12'
import { basename, join } from 'pathe'
import type { CentoUIConfig } from 'centoui'

export interface ModuleOptions {
  /**
   * Prefix for all registered components (normalized to PascalCase internally).
   * @default ""
   */
  prefix?: string
}


// UTILITIES

/** Converts a string (e.g., 'alert-root' or 'CENTO') to PascalCase. */
function kebabToPascalCase(kebabString: string): string {
  return kebabString
    .toLowerCase()
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

/** Builds the component name by combining and normalizing an optional prefix and base name. */
function buildComponentName(prefix: string | undefined, base: string): string {
  const pascalBase = kebabToPascalCase(base)
  if (!prefix) {
    return pascalBase
  }

  const pascalPrefix = kebabToPascalCase(prefix)
  return `${pascalPrefix}${pascalBase}`
}

// MODULE

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'centoui-nuxt',
    configKey: 'centoui',
  },
  defaults: {
    prefix: '',
  },
  async setup(options, nuxt) {
    const rootDir = nuxt.options.rootDir

    // Load centoui.config.ts from the project root
    const { config } = await loadConfig<CentoUIConfig>({
      name: 'centoui',
      cwd: rootDir,
    })

    const componentsDir = join(rootDir, config.componentsDir!)

    if (!existsSync(componentsDir)) {
      console.warn(`[centoui-nuxt] Component directory not found: ${componentsDir}`)
      return
    }

    // Register the directory with Nuxt's resolver but suppress its auto-scan.
    // 'prepend: true' ensures this suppression wins over default '~/components' scanning.
    addComponentsDir(
      {
        path: componentsDir,
        extensions: [],
        ignore: ['**/*'],
      },
      { prepend: true },
    )

    // Manually register components, converting kebab-case files (e.g., 'alert-root.vue')
    // to PascalCase (e.g., 'CentoAlertRoot' or 'AlertRoot' based on prefix) to match exports.
    function registerComponents(dir: string): void {
      // Iterate through component group folders (e.g., /alert, /button)
      for (const group of readdirSync(dir, { withFileTypes: true })) {
        if (!group.isDirectory()) continue

        const groupPath = join(dir, group.name)

        // Register each .vue file (e.g., alert-root.vue)
        for (const file of readdirSync(groupPath, { withFileTypes: true })) {
          if (file.isFile() && file.name.endsWith('.vue')) {
            addComponent({
              name: buildComponentName(options.prefix, basename(file.name, '.vue')),
              filePath: join(groupPath, file.name),
              priority: 1, // Override default user components
            })
          }
        }
      }
    }

    registerComponents(componentsDir)

    // Write config to .nuxt/centoui/config.mjs
    addTemplate({
      filename: 'centoui/config.ts',
      write: true,
      getContents: () => `export default ${JSON.stringify(config, null, 2)} as const\n`,
    })

    // Alias so consumers and components import from "#centoui/config"
    nuxt.options.alias['#centoui/config'] = join(nuxt.options.buildDir, 'centoui/config.mjs')

    // Watch for new or deleted component files during development
    if (nuxt.options.dev) {
      nuxt.hook('builder:watch', (event, relativePath) => {
        // Resolve Nuxt's relative paths against rootDir to check if they belong to our components directory
        const fullPath = join(rootDir, relativePath)

        if (!fullPath.startsWith(componentsDir) || !fullPath.endsWith('.vue'))
          return

        if (event === 'add') {
          // Register newly added files immediately
          addComponent({
            name: buildComponentName(options.prefix, basename(relativePath, '.vue')),
            filePath: fullPath,
            priority: 1,
          })
        }

        if (event === 'unlink') {
          // Nuxt lacks a deregister API; trigger a hard restart to clear stale registrations
          nuxt.callHook('restart', { hard: true })
        }
      })
    }
  },
})

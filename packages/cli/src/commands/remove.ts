import { cancel, confirm, intro, isCancel, log, note, outro, tasks } from '@clack/prompts'
import { defineCommand } from 'citty'
import fsExtra from 'fs-extra'
import { loadCentoUIConfig } from '../utils/config-utils'
import { resolveComponentInstallDir, listInstalledComponentNames, checkIsComponentInstalled } from '../utils/components-utils'
import { fetchFullRegistry } from '../utils/registry-utils'
import { removeOrphanedPackages } from '../utils/package-utils'

/**
 * Command: `centoui remove <component>`
 *
 * Removes a single installed component and its files from the user's project.
 *
 * Flow:
 *  1. Confirm the component is actually installed.
 *  2. Fetch the registry and check whether any other installed components
 *     declare this one as a `componentDep` — block removal if so.
 *  3. Collect the packages still required by remaining components so we
 *     know which of this component's packages become orphaned.
 *  4. Ask for confirmation, then delete the component directory and remove
 *     any newly orphaned npm packages.
 */
export function remove() {
  return defineCommand({
    meta: {
      name: 'remove',
      description: 'Remove an installed component from your project',
    },

    args: {
      component: {
        type: 'positional',
        required: true,
        description: 'Name of the component to remove (e.g. "button")',
      },
    },

    async run({ args }) {
      try {
        const cwd = process.cwd()
        const componentName = args.component

        intro('CentoUI — Remove component')

        const config = await loadCentoUIConfig(cwd)

        // Verify the component is actually installed before doing anything else.
        const isInstalled = await checkIsComponentInstalled(componentName, config, cwd)
        if (!isInstalled) {
          throw new Error(`Component "${componentName}" is not installed.`)
        }

        const componentInstallDir = resolveComponentInstallDir(componentName, config, cwd)

        // Fetch the registry once — needed to look up the target component's
        // package deps and to check which remaining components depend on it.
        const registry = await fetchFullRegistry()

        const targetEntry = registry
          .components
          .find(component => component.name === componentName)

        if (!targetEntry) {
          throw new Error(`"${componentName}" was not found in the registry. Aborting to avoid a partial removal.`)
        }

        // Single pass over the remaining installed components to:
        //   (a) find any that list this component as a componentDep (blockers), and
        //   (b) collect the full set of packages they still require (so we can
        //       identify which of the target's packages become orphaned).
        const installedNames = await listInstalledComponentNames(config, cwd)
        const remainingNames = installedNames.filter(name => name !== componentName)

        const dependents = new Set<string>()
        const packagesStillNeeded: Record<string, string> = {}

        for (const name of remainingNames) {
          const entry = registry
            .components
            .find(component => component.name === name)

          if (!entry) continue

          if (entry.componentDeps.includes(componentName)) {
            dependents.add(name)
          }

          Object.assign(packagesStillNeeded, entry.packageDeps)
        }

        // Block removal if any installed component depends on this one.
        if (dependents.size > 0) {
          const list = Array.from(dependents)
            .map(dependent => `  · ${dependent}`)
            .join('\n')

          throw new Error(
            `Cannot remove "${componentName}" — the following installed components depend on it:\n${list}`,
          )
        }

        // Ask for explicit confirmation before doing anything destructive.
        const confirmed = await confirm({ message: `Remove "${componentName}"?` })
        if (isCancel(confirmed) || !confirmed) {
          cancel('Removal cancelled.')
          process.exit(0)
        }

        await tasks([
          {
            title: `Removing ${componentName}`,
            task: async () => {
              await fsExtra.remove(componentInstallDir)
              return `${componentName} removed`
            },
          },

          {
            title: 'Removing orphaned packages',
            task: async message =>
              removeOrphanedPackages(targetEntry.packageDeps, packagesStillNeeded, cwd, message),
          },
        ])

        // Surface the removed packages so the user knows what changed in their lockfile.
        const removedPackages = Object.keys(targetEntry.packageDeps).filter(
          pkg => !(pkg in packagesStillNeeded),
        )

        if (removedPackages.length > 0) {
          note(
            removedPackages.map(pkg => `  · ${pkg}`).join('\n'),
            'Packages removed',
          )
        }

        outro('All set!')
      } catch (error) {
        log.error(`Failed to remove component: ${error}`)
        process.exit(1)
      }
    },
  })
}

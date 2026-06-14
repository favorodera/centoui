import type { PackageJson } from 'type-fest'
import fsExtra from 'fs-extra'
import { addDependency, removeDependency } from 'nypm'
import { join } from 'pathe'

/**
 * Callback invoked with a status string each time a package operation starts.
 * Used to update a spinner or progress display in the CLI.
 */
type PackageProgressCallback = (statusMessage: string) => void

/**
 * Installs any packages from `requiredPackages` that are missing from — or at
 * a different version than what is listed in — the project's `package.json`.
 *
 * Already-satisfied packages are skipped entirely to avoid unnecessary network
 * traffic and lockfile churn. The package manager is auto-detected from
 * lockfiles by nypm (npm / pnpm / yarn / bun).
 * @param requiredPackages Map of `packageName → semver version range`.
 * @param cwd Absolute path to the project root (must contain `package.json`).
 * @param onProgress Optional callback fired before each `addDependency` call with a `"[n/total] package@version"` string.
 * @returns Human-readable summary (e.g. `"Installed 3 package(s)"`).
 * @throws If reading `package.json` or running the package manager fails.
 */
export async function installMissingPackages(
  requiredPackages: Record<string, string>,
  cwd: string,
  onProgress?: PackageProgressCallback,
) {
  if (Object.keys(requiredPackages).length === 0) {
    return 'No packages to install'
  }

  const packageJson: Pick<PackageJson, 'dependencies' | 'devDependencies'> = await fsExtra
    .readJson(join(cwd, 'package.json'))
    .catch(() => ({}))

  const alreadyInstalled = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  }

  // Only install packages that are absent (check name only, not version)
  const packagesToInstall = Object.entries(requiredPackages)
    .filter(([name]) => !(name in alreadyInstalled))
    .map(([name, version]) => `${name}@${version}`)

  if (packagesToInstall.length === 0) {
    return 'All packages already up to date'
  }

  const installationPromises = packagesToInstall.map((packageToInstall, index) => {
    onProgress?.(`[${index + 1}/${packagesToInstall.length}] ${packageToInstall}`)
    return addDependency(packageToInstall, { cwd, silent: true })
  })

  const results = await Promise.allSettled(installationPromises)

  const failedPackagesErrorMessages = results
  .flatMap((result, index) => {
    if (result.status === 'rejected') {
      const errorMessage = result.reason instanceof Error 
        ? result.reason.message 
        : String(result.reason)
        
      return [`"${packagesToInstall[index]}": ${errorMessage}`]
    }
    
    return []
  })

  if (failedPackagesErrorMessages.length > 0) {
    throw new Error(
      `[installMissingPackages] Failed to install ${failedPackagesErrorMessages.length} package(s):\n- ${failedPackagesErrorMessages.join('\n- ')}`
    )
  }

  return `Installed ${packagesToInstall.length} package(s)`
}

/**
 * Removes packages that were used by a component being uninstalled, but only
 * if those packages are not still required by other remaining components.
 *
 * Skips any package that appears in `packagesStillNeeded` so that shared
 * dependencies are never removed prematurely.
 * @param packagesToConsider Packages belonging to the component being removed.
 * @param packagesStillNeeded Union of `packageDeps` from all other installed components.
 * @param cwd Absolute path to the project root.
 * @param onProgress Optional callback fired before each `removeDependency` call.
 * @returns Human-readable summary (e.g. `"Removed 2 package(s)"`).
 * @throws If the package manager fails to remove a dependency.
 */
export async function removeOrphanedPackages(
  packagesToConsider: Record<string, string>,
  packagesStillNeeded: Record<string, string>,
  cwd: string,
  onProgress?: PackageProgressCallback,
) {
  const packagesToRemove = Object.keys(packagesToConsider).filter(
    name => !(name in packagesStillNeeded)
  )

  if (packagesToRemove.length === 0) {
    return 'No packages to remove'
  }

  const removalPromises = packagesToRemove.map((packageToRemove, index) => {
    onProgress?.(`[${index + 1}/${packagesToRemove.length}] ${packageToRemove}`)
    return removeDependency(packageToRemove, { cwd, silent: true })
  })

  const results = await Promise.allSettled(removalPromises)

  const failedPackagesErrorMessages = results
  .flatMap((result, index) => {
    if (result.status === 'rejected') {
      const errorMessage = result.reason instanceof Error 
        ? result.reason.message 
        : String(result.reason)
        
      return [`"${packagesToRemove[index]}": ${errorMessage}`]
    }
    
    return [] 
  })

  if (failedPackagesErrorMessages.length > 0) {
    throw new Error(
      `[removeOrphanedPackages] Failed to remove ${failedPackagesErrorMessages.length} package(s):\n- ${failedPackagesErrorMessages.join('\n- ')}`
    )
  }

  return `Removed ${packagesToRemove.length} package(s)`
}

/**
 * Validates that a value is a non-empty string usable as a file-system path.
 *
 * Intended as a `validate` callback for `@clack/prompts` text inputs.
 * @param value The raw value from the prompt.
 * @returns An error message string if invalid, or `undefined` if valid.
 */
export function validateNonEmptyPath(value: unknown) {
  if (typeof value !== 'string') return 'Expected a string path'
  if (value.trim().length === 0) return 'Path cannot be empty'
}

import { join } from 'pathe'
import fsExtra from 'fs-extra'
import type { PackageJson } from 'type-fest'
import { addDependency, removeDependency } from 'nypm'

/** Called with a status message as each package is processed. */
type ProgressCallback = (message: string) => void

/**
 * Install packages that are missing or on a different version.
 * Reads the project's `package.json` to diff against what's already installed.
 * nypm auto-detects the package manager from lockfiles (npm / pnpm / yarn / bun).
 *
 * @param packages - Map of package name → required version
 * @param cwd - Root of the project to install into
 * @param onProgress - Optional callback fired with a status string per package
 * @returns A human-readable summary string (used as the task return value in clack)
 */

export async function installPackages(
  packages: Record<string, string>,
  cwd: string,
  onProgress?: ProgressCallback,
) {
  if (Object.keys(packages).length === 0) {
    return 'No packages to install'
  }

  const packageJson: Pick<PackageJson, 'dependencies' | 'devDependencies'> = await fsExtra
    .readJson(join(cwd, 'package.json'))
    .catch(() => ({}))

  const installedPackages = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  }

  // Only install packages that are missing or on a mismatched version
  const packagesToInstall = Object
    .entries(packages)
    .filter(([packageName, version]) => installedPackages[packageName] !== version)
    .map(([packageName, version]) => `${packageName}@${version}`)

  if (packagesToInstall.length === 0) {
    return 'All packages already up to date'
  }

  for (const [index, packageToInstall] of packagesToInstall.entries()) {
    onProgress?.(`[${index + 1}/${packagesToInstall.length}] ${packageToInstall}`)
    await addDependency(packageToInstall, { cwd, silent: true })
  }

  return `Installed ${packagesToInstall.length} package(s)`
}

/**
 * Remove packages that are no longer needed by any installed component.
 * Skips any package that still appears in `stillNeeded`.
 *
 * @param packages - Packages belonging to the component being removed
 * @param stillNeeded - Packages still required by other installed components
 * @param cwd - Root of the project to remove from
 * @param onProgress - Optional callback fired with a status string per package
 * @returns A human-readable summary string
 */
export async function removePackages(
  packages: Record<string, string>,
  stillNeeded: Record<string, string>,
  cwd: string,
  onProgress?: ProgressCallback,
) {
  const packagesToRemove = Object
    .keys(packages)
    .filter(packageName => !(packageName in stillNeeded))

  if (packagesToRemove.length === 0) {
    return 'No packages to remove'
  }

  for (const [index, packageToRemove] of packagesToRemove.entries()) {
    onProgress?.(`[${index + 1}/${packagesToRemove.length}] ${packageToRemove}`)
    await removeDependency(packageToRemove, { cwd, silent: true })
  }

  return `Removed ${packagesToRemove.length} package(s)`
}

/**
 * Validate that the given value is a non-empty string representing a valid directory path.
 * Returns `undefined` if valid, otherwise returns an error message.
 */
export function validatePath(path: unknown) {
  if (typeof path !== 'string') {
    return 'Invalid input'
  }

  if (path.trim().length < 1) {
    return 'Path is required'
  }

  return undefined
}

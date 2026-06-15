import fsExtra from 'fs-extra'
import { addDependency, removeDependency } from 'nypm'
import { join } from 'pathe'
import type { PackageJson } from '../types'

/**
 * Installs a dependency using nypm.
 * @param name Dependency name to install.
 * @param version Dependency semver version to install.
 * @param cwd Current working directory.
 * @returns String indicating whether the package was installed successfully or not.
 */
export async function installDependency(name: string, version: string, cwd: string) {
  try {
    const packageJson: PackageJson = await fsExtra
      .readJson(join(cwd, 'package.json'))
      .catch(() => ({}))

    const installedDeps = {
      ...packageJson?.dependencies,
      ...packageJson?.devDependencies,
    }

    if (name in installedDeps) {
      return `${name} is already installed.`
    }

    const target = `${name}@${version}`
    await addDependency(target, { cwd, silent: true })

    return `${target} installed.`
  } catch (error) {
    throw new Error(`Failed to install ${name}`, { cause: error })
  }
}

/**
 * Uninstalls a dependency using nypm.
 * @param name Dependency name to uninstall.
 * @param cwd Current working directory.
 * @returns String indicating whether the package was uninstalled successfully or not.
 */
export async function uninstallDependency(name: string, cwd: string) {
  try {
    const packageJson: PackageJson = await fsExtra
      .readJson(join(cwd, 'package.json'))
      .catch(() => ({}))

    const installedDeps = {
      ...packageJson?.dependencies,
      ...packageJson?.devDependencies,
    }

    if (!(name in installedDeps)) {
      return `${name} is not installed.`
    }

    await removeDependency(name, { cwd, silent: true })

    return `${name} uninstalled.`
  } catch (error) {
    throw new Error(`Failed to uninstall ${name}`, { cause: error })
  }
}

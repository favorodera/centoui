import type { ComponentRegistry, Registry } from '../types'
import { FETCH_HEADERS, REGISTRY_URL, REGISTRY_FILE_NAME, BASE_URL, THEME_URL } from '../constants'

let registryCache: Registry | null = null

/**
 * Fetches the complete component registry once and caches it in memory.
 *
 * @returns The complete registry including components and globals.
 * @throws If the network request fails or returns a non-OK status
 */
export async function fetchRegistry() {
  if (registryCache) return registryCache

  const requestUrl = `${REGISTRY_URL}/${REGISTRY_FILE_NAME}`

  const response = await fetch(requestUrl, { headers: FETCH_HEADERS })
  if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`)

  const registry = await response.json() as Registry
  registryCache = registry
  return registry
}

/**
 * Fetches a single component's registry entry by name.
 *
 * @param name - Name of the component to fetch
 * @returns Component registry entry
 * @throws If the component is not found in the registry
 */
export async function fetchComponent(name: string) {
  const registry = await fetchRegistry()

  const component = registry.components
    .find(component => component.name === name)

  if (!component) throw new Error(`Component "${name}" not found in registry.`)
  return component
}

/**
 * Recursively resolves a component and all its transitive dependencies.
 *
 * @param name - Root component name to resolve
 * @param registry - The pre-fetched registry index
 * @param seen - Internal set used to prevent infinite loops on circular deps
 * @returns Map of component name → registry entry for the full dependency tree
 */
export function resolveComponentTree(name: string, registry: Registry, seen = new Set<string>()) {
  const result = new Map<string, ComponentRegistry>()

  if (seen.has(name)) return result
  seen.add(name)

  const entry = registry.components
    .find(component => component.name === name)

  if (!entry) throw new Error(`Component "${name}" not found in registry.`)

  result.set(name, entry)

  for (const dependency of entry.componentDeps) {
    for (const [dependencyName, dependencyEntry] of resolveComponentTree(dependency, registry, seen)) {
      result.set(dependencyName, dependencyEntry)
    }
  }

  return result
}

/**
 * Fetches the raw source code of a component or utility file from the registry.
 *
 * @param path - Path as listed in the component registry (e.g. '/components/button/button.vue')
 * @returns The raw source code of the file
 */
export async function fetchComponentFile(path: string) {
  const requestUrl = `${BASE_URL}/${path}`

  const response = await fetch(requestUrl, { headers: FETCH_HEADERS })
  if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`)

  return response.text()
}


/**
 * Fetches the theme file from the registry.
 *
 * @returns The raw source code of the theme file
 */
export async function fetchThemeFile() {
  const response = await fetch(THEME_URL, { headers: FETCH_HEADERS })
  if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`)

  return response.text()
}

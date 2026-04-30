import type { ComponentRegistry, Registry } from '../types'
import {
  GITHUB_RAW_FETCH_HEADERS,
  REGISTRY_INDEX_URL,
  CORE_SRC_BASE_URL,
  THEME_CSS_URL,
} from '../constants'

/** In-process cache so the registry is only fetched once per CLI invocation. */
let cachedRegistry: Registry | null = null

/**
 * Fetches the complete component registry (`index.json`) from GitHub, caching
 * the result in memory for the lifetime of the process.
 *
 * Every other registry utility calls this internally, so the network round-trip
 * only happens once regardless of how many components are being installed.
 *
 * @returns The full registry object including globals and all component entries.
 * @throws If the network request fails or the server returns a non-2xx status.
 */
export async function fetchFullRegistry() {
  if (cachedRegistry) return cachedRegistry

  let response: Response
  try {
    response = await fetch(REGISTRY_INDEX_URL, { headers: GITHUB_RAW_FETCH_HEADERS })
  } catch (error) {
    throw new Error(
      `[fetchFullRegistry] Network request to registry failed: ${error}`,
    )
  }

  if (!response.ok) {
    throw new Error(
      `[fetchFullRegistry] Registry responded with ${response.status} ${response.statusText} (URL: ${REGISTRY_INDEX_URL})`,
    )
  }

  cachedRegistry = (await response.json()) as Registry
  return cachedRegistry
}

/**
 * Fetches the registry entry for a single component by name.
 *
 * Internally calls {@link fetchFullRegistry} so the registry is only
 * downloaded once even if multiple components are requested.
 *
 * @param componentName - The component name to look up (e.g. `"button"`).
 * @returns The matching {@link ComponentRegistry} entry.
 * @throws If the component name is not found in the registry.
 */
export async function fetchRegistryComponentEntry(componentName: string) {
  const registry = await fetchFullRegistry()

  const entry = registry
    .components
    .find(component => component.name === componentName)
    
  if (!entry) {
    throw new Error(
      `[fetchRegistryComponentEntry] Component "${componentName}" not found in registry.`,
    )
  }

  return entry
}

/**
 * Recursively resolves a component and every one of its transitive
 * `componentDeps` into a flat map of `componentName → registry entry`.
 *
 * The traversal is depth-first and guards against circular dependencies via
 * the `visited` set, so each component appears in the result exactly once.
 *
 * @param componentName - Root component name to start resolving from.
 * @param registry - Pre-fetched registry (pass the result of {@link fetchFullRegistry}).
 * @param visited - Internal visited set used to prevent infinite loops;
 *                  callers should omit this — it defaults to an empty set.
 * @returns A `Map<componentName, ComponentRegistry>` covering the full tree.
 * @throws If any component in the tree is not found in the registry.
 */
export function resolveComponentWithDependencies(
  componentName: string,
  registry: Registry,
  visited = new Set<string>(),
) {
  const result = new Map<string, ComponentRegistry>()

  if (visited.has(componentName)) return result
  visited.add(componentName)

  const entry = registry
    .components
    .find(component => component.name === componentName)

  if (!entry) {
    throw new Error(
      `[resolveComponentWithDependencies] Component "${componentName}" not found in registry.`,
    )
  }

  result.set(componentName, entry)

  for (const dep of entry.componentDeps) {
    for (const [depName, depEntry] of resolveComponentWithDependencies(dep, registry, visited)) {
      result.set(depName, depEntry)
    }
  }

  return result
}

/**
 * Fetches the raw source content of a file referenced in a component's
 * registry entry.
 *
 * Registry file paths (e.g. `"components/button/button.vue"`) are relative
 * to `packages/core/src/`, which is already the base of {@link CORE_SRC_BASE_URL}.
 * This function simply appends the path and downloads the content.
 *
 * @param registryFilePath - Path as it appears in the component's `files` array
 *                           (e.g. `"components/button/button.vue"`).
 * @returns Raw UTF-8 content of the file.
 * @throws If the network request fails or the server returns a non-2xx status.
 */
export async function fetchRegistryFileContent(registryFilePath: string) {
  const url = `${CORE_SRC_BASE_URL}/${registryFilePath}`

  let response: Response
  try {
    response = await fetch(url, { headers: GITHUB_RAW_FETCH_HEADERS })
  } catch (error) {
    throw new Error(
      `[fetchRegistryFileContent] Network request failed for "${registryFilePath}": ${error}`,
    )
  }

  if (!response.ok) {
    throw new Error(
      `[fetchRegistryFileContent] Server returned ${response.status} ${response.statusText} for "${url}"`,
    )
  }

  return response.text()
}

/**
 * Fetches the raw content of the CentoUI CSS theme file from GitHub.
 *
 * This is the file written to the user's project during `centoui init` and
 * contains all CSS custom properties and base styles for every component.
 *
 * @returns Raw UTF-8 content of the theme CSS file.
 * @throws If the network request fails or the server returns a non-2xx status.
 */
export async function fetchThemeCSSContent() {
  let response: Response
  try {
    response = await fetch(THEME_CSS_URL, { headers: GITHUB_RAW_FETCH_HEADERS })
  } catch (error) {
    throw new Error(
      `[fetchThemeCSSContent] Network request for theme CSS failed: ${error}`,
    )
  }

  if (!response.ok) {
    throw new Error(
      `[fetchThemeCSSContent] Server returned ${response.status} ${response.statusText} (URL: ${THEME_CSS_URL})`,
    )
  }

  return response.text()
}

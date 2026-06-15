import type { ComponentRegistry, Registry } from '../types'
import { sendNetworkRequest } from './network'

/** In-process cache so the registry is only fetched once per CLI invocation. */
let cachedRegistry: Registry | undefined

/**
 * Fetches the complete component registry (`index.json`) from GitHub
 * It caches the result in memory for the lifetime of the CLI process.
 * @returns The full registry object including globals and all component entries.
 */
export async function fetchRegistry() {
  if (cachedRegistry) return cachedRegistry

  const registry = await sendNetworkRequest<Registry>('/registry/index.json', 'json')
  cachedRegistry = registry

  return registry
}

/**
 * Fetches the registry entry for a single component by name.
 * @param name The component kebab-case name to look up (e.g. `"button"`).
 * @returns The matching entry.
 * @throws If the component name is not found in the registry.
 */
export async function fetchComponentRegistryEntry(name: string) {
  const registry = await fetchRegistry()

  const entry = registry
    .components
    .find(component => component.name === name)

  if (!entry) {
    throw new Error(`Component ${name} not found in registry.`)
  }

  return entry
}

/**
 * Recursively resolves a component and all of its transitive dependencies
 * into a flat map of component names to their registry entries.
 *
 * The `result` map serves as both the accumulator and a circular-dependency
 * guard, ensuring each component appears in the output exactly once.
 * @param name The root component name to start resolving from.
 * @param registry The component registry to search within.
 * @param result **Internal.** Accumulator and circular-dependency guard used during recursion;
 * Callers should always omit this parameter.
 * @returns A map of every resolved component name to its registry entry.
 * @throws If the root component or any transitive dependency is not found in the registry.
 */
export function resolveComponent(name: string, registry: Registry, result = new Map<string, ComponentRegistry>()) {
  if (result.has(name)) {
    return result
  }

  const entry = registry.components.find(component => component.name === name)

  if (!entry) {
    throw new Error(`Component ${name} not found in registry.`)
  }

  result.set(name, entry)

  for (const component of entry.componentDeps || []) {
    resolveComponent(component, registry, result)
  }

  return result
}

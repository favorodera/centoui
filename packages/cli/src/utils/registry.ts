import type { ComponentRegistryEntry, Registry } from '../types'
import { sendNetworkRequest } from './network'

/** In-process cache so the registry is only fetched once per CLI invocation. */
let cachedRegistry: Registry | undefined

/**
 * Fetches the component registry (`index.json`) from GitHub and caches it.
 * @returns The registry including npm dependencies and components.
 */
export async function fetchRegistry() {
  if (cachedRegistry) return cachedRegistry

  const registry = await sendNetworkRequest<Registry>('/registry/index.json', 'json')
  cachedRegistry = registry

  return registry
}

/**
 * Fetches a component entry by name.
 * @param name Component name.
 * @returns The component entry.
 * @throws If not found.
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
 * Recursively resolves a component and its dependencies into a map.
 * @param name Component name.
 * @param registry The component registry.
 * @param result Internal accumulator map.
 * @returns Map of resolved component names to their entries.
 * @throws If any component is not found.
 */
export function resolveComponent(name: string, registry: Registry, result = new Map<string, ComponentRegistryEntry>()) {
  if (result.has(name)) {
    return result
  }

  const entry = registry.components.find(component => component.name === name)

  if (!entry) {
    throw new Error(`Component ${name} not found in registry.`)
  }

  result.set(name, entry)

  for (const component of entry.componentDependencies || []) {
    resolveComponent(component, registry, result)
  }

  return result
}

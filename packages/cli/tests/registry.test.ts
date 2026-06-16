import { describe, expect, it } from 'vitest'
import type { Registry } from '../src/types'
import { resolveComponent } from '../src/utils/registry'

describe('resolveComponent', () => {
  const baseRegistry: Registry = {
    components: [
      { files: ['button.vue'], name: 'button' },
      { componentDependencies: ['button'], files: ['dialog.vue'], name: 'dialog' },
      { componentDependencies: ['button'], files: ['tooltip.vue'], name: 'tooltip' },
      { componentDependencies: ['dialog'], files: ['nested.vue'], name: 'nested' },
    ],
    npmDependencies: {},
  }

  it('returns just the component itself when it has no dependencies', () => {
    const result = resolveComponent('button', baseRegistry)

    expect([...result.keys()]).toStrictEqual(['button'])
  })

  it('includes direct component dependencies', () => {
    const result = resolveComponent('dialog', baseRegistry)

    expect(result.has('dialog')).toBe(true)
    expect(result.has('button')).toBe(true)
  })

  it('resolves transitive dependencies', () => {
    const result = resolveComponent('nested', baseRegistry)

    expect([...result.keys()]).toStrictEqual([
      'nested',
      'dialog',
      'button',
    ])
  })

  it('deduplicates shared dependencies', () => {
    const registry: Registry = {
      ...baseRegistry,
      components: [
        ...baseRegistry.components,
        { componentDependencies: [
          'dialog',
          'tooltip',
        ], files: ['combo.vue'], name: 'combo' },
      ],
    }

    const result = resolveComponent('combo', registry)
    const keys = [...result.keys()]

    expect(keys.filter(k => k === 'button')).toHaveLength(1)
  })

  it('does not infinitely loop on circular dependencies', () => {
    const circular: Registry = {
      components: [
        { componentDependencies: ['b'], files: ['a.vue'], name: 'a' },
        { componentDependencies: ['a'], files: ['b.vue'], name: 'b' },
      ],
      npmDependencies: {},
    }

    expect(() => resolveComponent('a', circular)).not.toThrow()
  })

  it('throws when the requested component is not in the registry', () => {
    expect(() => resolveComponent('nonexistent', baseRegistry)).toThrow('Component nonexistent not found in registry')
  })

  it('throws when a dependency is missing from the registry', () => {
    const broken = {
      components: [{ componentDependencies: ['missing-dep'], files: ['widget.vue'], name: 'widget' }],
      npmDependencies: {},
    }

    expect(() => resolveComponent('widget', broken)).toThrow('Component missing-dep not found in registry')
  })

  it('returns entries with the correct shape', () => {
    const result = resolveComponent('dialog', baseRegistry)
    const buttonEntry = result.get('button')

    expect(buttonEntry?.name).toBe('button')
    expect(buttonEntry?.files).toContain('button.vue')
  })
})

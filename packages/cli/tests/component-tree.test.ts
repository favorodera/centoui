import { describe, expect, it } from 'vitest'
import type { Registry } from '../src/types'
import { resolveComponentWithDependencies } from '../src/utils/registry-utils'

const baseRegistry: Registry = {
  globals: { packageDeps: {} },
  components: [
    {
      name: 'button',
      files: ['components/button/button.vue'],
      componentDeps: [],
      packageDeps: {},
    },
    {
      name: 'dialog',
      files: ['components/dialog/dialog.vue'],
      componentDeps: ['button'],
      packageDeps: { 'focus-trap': '^7.0.0' },
    },
    {
      name: 'tooltip',
      files: ['components/tooltip/tooltip.vue'],
      componentDeps: ['button'],
      packageDeps: {},
    },
    {
      name: 'nested',
      files: ['components/nested/nested.vue'],
      componentDeps: ['dialog'], // dialog > button (transitive)
      packageDeps: {},
    },
  ],
}

describe('resolveComponentWithDependencies', () => {
  it('returns just the component itself when it has no deps', () => {
    const result = resolveComponentWithDependencies('button', baseRegistry)

    expect([...result.keys()]).toEqual(['button'])
  })

  it('includes direct componentDeps in the result', () => {
    const result = resolveComponentWithDependencies('dialog', baseRegistry)

    expect(result.has('dialog')).toBe(true)
    expect(result.has('button')).toBe(true)
  })

  it('resolves transitive deps (dep of a dep)', () => {
    const result = resolveComponentWithDependencies('nested', baseRegistry)

    // nested → dialog → button
    expect(result.has('nested')).toBe(true)
    expect(result.has('dialog')).toBe(true)
    expect(result.has('button')).toBe(true)
  })

  it('deduplicates shared deps — a component only appears once', () => {
    // combo depends on dialog and tooltip, both of which depend on button
    const registry: Registry = {
      ...baseRegistry,
      components: [
        ...baseRegistry.components,
        {
          name: 'combo',
          files: ['components/combo/combo.vue'],
          componentDeps: ['dialog', 'tooltip'],
          packageDeps: {},
        },
      ],
    }

    const result = resolveComponentWithDependencies('combo', registry)

    const keys = [...result.keys()]
    expect(keys.filter(key => key === 'button')).toHaveLength(1)
  })

  it('does not infinitely loop on circular deps', () => {
    const circular: Registry = {
      globals: { packageDeps: {} },
      components: [
        { name: 'a', files: ['components/a/a.vue'], componentDeps: ['b'], packageDeps: {} },
        { name: 'b', files: ['components/b/b.vue'], componentDeps: ['a'], packageDeps: {} },
      ],
    }

    expect(() => resolveComponentWithDependencies('a', circular)).not.toThrow()
  })

  it('throws when the requested component is not in the registry', () => {
    expect(() =>
      resolveComponentWithDependencies('nonexistent', baseRegistry),
    ).toThrow('"nonexistent" not found in registry')
  })

  it('throws when a dep listed in componentDeps is not in the registry', () => {
    const broken: Registry = {
      globals: { packageDeps: {} },
      components: [
        {
          name: 'widget',
          files: ['components/widget/widget.vue'],
          componentDeps: ['missing-dep'],
          packageDeps: {},
        },
      ],
    }

    expect(() =>
      resolveComponentWithDependencies('widget', broken),
    ).toThrow('"missing-dep" not found in registry')
  })

  it('returns registry entries with the correct shape', () => {
    const result = resolveComponentWithDependencies('dialog', baseRegistry)

    const buttonEntry = result.get('button')!
    expect(buttonEntry.name).toBe('button')
    expect(buttonEntry.files).toContain('components/button/button.vue')
  })
})

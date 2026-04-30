import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { Registry } from '../src/types'

const baseRegistry: Registry = {
  globals: { packageDeps: {} },
  components: [
    {
      name: 'button',
      files: ['components/button/button.vue'],
      componentDeps: [],
      packageDeps: {},
    },
  ],
}

describe('fetchFullRegistry — caching', () => {
  beforeEach(() => {
    // Reset the module so the in-process cache is cleared before each test
    vi.resetModules()
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => baseRegistry,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('calls fetch exactly once even when invoked multiple times', async () => {
    const { fetchFullRegistry } = await import('../src/utils/registry-utils')

    await fetchFullRegistry()
    await fetchFullRegistry()
    await fetchFullRegistry()

    expect(global.fetch).toHaveBeenCalledOnce()
  })

  it('returns the same object on every call', async () => {
    const { fetchFullRegistry } = await import('../src/utils/registry-utils')

    const first = await fetchFullRegistry()
    const second = await fetchFullRegistry()

    expect(first).toBe(second)
  })

  it('throws with a descriptive message when fetch returns a non-ok status', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    })

    const { fetchFullRegistry } = await import('../src/utils/registry-utils')

    await expect(fetchFullRegistry()).rejects.toThrow('404')
  })

  it('throws with a descriptive message when the network call itself fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('ECONNREFUSED'))

    const { fetchFullRegistry } = await import('../src/utils/registry-utils')

    await expect(fetchFullRegistry()).rejects.toThrow('ECONNREFUSED')
  })
})

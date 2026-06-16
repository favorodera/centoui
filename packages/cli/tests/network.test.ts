import { describe, expect, it, vi } from 'vitest'
import { sendNetworkRequest } from '../src/utils/network'

describe('sendNetworkRequest', () => {
  it('returns text response by default', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      text: async () => 'hello world',
    }))

    const result = await sendNetworkRequest('/test.txt')

    expect(result).toBe('hello world')

    vi.unstubAllGlobals()
  })

  it('returns json response when requested', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: async () => ({ foo: 'bar' }),
      ok: true,
    }))

    const result = await sendNetworkRequest('/test.json', 'json')

    expect(result).toStrictEqual({ foo: 'bar' })

    vi.unstubAllGlobals()
  })

  it('throws on network failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('ECONNREFUSED')))

    await expect(sendNetworkRequest('/test.txt')).rejects.toThrow('Network request failed')

    vi.unstubAllGlobals()
  })

  it('throws on non-2xx status', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    }))

    await expect(sendNetworkRequest('/test.txt')).rejects.toThrow('Server responded with 404 Not Found')

    vi.unstubAllGlobals()
  })
})

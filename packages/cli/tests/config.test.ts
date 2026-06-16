import { describe, expect, it, vi } from 'vitest'
import { buildUserConfig } from '../src/utils/config'

describe('buildUserConfig', () => {
  it('builds a config file merging user choices with fetched defaults', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      text: async () => `
export default {
  icons: {
    close: 'lucide:x',
  },
  foo: 'bar',
} satisfies Pick<CentoUIConfig, 'icons'>
`,
    }))

    const result = await buildUserConfig({
      componentsDir: 'src/components/ui',
      themeFilePath: 'src/assets/css/centoui.css',
    })

    expect(result).toContain('import { defineConfig } from \'centoui\'')
    expect(result).toContain('export default defineConfig({')
    expect(result).toContain('componentsDir: \'src/components/ui\'')
    expect(result).toContain('themeFilePath: \'src/assets/css/centoui.css\'')
    expect(result).toContain('close: \'lucide:x\'')

    vi.unstubAllGlobals()
  })

  it('throws when the network request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network failed')))

    await expect(buildUserConfig({
      componentsDir: 'components',
      themeFilePath: 'theme.css',
    })).rejects.toThrow('Failed to build user config')

    vi.unstubAllGlobals()
  })

  it('throws when the server returns a non-ok status', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    }))

    await expect(buildUserConfig({
      componentsDir: 'components',
      themeFilePath: 'theme.css',
    })).rejects.toThrow('Failed to build user config')

    vi.unstubAllGlobals()
  })

  it('generates a valid config when fetched defaults are empty', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      text: async () => 'export default {}',
    }))

    const result = await buildUserConfig({
      componentsDir: 'components',
      themeFilePath: 'theme.css',
    })

    expect(result).toContain('export default defineConfig({')
    expect(result).toContain('componentsDir: \'components\'')
    expect(result).toContain('themeFilePath: \'theme.css\'')

    vi.unstubAllGlobals()
  })
})

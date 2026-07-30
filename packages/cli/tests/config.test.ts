import { describe, expect, it, vi } from 'vitest'
import { buildUserConfig } from '../src/utils/config'

describe('buildUserConfig', () => {
  it('builds a config file merging user choices with fetched defaults', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      text: async () => `
export default {
  foo: 'bar',
} 
`,
    }))

    const result = buildUserConfig({
      componentsDir: 'src/components/ui',
      themeFilePath: 'src/assets/css/centoui.css',
    })

    expect(result).toContain('import { defineConfig } from \'centoui\'')
    expect(result).toContain('export default defineConfig({')
    expect(result).toContain('componentsDir: \'src/components/ui\'')
    expect(result).toContain('themeFilePath: \'src/assets/css/centoui.css\'')

    vi.unstubAllGlobals()
  })
})

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as configUtils from '../src/utils/config-utils'

const MOCK_DEFAULT_CONFIG = `
export default {
  icons: {
    close: 'lucide:x',
  },
  foo: 'bar',
} satisfies Pick<CentoUIConfig, 'icons'>
`

describe('extractInnerConfigContent', () => {
  it('extracts only the inner object content', () => {
    const result = configUtils.extractInnerConfigContent(MOCK_DEFAULT_CONFIG)
    const parsed = Function(`return ({${result}})`)()

    expect(parsed).toEqual({
      icons: { close: 'lucide:x' },
      foo: 'bar',
    })
  })

  it('returns empty string when no valid object exists', () => {
    expect(configUtils.extractInnerConfigContent('hello world')).toBe('')
  })

  it('returns empty string for an empty object', () => {
    expect(configUtils.extractInnerConfigContent('export default {}')).toBe('')
  })
})

describe('buildUserDefaultConfigFileContent', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => MOCK_DEFAULT_CONFIG,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('includes the defineConfig import', async () => {
    const result = await configUtils.buildUserDefaultConfigFileContent('theme.css', 'components')
    expect(result).toContain("import { defineConfig } from 'centoui'")
  })

  it('wraps the config with defineConfig', async () => {
    const result = await configUtils.buildUserDefaultConfigFileContent('theme.css', 'components')
    expect(result).toContain('export default defineConfig({')
  })

  it('includes the provided componentsDir', async () => {
    const result = await configUtils.buildUserDefaultConfigFileContent('theme.css', 'src/components/ui')
    expect(result).toContain("componentsDir: 'src/components/ui'")
  })

  it('includes the provided themeFilePath', async () => {
    const result = await configUtils.buildUserDefaultConfigFileContent('src/assets/css/centoui.css', 'components')
    expect(result).toContain("themeFilePath: 'src/assets/css/centoui.css'")
  })

  it('includes defaults from the fetched config', async () => {
    const result = await configUtils.buildUserDefaultConfigFileContent('theme.css', 'components')
    expect(result).toContain("close: 'lucide:x'")
    expect(result).toContain("foo: 'bar'")
  })

  it('throws when the network call fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network failed'))

    await expect(
      configUtils.buildUserDefaultConfigFileContent('theme.css', 'components'),
    ).rejects.toThrow('Network failed')
  })

  it('throws when the server returns a non-ok status', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 404, statusText: 'Not Found' })

    await expect(
      configUtils.buildUserDefaultConfigFileContent('theme.css', 'components'),
    ).rejects.toThrow('404')
  })

  it('generates a valid config when defaults are empty', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => 'export default {}',
    })

    const result = await configUtils.buildUserDefaultConfigFileContent('theme.css', 'components')

    expect(result).toContain('export default defineConfig({')
    expect(result).toContain("componentsDir: 'components'")
    expect(result).toContain("themeFilePath: 'theme.css'")
  })
})

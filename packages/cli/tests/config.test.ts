import { describe, it, expect } from 'vitest'
import { buildDefaultConfigFileContent } from '../src/utils/config-utils'

describe('buildDefaultConfigFileContent', () => {
  it('includes the provided componentsDir in the output', () => {
    const result = buildDefaultConfigFileContent('src/assets/css/centoui.css', 'src/components/ui')

    expect(result).toContain('src/components/ui')
  })

  it('includes the provided themeFilePath in the output', () => {
    const result = buildDefaultConfigFileContent('src/assets/css/centoui.css', 'src/components/ui')

    expect(result).toContain('src/assets/css/centoui.css')
  })

  it('includes the current VERSION from constants', async () => {
    const { VERSION } = await import('../src/constants')
    const result = buildDefaultConfigFileContent('theme.css', 'components')

    expect(result).toContain(VERSION)
  })

  it('is valid TypeScript — exports a default and calls defineConfig', () => {
    const result = buildDefaultConfigFileContent('theme.css', 'components')

    expect(result).toContain('export default defineConfig(')
    expect(result).toContain("import { defineConfig } from 'centoui'")
  })
})

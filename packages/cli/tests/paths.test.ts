import { describe, expect, it } from 'vitest'
import type { CentoUIConfig } from '../src/types'
import { mapRegistryPathToProjectDest } from '../src/utils/file-system-utils'
import { validateNonEmptyPath } from '../src/utils/package-utils'

const mockConfig: CentoUIConfig = {
  version: '0.0.1',
  componentsDir: 'src/components/centoui',
  themeFilePath: 'src/assets/css/centoui.css',
  icons: {},
}

describe('mapRegistryPathToProjectDest', () => {
  it('strips the leading components/ prefix', () => {
    const result = mapRegistryPathToProjectDest(
      'components/button/button.vue',
      mockConfig,
      '/project',
    )

    expect(result).not.toContain('components/components/')
  })

  it('joins the remainder with cwd and componentsDir', () => {
    const result = mapRegistryPathToProjectDest(
      'components/button/button.vue',
      mockConfig,
      '/project',
    )

    expect(result).toBe('/project/src/components/centoui/button/button.vue')
  })

  it('preserves nested paths inside the component folder', () => {
    const result = mapRegistryPathToProjectDest(
      'components/button/utils/helpers.ts',
      mockConfig,
      '/project',
    )

    expect(result).toBe('/project/src/components/centoui/button/utils/helpers.ts')
  })

  it('works with different componentsDir values', () => {
    const config = { ...mockConfig, componentsDir: 'lib/ui' }

    const result = mapRegistryPathToProjectDest(
      'components/badge/badge.vue',
      config,
      '/project',
    )

    expect(result).toBe('/project/lib/ui/badge/badge.vue')
  })
})

describe('validateNonEmptyPath', () => {
  it('returns undefined for a valid path string', () => {
    expect(validateNonEmptyPath('src/components')).toBeUndefined()
  })

  it('returns an error string for an empty string', () => {
    expect(validateNonEmptyPath('')).toBeTypeOf('string')
  })

  it('returns an error string for a whitespace-only string', () => {
    expect(validateNonEmptyPath('   ')).toBeTypeOf('string')
  })

  it('returns an error string for a non-string value', () => {
    expect(validateNonEmptyPath(42)).toBeTypeOf('string')
    expect(validateNonEmptyPath(null)).toBeTypeOf('string')
  })
})

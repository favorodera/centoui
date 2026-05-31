import { describe, expect, it } from 'vitest'
import type { CentoUIConfig } from '../src/types'
import { mapComponentsRegistryPathToProjectDest } from '../src/utils/file-system-utils'
import { validateNonEmptyPath } from '../src/utils/package-utils'

const mockConfig: CentoUIConfig = {
  componentsDir: 'src/components/centoui',
  themeFilePath: 'src/assets/css/centoui.css',
  utilsFilePath: 'src/utils/centoui-utils.ts',
  icons: {},
}

describe('mapComponentsRegistryPathToProjectDest', () => {
  it('strips the leading components/ prefix', () => {
    const result = mapComponentsRegistryPathToProjectDest(
      'components/button/button.vue',
      mockConfig,
      '/project',
    )

    expect(result).not.toContain('components/components/')
  })

  it('joins the remainder with cwd and componentsDir', () => {
    const result = mapComponentsRegistryPathToProjectDest(
      'components/button/button.vue',
      mockConfig,
      '/project',
    )

    expect(result).toBe('/project/src/components/centoui/button/button.vue')
  })

  it('preserves nested paths inside the component folder', () => {
    const result = mapComponentsRegistryPathToProjectDest(
      'components/button/utils/helpers.ts',
      mockConfig,
      '/project',
    )

    expect(result).toBe('/project/src/components/centoui/button/utils/helpers.ts')
  })

  it('works with different componentsDir values', () => {
    const config = { ...mockConfig, componentsDir: 'lib/ui' }

    const result = mapComponentsRegistryPathToProjectDest(
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

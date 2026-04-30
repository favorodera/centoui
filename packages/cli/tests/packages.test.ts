import fsExtra from 'fs-extra'
import { addDependency, removeDependency } from 'nypm'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { installMissingPackages, removeOrphanedPackages } from '../src/utils/package-utils'

vi.mock('fs-extra', () => ({
  default: {
    readJson: vi.fn(),
  },
}))

vi.mock('nypm', () => ({
  addDependency: vi.fn(),
  removeDependency: vi.fn(),
}))

describe('installMissingPackages', () => {
  beforeEach(() => {
    vi.mocked(fsExtra.readJson).mockResolvedValue({
      dependencies: {},
      devDependencies: {},
    })
    // `as never` — nypm types the return as OperationResult, not void;
    // we don't care about the return value in these tests
    vi.mocked(addDependency).mockResolvedValue(undefined as never)
  })

  it('returns early without calling addDependency when packages is empty', async () => {
    await installMissingPackages({}, '/project')

    expect(addDependency).not.toHaveBeenCalled()
  })

  it('installs packages that are not in package.json', async () => {
    await installMissingPackages({ tailwindcss: '^4.0.0' }, '/project')

    expect(addDependency).toHaveBeenCalledWith('tailwindcss@^4.0.0', expect.any(Object))
  })

  it('skips packages that are already installed at the same version', async () => {
    vi.mocked(fsExtra.readJson).mockResolvedValue({
      dependencies: { tailwindcss: '^4.0.0' },
      devDependencies: {},
    })

    await installMissingPackages({ tailwindcss: '^4.0.0' }, '/project')

    expect(addDependency).not.toHaveBeenCalled()
  })

  it('installs a package that exists but at a different version', async () => {
    vi.mocked(fsExtra.readJson).mockResolvedValue({
      dependencies: { tailwindcss: '^3.0.0' },
      devDependencies: {},
    })

    await installMissingPackages({ tailwindcss: '^4.0.0' }, '/project')

    expect(addDependency).toHaveBeenCalledWith('tailwindcss@^4.0.0', expect.any(Object))
  })

  it('checks devDependencies as well as dependencies', async () => {
    vi.mocked(fsExtra.readJson).mockResolvedValue({
      dependencies: {},
      devDependencies: { tailwindcss: '^4.0.0' },
    })

    await installMissingPackages({ tailwindcss: '^4.0.0' }, '/project')

    expect(addDependency).not.toHaveBeenCalled()
  })

  it('calls onProgress for each package being installed', async () => {
    const onProgress = vi.fn()

    await installMissingPackages(
      { 'pkg-a': '^1.0.0', 'pkg-b': '^2.0.0' },
      '/project',
      onProgress,
    )

    expect(onProgress).toHaveBeenCalledTimes(2)
    expect(onProgress).toHaveBeenCalledWith(expect.stringContaining('[1/2]'))
    expect(onProgress).toHaveBeenCalledWith(expect.stringContaining('[2/2]'))
  })

  it('returns a human-readable summary of what was installed', async () => {
    const result = await installMissingPackages(
      { 'pkg-a': '^1.0.0', 'pkg-b': '^2.0.0' },
      '/project',
    )

    expect(result).toContain('2')
  })
})

describe('removeOrphanedPackages', () => {
  beforeEach(() => {
    vi.mocked(removeDependency).mockResolvedValue(undefined as never)
  })

  it('returns early without calling removeDependency when packages is empty', async () => {
    await removeOrphanedPackages({}, {}, '/project')

    expect(removeDependency).not.toHaveBeenCalled()
  })

  it('removes packages that are not in stillNeeded', async () => {
    await removeOrphanedPackages({ 'focus-trap': '^7.0.0' }, {}, '/project')

    expect(removeDependency).toHaveBeenCalledWith('focus-trap', expect.any(Object))
  })

  it('skips packages that still appear in stillNeeded', async () => {
    await removeOrphanedPackages(
      { 'focus-trap': '^7.0.0' },
      { 'focus-trap': '^7.0.0' },
      '/project',
    )

    expect(removeDependency).not.toHaveBeenCalled()
  })

  it('removes only the truly orphaned subset when there is a mix', async () => {
    await removeOrphanedPackages(
      { 'focus-trap': '^7.0.0', 'shared-pkg': '^1.0.0' },
      { 'shared-pkg': '^1.0.0' },
      '/project',
    )

    expect(removeDependency).toHaveBeenCalledOnce()
    expect(removeDependency).toHaveBeenCalledWith('focus-trap', expect.any(Object))
  })
})

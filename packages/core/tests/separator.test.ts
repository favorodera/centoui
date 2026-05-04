import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { Separator } from '../src/components/separator'

describe('accessibility', () => {
  test('only separator', async () => {
    const wrapper = mount(Separator)
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('with content', async () => {
    const wrapper = mount(Separator, {
      slots: { default: 'Separator' },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

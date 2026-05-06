import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { Kbd } from '../src/components/kbd'

describe('accessibility', () => {
  test('basic kbd', async () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Ctrl' },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

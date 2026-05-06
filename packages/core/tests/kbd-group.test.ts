import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { Kbd } from '../src/components/kbd'
import { KbdGroup } from '../src/components/kbd-group'
import { h } from 'vue'

describe('accessibility', () => {
  test('basic kbd group', async () => {
    const wrapper = mount(KbdGroup, {
      slots: {
        default: [
          h(Kbd, {}, { default: () => 'Ctrl' }),
          h(Kbd, {}, { default: () => 'Shift' }),
          h(Kbd, {}, { default: () => 'Alt' }),
        ],
      },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

import { Icon } from '@iconify/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { h } from 'vue'
import { Button } from '../src/components/button'

describe('accessibility', () => {
  test('text only button', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Button' },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('icon only button', async () => {
    const wrapper = mount(Button, {
      attrs: { 'aria-label': 'Add User' },
      slots: { default: h(Icon, { icon: 'lucide:user' }) },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('text and icon button', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: [
          h(Icon, { icon: 'lucide:user' }),
          'Add user',
        ],
      },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

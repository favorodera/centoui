import { Icon } from '@iconify/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { h } from 'vue'
import { Badge } from '../src/components/badge'

describe('accessibility', () => {
  test('text only Badge', async () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('icon only Badge', async () => {
    const wrapper = mount(Badge, {
      slots: { default: h(Icon, { icon: 'lucide:plus' }) },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('text and icon Badge', async () => {
    const wrapper = mount(Badge, {
      slots: {
        default: [
          h(Icon, { icon: 'lucide:plus' }),
          'Badge',
        ],
      },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

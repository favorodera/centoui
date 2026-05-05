import { Icon } from '@iconify/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { h } from 'vue'
import { Button } from '../src/components/button'
import { ButtonGroup, ButtonGroupSeparator } from '../src/components/button-group'

describe('accessibility', () => {
  test('single', async () => {
    const wrapper = mount(ButtonGroup, {
      props: { orientation: 'vertical' },
      slots: {
        default: [
          h(Button, {}, { default: () => 'Button 1' }),
          h(ButtonGroupSeparator),
          h(Button, {}, { default: () => 'Button 2' }),
        ],
      },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('nested', async () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: [
          h(
            ButtonGroup,
            {},
            {
              default: () => [
                h(Button, { }, { default: () => '1' }),
                h(ButtonGroupSeparator),
                h(Button, { }, { default: () => '2' }),
              ],
            },
          ),
          h(
            ButtonGroup,
            {},
            {
              default: () => [
                h(Button, { 'aria-label': 'Previous' }, { default: () => h(Icon, { icon: 'lucide:chevron-left' }) }),
                h(ButtonGroupSeparator),
                h(Button, { 'aria-label': 'Next' }, { default: () => h(Icon, { icon: 'lucide:chevron-right' }) }),
              ],
            },
          ),
        ],
      },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

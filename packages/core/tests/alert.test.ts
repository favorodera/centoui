import { Icon } from '@iconify/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { h } from 'vue'
import { AlertActions, AlertContent, AlertDescription, AlertMedia, AlertRoot, AlertTitle } from '../src/components/alert'
import { Button } from '../src/components/button'

describe('accessibility', () => {
  test('basic usage', async () => {
    const wrapper = mount(AlertRoot, {
      slots: {
        default: [
          h(AlertMedia, {}, { default: () => h(Icon, { icon: 'lucide:bell' }) }),
          h(
            AlertContent,
            {},
            {
              default: () => [
                h(AlertTitle, {}, { default: () => 'Alert Title' }),
                h(AlertDescription, {}, { default: () => 'Alert description' }),
              ],
            }),
          
          h(AlertActions, {}, { default: () => h(Button, {}, { default: () => 'Learn more' }) }),
        ],
      },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})


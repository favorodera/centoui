import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { TooltipRoot, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow, TooltipPortal } from '../src/components/tooltip'
import { Button } from '../src/components/button'
import { h } from 'vue'

describe('accessibility', () => {
  test('basic usage', async () => {
    const wrapper = mount(TooltipProvider, {
      slots: {
        default: h(TooltipRoot, {}, {
          default: () => [
            h(
              TooltipTrigger,
              { asChild: true },
              {
                default: () => h(Button, {}, { default: () => 'Hover' }),
              },
            ),

            h(
              TooltipPortal,
              {},
              {
                default: () => h(TooltipContent, {}, {
                  default: () => [
                    h('p', {}, 'Add to library'),
                    h(TooltipArrow),
                  ],
                }),
              },
            ),

          ],
        }),
      },
    })

    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

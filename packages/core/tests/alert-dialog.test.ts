import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { h } from 'vue'
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '../src/components/alert-dialog'
import { Button } from '../src/components/button'

describe('accessibility', async () => {
  test('basic usage', async () => {
    const wrapper = mount(AlertDialogRoot, {
      props: { defaultOpen: true },
      slots: {
        default: [
          h(AlertDialogTrigger, { asChild: true }, {
            default: () => h(Button, { }, { default: () => 'Open Alert Dialog' }),
          }),

          h(AlertDialogPortal, {}, {
            default: () => [
              h(AlertDialogOverlay),

              h(AlertDialogContent, {}, {
                default: () => [
                  h(AlertDialogHeader, {}, {
                    default: () => [
                      h(AlertDialogTitle, {}, { default: () => 'Are you absolutely sure?' }),

                      h(AlertDialogDescription, {}, {
                        default: () => 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
                      }),
                    ],
                  }),

                  h(AlertDialogFooter, {}, {
                    default: () => [
                      h(AlertDialogCancel, {}, { default: () => 'Cancel' }),
                      h(AlertDialogAction, {}, { default: () => 'Continue' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    })

    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

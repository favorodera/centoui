import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from '../src/components/accordion'
import { h } from 'vue'

const items = [
  {
    title: 'Item 1',
    value: 'item-1',
    content: 'Content 1',
  },
  {
    title: 'Item 2',
    value: 'item-2',
    content: 'Content 2',
  },
]

const defaultSlot = items.map(item => h(
  AccordionItem,
  { value: item.value },
  {
    default: () => [
      h(AccordionHeader, {}, {
        default: () => h(AccordionTrigger, {}, { default: () => item.title }),
      }),
              
      h(AccordionContent, {}, { default: () => item.content }),
    ],
  },
),
)

describe('accessibility', () => {
  test('basic usage', async () => {
    const wrapper = mount(AccordionRoot, {
      props: { defaultValue: 'item-1' },
      slots: { default: defaultSlot },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  test('disabled state', async () => {
    const wrapper = mount(AccordionRoot, {
      props: { defaultValue: 'item-1', disabled: true },
      slots: { default: defaultSlot },
    })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

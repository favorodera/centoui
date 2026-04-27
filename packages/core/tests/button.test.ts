import { Icon } from '@iconify/vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { h } from 'vue'
import { testComponentVariations, variantKeys } from './utils/component-utils'
import { Button, buttonVariants } from '../src/components/button'

describe('Button', () => {
  const variants = variantKeys(buttonVariants.variants.variant)
  
  describe('rendering', () => {
    it('renders as <a> when as="a"', () => {
      const wrapper = mount(Button, { props: { as: 'a', href: '#' }, slots: { default: 'Link' } })
      expect(wrapper.element.tagName.toLowerCase()).toBe('a')
    })

    it('renders icon in default slot', () => {
      const wrapper = mount(Button, { slots: { default: h(Icon, { icon: 'lucide:user' }) } })
      expect(wrapper.find('svg').exists()).toBe(true)
    })
  })

  describe('snapshots', () => {
    testComponentVariations(Button,
      variants.map(variant => ({
        name: variant,
        mountOptions: { props: { variant }, slots: { default: 'Button' } },
      })),
    )
  })

  it('passes accessibility test', async () => {
    const wrapper = mount(Button, { slots: { default: 'Button' } })
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })
})

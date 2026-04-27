import { mount, VueWrapper, type ComponentMountingOptions } from '@vue/test-utils'
import { type Component } from 'vue'
import { it, expect } from 'vitest'

type ComponentVariantEntry<TComponent extends Component> = {
  /** Test name of the variant */
  name: string
  /** Mount options for the variant */
  mountOptions?: ComponentMountingOptions<TComponent>
  /** Optional assertions to run on the mounted wrapper */
  assert?: (wrapper: VueWrapper<TComponent>) => void
}

/**
 * Test component variations
 *
 * @template TComponent - Component type to test
 * @param component - Component to test
 * @param variants - Variants to test
 */
export function testComponentVariations<TComponent extends Component>(
  component: TComponent,
  variants: ComponentVariantEntry<TComponent>[],
) {
  it.each(variants)('$name', (variant) => {
    const wrapper = mount(component, variant.mountOptions)

    expect(wrapper.exists()).toBe(true)
    variant.assert?.(wrapper)

    expect(wrapper.element).toMatchSnapshot()
  })
}

/**
 * Get variant keys from a component variant entry
 *
 * @template TVariants - Object containing variant test configurations
 * @param entry - Component variant entry
 * @returns Array of variant keys
 */
export function variantKeys<TVariants extends object>(entry: TVariants) {
  return Object.keys(entry) as Array<keyof TVariants>
}

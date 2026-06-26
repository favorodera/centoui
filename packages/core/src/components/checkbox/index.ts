import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const checkboxVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    indicator: '',
    root: '',
  },
  variants: {
    size: {
      lg: {},
      md: {},
      sm: {},
    },
  },
})

// COMPONENTS
export { default as Checkbox } from './checkbox.vue'

// VARIANTS
export type CheckboxVariants = VariantProps<typeof checkboxVariants>

// PROPS
export type CheckboxProps = CheckboxRootProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: CheckboxVariants['size']
}

// EMITS
export type CheckboxEmits = CheckboxRootEmits

// SLOTS
export interface CheckboxSlots<TValue = boolean> {
  default?: (props: {
    /** Current value */
    modelValue: 'indeterminate' | TValue

    /** Current state */
    state: 'indeterminate' | false | true
  }) => any
}

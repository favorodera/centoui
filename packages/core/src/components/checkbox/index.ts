import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const checkboxVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    indicator: `grid place-content-center text-current`,
    root: `
      peer relative inline-flex justify-center shrink-0 items-center border
      outline-none border-input text-primary-foreground bg-primary

      focus-visible:ring-2 focus-visible:ring-ring

      aria-invalid:ring-2 aria-invalid:ring-error

      disabled:pointer-events-none disabled:opacity-65

      data-[state=unchecked]:bg-muted
      data-[state=unchecked]:text-foreground
    `,
  },
  variants: {
    size: {
      lg: {
        indicator: `*:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4`,
        root: 'inline-5.5 block-5.5 rounded-md',
      },
      md: {
        indicator: `*:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5`,
        root: 'inline-5 block-5 rounded-md',
      },
      sm: {
        indicator: `*:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3`,
        root: 'inline-4 block-4 rounded-sm',
      },
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

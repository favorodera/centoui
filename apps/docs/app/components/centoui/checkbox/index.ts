import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const checkboxVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    indicator: `grid place-items-center text-current group/checkbox-indicator`,
    root: `
      peer relative inline-grid place-items-center shrink-0 border outline-none
      border-input group/checkbox-root bg-clip-padding

      focus-visible:ring-2 focus-visible:ring-ring

      aria-invalid:ring-2 aria-invalid:ring-error

      disabled:cursor-not-allowed disabled:opacity-70

      [[data-state=checked],[data-state=indeterminate]]:bg-primary
      [[data-state=checked],[data-state=indeterminate]]:text-primary-foreground

      data-[state=unchecked]:bg-muted data-[state=unchecked]:text-foreground
    `,
  },
  variants: {
    size: {
      lg: {
        indicator: `*:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4`,
        root: 'inline-6 block-6 rounded-md',
      },
      md: {
        indicator: `*:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5`,
        root: 'inline-5 block-5 rounded-md',
      },
      sm: {
        indicator: `*:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3`,
        root: 'inline-4 block-4 rounded-md',
      },
    },
  },
})
export type CheckboxVariants = VariantProps<typeof checkboxVariants>

// Components
export { default as Checkbox } from './checkbox.vue'

// Props
export type CheckboxProps = CheckboxRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: CheckboxVariants['size']
}

// Emits
export type CheckboxEmits = CheckboxRootEmits

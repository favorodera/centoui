import type { NumberFieldRootEmits, NumberFieldRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const numberInputVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    decrement: 'group/number-input-decrement',
    increment: 'group/number-input-increment',
    input: `
      outline-none block-full flex-1 text-center group/number-input-input

      placeholder:text-muted-foreground

      data-disabled:cursor-not-allowed
    `,
    root: `
      inline-full min-inline-0 border flex items-center justify-between
      border-input bg-transparent outline-none group/number-input-root
      bg-clip-padding

      data-disabled:cursor-not-allowed data-disabled:opacity-70

      aria-invalid:ring-2 aria-invalid:ring-error

      has-[[data-slot=number-input-input]:focus-visible]:ring-2
      has-[[data-slot=number-input-input]:focus-visible]:ring-ring
    `,
  },
  variants: {
    size: {
      lg: {
        decrement: '-ms-2',
        increment: '-me-2',
        input: 'text-sm block-9',
        root: 'block-9 rounded-lg px-3 text-sm gap-2',
      },
      md: {
        decrement: '-ms-1.5',
        increment: '-me-1.5',
        input: 'text-sm block-8',
        root: 'block-8 rounded-lg px-2.5 text-sm gap-1.5',
      },
      sm: {
        decrement: '-ms-1',
        increment: '-me-1',
        input: 'text-sm block-7',
        root: 'block-7 rounded-lg px-2 text-sm gap-1',
      },
    },
  },
})
export type NumberInputVariants = VariantProps<typeof numberInputVariants>

// Components
export { default as NumberInput } from './number-input.vue'

// Props
export type NumberInputProps = NumberFieldRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * The placeholder of the input.
   * @default ''
   */
  placeholder?: string

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: NumberInputVariants['size']
}

// Emits
export type NumberInputEmits = NumberFieldRootEmits

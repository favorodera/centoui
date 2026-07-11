import type { NumberFieldRootEmits, NumberFieldRootProps } from 'reka-ui'
import {
  tv,
  type VariantProps,
} from 'tailwind-variants'

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
    `,
    root: `
      inline-full min-inline-0 border flex items-center justify-between
      border-input bg-transparent outline-none group/number-input-root

      data-disabled:pointer-events-none data-disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error

      has-[[data-slot=number-input-input]:focus-visible]:ring-2
      has-[[data-slot=number-input-input]:focus-visible]:ring-ring

      has-[[data-slot=number-input-input][data-disabled]]:pointer-events-none
      has-[[data-slot=number-input-input][data-disabled]]:opacity-65
    `,
  },
  variants: {
    size: {
      lg: {
        decrement: '-ms-1.5',
        increment: '-me-1.5',
        input: 'text-sm block-9',
        root: 'block-9 rounded-lg px-3 text-sm gap-1.5',
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
        input: 'text-xs block-7',
        root: 'block-7 rounded-md px-2 text-xs gap-1',
      },
    },
  },
})

// COMPONENTS
export { default as NumberInput } from './number-input.vue'

// VARIANTS
export type NumberInputVariants = VariantProps<typeof numberInputVariants>

// PROPS
export type NumberInputProps = NumberFieldRootProps & {
  class?: any

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

// EMITS
export type NumberInputEmits = NumberFieldRootEmits

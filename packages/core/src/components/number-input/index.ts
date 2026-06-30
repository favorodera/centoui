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
    decrement: `
      cursor-default inline-flex items-center justify-center block-full

      data-disabled:pointer-events-none data-disabled:opacity-65

      active:translate-y-px
    `,
    increment: `
      cursor-default inline-flex items-center justify-center block-full

      active:translate-y-px

      data-disabled:pointer-events-none data-disabled:opacity-65
    `,
    input: `
      outline-none block-full flex-1 text-center

      placeholder:text-muted-foreground
    `,
    root: `
      inline-full min-inline-0 border flex items-center justify-between
      border-input bg-transparent outline-none

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
        decrement: `
          inline-9

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
        increment: `
          inline-9

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
        input: 'text-sm',
        root: 'block-9 rounded-lg px-3.5 text-sm gap-1.5',
      },
      md: {
        decrement: `
          inline-8

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
        increment: `
          inline-8

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
        input: 'text-sm block-8',
        root: 'block-8 rounded-lg px-3 text-sm gap-1.5',
      },
      sm: {
        decrement: `
          inline-7

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
        increment: `
          inline-7

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
        input: 'text-xs',
        root: 'block-7 rounded-md px-2.5 text-xs gap-1',
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

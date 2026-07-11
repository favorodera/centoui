import { tv, type VariantProps } from 'tailwind-variants'

export const inputVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      inline-full min-inline-0 border border-input bg-transparent outline-none
      peer group/input

      selection:bg-primary selection:text-primary-foreground

      placeholder:text-muted-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error
    `,
  },
  variants: {
    size: {
      lg: {
        root: 'block-9 rounded-lg px-3 text-sm',
      },
      md: {
        root: 'block-8 rounded-lg px-2.5 text-sm',
      },
      sm: {
        root: 'block-7 rounded-md px-2 text-xs',
      },
    },
  },
})

// COMPONENT
export { default as Input } from './input.vue'

// VARIANTS
export type InputVariants = VariantProps<typeof inputVariants>

// PROPS
export interface InputProps {
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: InputVariants['size']

  class?: any
}

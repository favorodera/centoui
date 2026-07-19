import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const inputVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      inline-full min-inline-0 border border-input bg-transparent outline-none
      peer group/input bg-clip-padding

      placeholder:text-muted-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:cursor-not-allowed disabled:opacity-70

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
        root: 'block-7 rounded-lg px-2 text-xs',
      },
    },
  },
})
export type InputVariants = VariantProps<typeof inputVariants>

// Components
export { default as Input } from './input.vue'

// Props
export interface InputProps {
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: InputVariants['size']

  /** Custom style class */
  class?: HTMLAttributes['class']
}

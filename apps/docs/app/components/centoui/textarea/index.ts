import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const textareaVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      field-sizing-content min-block-20 scrollbar-thin overflow-y-auto
      bg-transparent outline-none resize-none min-inline-0 group/textarea
      inline-full border border-input bg-clip-padding

      placeholder:text-muted-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:cursor-not-allowed disabled:opacity-70

      aria-invalid:ring-2 aria-invalid:ring-error
    `,
  },
  variants: {
    size: {
      lg: {
        root: 'p-3 text-sm rounded-lg',
      },
      md: {
        root: 'p-2.5 text-sm rounded-lg',
      },
      sm: {
        root: 'p-2 text-sm rounded-lg',
      },
    },
  },
})
export type TextareaVariants = VariantProps<typeof textareaVariants>

// Components
export { default as Textarea } from './textarea.vue'

// Props
export interface TextareaProps {
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: TextareaVariants['size']

  /** Custom style class */
  class?: HTMLAttributes['class']
}

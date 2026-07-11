import { tv, type VariantProps } from 'tailwind-variants'

export const textareaVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      field-sizing-content min-block-20 inline-full scrollbar-thin
      overflow-y-auto border border-input bg-transparent outline-none
      resize-none transition-colors min-inline-0 group/textarea

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
        root: 'px-3.5 py-2 text-sm rounded-lg',
      },
      md: {
        root: 'px-3 py-1.5 text-sm rounded-lg',
      },
      sm: {
        root: 'px-2.5 py-1 text-xs rounded-md',
      },
    },
  },
})

// COMPONENT
export { default as Textarea } from './textarea.vue'

// VARIANTS
export type TextareaVariants = VariantProps<typeof textareaVariants>

// PROPS
export interface TextareaProps {
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: TextareaVariants['size']

  class?: any
}

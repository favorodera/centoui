import { tv, type VariantProps } from 'tailwind-variants'

export const textareaVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      field-sizing-content min-block-20 inline-full scrollbar-thin
      overflow-y-auto border border-input bg-transparent outline-none
      scrollbar-thumb-foreground/20 scrollbar-track-transparent
      scrollbar-gutter-stable resize-none transition-colors duration-150
      ease-in-out

      hover:scrollbar-thumb-foreground/30

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
        root: 'px-3.5 py-3 text-sm rounded-md',
      },
      md: {
        root: 'px-3 py-2.5 text-sm rounded-md',
      },
      sm: {
        root: 'px-2.5 py-2 text-xs rounded-sm',
      },
    },
  },
})

// COMPONENT
export { default as Textarea } from './textarea.vue'

// VARIANTS
export type TextareaVariants = VariantProps<typeof textareaVariants>

// PROPS
// Note: 'autocomplete' is defined with simpler types to avoid TS2590 union complexity issues
export interface TextareaProps {
  /**
   * The value of the textarea when it is initially rendered.
   *
   * Use when you do not need to control its value.
   */
  defaultValue?: number | string

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: TextareaVariants['size']

  /**
   * The controlled value of the textarea.
   *
   * Can be binded as v-model:value
   */
  value?: number | string

  /** Controls browser autocomplete suggestions. */
  autocomplete?: 'off' | 'on' | (string & {})
  class?: any
}

// EMITS

/**
 * Event handler for when the value of the textarea changes.
 * @param payload The payload of the event.
 */
export type TextareaEmits = (event: 'update:value', payload: number | string) => void

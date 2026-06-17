import { tv } from 'tailwind-variants'

export const textareaVariants = tv({
  slots: {
    root: `
      field-sizing-content min-block-16 inline-full resize-none scrollbar-thin
      scrollbar-thumb-accent scrollbar-track-transparent scrollbar-gutter-auto
      overflow-y-auto rounded-md border border-input bg-transparent px-3 py-1
      text-sm transition-all outline-none

      selection:bg-primary selection:text-primary-foreground

      placeholder:text-muted-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:bg-input/60 disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error
    `,
  },
})

// COMPONENT
export { default as Textarea } from './textarea.vue'

// PROPS
// Note: 'autocomplete' is defined with simpler types to avoid TS2590 union complexity issues
export interface TextareaProps {
  /**
   * The value of the textarea when it is initially rendered.\
   * Use when you do not need to control its value.
   */
  defaultValue?: number | string

  /**
   * The controlled value of the textarea.\
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

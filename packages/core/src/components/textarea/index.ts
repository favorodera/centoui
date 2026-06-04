import { tv } from 'tailwind-variants'
import type { TextareaHTMLAttributes } from 'vue'

export const textareaVariants = tv({
  slots: {
    root: `
      field-sizing-content min-h-16 w-full resize-none overflow-y-auto border-input bg-transparent transition-all
      outline-none scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent scrollbar-gutter-auto border

      selection:bg-primary selection:text-primary-foreground

      placeholder:text-muted-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:bg-input/60 disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error rounded-md px-3 py-1 text-sm
    `,
  },
})


// COMPONENT
export { default as Textarea } from './textarea.vue'


// PROPS
// Note: 'autocomplete' is defined with simpler types to avoid TS2590 union complexity issues
export type TextareaProps = {
  /**
     * The value of the textarea when it is initially rendered.\
     * Use when you do not need to control its value.
     */
  defaultValue?: string | number
  /**
     * The controlled value of the textarea.\
     * Can be binded as v-model:value
     */
  value?: string | number
  /** Controls browser autocomplete suggestions. */
  autocomplete?: 'on' | 'off' | (string & {})
  class?: any
} & /** @vue-ignore */ TextareaHTMLAttributes


// EMITS
export type TextareaEmits = {
  /**
   * Event handler for when the value of the textarea changes.
   * @param payload - The payload of the event.
   */
  (event: 'update:value', payload: string | number): void
}

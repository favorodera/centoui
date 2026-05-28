import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import type { TextareaHTMLAttributes } from 'vue'

export const textareaVariants = tv({
  slots: {
    root: `
      field-sizing-content min-h-16 w-full resize-none scrollbar-thin
      scrollbar-thumb-input border border-input bg-transparent transition-all
      duration-300 outline-none

      selection:bg-primary selection:text-primary-foreground

      placeholder:text-muted-foreground

      hover:bg-input/15

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:opacity-60

      aria-invalid:ring-2 aria-invalid:ring-error
    `,
  },
  variants: {
    size: {
      sm: {
        root: 'rounded-md px-3 py-1.5 text-xs',
      },
      md: {
        root: 'rounded-md px-4 py-2 text-sm',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})


// COMPONENT

export { default as Textarea } from './textarea.vue'

// TYPES — Variants

export type TextareaVariants = VariantProps<typeof textareaVariants>


// TYPES — Props

export type TextareaProps = Pick<ClassProp, 'class'> & /** @vue-ignore */ Omit<TextareaHTMLAttributes, 'autocomplete' | 'size' | 'value' | 'class'> & {
  /**
     * The visual size of the textarea.
     * @default 'md'
     */
  size?: TextareaVariants['size']
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
}


// TYPES — Emits

export type TextareaEmits = {
  /**
   * Event handler for when the value of the textarea changes.
   * @param payload - The payload of the event.
   */
  (event: 'update:value', payload: string | number): void
}

import { tv, type VariantProps } from 'tailwind-variants'
import type { InputHTMLAttributes } from 'vue'

export const inputVariants = tv({
  slots: {
    root: `
      w-full min-w-0 border border-input bg-transparent transition-all
      outline-none

      selection:bg-primary selection:text-primary-foreground

      placeholder:text-muted-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:bg-input/60 disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error
    `,
  },
  variants: {
    size: {
      sm: {
        root: 'h-7 rounded-md px-3 py-1 text-sm',
      },
      md: {
        root: 'h-8 rounded-md px-3 py-1 text-sm',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})


// COMPONENT
export { default as Input } from './input.vue'


// VARIANTS
export type InputVariants = VariantProps<typeof inputVariants>


// PROPS
// Note: 'autocomplete' is defined with simpler types to avoid TS2590 union complexity issues
export type InputProps = {
  /**
   * The visual size of the input.
   * @default 'md'
   */
  size?: InputVariants['size']
  /**
   * The value of the input when it is initially rendered.\
   * Use when you do not need to control its value.
   */
  defaultValue?: string | number
  /**
   * The controlled value of the input.\
   * Can be binded as v-model:value
   */
  value?: string | number
  /** Controls browser autocomplete suggestions. */
  autocomplete?: 'on' | 'off' | (string & {})
  class?: any
} & /** @vue-ignore */ InputHTMLAttributes


// EMITS
export type InputEmits = {
  /**
   * Event handler for when the value of the input changes.
   * @param payload - The payload of the event.
   */
  (event: 'update:value', payload: string | number): void
}

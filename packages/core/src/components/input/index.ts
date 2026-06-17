import { tv, type VariantProps } from 'tailwind-variants'

export const inputVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      inline-full min-inline-0 border border-input bg-transparent transition-all
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
      md: {
        root: 'block-8 rounded-md px-3 py-1 text-sm',
      },
      sm: {
        root: 'block-7 rounded-md px-3 py-1 text-sm',
      },
    },
  },
})

// COMPONENT
export { default as Input } from './input.vue'

// VARIANTS
export type InputVariants = VariantProps<typeof inputVariants>

// PROPS
// Note: 'autocomplete' is defined with simpler types to avoid TS2590 union complexity issues
export interface InputProps {
  /**
   * The visual size of the input.
   * @default 'md'
   */
  size?: InputVariants['size']

  /**
   * The value of the input when it is initially rendered.\
   * Use when you do not need to control its value.
   */
  defaultValue?: number | string

  /**
   * The controlled value of the input.\
   * Can be binded as v-model:value
   */
  value?: number | string
  /** Controls browser autocomplete suggestions. */
  autocomplete?: 'off' | 'on' | (string & {})
  class?: any
}

// EMITS

/**
 * Event handler for when the value of the input changes.
 * @param payload The payload of the event.
 */
export type InputEmits = (event: 'update:value', payload: number | string) => void

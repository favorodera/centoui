import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import type { InputHTMLAttributes } from 'vue'

export const inputVariants = tv({
  slots: {
    root: `
      w-full border border-input bg-transparent transition-all duration-300
      outline-none

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
        root: 'rounded-md px-3 py-1 text-xs',
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

export { default as Input } from './input.vue'


// TYPES — Variants

export type InputVariants = VariantProps<typeof inputVariants>


// TYPES — Props

// Note: 'autocomplete' is omitted and defined with simpler types to avoid TS2590 union complexity issues
export type InputProps = Pick<ClassProp, 'class'> & /** @vue-ignore */ Omit<InputHTMLAttributes, 'autocomplete' | 'size' | 'value' | 'class'> & {
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
}


// TYPES — Emits

export type InputEmits = {
  /**
   * Event handler for when the value of the input changes.
   * @param payload - The payload of the event.
   */
  (event: 'update:value', payload: string | number): void
}

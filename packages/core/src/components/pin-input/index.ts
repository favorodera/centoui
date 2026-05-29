import {
  type PinInputRootProps as RekaPinInputRootProps,
  type PinInputRootEmits as RekaPinInputRootEmits,
  type PinInputInputProps as RekaPinInputInputProps,
  type PrimitiveProps,
} from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import type { InputHTMLAttributes } from 'vue'

// VARIANTS

export const pinInputVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-2',
    input: 'text-center',
    separator: 'shrink-0 text-muted-foreground',
  },
  variants: {
    inputSize: {
      sm: {
        input: 'size-6.5 p-1',
      },
      md: {
        input: 'size-9.5 p-2',
      },
    },
  },
  defaultVariants: {
    inputSize: 'md',
  },
})

export const pinInputGroupVariants = tv({
  slots: {
    root: `
      relative flex w-fit items-stretch

      *:focus-visible:z-10

      [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0

      [&>*:not(:last-child)]:rounded-r-none
    `,
  },
})


// COMPONENTS

export { default as PinInputRoot } from './pin-input-root.vue'
export { default as PinInputInput } from './pin-input-input.vue'
export { default as PinInputSeparator } from './pin-input-separator.vue'
export { default as PinInputGroup } from './pin-input-group.vue'


// TYPES — Variants

export type PinInputVariants = VariantProps<typeof pinInputVariants>


// TYPES — Props

export type PinInputRootProps = RekaPinInputRootProps & Pick<ClassProp, 'class'>

export type PinInputInputProps = RekaPinInputInputProps & Pick<ClassProp, 'class'> & /** @vue-ignore */ Omit<InputHTMLAttributes, 'autocomplete' | 'size' | 'class'> & {
  /**
   * The size of the pin input.
   * @default 'md'
   */
  size?: PinInputVariants['inputSize']
  /** Controls browser autocomplete suggestions. */
  autocomplete?: 'on' | 'off' | (string & {})
}

export type PinInputSeparatorProps = PrimitiveProps & Pick<ClassProp, 'class'>
export type PinInputGroupProps = PrimitiveProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type PinInputRootEmits = RekaPinInputRootEmits


// TYPES — Slots

export type PinInputRootSlots = {
  default?: (props: {
    /** Current input values */
    modelValue: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
}

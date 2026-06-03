import {
  type PinInputRootProps as RekaPinInputRootProps,
  type PinInputRootEmits as RekaPinInputRootEmits,
  type PinInputInputProps as RekaPinInputInputProps,
  type PrimitiveProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { InputProps } from '../input'

export const pinInputVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-2',
    input: 'aspect-square p-0 text-center',
    group: `
      relative flex w-fit items-stretch

      *:not-first:rounded-l-none *:not-first:border-l-0

      *:not-last:rounded-r-none

      *:focus-visible:z-10
    `,
  },
})


// COMPONENTS
export { default as PinInputRoot } from './pin-input-root.vue'
export { default as PinInputInput } from './pin-input-input.vue'
export { default as PinInputGroup } from './pin-input-group.vue'


// VARIANTS
export type PinInputVariants = VariantProps<typeof pinInputVariants>


// PROPS
export type PinInputRootProps = RekaPinInputRootProps & { class?: any }

export type PinInputInputProps = RekaPinInputInputProps & Omit<InputProps, 'value' | 'defaultValue'>

export type PinInputGroupProps = PrimitiveProps & { class?: any }


// EMITS
export type PinInputRootEmits = RekaPinInputRootEmits


// SLOTS
export type PinInputRootSlots = {
  default?: (props: {
    /** Current input values */
    modelValue: string[]
  }) => any
}

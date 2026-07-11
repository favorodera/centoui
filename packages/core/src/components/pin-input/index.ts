import type {
  PrimitiveProps,
  PinInputInputProps as RekaPinInputInputProps,
  PinInputRootEmits as RekaPinInputRootEmits,
  PinInputRootProps as RekaPinInputRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { InputProps } from '../input'

export const pinInputVariants = tv({
  slots: {
    group: `
      relative flex inline-fit items-stretch group/pin-input-group

      *:not-first:rounded-s-none *:not-first:border-s-0

      *:not-last:rounded-e-none

      *:focus-visible:z-10
    `,
    input: 'aspect-square p-0 text-center group/pin-input-input',
    root: 'inline-flex items-center gap-2 group/pin-input-root',
  },
})

// COMPONENTS
export { default as PinInputGroup } from './pin-input-group.vue'
export { default as PinInputInput } from './pin-input-input.vue'
export { default as PinInputRoot } from './pin-input-root.vue'

// VARIANTS
export type PinInputVariants = VariantProps<typeof pinInputVariants>

// PROPS
export type PinInputRootProps = RekaPinInputRootProps & { class?: any }

export type PinInputInputProps = Omit<InputProps, 'defaultValue' | 'value'> & RekaPinInputInputProps

export type PinInputGroupProps = PrimitiveProps & { class?: any }

// EMITS
export type PinInputRootEmits = RekaPinInputRootEmits

// SLOTS
export interface PinInputRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue: Array<string>
  }) => any
}

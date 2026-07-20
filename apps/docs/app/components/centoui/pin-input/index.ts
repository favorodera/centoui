import type {
  PrimitiveProps,
  PinInputInputProps as RekaPinInputInputProps,
  PinInputRootEmits as RekaPinInputRootEmits,
  PinInputRootProps as RekaPinInputRootProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'
import type { InputProps } from '../input'

// Variants
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
export type PinInputVariants = VariantProps<typeof pinInputVariants>

// Components
export { default as PinInputGroup } from './pin-input-group.vue'
export { default as PinInputInput } from './pin-input-input.vue'
export { default as PinInputRoot } from './pin-input-root.vue'

// Props
export type PinInputRootProps = RekaPinInputRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type PinInputInputProps = InputProps & RekaPinInputInputProps

export type PinInputGroupProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type PinInputRootEmits = RekaPinInputRootEmits

// SLOTS
export interface PinInputRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue: Array<string>
  }) => void
}

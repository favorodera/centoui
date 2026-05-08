import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

/** KbdGroup style variants */
export const kbdGroupVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-1',
  },
})


// Component exports

export { default as KbdGroup } from './kbd-group.vue'


// Types exports

/** Variant props for KbdGroup component. */
export type KbdGroupVariants = VariantProps<typeof kbdGroupVariants>

/** Props for KbdGroup component. */
export type KbdGroupProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for KbdGroup component. */
export type KbdGroupSlots = {
  /** Default slot. */
  default: []
}

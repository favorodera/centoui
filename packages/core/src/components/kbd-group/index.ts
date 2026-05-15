import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const kbdGroupVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-1',
  },
})


// COMPONENT

export { default as KbdGroup } from './kbd-group.vue'


// TYPES — Variants

export type KbdGroupVariants = VariantProps<typeof kbdGroupVariants>


// TYPES — Props

export type KbdGroupProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// TYPES — Slots

export type KbdGroupSlots = {
  default: []
}

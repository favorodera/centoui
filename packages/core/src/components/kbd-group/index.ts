import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

/** Kbd style variants */
export const kbdVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-1',
  },
})

// Component exports
export { default as KbdGroup } from './kbd-group.vue'

// Types exports
/** Extractable variant props for Kbd component. */
export type KbdGroupVariants = VariantProps<typeof kbdVariants>

/** Props for KbdGroup component. */
export type KbdGroupProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for Kbd component. */
export type KbdGroupSlots = {
  /** KbdGroup content — kbd elements. */
  default: []
}

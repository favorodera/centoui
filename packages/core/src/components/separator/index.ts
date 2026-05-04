import { type SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv, type ClassValue } from 'tailwind-variants'

export const separatorVariants = tv({
  slots: {
    root: [
      
    ],
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export { default as Separator } from './separator.vue'

export type SeparatorVariants = ReturnType<typeof separatorVariants>

export type SeparatorProps = RekaSeparatorProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type SeparatorSlots = {
  /** Separator content - text, icons, etc. */
  default: []
}

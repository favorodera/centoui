import { type SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const separatorVariants = tv({
  slots: {
    root: 'flex items-center gap-3 align-middle',
    line: 'border-border',
    content: 'shrink-0 text-center font-medium',
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'my-3 w-full',
        line: 'w-full border-t',
      },
      vertical: {
        root: 'mx-3 h-full flex-col',
        line: 'h-full border-s',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})


// COMPONENT

export { default as Separator } from './separator.vue'


// TYPES — Variants

export type SeparatorVariants = VariantProps<typeof separatorVariants>


// TYPES — Props

export type SeparatorProps = RekaSeparatorProps & {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: SeparatorVariants['orientation']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

// TYPES — Slots

export type SeparatorSlots = {
  default: []
}

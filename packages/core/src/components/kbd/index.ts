import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const kbdVariants = tv({
  slots: {
    root: `
      pointer-events-none inline-flex w-fit items-center justify-center
      bg-neutral px-1 font-medium text-neutral-foreground select-none
    `,
  },
  variants: {
    size: {
      xs: {
        root: 'h-3.5 min-w-3.5 rounded-sm text-[9px]',
      },
      sm: {
        root: 'h-4 min-w-4 rounded-sm text-[10px]',
      },
      md: {
        root: 'h-5 min-w-5 rounded-sm text-[11px]',
      },
      lg: {
        root: 'h-6 min-w-6 rounded-lg text-xs',
      },
      xl: {
        root: 'h-7 min-w-7 rounded-lg text-[13px]',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})


// COMPONENT

export { default as Kbd } from './kbd.vue'


// TYPES — Variants

export type KbdVariants = VariantProps<typeof kbdVariants>


// TYPES — Props

export type KbdProps = PrimitiveProps & {
  /**
   * The size of the kbd.
   * @default 'md'
   */
  size?: KbdVariants['size']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// TYPES — Slots
export type KbdSlots = {
  default: []
}

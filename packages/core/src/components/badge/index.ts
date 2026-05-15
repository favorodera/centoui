import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center truncate
      rounded-md whitespace-nowrap outline-none select-none
      focus-visible:ring-3 focus-visible:ring-ring
      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
  },
  variants: {
    variant: {
      neutral: {
        root: 'bg-neutral text-neutral-foreground',
      },
      success: {
        root: 'bg-success/8 text-success',
      },
      warning: {
        root: 'bg-warning/8 text-warning',
      },
      error: {
        root: 'bg-error/8 text-error',
      },
      info: {
        root: 'bg-info/8 text-info',
      },
    },

    size: {
      sm: {
        root: `
          gap-1 px-1.5 py-1 text-[10px]/3
          [&_svg]:size-3
        `,
      },
      md: {
        root: `
          gap-1 px-2 py-1 text-xs
          [&_svg]:size-4
        `,
      },
      lg: {
        root: `
          gap-1.5 px-2 py-1 text-sm
          [&_svg]:size-5
        `,
      },
      xl: {
        root: `
          gap-1.5 px-2.5 py-1 text-base
          [&_svg]:size-6
        `,
      },
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
})


// COMPONENT

export { default as Badge } from './badge.vue'


// TYPES — Variants
export type BadgeVariants = VariantProps<typeof badgeVariants>


// TYPES — Props
export type BadgeProps = PrimitiveProps & {
  /**
   * The visual style of the badge.
   * @default 'neutral'
   */
  variant?: BadgeVariants['variant']
  /**
   * The size of the badge.
   * @default 'md'
   */
  size?: BadgeVariants['size']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// TYPES — Slots
export type BadgeSlots = {
  default: []
}

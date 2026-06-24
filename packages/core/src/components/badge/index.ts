import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  defaultVariants: {
    variant: 'neutral',
  },
  slots: {
    root: `
      relative inline-flex align-middle shrink-0 items-center block-6 gap-1 px-2
      truncate rounded-md font-medium select-none text-xs outline-none

      focus-visible:ring-2 focus-visible:ring-ring

      *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
    `,
  },
  variants: {
    variant: {
      error: {
        root: 'bg-error/10 text-error',
      },
      info: {
        root: 'bg-info/10 text-info',
      },
      neutral: {
        root: 'bg-neutral text-foreground',
      },
      success: {
        root: 'bg-success/10 text-success',
      },
      warning: {
        root: 'bg-warning/10 text-warning',
      },
    },
  },
})

// COMPONENT
export { default as Badge } from './badge.vue'

// VARIANTS
export type BadgeVariants = VariantProps<typeof badgeVariants>

// PROPS
export type BadgeProps = PrimitiveProps & {
  class?: any

  /**
   * Visual style variant.
   * @default 'neutral'
   */
  variant?: BadgeVariants['variant']
}

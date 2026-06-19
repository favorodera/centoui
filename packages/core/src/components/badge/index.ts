import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  defaultVariants: {
    color: 'neutral',
  },
  slots: {
    root: `
      relative inline-flex align-middle shrink-0 items-center block-6 gap-1 px-2
      truncate rounded-sm border select-none text-xs outline-none

      focus-visible:ring-2 focus-visible:ring-ring

      *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
    `,
  },
  variants: {
    color: {
      error: {
        root: 'border-error/20 bg-error/8 text-error',
      },
      info: {
        root: 'border-info/20 bg-info/8 text-info',
      },
      neutral: {
        root: 'border-border bg-neutral text-neutral-foreground',
      },
      success: {
        root: 'border-success/20 bg-success/8 text-success',
      },
      warning: {
        root: 'border-warning/20 bg-warning/8 text-warning',
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
   * Semantic color.
   * @default 'neutral'
   */
  color?: BadgeVariants['color']
}

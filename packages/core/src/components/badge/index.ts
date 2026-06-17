import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  defaultVariants: {
    size: 'md',
    variant: 'neutral',
  },
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center gap-1 truncate
      rounded-sm border px-2 py-0.5 text-xs font-medium whitespace-nowrap
      transition-all outline-none select-none

      focus-visible:ring-2 focus-visible:ring-ring

      *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
    `,
  },
  variants: {
    variant: {
      error: {
        root: 'border-error/15 bg-error/10 text-error',
      },
      info: {
        root: 'border-info/15 bg-info/10 text-info',
      },
      neutral: {
        root: 'border-border bg-background text-foreground',
      },
      primary: {
        root: 'border-primary bg-primary text-primary-foreground',
      },
      secondary: {
        root: 'border-secondary bg-secondary text-secondary-foreground',
      },
      success: {
        root: 'border-success/15 bg-success/10 text-success',
      },
      warning: {
        root: 'border-warning/15 bg-warning/10 text-warning',
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
  /**
   * The visual style of the badge.
   * @default 'neutral'
   */
  class?: any
  variant?: BadgeVariants['variant']
}

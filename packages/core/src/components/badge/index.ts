import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  slots: {
    root: `
      relative inline-flex align-middle shrink-0 items-center truncate
      font-medium select-none outline-none

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      lg: {
        root: `
          min-block-6 px-2 text-sm rounded-md gap-1.5 py-0.5

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
      },
      md: {
        root: `
          min-block-5 px-1.5 text-xs rounded-md gap-1 py-0.5

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
      sm: {
        root: `
          min-block-4 px-1 text-xs rounded-md gap-1 py-0.5

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
    },
    variant: {
      error: {
        root: 'bg-error text-error-foreground',
      },
      info: {
        root: 'bg-info text-info-foreground',
      },
      primary: {
        root: 'bg-primary text-primary-foreground',
      },
      secondary: {
        root: 'bg-secondary text-secondary-foreground',
      },
      success: {
        root: 'bg-success text-success-foreground',
      },
      warning: {
        root: 'bg-warning text-warning-foreground',
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
   * @default 'primary'
   */
  variant?: BadgeVariants['variant']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: BadgeVariants['size']
}

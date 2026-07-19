import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const badgeVariants = tv({
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  slots: {
    root: `
      relative inline-flex items-center align-middle shrink-0 border-transparent
      border group/badge outline-none select-none transition-all font-medium
      justify-center

      aria-invalid:ring-2 aria-invalid:ring-error

      invalid:ring-2 invalid:ring-error

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      md: {
        root: `
          min-block-5 min-inline-5 px-2 text-xs rounded-md gap-1 py-0.5

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
      sm: {
        root: `
          min-block-4 min-inline-4 px-1.5 text-xs rounded-md gap-1 py-0.5

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
    },
    variant: {
      error: {
        root: `bg-error text-error-foreground`,
      },
      info: {
        root: `bg-info text-info-foreground`,
      },
      outline: {
        root: `border-border text-foreground`,
      },
      primary: {
        root: `bg-primary text-primary-foreground`,
      },
      secondary: {
        root: `bg-secondary text-secondary-foreground`,
      },
      success: {
        root: `bg-success text-success-foreground`,
      },
      warning: {
        root: `bg-warning text-warning-foreground`,
      },
    },
  },
})
export type BadgeVariants = VariantProps<typeof badgeVariants>

// Components
export { default as Badge } from './badge.vue'

// Props
export type BadgeProps = PrimitiveProps & {
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

  /** Custom style class */
  class?: HTMLAttributes['class']
}

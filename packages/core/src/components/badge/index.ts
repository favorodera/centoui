import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center truncate
      outline-none select-none
      focus-visible:ring-2 focus-visible:ring-ring
      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
  },
  variants: {
    variant: {
      neutral: { root: 'bg-neutral text-neutral-foreground' },
      success: { root: 'bg-success/8 text-success' },
      warning: { root: 'bg-warning/8 text-warning' },
      error: { root: 'bg-error/8 text-error' },
      info: { root: 'bg-info/8 text-info' },
    },
    size: {
      sm: {
        root: `
          gap-1 rounded-sm px-1.5 py-0.5 text-xs font-medium
          [&_svg]:size-3
        `,
      },
      md: {
        root: `
          gap-1 rounded-md px-2 py-0.5 text-xs font-medium
          [&_svg]:size-3
        `,
      },
      lg: {
        root: `
          gap-2 rounded-md px-2.5 py-1 text-sm font-medium
          [&_svg]:size-4
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
export type BadgeProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
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
}


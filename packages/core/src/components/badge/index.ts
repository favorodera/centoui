import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

/** Badge style variants */
export const badgeVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center truncate
      whitespace-nowrap transition-all outline-none select-none
      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
      subtle: {
        root: 'ring ring-inset',
      },
      outline: {
        root: 'bg-transparent ring ring-inset',
      },
    },

    color: {
      primary: {
        root: 'focus-visible:ring-primary',
      },
      secondary: {
        root: 'focus-visible:ring-secondary',
      },
      accent: {
        root: 'focus-visible:ring-accent',
      },
      neutral: {
        root: 'focus-visible:ring-neutral',
      },
      success: {
        root: 'focus-visible:ring-success',
      },
      warning: {
        root: 'focus-visible:ring-warning',
      },
      error: {
        root: 'focus-visible:ring-error',
      },
      info: {
        root: 'focus-visible:ring-info',
      },
    },

    size: {
      xs: {
        root: `
          gap-1 rounded-sm px-1 py-0.5 text-[8px]/3
          [&_svg]:size-3
        `,
      },
      sm: {
        root: `
          gap-1 rounded-sm px-1.5 py-1 text-[10px]/3
          [&_svg]:size-3
        `,
      },
      md: {
        root: `
          gap-1 rounded-md px-2 py-1 text-xs
          [&_svg]:size-4
        `,
      },
      lg: {
        root: `
          gap-1.5 rounded-md px-2 py-1 text-sm
          [&_svg]:size-5
        `,
      },
      xl: {
        root: `
          gap-1.5 rounded-md px-2.5 py-1 text-base
          [&_svg]:size-6
        `,
      },
    },

    square: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // Solid
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary text-primary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: 'bg-secondary text-secondary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'accent',
      class: {
        root: 'bg-accent text-accent-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: 'bg-neutral text-neutral-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success text-success-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning text-warning-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: 'bg-error text-error-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info text-info-foreground',
      },
    },

    // Soft
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/15 text-primary',
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: 'bg-secondary/15 text-secondary',
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: 'bg-accent/15 text-accent',
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-neutral/15 text-neutral',
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/15 text-success',
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/15 text-warning',
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/15 text-error',
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/15 text-info',
      },
    },

    // Subtle
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'bg-primary/8 text-primary ring-primary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: 'bg-secondary/8 text-secondary ring-secondary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: 'bg-accent/8 text-accent ring-accent/25',
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: 'bg-neutral/8 text-neutral ring-neutral/25',
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'bg-success/8 text-success ring-success/25',
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'bg-warning/8 text-warning ring-warning/25',
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: 'bg-error/8 text-error ring-error/25',
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: 'bg-info/8 text-info ring-info/25',
      },
    },

    // Outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'text-primary ring-primary',
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'text-secondary ring-secondary',
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: 'text-accent ring-accent',
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'text-neutral ring-neutral',
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'text-success ring-success',
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'text-warning ring-warning',
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'text-error ring-error',
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'text-info ring-info',
      },
    },

    // Square
    {
      square: true,
      size: 'xs',
      class: {
        root: 'p-0.5',
      },
    },
    {
      square: true,
      size: 'sm',
      class: {
        root: 'p-1',
      },
    },
    {
      square: true,
      size: 'md',
      class: {
        root: 'p-1',
      },
    },
    {
      square: true,
      size: 'lg',
      class: {
        root: 'p-1',
      },
    },
    {
      square: true,
      size: 'xl',
      class: {
        root: 'p-1',
      },
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    square: false,
  },
})


// Component exports

export { default as Badge } from './badge.vue'


// Types exports

/** Variant props for Badge component. */
export type BadgeVariants = VariantProps<typeof badgeVariants>

/** Props for Badge Component */
export type BadgeProps = PrimitiveProps & {
  /**
   * The visual style of the badge.
   * @default 'solid'
   */
  variant?: BadgeVariants['variant']
  /**
   * The semantic color of the badge.
   * @default 'primary'
   */
  color?: BadgeVariants['color']
  /**
   * The size of the badge.
   * @default 'md'
   */
  size?: BadgeVariants['size']
  /**
   * Render the badge with equal padding on all sides..
   * @default false
   */
  square?: boolean
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for Badge component. */
export type BadgeSlots = {
  /** Default slot. */
  default: []
}

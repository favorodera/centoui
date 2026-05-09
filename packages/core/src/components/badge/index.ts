import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

/** Badge style variants */
export const badgeVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center truncate
      whitespace-nowrap transition-all outline-none select-none
      focus-visible:ring-2 focus-visible:ring-offset-2
      aria-invalid:ring-2 aria-invalid:ring-error aria-invalid:ring-offset-2
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
        root: `
          text-primary
          focus-visible:ring-primary
        `,
      },
      secondary: {
        root: `
          text-secondary
          focus-visible:ring-secondary
        `,
      },
      accent: {
        root: `
          text-accent
          focus-visible:ring-accent
        `,
      },
      neutral: {
        root: `
          text-neutral
          focus-visible:ring-neutral
        `,
      },
      success: {
        root: `
          text-success
          focus-visible:ring-success
        `,
      },
      warning: {
        root: `
          text-warning
          focus-visible:ring-warning
        `,
      },
      error: {
        root: `
          text-error
          focus-visible:ring-error
        `,
      },
      info: {
        root: `
          text-info
          focus-visible:ring-info
        `,
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
      true: {
        root: 'aspect-square',
      },
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
        root: 'bg-primary/15',
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: 'bg-secondary/15',
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: 'bg-accent/15',
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-neutral/15',
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/15',
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/15',
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: [
          'bg-error/15',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/15',
      },
    },

    // Subtle
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'bg-primary/8 ring-primary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: 'bg-secondary/8 ring-secondary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: 'bg-accent/8 ring-accent/25',
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: 'bg-neutral/8 ring-neutral/25',
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'bg-success/8 ring-success/25',
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'bg-warning/8 ring-warning/25',
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: 'bg-error/8 ring-error/25',
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: 'bg-info/8 ring-info/25',
      },
    },

    // Outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'ring-primary',
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'ring-secondary',
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: 'ring-accent',
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'ring-neutral',
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'ring-success',
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'ring-warning',
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'ring-error',
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'ring-info',
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

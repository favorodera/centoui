import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { ButtonHTMLAttributes } from 'vue'

export const buttonVariants = tv({
  slots: {
    root: [
      'inline-flex shrink-0 cursor-default items-center justify-center truncate',
      'rounded-md font-normal tracking-wide whitespace-nowrap transition-all',
      'outline-none select-none',
      'disabled:pointer-events-none disabled:opacity-40',
      'aria-disabled:pointer-events-none aria-disabled:opacity-40',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      'active:scale-98 active:opacity-80',
      'hover:opacity-90',
      'focus-visible:ring-2 focus-visible:ring-offset-2',
      'aria-invalid:ring-2 aria-invalid:ring-offset-2',
    ],
  },

  variants: {
    variant: {
      solid: {},
      soft: {},
      subtle: {},
      outline: {
        root: [
          'border',
          'bg-transparent',
        ],
      },
      ghost: {
        root: [
          'bg-transparent',
        ],
      },
      link: {
        root: [
          'h-auto bg-transparent p-0 underline-offset-4',
          'hover:underline',
        ],
      },
    },

    color: {
      primary: {
        root: [
          'text-primary',
          'focus-visible:ring-primary',
          'aria-invalid:ring-primary',
        ],
      },
      secondary: {
        root: [
          'text-secondary',
          'focus-visible:ring-secondary',
          'aria-invalid:ring-secondary',
        ],
      },
      accent: {
        root: [
          'text-accent',
          'focus-visible:ring-accent',
          'aria-invalid:ring-accent',
        ],
      },
      neutral: {
        root: [
          'text-neutral',
          'focus-visible:ring-neutral',
          'aria-invalid:ring-neutral',
        ],
      },
      success: {
        root: [
          'text-success',
          'focus-visible:ring-success',
          'aria-invalid:ring-success',
        ],
      },
      warning: {
        root: [
          'text-warning',
          'focus-visible:ring-warning',
          'aria-invalid:ring-warning',
        ],
      },
      error: {
        root: [
          'text-error',
          'focus-visible:ring-error',
          'aria-invalid:ring-error',
        ],
      },
      info: {
        root: [
          'text-info',
          'focus-visible:ring-info',
          'aria-invalid:ring-info',
        ],
      },
    },

    size: {
      xs: {
        root: [
          'gap-1 px-2 py-1',
          'text-xs',
          '[&_svg]:size-4',
        ],
      },
      sm: {
        root: [
          'gap-1.5 px-3 py-1.5',
          'text-xs',
          '[&_svg]:size-4',
        ],
      },
      md: {
        root: [
          'gap-1.5 px-4 py-2',
          'text-sm',
          '[&_svg]:size-5',
        ],
      },
      lg: {
        root: [
          'gap-2 px-5 py-2.5',
          'text-sm',
          '[&_svg]:size-5',
        ],
      },
      xl: {
        root: [
          'gap-2.5 px-6 py-3',
          'text-base',
          '[&_svg]:size-6',
        ],
      },
    },
  },

  compoundVariants: [
    // Solid
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: [
          'bg-primary',
          'text-primary-foreground',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: [
          'bg-secondary',
          'text-secondary-foreground',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'accent',
      class: {
        root: [
          'bg-accent', 'text-accent-foreground'],
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: [
          'bg-neutral', 'text-neutral-foreground',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: [
          'bg-success',
          'text-success-foreground',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: [
          'bg-warning',
          'text-warning-foreground',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: [
          'bg-error',
          'text-error-foreground',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: [
          'bg-info',
          'text-info-foreground',
        ],
      },
    },

    // Soft
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: [
          'bg-primary/20',
          'hover:bg-primary/25',
          'active:bg-primary/30',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: [
          'bg-secondary/20',
          'hover:bg-secondary/25',
          'active:bg-secondary/30',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: [
          'bg-accent/20',
          'hover:bg-accent/25',
          'active:bg-accent/30',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: [
          'bg-neutral/20',
          'hover:bg-neutral/25',
          'active:bg-neutral/30',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: [
          'bg-success/20',
          'hover:bg-success/25',
          'active:bg-success/30',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: [
          'bg-warning/20',
          'hover:bg-warning/25',
          'active:bg-warning/30',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: [
          'bg-error/20',
          'hover:bg-error/25',
          'active:bg-error/30',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: [
          'bg-info/20',
          'hover:bg-info/25',
          'active:bg-info/30',
        ],
      },
    },

    // Subtle
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: [
          'bg-primary/5',
        ],
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: [
          'bg-secondary/5',
        ],
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: [
          'bg-accent/5',
        ],
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: [
          'bg-neutral/5',
        ],
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: [
          'bg-success/5',
        ],
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: [
          'bg-warning/5',
        ],
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: [
          'bg-error/5',
        ],
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: [
          'bg-info/5',
        ],
      },
    },

    // Outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: [
          'border-primary',
        ],
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: [
          'border-secondary',
        ],
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: [
          'border-accent',
        ],
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: [
          'border-neutral',
        ],
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: [
          'border-success',
        ],
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: [
          'border-warning',
        ],
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: [
          'border-error',
        ],
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: [
          'border-info',
        ],
      },
    },

    // Subtle, Outline, Ghost (Hover & Active states)
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'primary',
      class: {
        root: [
          'hover:bg-primary/10',
          'active:bg-primary/15',
        ],
      },
    },
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'secondary',
      class: {
        root: [
          'hover:bg-secondary/10',
          'active:bg-secondary/15',
        ],
      },
    },
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'accent',
      class: {
        root: [
          'hover:bg-accent/10',
          'active:bg-accent/15',
        ],
      },
    },
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'neutral',
      class: {
        root: [
          'hover:bg-neutral/10',
          'active:bg-neutral/15',
        ],
      },
    },
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'success',
      class: {
        root: [
          'hover:bg-success/10',
          'active:bg-success/15',
        ],
      },
    },
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'warning',
      class: {
        root: [
          'hover:bg-warning/10',
          'active:bg-warning/15',
        ],
      },
    },
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'error',
      class: {
        root: [
          'hover:bg-error/10',
          'active:bg-error/15',
        ],
      },
    },
    {
      variant: ['subtle', 'outline', 'ghost'],
      color: 'info',
      class: {
        root: [
          'hover:bg-info/10',
          'active:bg-info/15',
        ],
      },
    },
  ],

  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
})

export { default as Button } from './button.vue'

export type ButtonVariants = VariantProps<typeof buttonVariants>

export type ButtonProps = PrimitiveProps & /* @vue-ignore */ ButtonHTMLAttributes & {
  /**
   * The visual style of the button.
   * @default 'solid'
   */
  variant?: ButtonVariants['variant']
  /**
   * The semantic color of the button.
   * @default 'primary'
   */
  color?: ButtonVariants['color']
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: ButtonVariants['size']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type ButtonSlots = {
  /** Button content — text, icons, or both. */
  default: []
}

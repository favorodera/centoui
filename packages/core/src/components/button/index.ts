import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { ButtonHTMLAttributes } from 'vue'

export const buttonVariants = tv({
  slots: {
    root: [
      `
        inline-flex shrink-0 cursor-default items-center justify-center truncate
        rounded-md font-normal tracking-wide whitespace-nowrap transition-all
        outline-none select-none
      `,
      `
        disabled:cursor-not-allowed disabled:opacity-40
        aria-disabled:cursor-not-allowed aria-disabled:opacity-40
      `,
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      'active:scale-98 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-offset-2',
      'hover:opacity-90',
      'aria-invalid:ring-2 aria-invalid:ring-error aria-invalid:ring-offset-2',
    ],
  },
  variants: {
    variant: {
      solid: {},
      outline: {},
      ghost: {},
      link: {},
    },
    color: {
      primary: {},
      secondary: {},
      accent: {},
      neutral: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },
    size: {
      xs: {
        root: [
          'gap-1 px-2 py-1 text-xs',
          '[&_svg]:size-4',
        ],
      },
      sm: {
        root: [
          'gap-1.5 px-2.5 py-1.5 text-xs',
          '[&_svg]:size-4',
        ],
      },
      md: {
        root: [
          'gap-1.5 px-2.5 py-1.5 text-sm',
          '[&_svg]:size-5',
        ],
      },
      lg: {
        root: [
          'gap-2 px-3 py-2 text-sm',
          '[&_svg]:size-5',
        ],
      },
      xl: {
        root: [
          'gap-2.5 px-3.5 py-2.5 text-base',
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
          'bg-primary text-primary-foreground',
          'focus-visible:ring-primary',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: [
          'bg-secondary text-secondary-foreground',
          'focus-visible:ring-secondary',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'accent',
      class: {
        root: [
          'bg-accent text-accent-foreground',
          'focus-visible:ring-accent',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: [
          'bg-neutral text-neutral-foreground',
          'focus-visible:ring-neutral',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: [
          'bg-success text-success-foreground',
          'focus-visible:ring-success',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: [
          'bg-warning text-warning-foreground',
          'focus-visible:ring-warning',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: [
          'bg-error text-error-foreground',
          'focus-visible:ring-error',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: [
          'bg-info text-info-foreground',
          'focus-visible:ring-info',
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
   * The color scheme of the button.
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

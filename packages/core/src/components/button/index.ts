import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { ButtonHTMLAttributes } from 'vue'

/** Button style variants */
export const buttonVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 cursor-default items-center justify-center
      truncate rounded-md font-medium tracking-wide whitespace-nowrap
      transition-all outline-none select-none
      focus-visible:ring-2 focus-visible:ring-offset-2
      active:not-aria-[haspopup]:translate-y-px
      disabled:pointer-events-none disabled:opacity-50
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
      ghost: {
        root: 'bg-transparent',
      },
      link: {
        root: 'bg-transparent',
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
          gap-1 px-2 py-1 text-xs
          [&_svg]:size-4
        `,
      },
      sm: {
        root: `
          gap-1.5 px-3 py-1.5 text-xs
          [&_svg]:size-4
        `,
      },
      md: {
        root: `
          gap-1.5 px-4 py-2 text-sm
          [&_svg]:size-5
        `,
      },
      lg: {
        root: `
          gap-2 px-5 py-2.5 text-sm
          [&_svg]:size-5
        `,
      },
      xl: {
        root: `
          gap-2.5 px-6 py-3 text-base
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
    // Solid variant
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: `
          bg-primary text-primary-foreground
          hover:bg-primary/80
        `,
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: `
          bg-secondary text-secondary-foreground
          hover:bg-secondary/80
        `,
      },
    },
    {
      variant: 'solid',
      color: 'accent',
      class: {
        root: `
          bg-accent text-accent-foreground
          hover:bg-accent/80
        `,
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: `
          bg-neutral text-neutral-foreground
          hover:bg-neutral/80
        `,
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: `
          bg-success text-success-foreground
          hover:bg-success/80
        `,
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: [
          'bg-warning text-warning-foreground',
          'hover:bg-warning/80',
        ],
      },
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: `
          bg-error text-error-foreground
          hover:bg-error/80
        `,
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: `
          bg-info text-info-foreground
          hover:bg-info/80
        `,
      },
    },

    // Soft variant
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: `
          bg-primary/15
          hover:bg-primary/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: `
          bg-secondary/15
          hover:bg-secondary/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: `
          bg-accent/15
          hover:bg-accent/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: `
          bg-neutral/15
          hover:bg-neutral/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: `
          bg-success/15
          hover:bg-success/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: `
          bg-warning/15
          hover:bg-warning/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: [
          'bg-error/15',
          'hover:bg-error/20',
        ],
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: `
          bg-info/15
          hover:bg-info/20
        `,
      },
    },

    // Subtle variant
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: `
          bg-primary/8 ring-primary/25
          hover:bg-primary/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: `
          bg-secondary/8 ring-secondary/25
          hover:bg-secondary/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: `
          bg-accent/8 ring-accent/25
          hover:bg-accent/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: `
          bg-neutral/8 ring-neutral/25
          hover:bg-neutral/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: `
          bg-success/8 ring-success/25
          hover:bg-success/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: `
          bg-warning/8 ring-warning/25
          hover:bg-warning/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: `
          bg-error/8 ring-error/25
          hover:bg-error/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: `
          bg-info/8 ring-info/25
          hover:bg-info/12
        `,
      },
    },

    // Outline variant
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: `
          ring-primary
          hover:bg-primary/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: `
          ring-secondary
          hover:bg-secondary/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: `
          ring-accent
          hover:bg-accent/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: `
          ring-neutral
          hover:bg-neutral/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: `
          ring-success
          hover:bg-success/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: `
          ring-warning
          hover:bg-warning/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: `
          ring-error
          hover:bg-error/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: `
          ring-info
          hover:bg-info/10
        `,
      },
    },

    // Ghost variant
    {
      variant: 'ghost',
      color: 'primary',
      class: { root: 'hover:bg-primary/10' },
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: { root: 'hover:bg-secondary/10' },
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: { root: 'hover:bg-accent/10' },
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: { root: 'hover:bg-neutral/10' },
    },
    {
      variant: 'ghost',
      color: 'success',
      class: { root: 'hover:bg-success/10' },
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: { root: 'hover:bg-warning/10' },
    },
    {
      variant: 'ghost',
      color: 'error',
      class: { root: 'hover:bg-error/10' },
    },
    {
      variant: 'ghost',
      color: 'info',
      class: { root: 'hover:bg-info/10' },
    },

    // Link variant
    {
      variant: 'link',
      color: 'primary',
      class: { root: 'hover:text-primary/70' },
    },
    {
      variant: 'link',
      color: 'secondary',
      class: { root: 'hover:text-secondary/70' },
    },
    {
      variant: 'link',
      color: 'accent',
      class: { root: 'hover:text-accent/70' },
    },
    {
      variant: 'link',
      color: 'neutral',
      class: { root: 'hover:text-neutral/70' },
    },
    {
      variant: 'link',
      color: 'success',
      class: { root: 'hover:text-success/70' },
    },
    {
      variant: 'link',
      color: 'warning',
      class: { root: 'hover:text-warning/70' },
    },
    {
      variant: 'link',
      color: 'error',
      class: { root: 'hover:text-error/70' },
    },
    {
      variant: 'link',
      color: 'info',
      class: { root: 'hover:text-info/70' },
    },

    // Square variant (icon-only padding overrides)
    { square: true, size: 'xs', class: { root: 'p-1' } },
    { square: true, size: 'sm', class: { root: 'p-1.5' } },
    { square: true, size: 'md', class: { root: 'p-2' } },
    { square: true, size: 'lg', class: { root: 'p-2.5' } },
    { square: true, size: 'xl', class: { root: 'p-3' } },
  ],

  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    square: false,
  },
})

// Component exports
export { default as Button } from './button.vue'

// Types exports
/** Extractable variant props for Button component. */
export type ButtonVariants = VariantProps<typeof buttonVariants>

/** Props for Button component. */
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
  /**
   * Squares the button by matching horizontal padding to vertical.
   * Intended for icon-only buttons.
   * @default false
   */
  square?: boolean
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for Button component. */
export type ButtonSlots = {
  /** Button content — text, icons, or both. */
  default: []
}

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
    // Solid
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
        root: `
          bg-warning text-warning-foreground
          hover:bg-warning/80
        `,
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

    // Soft
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: `
          bg-primary/15 text-primary
          hover:bg-primary/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: `
          bg-secondary/15 text-secondary
          hover:bg-secondary/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: `
          bg-accent/15 text-accent
          hover:bg-accent/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: `
          bg-neutral/15 text-neutral
          hover:bg-neutral/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: `
          bg-success/15 text-success
          hover:bg-success/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: `
          bg-warning/15 text-warning
          hover:bg-warning/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: `
          bg-error/15 text-error
          hover:bg-error/20
        `,
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: `
          bg-info/15 text-info
          hover:bg-info/20
        `,
      },
    },

    // Subtle
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: `
          bg-primary/8 text-primary ring-primary/25
          hover:bg-primary/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: `
          bg-secondary/8 text-secondary ring-secondary/25
          hover:bg-secondary/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: `
          bg-accent/8 text-accent ring-accent/25
          hover:bg-accent/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: `
          bg-neutral/8 text-neutral ring-neutral/25
          hover:bg-neutral/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: `
          bg-success/8 text-success ring-success/25
          hover:bg-success/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: `
          bg-warning/8 text-warning ring-warning/25
          hover:bg-warning/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: `
          bg-error/8 text-error ring-error/25
          hover:bg-error/12
        `,
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: `
          bg-info/8 text-info ring-info/25
          hover:bg-info/12
        `,
      },
    },

    // Outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: `
          text-primary ring-primary
          hover:bg-primary/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: `
          text-secondary ring-secondary
          hover:bg-secondary/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: `
          text-accent ring-accent
          hover:bg-accent/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: `
          text-neutral ring-neutral
          hover:bg-neutral/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: `
          text-success ring-success
          hover:bg-success/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: `
          text-warning ring-warning
          hover:bg-warning/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: `
          text-error ring-error
          hover:bg-error/10
        `,
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: `
          text-info ring-info
          hover:bg-info/10
        `,
      },
    },

    // Ghost
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        root: `
          text-primary
          hover:bg-primary/10
        `,
      },
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        root: `
          text-secondary
          hover:bg-secondary/10
        `,
      },
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        root: `
          text-accent
          hover:bg-accent/10
        `,
      },
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        root: `
          text-neutral
          hover:bg-neutral/10
        `,
      },
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        root: `
          text-success
          hover:bg-success/10
        `,
      },
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        root: `
          text-warning
          hover:bg-warning/10
        `,
      },
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        root: `
          text-error
          hover:bg-error/10
        `,
      },
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        root: `
          text-info
          hover:bg-info/10
        `,
      },
    },

    // Link
    {
      variant: 'link',
      color: 'primary',
      class: {
        root: `
          text-primary
          hover:text-primary/70
        `,
      },
    },
    {
      variant: 'link',
      color: 'secondary',
      class: {
        root: `
          text-secondary
          hover:text-secondary/70
        `,
      },
    },
    {
      variant: 'link',
      color: 'accent',
      class: {
        root: `
          text-accent
          hover:text-accent/70
        `,
      },
    },
    {
      variant: 'link',
      color: 'neutral',
      class: {
        root: `
          text-neutral
          hover:text-neutral/70
        `,
      },
    },
    {
      variant: 'link',
      color: 'success',
      class: {
        root: `
          text-success
          hover:text-success/70
        `,
      },
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        root: `
          text-warning
          hover:text-warning/70
        `,
      },
    },
    {
      variant: 'link',
      color: 'error',
      class: {
        root: `
          text-error
          hover:text-error/70
        `,
      },
    },
    {
      variant: 'link',
      color: 'info',
      class: {
        root: `
          text-info
          hover:text-info/70
        `,
      },
    },

    // Square
    {
      square: true,
      size: 'xs',
      class: {
        root: 'p-1',
      },
    },
    {
      square: true,
      size: 'sm',
      class: {
        root: 'p-1.5',
      },
    },
    {
      square: true,
      size: 'md',
      class: {
        root: 'p-2',
      },
    },
    {
      square: true,
      size: 'lg',
      class: {
        root: 'p-2.5',
      },
    },
    {
      square: true,
      size: 'xl',
      class: {
        root: 'p-3',
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

export { default as Button } from './button.vue'

// Types exports

/** Variant props for Button component. */
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
   * Render the button with equal padding on all sides..
   * @default false
   */
  square?: boolean
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for Button component. */
export type ButtonSlots = {
  /** Default slot. */
  default: []
}

import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const buttonVariants = tv({
  defaultVariants: {
    size: 'md',
    square: false,
    variant: 'primary',
  },
  slots: {
    root: `
      relative inline-flex items-center shrink-0 border-transparent border
      group/button outline-none select-none transition-all font-medium
      cursor-default justify-center bg-clip-padding

      disabled:cursor-not-allowed disabled:opacity-70

      aria-invalid:ring-2 aria-invalid:ring-error

      invalid:ring-2 invalid:ring-error

      active:not-disabled:not-aria-[haspopup]:not-data-spin-button:translate-y-px

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      lg: {
        root: `
          block-9 min-inline-9 px-3 text-sm gap-2 rounded-lg

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
      },
      md: {
        root: `
          block-8 min-inline-8 px-2.5 text-sm gap-1.5 rounded-lg

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
      },
      sm: {
        root: `
          block-7 min-inline-7 px-2 text-sm gap-1 rounded-lg

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
      xl: {
        root: `
          block-10 min-inline-10 px-3.5 text-base gap-2.5 rounded-xl

          *:data-[slot=icon]:block-5 *:data-[slot=icon]:inline-5
        `,
      },
      xs: {
        root: `
          block-6 min-inline-6 px-1.5 text-xs gap-1 rounded-md

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
    },
    square: {
      false: {
        root: 'min-inline-fit',
      },
      true: {
        root: 'px-0',
      },
    },
    variant: {
      error: {
        root: `
          bg-error text-error-foreground

          hover:not-disabled:bg-error/80
        `,
      },
      ghost: {
        root: `
          bg-transparent text-foreground

          hover:not-disabled:bg-muted
        `,
      },
      link: {
        root: `
          px-0 text-primary underline-offset-4

          hover:not-disabled:underline
        `,
      },
      outline: {
        root: `
          border-border bg-transparent text-foreground

          hover:not-disabled:bg-muted
        `,
      },
      primary: {
        root: `
          bg-primary text-primary-foreground

          hover:not-disabled:bg-primary/80
        `,
      },
      secondary: {
        root: `
          bg-secondary text-secondary-foreground

          hover:not-disabled:bg-secondary/80
        `,
      },
    },
  },
})
export type ButtonVariants = VariantProps<typeof buttonVariants>

// Components
export { default as Button } from './button.vue'

// Props
export type ButtonProps = PrimitiveProps & {
  /**
   * Visual style variant.
   * @default 'primary'
   */
  variant?: ButtonVariants['variant']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: ButtonVariants['size']

  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Render the button with equal dimensions.
   * @default false
   */
  square?: ButtonVariants['square']
}

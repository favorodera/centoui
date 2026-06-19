import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  defaultVariants: {
    size: 'md',
    square: false,
    variant: 'primary',
  },
  slots: {
    root: `
      relative inline-flex items-center shrink-0 cursor-default truncate border
      border-transparent font-medium outline-none select-none transition-all
      justify-center duration-150 ease-in-out

      disabled:pointer-events-none disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error

      active:translate-y-px

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      lg: {
        root: `
          block-9 inline-9 px-3.5 text-sm gap-1.5 rounded-md

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
      },
      md: {
        root: `
          block-8 inline-8 px-3 text-sm gap-1.5 rounded-md

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
      },
      sm: {
        root: `
          block-7 inline-7 px-2.5 text-xs gap-1 rounded-sm

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
      xs: {
        root: `
          block-6 inline-6 px-2 text-xs gap-1 rounded-sm

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
    },
    square: {
      false: {
        root: 'inline-auto',
      },
      true: {
        root: 'px-0',
      },
    },
    variant: {
      destructive: {
        root: `
          bg-error text-error-foreground

          hover:bg-error/90
        `,
      },
      ghost: {
        root: `
          bg-transparent

          hover:bg-accent
        `,
      },
      link: {
        root: `
          underline underline-offset-1 px-0 bg-transparent decoration-1
          [text-underline-position:under]

          hover:text-primary

          active:translate-y-0
        `,
      },
      outline: {
        root: `
          border-border bg-transparent

          hover:bg-accent
        `,
      },
      primary: {
        root: `
          bg-primary text-primary-foreground

          hover:bg-primary/90
        `,
      },
      secondary: {
        root: `
          bg-secondary text-secondary-foreground

          hover:bg-secondary/90
        `,
      },
    },
  },
})

// COMPONENT
export { default as Button } from './button.vue'

// VARIANTS
export type ButtonVariants = VariantProps<typeof buttonVariants>

// PROPS
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

  class?: any

  /**
   * Render the button with equal dimensions.
   * @default false
   */
  square?: boolean
}

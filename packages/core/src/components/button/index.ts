import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { ButtonHTMLAttributes } from 'vue'

export const buttonVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 cursor-default items-center justify-center
      truncate border border-transparent font-medium whitespace-nowrap
      transition-all outline-none select-none

      focus-visible:ring-2 focus-visible:ring-ring

      active:translate-y-px

      disabled:pointer-events-none disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error
    `,
  },
  variants: {
    variant: {
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
      error: {
        root: `
          bg-error text-error-foreground

          hover:bg-error/90
        `,
      },
      ghost: {
        root: `
          text-foreground

          hover:bg-accent hover:text-accent-foreground
        `,
      },
      outline: {
        root: `
          border-border bg-transparent text-foreground

          hover:bg-accent hover:text-accent-foreground
        `,
      },
      link: {
        root: `
          text-foreground underline decoration-muted-foreground/40 decoration-1
          underline-offset-3

          hover:text-primary hover:decoration-primary
        `,
      },
    },
    size: {
      xs: {
        root: `
          size-6 gap-1 rounded-md px-2 text-xs

          *:data-[slot=icon]:size-3
        `,
      },
      sm: {
        root: `
          size-7 gap-1 rounded-md px-3 text-sm

          *:data-[slot=icon]:size-4
        `,
      },
      md: {
        root: `
          size-8 gap-2 rounded-md px-3 text-sm

          *:data-[slot=icon]:size-4
        `,
      },
      lg: {
        root: `
          size-9 gap-2 rounded-lg px-4 text-base

          *:data-[slot=icon]:size-5
        `,
      },
    },
    square: {
      true: {
        root: 'px-0',
      },
      false: {
        root: 'w-auto',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    square: false,
  },
})


// COMPONENT
export { default as Button } from './button.vue'


// VARIANTS
export type ButtonVariants = VariantProps<typeof buttonVariants>


// PROPS
export type ButtonProps = PrimitiveProps & {
  /**
   * The visual style of the button.
   * @default 'primary'
   */
  variant?: ButtonVariants['variant']
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: ButtonVariants['size']
  /**
   * Render the button with equal dimensions.
   * @default false
   */
  square?: boolean
  class?: any
} & /* @vue-ignore */ ButtonHTMLAttributes

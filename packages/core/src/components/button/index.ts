import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { ButtonHTMLAttributes } from 'vue'

export const buttonVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 cursor-default items-center justify-center
      truncate rounded-lg font-medium tracking-wide whitespace-nowrap
      transition-all outline-none select-none
      focus-visible:ring-3 focus-visible:ring-ring
      active:translate-y-px
      disabled:pointer-events-none disabled:opacity-50
      aria-invalid:ring-2 aria-invalid:ring-error
      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
  },
  variants: {
    variant: {
      primary: {
        root: `
          bg-primary text-primary-foreground
          hover:bg-primary/80
        `,
      },
      secondary: {
        root: `
          bg-secondary text-secondary-foreground
          hover:bg-secondary/80
        `,
      },
      error: {
        root: `
          bg-error text-error-foreground
          hover:bg-error/80
        `,
      },
      ghost: {
        root: 'hover:bg-accent hover:text-accent-foreground',
      },
      outline: {
        root: `
          ring ring-border ring-inset
          hover:bg-accent hover:text-accent-foreground
        `,
      },
      inverted: {
        root: `
          bg-inverted text-inverted-foreground
          hover:bg-inverted/80
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
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // SIZE X SQUARE
    {
      size: 'xs',
      square: true,
      class: {
        root: 'p-1',
      },
    },
    {
      size: 'sm',
      square: true,
      class: {
        root: 'p-1.5',
      },
    },
    {
      size: 'md',
      square: true,
      class: {
        root: 'p-2',
      },
    },
    {
      size: 'lg',
      square: true,
      class: {
        root: 'p-2.5',
      },
    },
    {
      size: 'xl',
      square: true,
      class: {
        root: 'p-3',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    square: false,
  },
})


// COMPONENT

export { default as Button } from './button.vue'


// TYPES — Variants

export type ButtonVariants = VariantProps<typeof buttonVariants>

// TYPES — Props

export type ButtonProps = PrimitiveProps & /* @vue-ignore */ ButtonHTMLAttributes & {
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
   * Render the button with equal padding on all sides..
   * @default false
   */
  square?: boolean
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

// TYPES — Slots
export type ButtonSlots = {
  default: []
}

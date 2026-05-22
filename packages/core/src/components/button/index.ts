import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import type { ButtonHTMLAttributes } from 'vue'

export const buttonVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 cursor-default items-center justify-center
      truncate font-medium whitespace-nowrap transition-all duration-300
      outline-none select-none
      focus-visible:ring-2 focus-visible:ring-ring
      active:translate-y-px
      disabled:pointer-events-none disabled:opacity-60
      aria-invalid:ring-2 aria-invalid:ring-error
      [&_svg]:pointer-events-none [&_svg]:shrink-0
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
        root: 'hover:bg-accent hover:text-accent-foreground',
      },
      outline: {
        root: `
          border border-border
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
          gap-1 rounded-md px-2 py-1 text-xs
          [&_svg]:size-3
        `,
      },
      sm: {
        root: `
          gap-1 rounded-md px-3 py-1 text-sm
          [&_svg]:size-4
        `,
      },
      md: {
        root: `
          gap-2 rounded-md px-4 py-2 text-sm
          [&_svg]:size-4
        `,
      },
      lg: {
        root: `
          gap-2 rounded-lg px-5 py-2 text-base
          [&_svg]:size-5
        `,
      },
      xl: {
        root: `
          gap-2 rounded-lg px-6 py-3 text-base
          [&_svg]:size-5
        `,
      },
    },
    square: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      square: true,
      class: { root: 'p-1' },
    },
    {
      size: ['sm', 'md'],
      square: true,
      class: { root: 'p-2' },
    },
    {
      size: 'lg',
      square: true,
      class: { root: 'p-2' },
    },
    {
      size: 'xl',
      square: true,
      class: { root: 'p-3' },
    },
    {
      variant: 'link',
      class: {
        root: `
          h-auto rounded-none p-0
          active:translate-y-0
        `,
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

export type ButtonProps = PrimitiveProps & /* @vue-ignore */ ButtonHTMLAttributes & Pick<ClassProp, 'class'> & {
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
}

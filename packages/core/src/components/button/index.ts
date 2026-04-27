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
        disabled:pointer-events-none disabled:opacity-40
        aria-disabled:pointer-events-none aria-disabled:opacity-40
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
      outline: {
        root: [
          'border bg-transparent',
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
        root: `
          text-primary
          focus-visible:ring-primary
        `,
      },
      secondary: {
        root: `
          text-secondary-foreground
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
        root: [
          'gap-1 px-2 py-1 text-xs',
          '[&_svg]:size-4',
        ],
      },
      sm: {
        root: [
          'gap-1.5 px-3 py-1.5 text-xs',
          '[&_svg]:size-4',
        ],
      },
      md: {
        root: [
          'gap-1.5 px-4 py-2 text-sm',
          '[&_svg]:size-5',
        ],
      },
      lg: {
        root: [
          'gap-2 px-5 py-2.5 text-sm',
          '[&_svg]:size-5',
        ],
      },
      xl: {
        root: [
          'gap-2.5 px-6 py-3 text-base',
          '[&_svg]:size-6',
        ],
      },
    },
  },
  compoundVariants: [
    // Solid — compound overrides the base `text-{color}` with `text-{color}-foreground`
    // so the label stays readable against the filled background.
    {
      variant: 'solid',
      color: 'primary',
      class: { root: 'bg-primary text-primary-foreground' },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: { root: 'bg-secondary text-secondary-foreground' },
    },
    {
      variant: 'solid',
      color: 'accent',
      class: { root: 'bg-accent text-accent-foreground' },
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: { root: 'bg-neutral text-neutral-foreground' },
    },
    {
      variant: 'solid',
      color: 'success',
      class: { root: 'bg-success text-success-foreground' },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: { root: 'bg-warning text-warning-foreground' },
    },
    {
      variant: 'solid',
      color: 'error',
      class: { root: 'bg-error text-error-foreground' },
    },
    {
      variant: 'solid',
      color: 'info',
      class: { root: 'bg-info text-info-foreground' },
    },

    // Outline — only the border color needs overriding; text and ring come from
    // the base color variant.
    {
      variant: 'outline',
      color: 'primary',
      class: { root: 'border-primary' },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: { root: 'border-secondary-foreground' },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: { root: 'border-accent' },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: { root: 'border-neutral' },
    },
    {
      variant: 'outline',
      color: 'success',
      class: { root: 'border-success' },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { root: 'border-warning' },
    },
    {
      variant: 'outline',
      color: 'error',
      class: { root: 'border-error' },
    },
    {
      variant: 'outline',
      color: 'info',
      class: { root: 'border-info' },
    },

    // Ghost — only the hover background needs overriding; text and ring come from
    // the base color variant.
    {
      variant: 'ghost',
      color: 'primary',
      class: { root: 'hover:bg-primary/10' },
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: { root: 'hover:bg-secondary' },
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

    // Note: `link` has no compound variants — text color is purely semantic and
    // fully covered by the base `color` variant's `text-{color}` class. There is
    // no background or border to tint, so no per-color overrides are needed.
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

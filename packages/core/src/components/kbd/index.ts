import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

/** Kbd style variants */
export const kbdVariants = tv({
  slots: {
    root: `
      pointer-events-none inline-flex w-fit items-center justify-center
      rounded-sm px-1 font-medium select-none
    `,
  },
  variants: {
    color: {
      primary: {},
      secondary: { },
      accent: {},
      neutral: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },
    variant: {
      solid: {},
      subtle: {
        root: 'ring ring-inset',
      },
      outline: {
        root: 'bg-transparent ring ring-inset',
      },
      soft: {},
    },
    size: {
      xs: {
        root: 'h-3.5 min-w-3.5 text-[9px]',
      },
      sm: {
        root: 'h-4 min-w-4 text-[10px]',
      },
      md: {
        root: 'h-5 min-w-5 text-[11px]',
      },
      lg: {
        root: 'h-6 min-w-6 text-xs',
      },
      xl: {
        root: 'h-7 min-w-7 text-[13px]',
      },
    },
  },
  compoundVariants: [
    // Solid
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary text-primary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: 'bg-secondary text-secondary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'accent',
      class: {
        root: 'bg-accent text-accent-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: 'bg-neutral text-neutral-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success text-success-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning text-warning-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: 'bg-error text-error-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info text-info-foreground',
      },
    },

    // Soft
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/15 text-primary',
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: 'bg-secondary/15 text-secondary',
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: 'bg-accent/15 text-accent',
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-neutral/15 text-neutral',
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/15 text-success',
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/15 text-warning',
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/15 text-error',
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/15 text-info',
      },
    },

    // Subtle
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'bg-primary/8 text-primary ring-primary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: 'bg-secondary/8 text-secondary ring-secondary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: 'bg-accent/8 text-accent ring-accent/25',
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: 'bg-neutral/8 text-neutral ring-neutral/25',
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'bg-success/8 text-success ring-success/25',
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'bg-warning/8 text-warning ring-warning/25',
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: 'bg-error/8 text-error ring-error/25',
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: 'bg-info/8 text-info ring-info/25',
      },
    },

    // Outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'text-primary ring-primary',
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'text-secondary ring-secondary',
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: 'text-accent ring-accent',
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'text-neutral ring-neutral',
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'text-success ring-success',
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'text-warning ring-warning',
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'text-error ring-error',
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'text-info ring-info',
      },
    },
  ],
  defaultVariants: {
    color: 'neutral',
    variant: 'soft',
    size: 'md',
  },
})


// Component exports

export { default as Kbd } from './kbd.vue'


// Types exports

/** Variant props for Kbd component. */
export type KbdVariants = VariantProps<typeof kbdVariants>

/** Props for Kbd component. */
export type KbdProps = PrimitiveProps & {
  /**
   * The size of the kbd.
   * @default 'md'
   */
  size?: KbdVariants['size']
  /**
   * The color of the kbd.
   * @default 'neutral'
   */
  color?: KbdVariants['color']
  /**
   * The variant of the kbd.
   * @default 'soft'
   */
  variant?: KbdVariants['variant']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for Kbd component. */
export type KbdSlots = {
  /** Default slot. */
  default: []
}

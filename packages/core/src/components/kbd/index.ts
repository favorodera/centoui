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
      primary: {
        root: 'text-primary',
      },
      secondary: {
        root: 'text-secondary',
      },
      accent: {
        root: 'text-accent',
      },
      neutral: {
        root: 'text-neutral',
      },
      success: {
        root: 'text-success',
      },
      warning: {
        root: 'text-warning',
      },
      error: {
        root: 'text-error',
      },
      info: {
        root: 'text-info',
      },
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
      color: 'info',
      class: {
        root: 'bg-info text-info-foreground',
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
      color: 'neutral',
      class: {
        root: 'bg-neutral text-neutral-foreground',
      },
    },

    // Soft
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/15',
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: 'bg-secondary/15',
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: 'bg-accent/15',
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/15',
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/15',
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/15',
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/15',
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-neutral/15',
      },
    },

    // Subtle
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'bg-primary/8 ring-primary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: 'bg-secondary/8 ring-secondary/25',
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: 'bg-accent/8 ring-accent/25',
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: 'bg-neutral/8 ring-neutral/25',
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'bg-success/8 ring-success/25',
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'bg-warning/8 ring-warning/25',
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: 'bg-error/8 ring-error/25',
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: 'bg-info/8 ring-info/25',
      },
    },

    // Outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'ring-primary',
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'ring-secondary',
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: 'ring-accent',
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'ring-neutral',
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'ring-success',
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'ring-warning',
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'ring-error',
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'ring-info',
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

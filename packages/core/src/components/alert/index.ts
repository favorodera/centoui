import { type PrimitiveProps, createContext } from 'reka-ui'
import { tv, type VariantProps, type ClassValue } from 'tailwind-variants'


/** Alert style variants */
export const alertVariants = tv({
  slots: {
    root: `
      relative grid w-full grid-cols-[auto_1fr_auto_auto] rounded-lg px-4 py-3
    `,
    media: `
      col-start-1 row-span-2 row-start-1 mr-3 shrink-0 self-start
      [&>svg]:size-4 [&>svg]:translate-y-0.5
    `,
    title: 'col-start-2 row-start-1 min-w-0 text-sm/tight font-medium',
    description: 'col-start-2 row-start-2 mt-0.5 min-w-0 text-sm',
    close: 'col-start-4 row-start-1 ml-2 shrink-0 self-start p-0',
    actions: 'flex flex-row flex-wrap items-center gap-2',
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
    },
    color: {
      primary: {},
      secondary: {},
      accent: {},
      neutral: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },
    orientation: {
      horizontal: {
        actions: 'col-start-3 row-span-2 row-start-1 ml-3 self-center',
      },
      vertical: {
        actions: 'col-start-2 row-start-3 mt-2',
      },
    },
  },
  compoundVariants: [
    // Solid
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary',
        title: 'text-primary-foreground',
        description: 'text-primary-foreground/80',
        media: '[&>svg]:text-primary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: 'bg-secondary',
        title: 'text-secondary-foreground',
        description: 'text-secondary-foreground/80',
        media: '[&>svg]:text-secondary-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'accent',
      class: {
        root: 'bg-accent',
        title: 'text-accent-foreground',
        description: 'text-accent-foreground/80',
        media: '[&>svg]:text-accent-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: 'bg-neutral',
        title: 'text-neutral-foreground',
        description: 'text-neutral-foreground/80',
        media: '[&>svg]:text-neutral-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success',
        title: 'text-success-foreground',
        description: 'text-success-foreground/80',
        media: '[&>svg]:text-success-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning',
        title: 'text-warning-foreground',
        description: 'text-warning-foreground/80',
        media: '[&>svg]:text-warning-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: 'bg-error',
        title: 'text-error-foreground',
        description: 'text-error-foreground/80',
        media: '[&>svg]:text-error-foreground',
      },
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info',
        title: 'text-info-foreground',
        description: 'text-info-foreground/80',
        media: '[&>svg]:text-info-foreground',
      },
    },

    // Soft
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/15',
        title: 'text-primary',
        description: 'text-primary/80',
        media: '[&>svg]:text-primary',
      },
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: 'bg-secondary/15',
        title: 'text-secondary',
        description: 'text-secondary/80',
        media: '[&>svg]:text-secondary',
      },
    },
    {
      variant: 'soft',
      color: 'accent',
      class: {
        root: 'bg-accent/15',
        title: 'text-accent',
        description: 'text-accent/80',
        media: '[&>svg]:text-accent',
      },
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-neutral/15',
        title: 'text-neutral',
        description: 'text-neutral/80',
        media: '[&>svg]:text-neutral',
      },
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/15',
        title: 'text-success',
        description: 'text-success/80',
        media: '[&>svg]:text-success',
      },
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/15',
        title: 'text-warning',
        description: 'text-warning/80',
        media: '[&>svg]:text-warning',
      },
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/15',
        title: 'text-error',
        description: 'text-error/80',
        media: '[&>svg]:text-error',
      },
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/15',
        title: 'text-info',
        description: 'text-info/80',
        media: '[&>svg]:text-info',
      },
    },

    // Subtle
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'bg-primary/8 ring-primary/25',
        title: 'text-primary',
        description: 'text-primary/80',
        media: '[&>svg]:text-primary',
      },
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: {
        root: 'bg-secondary/8 ring-secondary/25',
        title: 'text-secondary',
        description: 'text-secondary/80',
        media: '[&>svg]:text-secondary',
      },
    },
    {
      variant: 'subtle',
      color: 'accent',
      class: {
        root: 'bg-accent/8 ring-accent/25',
        title: 'text-accent',
        description: 'text-accent/80',
        media: '[&>svg]:text-accent',
      },
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: 'bg-neutral/8 ring-neutral/25',
        title: 'text-neutral',
        description: 'text-neutral/80',
        media: '[&>svg]:text-neutral',
      },
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'bg-success/8 ring-success/25',
        title: 'text-success',
        description: 'text-success/80',
        media: '[&>svg]:text-success',
      },
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'bg-warning/8 ring-warning/25',
        title: 'text-warning',
        description: 'text-warning/80',
        media: '[&>svg]:text-warning',
      },
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: 'bg-error/8 ring-error/25',
        title: 'text-error',
        description: 'text-error/80',
        media: '[&>svg]:text-error',
      },
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: 'bg-info/8 ring-info/25',
        title: 'text-info',
        description: 'text-info/80',
        media: '[&>svg]:text-info',
      },
    },

    // Outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'ring-primary',
        title: 'text-primary',
        description: 'text-primary/80',
        media: '[&>svg]:text-primary',
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'ring-secondary',
        title: 'text-secondary',
        description: 'text-secondary/80',
        media: '[&>svg]:text-secondary',
      },
    },
    {
      variant: 'outline',
      color: 'accent',
      class: {
        root: 'ring-accent',
        title: 'text-accent',
        description: 'text-accent/80',
        media: '[&>svg]:text-accent',
      },
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'ring-neutral',
        title: 'text-neutral',
        description: 'text-neutral/80',
        media: '[&>svg]:text-neutral',
      },
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'ring-success',
        title: 'text-success',
        description: 'text-success/80',
        media: '[&>svg]:text-success',
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'ring-warning',
        title: 'text-warning',
        description: 'text-warning/80',
        media: '[&>svg]:text-warning',
      },
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'ring-error',
        title: 'text-error',
        description: 'text-error/80',
        media: '[&>svg]:text-error',
      },
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'ring-info',
        title: 'text-info',
        description: 'text-info/80',
        media: '[&>svg]:text-info',
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    orientation: 'vertical',
  },
})


// Component exports

export { default as AlertRoot } from './alert-root.vue'
export { default as AlertMedia } from './alert-media.vue'
export { default as AlertTitle } from './alert-title.vue'
export { default as AlertDescription } from './alert-description.vue'
export { default as AlertActions } from './alert-actions.vue'
export { default as AlertClose } from './alert-close.vue'

// Methods exports
export const [injectAlertRootContext, provideAlertRootContext] = createContext<AlertRootContext>('AlertRoot', 'centoui:alert-root:context')

// Types exports

/** AlertRoot context type */
export type AlertRootContext = AlertVariants & Pick<AlertRootProps, 'open'> & {
  /** State of the alert (open or closed). */
  state: 'open' | 'closed'
  /** Closes the alert by setting open to false. */
  onClose: () => void
}

/** Variant props for Alert component. */
export type AlertVariants = VariantProps<typeof alertVariants>

/** Props for AlertRoot Component */
export type AlertRootProps = PrimitiveProps & {
  /**
     * The visual style of the alert.
     * @default 'solid'
     */
  variant?: AlertVariants['variant']
  /**
   * The orientation between the content and the actions.
   * @default 'vertical'
   */
  orientation?: AlertVariants['orientation']
  /**
     * The color of the alert.
     * @default 'primary'
     */
  color?: AlertVariants['color']
  /**
   * Controlled open state of the alert (use with v-model:open).
   * @default true
   */
  open?: boolean
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AlertMedia Component */
export type AlertMediaProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AlertTitle Component */
export type AlertTitleProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AlertDescription Component */
export type AlertDescriptionProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AlertAction Component */
export type AlertActionsProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AlertClose Component */
export type AlertCloseProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Emits for AlertRoot component. */
export type AlertRootEmits = {
  /**
   * Emitted when the open state changes (v-model:open).
   *
   * @param event - The emit event name.
   * @param value - The new open state.
   */
  (event: 'update:open', value: boolean): void
}

/** Slots for AlertRoot component. */
export type AlertRootSlots = {
  /** Default slot. */
  default: []
}

/** Slots for AlertMedia component. */
export type AlertMediaSlots = {
  /** Default slot. */
  default: []
}

/** Slots for AlertTitle component. */
export type AlertTitleSlots = {
  /** Default slot. */
  default: []
}

/** Slots for AlertDescription component. */
export type AlertDescriptionSlots = {
  default: []
}

/** Slots for AlertActions component. */
export type AlertActionsSlots = {
  /** Default slot. */
  default: []
}

/** Slots for AlertClose component. */
export type AlertCloseSlots = {
  /** Default slot. */
  default: []
}

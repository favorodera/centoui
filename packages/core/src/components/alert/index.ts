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
    status: {
      neutral: {
        root: 'bg-neutral/15',
        title: 'text-neutral-foreground',
        description: 'text-neutral-foreground/80',
        media: '[&>svg]:text-neutral-foreground',
      },
      success: {
        root: 'bg-success/15',
        title: 'text-success',
        description: 'text-success/80',
        media: '[&>svg]:text-success',
      },
      warning: {
        root: 'bg-warning/15',
        title: 'text-warning',
        description: 'text-warning/80',
        media: '[&>svg]:text-warning',
      },
      error: {
        root: 'bg-error/15',
        title: 'text-error',
        description: 'text-error/80',
        media: '[&>svg]:text-error',
      },
      info: {
        root: 'bg-info/15',
        title: 'text-info',
        description: 'text-info/80',
        media: '[&>svg]:text-info',
      },
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
  defaultVariants: {
    status: 'neutral',
    orientation: 'vertical',
  },
})


// COMPONENTS

export { default as AlertRoot } from './alert-root.vue'
export { default as AlertMedia } from './alert-media.vue'
export { default as AlertTitle } from './alert-title.vue'
export { default as AlertDescription } from './alert-description.vue'
export { default as AlertActions } from './alert-actions.vue'
export { default as AlertClose } from './alert-close.vue'


// CONTEXTS

export const [injectCentouiAlertRootContext, provideCentouiAlertRootContext] = createContext<AlertRootContext>('AlertRoot', 'centoui:alert-root:context')


// PROPS

/** AlertRoot context type */
export type AlertRootContext = Omit<AlertRootProps, 'class'> & {
  /** Closes the alert by setting open to false. */
  onClose: () => void
  /** Styles for the alert */
  styles: ReturnType<typeof alertVariants>
}

/** Variant props for Alert component. */
export type AlertVariants = VariantProps<typeof alertVariants>

/** Props for AlertRoot Component */
export type AlertRootProps = PrimitiveProps & {
  /**
   * The orientation between the content and the actions.
   * @default 'vertical'
   */
  orientation?: AlertVariants['orientation']
  /**
     * The status of the alert.
     * @default 'neutral'
     */
  status?: AlertVariants['status']
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


// EMITS

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


// SLOTS

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

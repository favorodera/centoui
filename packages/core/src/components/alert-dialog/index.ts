import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import {
  type AlertDialogProps as RekaAlertDialogRootProps,
  type AlertDialogEmits as RekaAlertDialogRootEmits,
  type AlertDialogTriggerProps as RekaAlertDialogTriggerProps,
  type AlertDialogPortalProps as RekaAlertDialogPortalProps,
  type AlertDialogOverlayProps as RekaAlertDialogOverlayProps,
  type AlertDialogContentProps as RekaAlertDialogContentProps,
  type AlertDialogContentEmits as RekaAlertDialogContentEmits,
  type AlertDialogTitleProps as RekaAlertDialogTitleProps,
  type AlertDialogDescriptionProps as RekaAlertDialogDescriptionProps,
  type AlertDialogCancelProps as RekaAlertDialogCancelProps,
  type AlertDialogActionProps as RekaAlertDialogActionProps,
  createContext,
  type PrimitiveProps,
} from 'reka-ui'
import type { ButtonProps } from '../button'

export const alertDialogVariants = tv({
  slots: {
    trigger: '',
    overlay: `
      fixed inset-0 z-50 bg-overlay
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=open]:animate-in data-[state=open]:fade-in-0
    `,
    content: `
      fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)]
      -translate-1/2 gap-4 overflow-hidden rounded-lg bg-surface-raised py-4
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95
      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
      sm:max-w-md
    `,
    header: `
      flex flex-col items-center gap-1.5 px-4 text-center
      sm:items-start sm:text-left
    `,
    title: 'text-base font-medium',
    description: 'text-sm text-muted-foreground',
    footer: `
      flex flex-col-reverse gap-4 px-4
      sm:flex-row sm:justify-end sm:gap-2
    `,
    cancel: '',
    action: '',
  },
})


// COMPONENTS

export { default as AlertDialogRoot } from './alert-dialog-root.vue'
export { default as AlertDialogTrigger } from './alert-dialog-trigger.vue'
export { default as AlertDialogPortal } from './alert-dialog-portal.vue'
export { default as AlertDialogOverlay } from './alert-dialog-overlay.vue'
export { default as AlertDialogContent } from './alert-dialog-content.vue'
export { default as AlertDialogHeader } from './alert-dialog-header.vue'
export { default as AlertDialogTitle } from './alert-dialog-title.vue'
export { default as AlertDialogDescription } from './alert-dialog-description.vue'
export { default as AlertDialogFooter } from './alert-dialog-footer.vue'
export { default as AlertDialogCancel } from './alert-dialog-cancel.vue'
export { default as AlertDialogAction } from './alert-dialog-action.vue'


// CONTEXT

export const [injectCentouiAlertDialogRootContext, provideCentouiAlertDialogRootContext] = createContext<AlertDialogRootContext>('AlertDialogRoot', 'centoui:alert-dialog-root:context')


// TYPES — Variants

export type AlertDialogVariants = VariantProps<typeof alertDialogVariants>


// TYPES — Context

export type AlertDialogRootContext = {
  /** Styles for the alert */
  styles: ReturnType<typeof alertDialogVariants>
}


// TYPES — Props

export type AlertDialogRootProps = RekaAlertDialogRootProps

export type AlertDialogTriggerProps = RekaAlertDialogTriggerProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AlertDialogPortalProps = RekaAlertDialogPortalProps

export type AlertDialogOverlayProps = RekaAlertDialogOverlayProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AlertDialogContentProps = RekaAlertDialogContentProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AlertDialogHeaderProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AlertDialogTitleProps = RekaAlertDialogTitleProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AlertDialogDescriptionProps = RekaAlertDialogDescriptionProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AlertDialogFooterProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AlertDialogCancelProps = RekaAlertDialogCancelProps & Pick<ButtonProps, 'variant' | 'class' | 'size' | 'square'>

export type AlertDialogActionProps = RekaAlertDialogActionProps & Pick<ButtonProps, 'variant' | 'class' | 'size' | 'square'>


// TYPES — Emits
export type AlertDialogRootEmits = RekaAlertDialogRootEmits

export type AlertDialogContentEmits = RekaAlertDialogContentEmits


// TYPES — Slots
export type AlertDialogRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
    /** Close the dialog */
    close: () => void
  }) => []
}

export type AlertDialogTriggerSlots = {
  default: []
}

export type AlertDialogPortalSlots = {
  default: []
}

export type AlertDialogOverlaySlots = {
  default: []
}

export type AlertDialogContentSlots = {
  default: []
}

export type AlertDialogHeaderSlots = {
  default: []
}

export type AlertDialogTitleSlots = {
  default: []
}

export type AlertDialogDescriptionSlots = {
  default: []
}

export type AlertDialogFooterSlots = {
  default: []
}

export type AlertDialogCancelSlots = {
  default: []
}

export type AlertDialogActionSlots = {
  default: []
}



import { tv, type ClassProp } from 'tailwind-variants'
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
      fixed top-1/2 left-1/2 z-50 grid max-h-[90dvh] w-full
      max-w-[calc(100%-3rem)] -translate-1/2 gap-5 overflow-hidden
      overflow-y-auto rounded-xl bg-surface-raised py-5 shadow-lg
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95
      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
      sm:max-w-md
    `,
    header: `
      flex flex-col items-center gap-2 px-5 text-center
      sm:items-start sm:text-left
    `,
    title: `
      text-base font-medium
      sm:text-lg
    `,
    description: 'text-sm/5 text-muted-foreground',
    footer: `
      flex flex-col-reverse gap-2 px-5
      sm:flex-row sm:justify-end
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


// TYPES — Props

export type AlertDialogRootProps = RekaAlertDialogRootProps

export type AlertDialogTriggerProps = RekaAlertDialogTriggerProps & Pick<ClassProp, 'class'>

export type AlertDialogPortalProps = RekaAlertDialogPortalProps

export type AlertDialogOverlayProps = RekaAlertDialogOverlayProps & Pick<ClassProp, 'class'>

export type AlertDialogContentProps = RekaAlertDialogContentProps & Pick<ClassProp, 'class'>

export type AlertDialogHeaderProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type AlertDialogTitleProps = RekaAlertDialogTitleProps & Pick<ClassProp, 'class'>

export type AlertDialogDescriptionProps = RekaAlertDialogDescriptionProps & Pick<ClassProp, 'class'>

export type AlertDialogFooterProps = PrimitiveProps & Pick<ClassProp, 'class'>

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


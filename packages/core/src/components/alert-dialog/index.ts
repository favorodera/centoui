import type {
  PrimitiveProps,
  AlertDialogActionProps as RekaAlertDialogActionProps,
  AlertDialogCancelProps as RekaAlertDialogCancelProps,
  AlertDialogContentEmits as RekaAlertDialogContentEmits,
  AlertDialogContentProps as RekaAlertDialogContentProps,
  AlertDialogDescriptionProps as RekaAlertDialogDescriptionProps,
  AlertDialogEmits as RekaAlertDialogRootEmits,
  AlertDialogProps as RekaAlertDialogRootProps,
  AlertDialogTitleProps as RekaAlertDialogTitleProps,
  AlertDialogTriggerProps as RekaAlertDialogTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'
import type { ButtonProps } from '../button'

export const alertDialogVariants = tv({
  slots: {
    action: '',
    cancel: '',
    content: `
      fixed inset-bs-1/2 inset-s-1/2 z-50 grid inline-[calc(100%-2.5rem)]
      max-inline-md -translate-1/2 gap-4 overflow-hidden rounded-lg border
      border-border bg-surface-raised py-4 transition-all

      has-data-[slot=alert-dialog-footer]:pbe-0

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-98

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-98
    `,
    description: 'text-sm text-muted-foreground',
    footer: `
      flex flex-col-reverse gap-2 bg-neutral p-4

      sm:flex-row sm:justify-end
    `,
    header: `
      flex flex-col gap-1 px-4 text-center

      sm:text-start
    `,
    overlay: `
      fixed inset-0 z-50 bg-overlay backdrop-blur-xs transition-all

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0

      data-[state=open]:animate-in data-[state=open]:fade-in-0
    `,
    title: 'text-base font-semibold text-foreground',
    trigger: '',
  },
})

// COMPONENTS
export { default as AlertDialogAction } from './alert-dialog-action.vue'
export { default as AlertDialogCancel } from './alert-dialog-cancel.vue'
export { default as AlertDialogContent } from './alert-dialog-content.vue'
export { default as AlertDialogDescription } from './alert-dialog-description.vue'
export { default as AlertDialogFooter } from './alert-dialog-footer.vue'
export { default as AlertDialogHeader } from './alert-dialog-header.vue'
export { default as AlertDialogRoot } from './alert-dialog-root.vue'
export { default as AlertDialogTitle } from './alert-dialog-title.vue'
export { default as AlertDialogTrigger } from './alert-dialog-trigger.vue'

// PROPS
export type AlertDialogRootProps = RekaAlertDialogRootProps

export type AlertDialogTriggerProps = RekaAlertDialogTriggerProps & { class?: any }

export type AlertDialogContentProps = RekaAlertDialogContentProps & { class?: any }

export type AlertDialogHeaderProps = PrimitiveProps & { class?: any }

export type AlertDialogTitleProps = RekaAlertDialogTitleProps & { class?: any }

export type AlertDialogDescriptionProps = RekaAlertDialogDescriptionProps & { class?: any }

export type AlertDialogFooterProps = PrimitiveProps & { class?: any }

export type AlertDialogCancelProps = ButtonProps & RekaAlertDialogCancelProps

export type AlertDialogActionProps = ButtonProps & RekaAlertDialogActionProps

// EMITS
export type AlertDialogRootEmits = RekaAlertDialogRootEmits

export type AlertDialogContentEmits = RekaAlertDialogContentEmits

// SLOTS
export interface AlertDialogRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean

    /** Close the dialog */
    close: () => void
  }) => any
}

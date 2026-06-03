import { tv } from 'tailwind-variants'
import {
  type AlertDialogProps as RekaAlertDialogRootProps,
  type AlertDialogEmits as RekaAlertDialogRootEmits,
  type AlertDialogTriggerProps as RekaAlertDialogTriggerProps,
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
      fixed inset-0 z-50 bg-overlay backdrop-blur-xs transition-all

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0

      data-[state=open]:animate-in data-[state=open]:fade-in-0
    `,
    content: `
      fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2.5rem)] max-w-md
      -translate-1/2 gap-4 overflow-hidden rounded-lg border border-border
      bg-surface-raised py-4 transition-all

      has-data-[slot=alert-dialog-footer]:pb-0

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-98

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-98
    `,
    header: `
      flex flex-col gap-1 px-4 text-center

      sm:text-left
    `,
    title: 'text-base font-semibold text-foreground',
    description: 'text-sm text-muted-foreground',
    footer: `
      flex flex-col-reverse gap-2 bg-neutral p-4

      sm:flex-row sm:justify-end
    `,
    cancel: '',
    action: '',
  },
})


// COMPONENTS
export { default as AlertDialogRoot } from './alert-dialog-root.vue'
export { default as AlertDialogTrigger } from './alert-dialog-trigger.vue'
export { default as AlertDialogContent } from './alert-dialog-content.vue'
export { default as AlertDialogHeader } from './alert-dialog-header.vue'
export { default as AlertDialogTitle } from './alert-dialog-title.vue'
export { default as AlertDialogDescription } from './alert-dialog-description.vue'
export { default as AlertDialogFooter } from './alert-dialog-footer.vue'
export { default as AlertDialogCancel } from './alert-dialog-cancel.vue'
export { default as AlertDialogAction } from './alert-dialog-action.vue'


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
export type AlertDialogRootSlots = {
  default?: (props: {
    /** Current open state */
    open: boolean
    /** Close the dialog */
    close: () => void
  }) => any
}


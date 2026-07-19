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
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'
import type { ButtonProps } from '../button'

// Variants
export const alertDialogVariants = tv({
  slots: {
    action: 'group/alert-dialog-action',
    cancel: 'group/alert-dialog-cancel',
    content: `
      fixed inset-bs-1/2 inset-s-1/2 z-50 grid inline-[90dvw] max-inline-sm
      -translate-1/2 gap-4 rounded-xl border bg-overlay p-4 overflow-hidden
      group/alert-dialog-content bg-clip-padding

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-98

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-98
    `,
    description: 'text-sm text-muted-foreground group/alert-dialog-description',
    footer: `
      flex flex-col-reverse gap-2 p-4 -mx-4 -mbe-4 bg-muted/50
      group/alert-dialog-footer

      sm:flex-row sm:justify-end
    `,
    header: `
      flex flex-col gap-1 px-4 pbs-4 text-center -mx-4 -mbs-4
      group/alert-dialog-header

      sm:text-start
    `,
    overlay: `
      fixed inset-0 z-50 bg-scrim backdrop-blur-xs group/alert-dialog-overlay

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0

      data-[state=open]:animate-in data-[state=open]:fade-in-0
    `,
    title: 'text-base font-medium group/alert-dialog-title',
    trigger: 'group/alert-dialog-trigger',
  },
})

// Components
export { default as AlertDialogAction } from './alert-dialog-action.vue'
export { default as AlertDialogCancel } from './alert-dialog-cancel.vue'
export { default as AlertDialogContent } from './alert-dialog-content.vue'
export { default as AlertDialogDescription } from './alert-dialog-description.vue'
export { default as AlertDialogFooter } from './alert-dialog-footer.vue'
export { default as AlertDialogHeader } from './alert-dialog-header.vue'
export { default as AlertDialogRoot } from './alert-dialog-root.vue'
export { default as AlertDialogTitle } from './alert-dialog-title.vue'
export { default as AlertDialogTrigger } from './alert-dialog-trigger.vue'

// Props
export type AlertDialogRootProps = RekaAlertDialogRootProps

export type AlertDialogTriggerProps = RekaAlertDialogTriggerProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertDialogContentProps = RekaAlertDialogContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertDialogHeaderProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertDialogTitleProps = RekaAlertDialogTitleProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertDialogDescriptionProps = RekaAlertDialogDescriptionProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertDialogFooterProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AlertDialogCancelProps = ButtonProps & RekaAlertDialogCancelProps

export type AlertDialogActionProps = ButtonProps & RekaAlertDialogActionProps

// Emits
export type AlertDialogRootEmits = RekaAlertDialogRootEmits

export type AlertDialogContentEmits = RekaAlertDialogContentEmits

// Slots
export interface AlertDialogRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean

    /** Close the dialog */
    close: () => void
  }) => void
}

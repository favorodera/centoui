import type {
  PrimitiveProps,
  DialogCloseProps as RekaDialogCloseProps,
  DialogContentEmits as RekaDialogContentEmits,
  DialogContentProps as RekaDialogContentProps,
  DialogDescriptionProps as RekaDialogDescriptionProps,
  DialogRootEmits as RekaDialogRootEmits,
  DialogRootProps as RekaDialogRootProps,
  DialogTitleProps as RekaDialogTitleProps,
  DialogTriggerProps as RekaDialogTriggerProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const sheetVariants = tv({
  defaultVariants: {
    side: 'right',
  },
  slots: {
    close: '',
    content: `
      fixed z-50 flex flex-col gap-4 border-border bg-surface-raised p-6
      overflow-hidden

      data-[state=closed]:animate-out data-[state=closed]:duration-150
      data-[state=closed]:ease-in

      data-[state=open]:animate-in data-[state=open]:duration-300
      data-[state=open]:ease-out
    `,
    description: 'text-sm text-muted-foreground',
    footer: `flex gap-2 p-6 -mx-6 -mbe-6 bg-neutral items-center mbs-auto`,
    header: `relative flex flex-col gap-1 px-6 pbs-6 -mx-6 -mbs-6`,
    headerClose: 'absolute inset-bs-6 inset-e-6',
    overlay: `
      fixed inset-0 z-50 bg-overlay backdrop-blur-xs

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:duration-150 data-[state=closed]:ease-in

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:duration-300 data-[state=open]:ease-out
    `,
    title: 'text-base font-semibold text-foreground',
    trigger: '',
  },
  variants: {
    side: {
      bottom: {
        content: `
          inset-x-0 inset-be-0 block-auto max-block-[90dvh] border-bs

          data-[state=closed]:slide-out-to-bottom

          data-[state=open]:slide-in-from-bottom
        `,
      },
      left: {
        content: `
          inset-y-0 inset-s-0 block-full inline-full max-inline-sm border-e

          data-[state=closed]:slide-out-to-left

          data-[state=open]:slide-in-from-left
        `,
      },
      right: {
        content: `
          inset-y-0 inset-e-0 block-full inline-full max-inline-sm border-s

          data-[state=closed]:slide-out-to-right

          data-[state=open]:slide-in-from-right
        `,
      },
      top: {
        content: `
          inset-x-0 inset-bs-0 block-auto max-block-[90dvh]

          data-[state=closed]:slide-out-to-top

          data-[state=open]:slide-in-from-top
        `,
      },
    },
  },
})

// COMPONENTS
export { default as SheetClose } from './sheet-close.vue'
export { default as SheetContent } from './sheet-content.vue'
export { default as SheetDescription } from './sheet-description.vue'
export { default as SheetFooter } from './sheet-footer.vue'
export { default as SheetHeader } from './sheet-header.vue'
export { default as SheetRoot } from './sheet-root.vue'
export { default as SheetTitle } from './sheet-title.vue'
export { default as SheetTrigger } from './sheet-trigger.vue'

// VARIANTS
export type SheetVariants = VariantProps<typeof sheetVariants>

// PROPS
export type SheetRootProps = RekaDialogRootProps & { class?: any }

export type SheetTriggerProps = RekaDialogTriggerProps & { class?: any }

export type SheetContentProps = RekaDialogContentProps & {
  class?: any

  /**
   * The direction the sheet opens from
   * @default 'right'
   */
  side?: SheetVariants['side']
}

export type SheetHeaderProps = PrimitiveProps & {
  class?: any

  /**
   * Whether to show the close button inside the header
   * @default true
   */
  showClose?: boolean
}

export type SheetTitleProps = RekaDialogTitleProps & { class?: any }

export type SheetDescriptionProps = RekaDialogDescriptionProps & { class?: any }

export type SheetCloseProps = RekaDialogCloseProps & { class?: any }

export type SheetFooterProps = PrimitiveProps & { class?: any }

// EMITS
export type SheetContentEmits = RekaDialogContentEmits

export type SheetRootEmits = RekaDialogRootEmits

// SLOTS
export interface SheetRootSlots {
  default: (props: {
    /** Current open state */
    open: boolean

    /** Close the sheet */
    close: () => void
  }) => any
}

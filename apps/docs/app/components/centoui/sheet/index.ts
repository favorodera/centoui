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
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const sheetVariants = tv({
  defaultVariants: {
    side: 'right',
  },
  slots: {
    close: 'group/sheet-close',
    content: `
      fixed z-50 flex flex-col gap-4 bg-overlay p-4 overflow-hidden
      group/sheet-content bg-clip-padding

      *:data-[slot=separator]:data-[orientation=horizontal]:-mx-4

      data-[state=closed]:animate-out

      data-[state=open]:animate-in
    `,
    description: 'text-sm text-muted-foreground group/sheet-description',
    footer: `
      flex gap-2 p-4 -mx-4 -mbe-4 bg-muted/50 items-center mbs-auto
      group/sheet-footer
    `,
    header: `
      relative flex flex-col gap-1 px-4 pbs-4 -mx-4 -mbs-4 group/sheet-header
    `,
    headerClose: 'absolute inset-bs-4 inset-e-4 group/sheet-header-close',
    overlay: `
      fixed inset-0 z-50 bg-scrim backdrop-blur-xs group/sheet-overlay

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0

      data-[state=open]:animate-in data-[state=open]:fade-in-0
    `,
    title: 'text-base font-semibold text-foreground group/sheet-title',
    trigger: 'group/sheet-trigger',
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
          inset-y-0 inset-s-0 block-full inline-full max-inline-xs border-e

          data-[state=closed]:slide-out-to-left

          data-[state=open]:slide-in-from-left
        `,
      },
      right: {
        content: `
          inset-y-0 inset-e-0 block-full inline-full max-inline-xs border-s

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
export type SheetVariants = VariantProps<typeof sheetVariants>

// Components
export { default as SheetClose } from './sheet-close.vue'
export { default as SheetContent } from './sheet-content.vue'
export { default as SheetDescription } from './sheet-description.vue'
export { default as SheetFooter } from './sheet-footer.vue'
export { default as SheetHeader } from './sheet-header.vue'
export { default as SheetRoot } from './sheet-root.vue'
export { default as SheetTitle } from './sheet-title.vue'
export { default as SheetTrigger } from './sheet-trigger.vue'

// Props
export type SheetRootProps = RekaDialogRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type SheetTriggerProps = RekaDialogTriggerProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type SheetContentProps = RekaDialogContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * The direction the sheet opens from
   * @default 'right'
   */
  side?: SheetVariants['side']
}

export type SheetHeaderProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Whether to show the close button inside the header
   * @default true
   */
  showClose?: boolean
}

export type SheetTitleProps = RekaDialogTitleProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type SheetDescriptionProps = RekaDialogDescriptionProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type SheetCloseProps = RekaDialogCloseProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type SheetFooterProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type SheetContentEmits = RekaDialogContentEmits

export type SheetRootEmits = RekaDialogRootEmits

// Slots
export interface SheetRootSlots {
  default: (props: {
    /** Current open state */
    open: boolean

    /** Close the sheet */
    close: () => void
  }) => void
}

import { tv, type VariantProps } from 'tailwind-variants'
import {
  type DialogRootProps as RekaDialogRootProps,
  type DialogRootEmits as RekaDialogRootEmits,
  type DialogTriggerProps as RekaDialogTriggerProps,
  type DialogContentProps as RekaDialogContentProps,
  type DialogContentEmits as RekaDialogContentEmits,
  type DialogTitleProps as RekaDialogTitleProps,
  type DialogDescriptionProps as RekaDialogDescriptionProps,
  type DialogCloseProps as RekaDialogCloseProps,
  type PrimitiveProps,
} from 'reka-ui'

export const slideoverVariants = tv({
  slots: {
    trigger: '',
    overlay: `
      fixed inset-0 z-50 bg-overlay backdrop-blur-xs

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0

      data-[state=open]:animate-in data-[state=open]:fade-in-0
    `,
    content: `
      fixed z-50 flex flex-col gap-4 border-border bg-surface-raised py-4
      transition-all

      has-data-[slot=slideover-footer]:pb-0

      data-[state=closed]:animate-out

      data-[state=open]:animate-in
    `,
    header: `
      flex flex-col gap-1 border-border px-4

      [&.border-b]:pb-4
    `,
    headerClose: 'absolute top-4 right-4',
    title: 'text-base font-medium',
    description: 'text-sm text-muted-foreground',
    close: '',
    body: `
      flex-1 scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent
      scrollbar-gutter-auto overflow-y-auto px-4
    `,
    footer: 'mt-auto flex gap-2 border-border p-4',
  },
  variants: {
    side: {
      top: {
        content: `
          inset-x-0 top-0 h-auto max-h-[50dvh]

          data-[state=closed]:slide-out-to-top

          data-[state=open]:slide-in-from-top
        `,
      },
      bottom: {
        content: `
          inset-x-0 bottom-0 h-auto max-h-[50dvh] border-t

          data-[state=closed]:slide-out-to-bottom

          data-[state=open]:slide-in-from-bottom
        `,
      },
      left: {
        content: `
          inset-y-0 left-0 size-full max-w-sm border-r

          data-[state=closed]:slide-out-to-left

          data-[state=open]:slide-in-from-left
        `,
      },
      right: {
        content: `
          inset-y-0 right-0 size-full max-w-sm border-l

          data-[state=closed]:slide-out-to-right

          data-[state=open]:slide-in-from-right
        `,
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
})


// COMPONENTS
export { default as SlideoverRoot } from './slideover-root.vue'
export { default as SlideoverTrigger } from './slideover-trigger.vue'
export { default as SlideoverContent } from './slideover-content.vue'
export { default as SlideoverHeader } from './slideover-header.vue'
export { default as SlideoverTitle } from './slideover-title.vue'
export { default as SlideoverDescription } from './slideover-description.vue'
export { default as SlideoverClose } from './slideover-close.vue'
export { default as SlideoverBody } from './slideover-body.vue'
export { default as SlideoverFooter } from './slideover-footer.vue'


// VARIANTS
export type SlideoverVariants = VariantProps<typeof slideoverVariants>


// PROPS
export type SlideoverRootProps = RekaDialogRootProps & { class?: any }

export type SlideoverTriggerProps = RekaDialogTriggerProps & { class?: any }

export type SlideoverContentProps = RekaDialogContentProps & {
  /**
   * The direction the slideover opens from
   * @default 'right'
   */
  side?: SlideoverVariants['side']
  class?: any
}

export type SlideoverHeaderProps = PrimitiveProps & {
  /**
   * Whether to show the close button inside the header
   * @default true
   */
  showClose?: boolean
  class?: any
}

export type SlideoverTitleProps = RekaDialogTitleProps & { class?: any }

export type SlideoverDescriptionProps = RekaDialogDescriptionProps & { class?: any }

export type SlideoverCloseProps = RekaDialogCloseProps & { class?: any }

export type SlideoverBodyProps = PrimitiveProps & { class?: any }

export type SlideoverFooterProps = PrimitiveProps & { class?: any }


// EMITS
export type SlideoverRootEmits = RekaDialogRootEmits
export type SlideoverContentEmits = RekaDialogContentEmits


// SLOTS
export type SlideoverRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
    /** Close the slideover */
    close: () => void
  }) => any
}

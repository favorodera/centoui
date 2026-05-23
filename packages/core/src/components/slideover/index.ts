import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import {
  type DialogRootProps as RekaDialogRootProps,
  type DialogRootEmits as RekaDialogRootEmits,
  type DialogTriggerProps as RekaDialogTriggerProps,
  type DialogPortalProps as RekaDialogPortalProps,
  type DialogOverlayProps as RekaDialogOverlayProps,
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
      fixed inset-0 z-50 bg-overlay animation-duration-300
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=open]:animate-in data-[state=open]:fade-in-0
    `,
    content: `
      fixed z-50 m-2 flex max-h-[calc(100%-(--spacing(4)))]
      w-[calc(100%-(--spacing(4)))] flex-col gap-6 overflow-y-auto rounded-xl
      bg-surface-raised py-6 shadow-lg transition-all duration-300
      animation-duration-300
      data-[state=closed]:animate-out
      data-[state=open]:animate-in
    `,
    header: `
      flex flex-col items-start gap-2 px-6 text-left
      [&.border-b]:pb-6
    `,
    headerClose: 'absolute top-6 right-6',
    title: 'text-base font-medium',
    description: 'text-sm text-muted-foreground',
    close: '',
    body: 'flex-1 px-6',
    footer: `
      mt-auto flex items-center px-6
      [&.border-t]:pt-6
    `,
  },
  variants: {
    side: {
      top: {
        content: `
          inset-x-0 top-0 h-auto
          data-[state=closed]:slide-out-to-top
          data-[state=open]:slide-in-from-top
        `,
      },
      bottom: {
        content: `
          inset-x-0 bottom-0 h-auto
          data-[state=closed]:slide-out-to-bottom
          data-[state=open]:slide-in-from-bottom
        `,
      },
      left: {
        content: `
          inset-y-0 left-0 h-full max-w-sm
          data-[state=closed]:slide-out-to-left
          data-[state=open]:slide-in-from-left
        `,
      },
      right: {
        content: `
          inset-y-0 right-0 h-full max-w-sm
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
export { default as SlideoverPortal } from './slideover-portal.vue'
export { default as SlideoverOverlay } from './slideover-overlay.vue'
export { default as SlideoverContent } from './slideover-content.vue'
export { default as SlideoverHeader } from './slideover-header.vue'
export { default as SlideoverTitle } from './slideover-title.vue'
export { default as SlideoverDescription } from './slideover-description.vue'
export { default as SlideoverClose } from './slideover-close.vue'
export { default as SlideoverBody } from './slideover-body.vue'
export { default as SlideoverFooter } from './slideover-footer.vue'


// TYPES — Variants
export type SlideoverVariants = VariantProps<typeof slideoverVariants>


// TYPES — Props

export type SlideoverRootProps = RekaDialogRootProps & Pick<ClassProp, 'class'>

export type SlideoverTriggerProps = RekaDialogTriggerProps & Pick<ClassProp, 'class'>

export type SlideoverPortalProps = RekaDialogPortalProps

export type SlideoverOverlayProps = RekaDialogOverlayProps & Pick<ClassProp, 'class'>

export type SlideoverContentProps = RekaDialogContentProps & Pick<ClassProp, 'class'> & {
  /**
   * The direction the slideover opens from
   * @default 'right'
   */
  side?: SlideoverVariants['side']
}

export type SlideoverHeaderProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
   * Whether to show the close button inside the header
   * @default true
   */
  showClose?: boolean
}

export type SlideoverTitleProps = RekaDialogTitleProps & Pick<ClassProp, 'class'>

export type SlideoverDescriptionProps = RekaDialogDescriptionProps & Pick<ClassProp, 'class'>

export type SlideoverCloseProps = RekaDialogCloseProps & Pick<ClassProp, 'class'>

export type SlideoverBodyProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type SlideoverFooterProps = PrimitiveProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type SlideoverRootEmits = RekaDialogRootEmits

export type SlideoverContentEmits = RekaDialogContentEmits


// TYPES — Slots

export type SlideoverRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
    /** Close the slideover */
    close: () => void
  }) => []
}

import {
  type PrimitiveProps,
  type PopoverAnchorProps as RekaPopoverAnchorProps,
  type PopoverArrowProps as RekaPopoverArrowProps,
  type PopoverCloseProps as RekaPopoverCloseProps,
  type PopoverContentEmits as RekaPopoverContentEmits,
  type PopoverContentProps as RekaPopoverContentProps,
  type PopoverPortalProps as RekaPopoverPortalProps,
  type PopoverRootEmits as RekaPopoverRootEmits,
  type PopoverRootProps as RekaPopoverRootProps,
  type PopoverTriggerProps as RekaPopoverTriggerProps,
} from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const popoverVariants = tv({
  slots: {
    trigger: '',
    content: `
      relative z-50 grid w-xs origin-(--reka-popover-content-transform-origin)
      gap-3 overflow-hidden rounded-xl bg-surface-raised py-3 shadow-lg
      outline-none
      data-[side=bottom]:slide-in-from-top-2
      data-[side=left]:slide-in-from-right-2
      data-[side=right]:slide-in-from-left-2
      data-[side=top]:slide-in-from-bottom-2
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95
      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
    `,
    header: 'relative flex flex-col gap-1 px-3 text-left',
    title: 'text-sm font-medium',
    description: 'text-sm/5 text-muted-foreground',
    body: 'px-3',
    footer: 'relative flex items-center justify-end gap-2 px-3',
    arrow: 'z-50 fill-surface-raised',
    close: '',
  },
})


// COMPONENTS

export { default as PopoverAnchor } from './popover-anchor.vue'
export { default as PopoverArrow } from './popover-arrow.vue'
export { default as PopoverBody } from './popover-body.vue'
export { default as PopoverClose } from './popover-close.vue'
export { default as PopoverContent } from './popover-content.vue'
export { default as PopoverDescription } from './popover-description.vue'
export { default as PopoverFooter } from './popover-footer.vue'
export { default as PopoverHeader } from './popover-header.vue'
export { default as PopoverPortal } from './popover-portal.vue'
export { default as PopoverRoot } from './popover-root.vue'
export { default as PopoverTitle } from './popover-title.vue'
export { default as PopoverTrigger } from './popover-trigger.vue'


// TYPES — Props

export type PopoverRootProps = RekaPopoverRootProps

export type PopoverTriggerProps = RekaPopoverTriggerProps & Pick<ClassProp, 'class'>

export type PopoverAnchorProps = RekaPopoverAnchorProps

export type PopoverPortalProps = RekaPopoverPortalProps

export type PopoverContentProps = RekaPopoverContentProps & Pick<ClassProp, 'class'>

export type PopoverHeaderProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type PopoverTitleProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type PopoverDescriptionProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type PopoverBodyProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type PopoverFooterProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type PopoverArrowProps = RekaPopoverArrowProps & Pick<ClassProp, 'class'>

export type PopoverCloseProps = RekaPopoverCloseProps & Pick<ClassProp, 'class'>


// TYPES — Emits
export type PopoverRootEmits = RekaPopoverRootEmits

export type PopoverContentEmits = RekaPopoverContentEmits


// TYPES — Slots
export type PopoverRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
    /** Close the popover */
    close: () => void
  }) => []
}


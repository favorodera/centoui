import {
  type PopoverRootProps as RekaPopoverRootProps,
  type PopoverRootEmits as RekaPopoverRootEmits,
  type PopoverTriggerProps as RekaPopoverTriggerProps,
  type PopoverAnchorProps as RekaPopoverAnchorProps,
  type PopoverPortalProps as RekaPopoverPortalProps,
  type PopoverContentProps as RekaPopoverContentProps,
  type PopoverContentEmits as RekaPopoverContentEmits,
  type PopoverArrowProps as RekaPopoverArrowProps,
  type PopoverCloseProps as RekaPopoverCloseProps,
  createContext,
  type PrimitiveProps,
} from 'reka-ui'
import { tv, type ClassValue } from 'tailwind-variants'
import type { ButtonProps } from '../button'

export const popoverVariants = tv({
  slots: {
    trigger: '',
    content: `
      relative z-50 grid w-xs origin-(--reka-popover-content-transform-origin)
      gap-4 overflow-hidden rounded-lg bg-surface-raised py-4 shadow-md
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
    header: `
      relative flex flex-col items-center gap-1.5 px-4 text-center
      sm:items-start sm:text-left
    `,
    title: 'text-base font-medium',
    description: 'text-sm text-muted-foreground',
    body: 'px-4',
    footer: `
      relative flex flex-col-reverse gap-4 px-4
      sm:flex-row sm:justify-end sm:gap-2
    `,
    arrow: 'z-50 fill-surface-raised',
    close: '',
  },
})


// COMPONENTS

export { default as PopoverRoot } from './popover-root.vue'
export { default as PopoverTrigger } from './popover-trigger.vue'
export { default as PopoverAnchor } from './popover-anchor.vue'
export { default as PopoverPortal } from './popover-portal.vue'
export { default as PopoverContent } from './popover-content.vue'
export { default as PopoverHeader } from './popover-header.vue'
export { default as PopoverTitle } from './popover-title.vue'
export { default as PopoverDescription } from './popover-description.vue'
export { default as PopoverBody } from './popover-body.vue'
export { default as PopoverFooter } from './popover-footer.vue'
export { default as PopoverArrow } from './popover-arrow.vue'
export { default as PopoverClose } from './popover-close.vue'


// CONTEXT

export const [injectCentouiPopoverRootContext, provideCentouiPopoverRootContext] = createContext<PopoverRootContext>('PopoverRoot', 'centoui:popover-root:context')


// TYPES — Context

export type PopoverRootContext = {
  /** Styles for the alert */
  styles: ReturnType<typeof popoverVariants>
}

// TYPES — Props

export type PopoverRootProps = RekaPopoverRootProps

export type PopoverTriggerProps = RekaPopoverTriggerProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverAnchorProps = RekaPopoverAnchorProps

export type PopoverPortalProps = RekaPopoverPortalProps

export type PopoverContentProps = RekaPopoverContentProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverHeaderProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverTitleProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverDescriptionProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverBodyProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverFooterProps = PrimitiveProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverArrowProps = RekaPopoverArrowProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type PopoverCloseProps = RekaPopoverCloseProps & Pick<ButtonProps, 'variant' | 'class' | 'size' | 'square'>


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

export type PopoverTriggerSlots = {
  default: []
}

export type PopoverAnchorSlots = {
  default: []
}

export type PopoverPortalSlots = {
  default: []
}

export type PopoverContentSlots = {
  default: []
}

export type PopoverHeaderSlots = {
  default: []
}

export type PopoverTitleSlots = {
  default: []
}

export type PopoverDescriptionSlots = {
  default: []
}

export type PopoverBodySlots = {
  default: []
}

export type PopoverFooterSlots = {
  default: []
}

export type PopoverArrowSlots = {
  default: []
}

export type PopoverCloseSlots = {
  default: []
}

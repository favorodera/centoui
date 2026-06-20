import type {
  PrimitiveProps,
  PopoverAnchorProps as RekaPopoverAnchorProps,
  PopoverContentEmits as RekaPopoverContentEmits,
  PopoverContentProps as RekaPopoverContentProps,
  PopoverRootEmits as RekaPopoverRootEmits,
  PopoverRootProps as RekaPopoverRootProps,
  PopoverTriggerProps as RekaPopoverTriggerProps,
} from 'reka-ui'
import { tv } from 'tailwind-variants'

export const popoverVariants = tv({
  slots: {
    arrow: 'z-50 fill-surface stroke-border',
    content: `
      relative z-50 grid inline-xs
      origin-(--reka-popover-content-transform-origin) gap-2 rounded-md border
      border-border bg-surface-raised py-1.5 px-2

      data-[side=bottom]:slide-in-from-top-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95 data-[state=closed]:duration-100
      data-[state=closed]:ease-in

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95 data-[state=open]:duration-200
      data-[state=open]:ease-out
    `,
    footer: '-mx-2 -mbe-1.5 rounded-b-[inherit] bg-neutral px-2 py-1.5',
    header: '-mx-2 -mbs-1.5 rounded-t-[inherit] px-2 py-1.5 text-sm space-y-1',
    trigger: '',
  },
})

// COMPONENTS
export { default as PopoverAnchor } from './popover-anchor.vue'
export { default as PopoverContent } from './popover-content.vue'
export { default as PopoverFooter } from './popover-footer.vue'
export { default as PopoverHeader } from './popover-header.vue'
export { default as PopoverRoot } from './popover-root.vue'
export { default as PopoverTrigger } from './popover-trigger.vue'

// PROPS
export type PopoverRootProps = RekaPopoverRootProps

export type PopoverTriggerProps = RekaPopoverTriggerProps & { class?: any }

export type PopoverAnchorProps = RekaPopoverAnchorProps

export type PopoverContentProps = RekaPopoverContentProps & {
  class?: any

  /**
   * Whether to show an arrow alongside the content.
   * @default false
   */
  showArrow?: boolean
}

export type PopoverHeaderProps = PrimitiveProps & { class?: any }

export type PopoverFooterProps = PrimitiveProps & { class?: any }

// EMITS
export type PopoverRootEmits = RekaPopoverRootEmits

export type PopoverContentEmits = RekaPopoverContentEmits

// SLOTS
export interface PopoverRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean

    /** Close the popover */
    close: () => void
  }) => any
}

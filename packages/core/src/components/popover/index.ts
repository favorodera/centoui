import type { PrimitiveProps, PopoverAnchorProps as RekaPopoverAnchorProps, PopoverContentEmits as RekaPopoverContentEmits, PopoverContentProps as RekaPopoverContentProps, PopoverRootEmits as RekaPopoverRootEmits, PopoverRootProps as RekaPopoverRootProps, PopoverTriggerProps as RekaPopoverTriggerProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const popoverVariants = tv({
  slots: {
    arrow: 'z-50 fill-surface stroke-border',
    body: 'px-4',
    content: `
      relative z-50 grid inline-xs
      origin-(--reka-popover-content-transform-origin) gap-4 rounded-lg border
      border-border bg-surface-raised py-4 outline-none

      has-data-[slot=popover-footer]:pbe-0

      data-[side=bottom]:slide-in-from-top-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
    `,
    description: 'text-muted-foreground',
    footer: 'rounded-b-[inherit] bg-neutral p-4',
    header: `
      relative flex flex-col gap-1 border-border px-4 text-sm

      [&.border-b]:pbe-4
    `,
    title: 'font-medium',
    trigger: '',
  },
})

// COMPONENTS
export { default as PopoverAnchor } from './popover-anchor.vue'
export { default as PopoverBody } from './popover-body.vue'
export { default as PopoverContent } from './popover-content.vue'
export { default as PopoverDescription } from './popover-description.vue'
export { default as PopoverFooter } from './popover-footer.vue'
export { default as PopoverHeader } from './popover-header.vue'
export { default as PopoverRoot } from './popover-root.vue'
export { default as PopoverTitle } from './popover-title.vue'
export { default as PopoverTrigger } from './popover-trigger.vue'

// PROPS
export type PopoverRootProps = RekaPopoverRootProps

export type PopoverTriggerProps = RekaPopoverTriggerProps & { class?: any }

export type PopoverAnchorProps = RekaPopoverAnchorProps

export type PopoverContentProps = RekaPopoverContentProps & {
  /**
   * Whether to show an arrow alongside the content.
   * @default false
   */
  class?: any
  showArrow?: boolean
}

export type PopoverHeaderProps = PrimitiveProps & { class?: any }

export type PopoverTitleProps = PrimitiveProps & { class?: any }

export type PopoverDescriptionProps = PrimitiveProps & { class?: any }

export type PopoverBodyProps = PrimitiveProps & { class?: any }

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

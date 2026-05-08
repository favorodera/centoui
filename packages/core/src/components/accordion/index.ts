import type {
  AcceptableValue,
  AccordionContentProps as RekaAccordionContentProps,
  AccordionHeaderProps as RekaAccordionHeaderProps,
  AccordionItemProps as RekaAccordionItemProps,
  AccordionRootEmits as RekaAccordionRootEmits,
  AccordionRootProps as RekaAccordionRootProps,
  AccordionTriggerProps as RekaAccordionTriggerProps,
} from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

/** Accordion style variants */
export const accordionVariants = tv({
  slots: {
    root: 'w-full',
    item: `
      border-b border-b-muted
      last:border-b-0
    `,
    header: 'flex',
    trigger: `
      flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-start
      text-sm font-medium transition-all outline-none
      hover:text-foreground/70
      focus-visible:ring-2 focus-visible:ring-muted focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50
      [&[data-centoui-state=open]>svg]:rotate-180
    `,
    content: `
      overflow-hidden text-sm
      *:data-[centoui-slot="accordion-content-body"]:pt-0
      *:data-[centoui-slot="accordion-content-body"]:pb-4
      data-[centoui-state=closed]:animate-accordion-up
      data-[centoui-state=open]:animate-accordion-down
    `,
  },
})


// Component exports

export { default as AccordionContent } from './accordion-content.vue'
export { default as AccordionHeader } from './accordion-header.vue'
export { default as AccordionItem } from './accordion-item.vue'
export { default as AccordionRoot } from './accordion-root.vue'
export { default as AccordionTrigger } from './accordion-trigger.vue'


// Types exports

/** Variant props for Accordion component. */
export type AccordionVariants = VariantProps<typeof accordionVariants>

/** Props for AccordionRoot component. */
export type AccordionRootProps = RekaAccordionRootProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AccordionItem component. */
export type AccordionItemProps = RekaAccordionItemProps & {
  /** Custom class to apply to the item element. */
  class?: ClassValue
}

/** Props for AccordionHeader component. */
export type AccordionHeaderProps = RekaAccordionHeaderProps & {
  /** Custom class to apply to the header element. */
  class?: ClassValue
}

/** Props for AccordionTrigger component. */
export type AccordionTriggerProps = RekaAccordionTriggerProps & {
  /** Custom class to apply to the trigger element. */
  class?: ClassValue
}

/** Props for AccordionContent component. */
export type AccordionContentProps = RekaAccordionContentProps & {
  /** Custom class to apply to the content element. */
  class?: ClassValue
}

/** Emits for AccordionRoot component. */
export type AccordionRootEmits = RekaAccordionRootEmits

/** Slots for AccordionRoot component. */
export type AccordionRootSlots = {
  /** Default slot. */
  default: (props: {
    /** Current active value of the accordion. */
    modelValue?: AcceptableValue | AcceptableValue[]
  }) => []
}

/** Slots for AccordionItem component. */
export type AccordionItemSlots = {
  /** Default slot. */
  default: (props: {
    /** Current open state. */
    open: boolean
  }) => []
}

/** Slots for AccordionHeader component. */
export type AccordionHeaderSlots = {
  /** Default slot. */
  default: []
}

/** Slots for AccordionTrigger component. */
export type AccordionTriggerSlots = {
  /** Default slot. */
  default: []
}

/** Slots for AccordionContent component. */
export type AccordionContentSlots = {
  /** Default slot. */
  default: []
}


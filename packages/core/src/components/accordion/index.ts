import {
  createContext,
  type AcceptableValue,
  type AccordionContentProps as RekaAccordionContentProps,
  type AccordionHeaderProps as RekaAccordionHeaderProps,
  type AccordionItemProps as RekaAccordionItemProps,
  type AccordionRootEmits as RekaAccordionRootEmits,
  type AccordionRootProps as RekaAccordionRootProps,
  type AccordionTriggerProps as RekaAccordionTriggerProps,
} from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const accordionVariants = tv({
  slots: {
    root: 'w-full',
    item: `
      border-b border-b-border text-sm
      last:border-b-0
    `,
    header: 'flex flex-wrap',
    trigger: `
      flex flex-1 cursor-pointer items-start justify-between gap-4 py-4
      font-medium outline-none
      focus-visible:ring-3 focus-visible:ring-ring
      data-disabled:pointer-events-none data-disabled:opacity-50
      [&[data-state=open]>[data-slot="accordion-trigger-icon"]]:rotate-180
    `,
    triggerIcon: `
      pointer-events-none h-lh w-4 shrink-0 text-muted-foreground
      transition-transform
    `,
    content: `
      overflow-hidden
      *:data-[slot="accordion-content-inner"]:pb-4
      data-[state=closed]:animate-accordion-up
      data-[state=open]:animate-accordion-down
    `,
  },
})


// COMPONENTS

export { default as AccordionContent } from './accordion-content.vue'
export { default as AccordionHeader } from './accordion-header.vue'
export { default as AccordionItem } from './accordion-item.vue'
export { default as AccordionRoot } from './accordion-root.vue'
export { default as AccordionTrigger } from './accordion-trigger.vue'


// CONTEXT

export const [injectCentouiAccordionRootContext, provideCentouiAccordionRootContext] = createContext<AccordionRootContext>('AccordionRoot', 'centoui:accordion-root:context')


// TYPES — Variants

export type AccordionVariants = VariantProps<typeof accordionVariants>


// TYPES — Context
export type AccordionRootContext = {
  /** Styles for the alert */
  styles: ReturnType<typeof accordionVariants>
}


// TYPES — Props

export type AccordionRootProps = RekaAccordionRootProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AccordionItemProps = RekaAccordionItemProps & {
  /** Custom class to apply to the item element. */
  class?: ClassValue
}

export type AccordionHeaderProps = RekaAccordionHeaderProps & {
  /** Custom class to apply to the header element. */
  class?: ClassValue
}

export type AccordionTriggerProps = RekaAccordionTriggerProps & {
  /** Custom class to apply to the trigger element. */
  class?: ClassValue
}

export type AccordionContentProps = RekaAccordionContentProps & {
  /** Custom class to apply to the content element. */
  class?: ClassValue
}


// TYPES — Emits
export type AccordionRootEmits = RekaAccordionRootEmits


// TYPES — Slots
export type AccordionRootSlots = {
  default: (props: {
    /** Current active value of the accordion. */
    modelValue?: AcceptableValue | AcceptableValue[]
  }) => []
}

export type AccordionItemSlots = {
  default: (props: {
    /** Current open state. */
    open: boolean
  }) => []
}

export type AccordionHeaderSlots = {
  /** Default slot. */
  default: []
}

export type AccordionTriggerSlots = {
  /** Default slot. */
  default: []
  /** Icon slot. */
  icon: []
}

export type AccordionContentSlots = {
  default: []
}


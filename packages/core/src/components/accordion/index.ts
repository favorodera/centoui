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

/** Accordion style variants */
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
      font-medium
      focus-visible:ring-2 focus-visible:ring-primary
      focus-visible:ring-offset-2
      data-centoui-disabled:pointer-events-none data-centoui-disabled:opacity-50
      [&[data-centoui-state=open]>[data-centoui-slot="accordion-trigger-icon"]]:rotate-180
    `,
    triggerIcon: `
      pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground
      transition-transform
    `,
    content: `
      overflow-hidden
      *:data-[centoui-slot="accordion-content-inner"]:pb-4
      data-[centoui-state=closed]:animate-accordion-up
      data-[centoui-state=open]:animate-accordion-down
    `,
  },
})


// COMPONENTS

export { default as AccordionContent } from './accordion-content.vue'
export { default as AccordionHeader } from './accordion-header.vue'
export { default as AccordionItem } from './accordion-item.vue'
export { default as AccordionRoot } from './accordion-root.vue'
export { default as AccordionTrigger } from './accordion-trigger.vue'


// CONTEXTS

export const [injectCentouiAccordionRootContext, provideCentouiAccordionRootContext] = createContext<AccordionRootContext>('AccordionRoot', 'centoui:accordion-root:context')


// PROPS

/** AccordionRoot context type */
export type AccordionRootContext = {
  /** Styles for the alert */
  styles: ReturnType<typeof accordionVariants>
}

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


// EMITS

/** Emits for AccordionRoot component. */
export type AccordionRootEmits = RekaAccordionRootEmits


// SLOTS

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
  /** Icon slot. */
  icon: []
}

/** Slots for AccordionContent component. */
export type AccordionContentSlots = {
  /** Default slot. */
  default: []
}


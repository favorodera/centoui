import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type {
  AccordionRootProps as RekaAccordionRootProps,
  AccordionRootEmits as RekaAccordionRootEmits,
  AccordionItemProps as RekaAccordionItemProps,
  AccordionHeaderProps as RekaAccordionHeaderProps,
  AccordionTriggerProps as RekaAccordionTriggerProps,
  AccordionContentProps as RekaAccordionContentProps,
  AcceptableValue,
} from 'reka-ui'

/** Accordion style variants */
export const accordionVariants = tv({
  slots: {
    root: 'w-full',
    item: '',
    header: '',
    trigger: '',
    content: '',
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

// Component exports
export { default as AccordionRoot } from './accordion-root.vue'
// export { default as AccordionItem } from './accordion-item.vue'
// export { default as AccordionHeader } from './accordion-header.vue'
// export { default as AccordionTrigger } from './accordion-trigger.vue'
// export { default as AccordionContent } from './accordion-content.vue'

// Types exports
/** Extractable variant props for Accordion component. */
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
  /** AccordionRoot content- items. */
  default: (props: {
    /** Current active value of the accordion. */
    modelValue?: AcceptableValue | AcceptableValue[]
  }) => []
}

/** Slots for AccordionItem component. */
export type AccordionItemSlots = {
  /** AccordionItem content- header, trigger, content. */
  default: (props: {
    /** Current open state. */
    open: boolean
  }) => []
}

/** Slots for AccordionHeader component. */
export type AccordionHeaderSlots = {
  /** AccordionHeader content- trigger. */
  default: []
}

/** Slots for AccordionTrigger component. */
export type AccordionTriggerSlots = {
  /** AccordionTrigger content- button, icon, text etc. */
  default: []
}

/** Slots for AccordionContent component. */
export type AccordionContentSlots = {
  /** AccordionContent content- content. */
  default: []
}


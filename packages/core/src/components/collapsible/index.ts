import {
  createContext,
  type CollapsibleRootProps as RekaCollapsibleRootProps,
  type CollapsibleRootEmits as RekaCollapsibleRootEmits,
  type CollapsibleTriggerProps as RekaCollapsibleTriggerProps,
  type CollapsibleContentProps as RekaCollapsibleContentProps,
  type CollapsibleContentEmits as RekaCollapsibleContentEmits,
} from 'reka-ui'
import { tv, type ClassValue } from 'tailwind-variants'

export const collapsibleVariants = tv({
  slots: {
    root: '',
    trigger: '',
    content: `
      overflow-hidden
      data-[state=closed]:animate-collapsible-up
      data-[state=open]:animate-collapsible-down
    `,
  },
})


// COMPONENTS

export { default as CollapsibleRoot } from './collapsible-root.vue'
export { default as CollapsibleTrigger } from './collapsible-trigger.vue'
export { default as CollapsibleContent } from './collapsible-content.vue'


// CONTEXT

export const [injectCentouiCollapsibleContext, provideCentouiCollapsibleContext] = createContext<CollapsibleRootContext>('CollapsibleRoot', 'centoui:collapsible-root:context')


// TYPES — Context

export type CollapsibleRootContext = {
  /** Styles for the alert */
  styles: ReturnType<typeof collapsibleVariants>
}


// TYPES — Props

export type CollapsibleRootProps = RekaCollapsibleRootProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type CollapsibleTriggerProps = RekaCollapsibleTriggerProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


export type CollapsibleContentProps = RekaCollapsibleContentProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// TYPES — Emits

export type CollapsibleRootEmits = RekaCollapsibleRootEmits

export type CollapsibleContentEmits = RekaCollapsibleContentEmits


// TYPES — Slots

export type CollapsibleRootSlots = {
  default: (props: {
    /** Current open state */
    open: boolean
  }) => []
}

export type CollapsibleTriggerSlots = {
  default: []
}

export type CollapsibleContentSlots = {
  default: []
}


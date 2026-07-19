import type {
  CollapsibleContentEmits as RekaCollapsibleContentEmits,
  CollapsibleContentProps as RekaCollapsibleContentProps,
  CollapsibleRootEmits as RekaCollapsibleRootEmits,
  CollapsibleRootProps as RekaCollapsibleRootProps,
  CollapsibleTriggerProps as RekaCollapsibleTriggerProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const collapsibleVariants = tv({
  slots: {
    content: `
      overflow-hidden group/collapsible-content

      data-[state=closed]:animate-collapsible-up

      data-[state=open]:animate-collapsible-down
    `,
    root: 'group/collapsible-root',
    trigger: 'group/collapsible-trigger',
  },
})

// Components
export { default as CollapsibleContent } from './collapsible-content.vue'
export { default as CollapsibleRoot } from './collapsible-root.vue'
export { default as CollapsibleTrigger } from './collapsible-trigger.vue'

// Props
export type CollapsibleRootProps = RekaCollapsibleRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type CollapsibleTriggerProps = RekaCollapsibleTriggerProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type CollapsibleContentProps = RekaCollapsibleContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type CollapsibleRootEmits = RekaCollapsibleRootEmits

export type CollapsibleContentEmits = RekaCollapsibleContentEmits

// Slots
export interface CollapsibleRootSlots {
  default?: (props: {
    /** Current open state */
    open: boolean
  }) => void
}

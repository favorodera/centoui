import {
  createContext,
  type ProgressIndicatorProps as RekaProgressIndicatorProps,
  type ProgressRootProps as RekaProgressRootProps,
  type ProgressRootEmits as RekaProgressRootEmits,
} from 'reka-ui'
import { tv, type ClassValue } from 'tailwind-variants'

export const progressVariants = tv({
  slots: {
    root: 'rounded-sm relative h-2 w-full overflow-hidden bg-primary/10',
    indicator: 'size-full rounded-[inherit] bg-primary transition-transform',
  },
})


// COMPONENTS

export { default as ProgressRoot } from './progress-root.vue'
export { default as ProgressIndicator } from './progress-indicator.vue'


// CONTEXT

export const [injectCentouiProgressRootContext, provideCentouiProgressRootContext] = createContext<ProgressRootContext>('ProgressRoot', 'centoui:progress-root:context')


// TYPES — Context

export type ProgressRootContext = {
  /** Styles for the alert */
  styles: ReturnType<typeof progressVariants>
}


// TYPES — Props

export type ProgressRootProps = RekaProgressRootProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type ProgressIndicatorProps = RekaProgressIndicatorProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// TYPES — Emits

export type ProgressRootEmits = RekaProgressRootEmits


// TYPES — Slots

export type ProgressRootSlots = {
  default: (props: {
    /** Current input values */
    modelValue?: number | null
  }) => []
}

export type ProgressIndicatorSlots = {
  default: []
}

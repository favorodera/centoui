import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import {
  createContext,
  type SelectRootProps as RekaSelectRootProps,
  type SelectRootEmits as RekaSelectRootEmits,
  type SelectTriggerProps as RekaSelectTriggerProps,
  type SelectValueProps as RekaSelectValueProps,
  type SelectIconProps as RekaSelectIconProps,
  type SelectPortalProps as RekaSelectPortalProps,
  type SelectContentProps as RekaSelectContentProps,
  type SelectContentEmits as RekaSelectContentEmits,
  type SelectViewportProps as RekaSelectViewportProps,
  type AcceptableValue,
} from 'reka-ui'

export const selectVariants = tv({
  slots: {
    root: '',
    trigger: '',
    value: '',
    icon: '',
    portal: '',
    content: '',
    viewport: '', // Stopped here
    item: '',
    itemText: '',
    itemIndicator: '',
    scrollUpButton: '',
    scrollDownButton: '',
    group: '',
    label: '',
    separator: '',
    arrow: '',
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
    variant: {
      outline: {},
      subtle: {},
      soft: {},
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})


// COMPONENTS

export { default as SelectRoot } from './select-root.vue'
export { default as SelectTrigger } from './select-trigger.vue'
export { default as SelectValue } from './select-value.vue'
export { default as SelectIcon } from './select-icon.vue'
export { default as SelectPortal } from './select-portal.vue'
export { default as SelectContent } from './select-content.vue'
export { default as SelectViewport } from './select-viewport.vue'
export { default as SelectItem } from './select-item.vue'
export { default as SelectItemText } from './select-item-text.vue'
export { default as SelectItemIndicator } from './select-item-indicator.vue'
export { default as SelectScrollUpButton } from './select-scroll-up-button.vue'
export { default as SelectScrollDownButton } from './select-scroll-down-button.vue'
export { default as SelectGroup } from './select-group.vue'
export { default as SelectLabel } from './select-label.vue'
export { default as SelectSeparator } from './select-separator.vue'
export { default as SelectArrow } from './select-arrow.vue'


// CONTEXT

export const [injectCentouiSelectRootContext, provideCentouiSelectRootContext] = createContext<SelectRootContext>('SelectRoot', 'centoui:select-root:context')


// TYPES — Variants

export type SelectVariants = VariantProps<typeof selectVariants>


// TYPES — Context

export type SelectRootContext = {
  /** Styles for the select */
  styles: ReturnType<typeof selectVariants>
}


// TYPES — Props

export type SelectRootProps = RekaSelectRootProps & {
  /**
   * The visual size of the select trigger and its contents.
   * @default 'md'
   */
  size?: SelectVariants['size']
}

export type SelectTriggerProps = RekaSelectTriggerProps & {
  /**
   * The visual style of the select trigger.
   * @default 'outline'
   */
  variant?: SelectVariants['variant']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type SelectValueProps = RekaSelectValueProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type SelectIconProps = RekaSelectIconProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type SelectPortalProps = RekaSelectPortalProps

export type SelectContentProps = RekaSelectContentProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type SelectViewportProps = RekaSelectViewportProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// TYPES — Emits

export type SelectRootEmits = RekaSelectRootEmits

export type SelectContentEmits = RekaSelectContentEmits


// TYPES — Slots

export type SelectRootSlots = {
  default: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | AcceptableValue[]
    /** Current open state */
    open: boolean
  }) => []
}

export type SelectTriggerSlots = {
  default: []
}

export type SelectValueSlots = {
  default: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | AcceptableValue[]
    /** Current selected label */
    selectedLabel: string[]
  }) => []
}

export type SelectIconSlots = {
  default: []
}

export type SelectPortalSlots = {
  default: []
}

export type SelectContentSlots = {
  default: []
}

export type SelectViewportSlots = {
  default: []
}

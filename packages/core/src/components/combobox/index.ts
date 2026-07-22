import type { HTMLAttributes } from 'vue'
import {
  type AcceptableValue,
  createContext,
  type ComboboxContentEmits as RekaComboboxContentEmits,
  type ComboboxContentProps as RekaComboboxContentProps,
  type ComboboxEmptyProps as RekaComboboxEmptyProps,
  type ComboboxGroupProps as RekaComboboxGroupProps,
  type ComboboxInputEmits as RekaComboboxInputEmits,
  type ComboboxInputProps as RekaComboboxInputProps,
  type ComboboxItemEmits as RekaComboboxItemEmits,
  type ComboboxItemProps as RekaComboboxItemProps,
  type ComboboxLabelProps as RekaComboboxLabelProps,
  type ComboboxRootEmits as RekaComboboxRootEmits,
  type ComboboxRootProps as RekaComboboxRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const comboboxVariants = tv({
  defaultVariants: {
    contentPosition: 'inline',
    size: 'md',
  },
  slots: {
    anchor: `
      relative inline-full min-inline-0 flex items-center group/combobox-anchor
    `,
    arrow: 'z-50 fill-overlay stroke-input group/combobox-arrow',
    cancel: 'group/combobox-cancel',
    content: `
      bg-overlay border bg-clip-padding z-50 relative grid p-1 gap-1
      group/combobox-content

      data-[side=bottom]:slide-in-from-top-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
    `,
    empty: `
      block-full inline-full flex items-center justify-center
      text-muted-foreground py-1 text-center group/combobox-empty
    `,
    group: `
      scroll-my-1 grid gap-1 group/combobox-group min-inline-0

      *:data-[slot=separator]:-mx-1
    `,
    input: 'group/combobox-input',
    item: `
      relative flex inline-full cursor-default items-center outline-none
      select-none group/combobox-item min-inline-0

      data-highlighted:not-data-disabled:bg-accent
      data-highlighted:not-data-disabled:text-accent-foreground

      data-disabled:cursor-not-allowed data-disabled:opacity-70
    `,
    itemIndicator: `
      absolute inset-bs-1/2 -translate-y-1/2 group/combobox-item-indicator
    `,
    label: 'text-muted-foreground group/combobox-label',
    root: 'relative group/combobox-root',
    trigger: 'group/combobox-trigger',
    viewport: `
      rounded-[inherit] grid grid-cols-1 gap-1 -mx-1 px-1
      group/combobox-viewport min-inline-0

      *:data-[slot=separator]:data-[orientation=horizontal]:-mx-1
    `,
  },
  variants: {
    contentPosition: {
      inline: {
        content: 'absolute inline-full min-inline-0 max-block-[90dvh]',
      },
      popper: {
        content: `
          max-block-(--reka-combobox-content-available-height)
          origin-(--reka-combobox-content-transform-origin)
          min-inline-(--reka-combobox-trigger-width)
          max-inline-(--reka-combobox-trigger-width)
        `,
      },
    },
    size: {
      lg: {
        content: 'rounded-lg',
        empty: 'text-sm',
        item: 'block-9 rounded-lg ps-2 pe-8 text-sm gap-2',
        itemIndicator: 'inset-e-2 block-4.5 inline-4.5',
        label: 'text-xs px-2',
        trigger: '-me-2',
      },
      md: {
        content: 'rounded-lg',
        empty: 'text-sm',
        item: 'block-8 rounded-lg ps-1.5 pe-7 text-sm gap-1.5',
        itemIndicator: 'inset-e-1.5 block-4 inline-4',
        label: 'text-xs px-1.5',
        trigger: '-me-1.5',
      },
      sm: {
        content: 'rounded-lg',
        empty: 'text-xs',
        item: 'block-7 rounded-lg ps-1 pe-5.5 text-xs gap-1',
        itemIndicator: 'inset-e-1 block-3.5 inline-3.5',
        label: 'text-xs px-1',
        trigger: '-me-1',
      },
    },
  },
})
export type ComboboxVariants = VariantProps<typeof comboboxVariants>

// Components
export { default as ComboboxContent } from './combobox-content.vue'
export { default as ComboboxEmpty } from './combobox-empty.vue'
export { default as ComboboxGroup } from './combobox-group.vue'
export { default as ComboboxInput } from './combobox-input.vue'
export { default as ComboboxItem } from './combobox-item.vue'
export { default as ComboboxLabel } from './combobox-label.vue'
export { default as ComboboxRoot } from './combobox-root.vue'

// Context
export type ComboboxRootContext = Pick<ComboboxRootProps, 'size'>
export const [
  injectRootContext,
  provideRootContext,
] = createContext<ComboboxRootContext>('ComboboxRoot', 'centoui:combobox-root:context')

// Props
export type ComboboxRootProps = RekaComboboxRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: ComboboxVariants['size']
}

export type ComboboxInputProps = RekaComboboxInputProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Whether to show the clear button
   * @default false
   */
  showClear?: boolean

  /**
   * Whether to show the trigger button
   * @default true
   */
  showTrigger?: boolean
}

export type ComboboxContentProps = RekaComboboxContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Whether to show an arrow alongside the content.
   * Only available when `position` is set to `popper`.
   * @default false
   */
  showArrow?: boolean
}

export type ComboboxEmptyProps = RekaComboboxEmptyProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type ComboboxItemProps = RekaComboboxItemProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type ComboboxLabelProps = RekaComboboxLabelProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type ComboboxGroupProps = RekaComboboxGroupProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type ComboboxRootEmits = RekaComboboxRootEmits

export type ComboboxInputEmits = RekaComboboxInputEmits

export type ComboboxContentEmits = RekaComboboxContentEmits

export type ComboboxItemEmits = RekaComboboxItemEmits

// Slots
export interface ComboboxRootSlots<TValue = AcceptableValue> {
  default?: (props: {
    /** Current active values */
    modelValue: Array<TValue> | TValue

    /** Current open state */
    open: boolean
  }) => void
}

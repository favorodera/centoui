import type { HTMLAttributes } from 'vue'
import {
  type AcceptableValue,
  createContext,
  type SelectContentEmits as RekaSelectContentEmits,
  type SelectContentProps as RekaSelectContentProps,
  type SelectGroupProps as RekaSelectGroupProps,
  type SelectItemEmits as RekaSelectItemEmits,
  type SelectItemProps as RekaSelectItemProps,
  type SelectLabelProps as RekaSelectLabelProps,
  type SelectRootEmits as RekaSelectRootEmits,
  type SelectRootProps as RekaSelectRootProps,
  type SelectTriggerProps as RekaSelectTriggerProps,
  type SelectValueProps as RekaSelectValueProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const selectVariants = tv({
  defaultVariants: {
    contentPosition: 'item-aligned',
    size: 'md',
  },
  slots: {
    arrow: 'z-50 fill-overlay stroke-input group/select-arrow',
    content: `
      bg-overlay border border-input z-50 relative grid p-1 gap-1
      group/select-content bg-clip-padding

      data-[side=bottom]:slide-in-from-top-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
    `,
    group: `
      scroll-my-1 grid gap-1 group/select-group min-inline-0

      *:data-[slot=separator]:-mx-1
    `,
    icon: 'text-muted-foreground group/select-icon',
    item: `
      relative flex inline-full cursor-default items-center outline-none
      select-none group/select-item transition-colors min-inline-0

      focus:not-data-disabled:bg-accent
      focus:not-data-disabled:text-accent-foreground

      data-disabled:cursor-not-allowed data-disabled:opacity-70
    `,
    itemIndicator: `
      absolute inset-bs-1/2 -translate-y-1/2 group/select-item-indicator
    `,
    itemText: 'min-inline-0 truncate group/select-item-text',
    label: 'text-muted-foreground group/select-label',
    scrollDownButton: `
      flex inline-full cursor-default items-center justify-center
      rounded-b-[inherit] bg-overlay group/select-scroll-down-button
    `,
    scrollUpButton: `
      flex inline-full cursor-default items-center justify-center
      rounded-t-[inherit] bg-overlay group/select-scroll-up-button
    `,
    trigger: `
      relative flex items-center inline-full min-inline-0 border border-input
      bg-transparent outline-none bg-clip-padding group/select-trigger
      justify-between truncate

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:opacity-70 disabled:cursor-not-allowed

      aria-invalid:ring-2 aria-invalid:ring-error

      data-placeholder:text-muted-foreground
    `,
    value: 'flex flex-1 items-center truncate group/select-value',
    viewport: `
      rounded-[inherit] grid gap-1 -mx-1 px-1 group/select-viewport min-inline-0

      *:data-[slot=separator]:data-[orientation=horizontal]:-mx-1
    `,
  },
  variants: {
    contentPosition: {
      'item-aligned': {},
      'popper': {
        content: `
          max-block-(--reka-select-content-available-height)
          min-inline-(--reka-select-trigger-width)
          max-inline-(--reka-select-trigger-width)
          origin-(--reka-select-content-transform-origin)
        `,
      },
    },
    size: {
      lg: {
        content: 'rounded-lg',
        icon: 'block-4.5 inline-4.5',
        item: 'block-9 rounded-lg text-sm gap-2 pe-8 ps-2',
        itemIndicator: 'inset-e-2 block-4.5 inline-4.5',
        label: 'text-xs px-2',
        scrollDownButton: `
          block-9 px-2

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4.5
        `,
        scrollUpButton: `
          block-9 px-2

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4.5
        `,
        trigger: 'block-9 px-3 text-sm gap-2 rounded-lg',
        value: 'gap-2 text-sm',
      },
      md: {
        content: 'rounded-lg',
        icon: 'block-4 inline-4',
        item: 'block-8 rounded-lg text-sm gap-1.5 pe-7 ps-1.5',
        itemIndicator: 'inset-e-1.5 block-4 inline-4',
        label: 'text-xs px-1.5',
        scrollDownButton: `
          block-8 px-1.5

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
        scrollUpButton: `
          block-8 px-1.5

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
        trigger: 'block-8 px-2.5 text-sm gap-1.5 rounded-lg',
        value: 'gap-1.5 text-sm',
      },
      sm: {
        content: 'rounded-lg',
        icon: 'block-3.5 inline-3.5',
        item: 'block-7 rounded-lg text-xs gap-1 pe-5.5 ps-1',
        itemIndicator: 'inset-e-1 block-3.5 inline-3.5',
        label: 'text-xs px-1',
        scrollDownButton: `
          block-7 px-1

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
        scrollUpButton: `
          block-7 px-1

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
        trigger: 'block-7 px-2 text-sm gap-1 rounded-lg',
        value: 'gap-1 text-xs',
      },
    },
  },
})
export type SelectVariants = VariantProps<typeof selectVariants>

// Components
export { default as SelectContent } from './select-content.vue'
export { default as SelectGroup } from './select-group.vue'
export { default as SelectItem } from './select-item.vue'
export { default as SelectLabel } from './select-label.vue'
export { default as SelectRoot } from './select-root.vue'
export { default as SelectTrigger } from './select-trigger.vue'
export { default as SelectValue } from './select-value.vue'

// Context
export type SelectRootContext = Pick<SelectRootProps, 'size'>
export const [
  injectRootContext,
  provideRootContext,
] = createContext<SelectRootContext>('SelectRoot', 'centoui:select-root:context')

// Props
export type SelectRootProps = RekaSelectRootProps & {
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: SelectVariants['size']
}

export type SelectContentProps = RekaSelectContentProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Whether to show an arrow alongside the content.
   * Only available when `position` is set to `popper`.
   * @default false
   */
  showArrow?: boolean
}

export type SelectGroupProps = RekaSelectGroupProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type SelectItemProps = RekaSelectItemProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type SelectLabelProps = RekaSelectLabelProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
export type SelectTriggerProps = RekaSelectTriggerProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}
export type SelectValueProps = RekaSelectValueProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type SelectContentEmits = RekaSelectContentEmits

export type SelectItemEmits = RekaSelectItemEmits

export type SelectRootEmits = RekaSelectRootEmits

// Slots
export interface SelectRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | Array<AcceptableValue>

    /** Current open state */
    open: boolean
  }) => void
}

export interface SelectValueSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | Array<AcceptableValue>

    /** Current selected label */
    selectedLabel: Array<string>
  }) => void
}

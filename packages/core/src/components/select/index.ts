import type { AcceptableValue, SelectContentEmits as RekaSelectContentEmits, SelectContentProps as RekaSelectContentProps, SelectGroupProps as RekaSelectGroupProps, SelectItemEmits as RekaSelectItemEmits, SelectItemProps as RekaSelectItemProps, SelectLabelProps as RekaSelectLabelProps, SelectRootEmits as RekaSelectRootEmits, SelectRootProps as RekaSelectRootProps, SelectTriggerProps as RekaSelectTriggerProps, SelectValueProps as RekaSelectValueProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const selectVariants = tv({
  defaultVariants: {
    contentPosition: 'popper',
    triggerSize: 'md',
  },
  slots: {
    arrow: 'z-50 fill-surface-raised stroke-input',
    content: `
      relative z-50 min-inline-3xs scrollbar-none rounded-lg border border-input
      bg-surface-raised

      data-[side=bottom]:slide-in-from-top-2

      data-[side=left]:slide-in-from-right-2

      data-[side=right]:slide-in-from-left-2

      data-[side=top]:slide-in-from-bottom-2

      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95

      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
    `,
    group: 'scroll-my-1 p-1',
    icon: 'text-muted-foreground',
    item: `
      relative flex inline-full cursor-default items-center gap-2 rounded-md
      py-1 pe-8 ps-2 text-sm outline-none select-none

      focus:bg-accent focus:text-accent-foreground

      data-disabled:pointer-events-none data-disabled:opacity-65
    `,
    itemIndicator: 'absolute inset-bs-1/2 inset-e-2 -translate-y-1/2',
    itemText: 'min-inline-0 truncate',
    label: 'px-2 py-1 text-xs text-muted-foreground',
    scrollDownButton: `
      z-10 flex inline-full cursor-default items-center justify-center
      rounded-b-[inherit] bg-surface-raised py-1

      *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
    `,
    scrollUpButton: `
      z-10 flex inline-full cursor-default items-center justify-center
      rounded-t-[inherit] bg-surface-raised py-1

      *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
    `,
    trigger: `
      flex inline-full items-center border border-input bg-transparent
      transition-all outline-none

      selection:bg-primary selection:text-primary-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:bg-input/60 disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error

      data-placeholder:text-muted-foreground
    `,
    value: 'flex flex-1 items-center truncate',
    viewport: '*:data-[slot=separator]:my-1',
  },
  variants: {
    contentPosition: {
      'item-aligned': {},
      'popper': {
        content: `
          max-block-(--reka-select-content-available-height) inline-full
          min-inline-(--reka-select-trigger-width)

          data-[side=bottom]:translate-y-1

          data-[side=left]:-translate-x-1

          data-[side=right]:translate-x-1

          data-[side=top]:-translate-y-1
        `,
        viewport: 'inline-full',
      },
    },
    triggerSize: {
      md: {
        icon: 'block-4 inline-4',
        trigger: `
          block-8 gap-2 rounded-md px-3 py-1 text-sm

          *:data-[slot=select-value]:gap-2
        `,
      },
      sm: {
        icon: 'block-4 inline-4',
        trigger: `
          block-7 gap-1 rounded-md px-3 py-1 text-sm

          *:data-[slot=select-value]:gap-1
        `,
      },
    },
  },
})

// COMPONENTS
export { default as SelectContent } from './select-content.vue'
export { default as SelectGroup } from './select-group.vue'
export { default as SelectItem } from './select-item.vue'
export { default as SelectLabel } from './select-label.vue'
export { default as SelectRoot } from './select-root.vue'
export { default as SelectTrigger } from './select-trigger.vue'
export { default as SelectValue } from './select-value.vue'

// VARIANTS
export type SelectVariants = VariantProps<typeof selectVariants>

// PROPS
export type SelectRootProps = RekaSelectRootProps

export type SelectTriggerProps = RekaSelectTriggerProps & {
  /**
   * The visual size of the trigger.
   * @default 'md'
   */
  class?: any
  size?: SelectVariants['triggerSize']
}

export type SelectValueProps = RekaSelectValueProps & { class?: any }

export type SelectContentProps = RekaSelectContentProps & {
  /**
   * Whether to show an arrow alongside the content.\
   * Only available when `position` is set to `popper`.
   * @default false
   */
  class?: any
  showArrow?: boolean
}

export type SelectItemProps = RekaSelectItemProps & { class?: any }

export type SelectGroupProps = RekaSelectGroupProps & { class?: any }

export type SelectLabelProps = RekaSelectLabelProps & { class?: any }

// EMITS
export type SelectRootEmits = RekaSelectRootEmits

export type SelectContentEmits = RekaSelectContentEmits

export type SelectItemEmits = RekaSelectItemEmits

// SLOTS
export interface SelectRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | Array<AcceptableValue>

    /** Current open state */
    open: boolean
  }) => any
}

export interface SelectValueSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | Array<AcceptableValue>

    /** Current selected label */
    selectedLabel: Array<string>
  }) => any
}

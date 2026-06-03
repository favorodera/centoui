import {
  type AcceptableValue,
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

export const selectVariants = tv({
  slots: {
    trigger: `
      flex w-full items-center border border-input bg-transparent transition-all
      outline-none

      selection:bg-primary selection:text-primary-foreground

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:bg-input/60 disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error

      data-placeholder:text-muted-foreground
    `,
    value: 'flex flex-1 items-center truncate',
    icon: 'text-muted-foreground',
    content: `
      relative z-50 min-w-3xs scrollbar-none rounded-lg border border-input
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
    scrollUpButton: `
      z-10 flex w-full cursor-default items-center justify-center
      bg-surface-raised py-1 rounded-t-[inherit]

      *:data-[slot=icon]:size-4
    `,
    scrollDownButton: `
      z-10 flex w-full cursor-default items-center justify-center
      bg-surface-raised py-1 rounded-b-[inherit]

      *:data-[slot=icon]:size-4
    `,
    viewport: '*:data-[slot=separator]:my-1',
    group: 'scroll-my-1 p-1',
    item: `
      flex w-full cursor-default items-center gap-2 rounded-md pl-2 pr-8 py-1 text-sm
      outline-none select-none relative

      focus:bg-accent focus:text-accent-foreground

      data-disabled:pointer-events-none data-disabled:opacity-65
    `,
    itemText: 'min-w-0 truncate',
    itemIndicator: 'absolute right-2 top-1/2 -translate-y-1/2',
    label: 'px-2 py-1 text-xs text-muted-foreground',
    arrow: 'z-50 fill-surface-raised stroke-input',
  },
  variants: {
    triggerSize: {
      sm: {
        trigger: `
          h-7 gap-1 rounded-md px-3 py-1 text-sm

          *:data-[slot=select-value]:gap-1
        `,
        icon: 'size-4',
      },
      md: {
        trigger: `
          h-8 gap-2 rounded-md px-3 py-1 text-sm

          *:data-[slot=select-value]:gap-2
        `,
        icon: 'size-4',
      },
    },
    contentPosition: {
      'popper': {
        content: `
          max-h-(--reka-select-content-available-height)

          min-w-(--reka-select-trigger-width) w-full

          data-[side=bottom]:translate-y-1

          data-[side=left]:-translate-x-1

          data-[side=right]:translate-x-1

          data-[side=top]:-translate-y-1
        `,
        viewport: 'w-full',
      },
      'item-aligned': {},
    },
  },
  defaultVariants: {
    triggerSize: 'md',
    contentPosition: 'popper',
  },
})


// COMPONENTS
export { default as SelectRoot } from './select-root.vue'
export { default as SelectTrigger } from './select-trigger.vue'
export { default as SelectValue } from './select-value.vue'
export { default as SelectContent } from './select-content.vue'
export { default as SelectGroup } from './select-group.vue'
export { default as SelectItem } from './select-item.vue'
export { default as SelectLabel } from './select-label.vue'


// VARIANTS
export type SelectVariants = VariantProps<typeof selectVariants>


// PROPS
export type SelectRootProps = RekaSelectRootProps

export type SelectTriggerProps = RekaSelectTriggerProps & {
  /**
   * The visual size of the trigger.
   * @default 'md'
   */
  size?: SelectVariants['triggerSize']
  class?: any
}

export type SelectValueProps = RekaSelectValueProps & { class?: any }

export type SelectContentProps = RekaSelectContentProps & {
  /**
   * Whether to show an arrow alongside the content.\
   * Only available when `position` is set to `popper`.
   * @default false
   */
  showArrow?: boolean
  class?: any
}

export type SelectItemProps = RekaSelectItemProps & { class?: any }

export type SelectGroupProps = RekaSelectGroupProps & { class?: any }

export type SelectLabelProps = RekaSelectLabelProps & { class?: any }


// EMITS
export type SelectRootEmits = RekaSelectRootEmits

export type SelectContentEmits = RekaSelectContentEmits

export type SelectItemEmits = RekaSelectItemEmits


// SLOTS
export type SelectRootSlots = {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | AcceptableValue[]
    /** Current open state */
    open: boolean
  }) => any
}

export type SelectValueSlots = {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | AcceptableValue[]
    /** Current selected label */
    selectedLabel: string[]
  }) => any
}

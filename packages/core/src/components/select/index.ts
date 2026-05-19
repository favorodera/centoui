import {
  createContext,
  type AcceptableValue,
  type SelectArrowProps as RekaSelectArrowProps,
  type SelectContentEmits as RekaSelectContentEmits,
  type SelectContentProps as RekaSelectContentProps,
  type SelectGroupProps as RekaSelectGroupProps,
  type SelectIconProps as RekaSelectIconProps,
  type SelectItemEmits as RekaSelectItemEmits,
  type SelectItemIndicatorProps as RekaSelectItemIndicatorProps,
  type SelectItemProps as RekaSelectItemProps,
  type SelectItemTextProps as RekaSelectItemTextProps,
  type SelectLabelProps as RekaSelectLabelProps,
  type SelectPortalProps as RekaSelectPortalProps,
  type SelectRootEmits as RekaSelectRootEmits,
  type SelectRootProps as RekaSelectRootProps,
  type SelectScrollDownButtonProps as RekaSelectScrollDownButtonProps,
  type SelectScrollUpButtonProps as RekaSelectScrollUpButtonProps,
  type SelectSeparatorProps as RekaSelectSeparatorProps,
  type SelectTriggerProps as RekaSelectTriggerProps,
  type SelectValueProps as RekaSelectValueProps,
  type SelectViewportProps as RekaSelectViewportProps,
} from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

export const selectVariants = tv({
  slots: {
    trigger: `
      relative inline-flex w-full items-center justify-between bg-transparent
      ring ring-input transition-all outline-none
      not-focus-visible:not-aria-invalid:ring-inset
      hover:bg-input/15
      focus-visible:ring-2 focus-visible:ring-ring
      disabled:pointer-events-none disabled:opacity-60
      aria-invalid:ring-2 aria-invalid:ring-error
      data-placeholder:text-muted-foreground
      [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground
    `,
    value: 'flex-1 truncate text-start',
    icon: 'opacity-60',
    content: `
      relative z-50 max-h-(--reka-select-content-available-height)
      scrollbar-none overflow-x-hidden overflow-y-auto rounded-lg
      bg-surface-raised shadow-md ring ring-border ring-inset
      data-[side=bottom]:slide-in-from-top-2
      data-[side=left]:slide-in-from-right-2
      data-[side=right]:slide-in-from-left-2
      data-[side=top]:slide-in-from-bottom-2
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95
      data-[state=open]:animate-in data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
    `,
    viewport: 'p-1',
    item: `
      relative inline-flex w-full cursor-default items-center gap-2 rounded-md
      outline-none select-none
      focus:bg-accent focus:text-accent-foreground
      data-disabled:pointer-events-none data-disabled:opacity-60
    `,
    itemText: 'min-w-0 truncate',
    itemIndicator: 'ml-auto inline-flex items-center justify-center',
    scrollUpButton: `
      inline-flex items-center justify-center py-1 text-muted-foreground
    `,
    scrollDownButton: `
      inline-flex items-center justify-center py-1 text-muted-foreground
    `,
    group: 'p-1',
    label: 'font-medium text-muted-foreground',
    separator: 'my-1',
    arrow: 'z-50 fill-surface-raised',
  },
  variants: {
    size: {
      sm: {
        trigger: `
          gap-1 rounded-md px-2.5 py-1.5
          [&_svg]:size-4
        `,
        value: 'text-xs',
        icon: 'size-4',
        label: 'px-1.5 py-1 text-[10px]/3',
        item: `
          gap-1.5 px-2.5 py-1.5
          [&_svg]:size-4
        `,
        itemText: 'text-xs',
        itemIndicator: '[&_svg]:size-4',
        scrollUpButton: '[&_svg]:size-4',
        scrollDownButton: '[&_svg]:size-4',
        separator: '**:data-[slot=separator-content]:text-xs',
      },
      md: {
        trigger: `
          gap-1.5 rounded-md px-3 py-1.5
          [&_svg]:size-4
        `,
        value: 'text-sm',
        icon: 'size-4',
        label: 'px-2 py-1 text-xs',
        item: `
          gap-1.5 px-3 py-1.5
          [&_svg]:size-4
        `,
        itemText: 'text-sm',
        itemIndicator: '[&_svg]:size-4',
        scrollUpButton: '[&_svg]:size-4',
        scrollDownButton: '[&_svg]:size-4',
      },
      lg: {
        trigger: `
          gap-1.5 rounded-lg px-4 py-2
          [&_svg]:size-4.5
        `,
        value: 'text-sm',
        icon: 'size-4.5',
        label: 'px-2 py-1 text-xs',
        item: `
          gap-1.5 px-4 py-2
          [&_svg]:size-4.5
        `,
        itemText: 'text-sm',
        itemIndicator: '[&_svg]:size-4.5',
        scrollUpButton: '[&_svg]:size-4.5',
        scrollDownButton: '[&_svg]:size-4.5',
      },
    },

    contentPosition: {
      'popper': {
        content: `
          w-(--reka-select-trigger-width)
          data-[side=bottom]:translate-y-1
          data-[side=left]:-translate-x-1
          data-[side=right]:translate-x-1
          data-[side=top]:-translate-y-1
        `,

        viewport: 'min-w-(--reka-select-trigger-width) scroll-my-1',
      },

      'item-aligned': {},
    },
  },

  defaultVariants: {
    size: 'md',
    contentPosition: 'popper',
  },
})


// COMPONENTS

export { default as SelectArrow } from './select-arrow.vue'
export { default as SelectContent } from './select-content.vue'
export { default as SelectGroup } from './select-group.vue'
export { default as SelectIcon } from './select-icon.vue'
export { default as SelectItemIndicator } from './select-item-indicator.vue'
export { default as SelectItemText } from './select-item-text.vue'
export { default as SelectItem } from './select-item.vue'
export { default as SelectLabel } from './select-label.vue'
export { default as SelectPortal } from './select-portal.vue'
export { default as SelectRoot } from './select-root.vue'
export { default as SelectScrollDownButton } from './select-scroll-down-button.vue'
export { default as SelectScrollUpButton } from './select-scroll-up-button.vue'
export { default as SelectSeparator } from './select-separator.vue'
export { default as SelectTrigger } from './select-trigger.vue'
export { default as SelectValue } from './select-value.vue'
export { default as SelectViewport } from './select-viewport.vue'


// CONTEXT

export const [injectCentouiSelectRootContext, provideCentouiSelectRootContext] = createContext<SelectRootContext>('SelectRoot', 'centoui:select-root:context')


// TYPES — Variants

export type SelectVariants = VariantProps<typeof selectVariants>


// TYPES — Context

export type SelectRootContext = Pick<SelectRootProps, 'size'>


// TYPES — Props

export type SelectRootProps = RekaSelectRootProps & {
  /**
   * The visual size of the select.
   * @default 'md'
   */
  size?: SelectVariants['size']
}

export type SelectTriggerProps = RekaSelectTriggerProps & Pick<ClassProp, 'class'>

export type SelectValueProps = RekaSelectValueProps & Pick<ClassProp, 'class'>

export type SelectIconProps = RekaSelectIconProps & Pick<ClassProp, 'class'>

export type SelectPortalProps = RekaSelectPortalProps

export type SelectContentProps = RekaSelectContentProps & Pick<ClassProp, 'class'>

export type SelectViewportProps = RekaSelectViewportProps & Pick<ClassProp, 'class'>

export type SelectItemProps = RekaSelectItemProps & Pick<ClassProp, 'class'>

export type SelectItemTextProps = RekaSelectItemTextProps & Pick<ClassProp, 'class'>

export type SelectItemIndicatorProps = RekaSelectItemIndicatorProps & Pick<ClassProp, 'class'>

export type SelectScrollUpButtonProps = RekaSelectScrollUpButtonProps & Pick<ClassProp, 'class'>

export type SelectScrollDownButtonProps = RekaSelectScrollDownButtonProps & Pick<ClassProp, 'class'>

export type SelectGroupProps = RekaSelectGroupProps & Pick<ClassProp, 'class'>

export type SelectLabelProps = RekaSelectLabelProps & Pick<ClassProp, 'class'>

export type SelectSeparatorProps = RekaSelectSeparatorProps & Pick<ClassProp, 'class'>

export type SelectArrowProps = RekaSelectArrowProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type SelectRootEmits = RekaSelectRootEmits

export type SelectContentEmits = RekaSelectContentEmits

export type SelectItemEmits = RekaSelectItemEmits


// TYPES — Slots

export type SelectRootSlots = {
  default: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | AcceptableValue[]
    /** Current open state */
    open: boolean
  }) => []
}

export type SelectValueSlots = {
  default: (props: {
    /** Current input values */
    modelValue?: AcceptableValue | AcceptableValue[]
    /** Current selected label */
    selectedLabel: string[]
  }) => []
}

export type SelectSeparatorSlots = {
  default: []
}

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

export const comboboxVariants = tv({
  defaultVariants: {
    contentPosition: 'popper',
    size: 'md',
  },
  slots: {
    anchor: 'relative',
    arrow: 'z-50 fill-overlay stroke-input',
    content: `
      bg-overlay border border-input z-50 grid gap-1 inline-full

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
      text-muted-foreground text-sm py-2 text-center
    `,
    group: 'scroll-my-1 p-1 grid gap-1',
    input: '',
    item: `
      relative flex inline-full cursor-default items-center outline-none
      select-none

      data-highlighted:bg-accent data-highlighted:text-accent-foreground

      data-disabled:pointer-events-none data-disabled:opacity-65
    `,
    itemIndicator: 'absolute inset-bs-1/2 -translate-y-1/2',
    label: 'text-muted-foreground py-0.5',
    root: 'relative',
    viewport: 'inline-full rounded-[inherit]',
  },
  variants: {
    contentPosition: {
      inline: {
        content: 'absolute',
      },
      popper: {
        content: `
          max-block-(--reka-reka-content-available-height) min-inline-3xs
          origin-(--reka-combobox-content-transform-origin)
        `,
      },
    },
    size: {
      lg: {
        content: 'rounded-lg',
        item: 'block-9 rounded-lg ps-2.5 pe-8.5 text-sm gap-1.5',
        itemIndicator: 'inset-e-2.5 block-4.5 inline-4.5',
        label: 'text-xs px-2.5',
      },
      md: {
        content: 'rounded-lg',
        item: 'block-8 rounded-lg ps-2 pe-7.5 text-sm gap-1.5',
        itemIndicator: 'inset-e-2 block-4 inline-4',
        label: 'text-xs px-2',
      },
      sm: {
        content: 'rounded-md',
        item: 'block-7 rounded-md ps-1.5 pe-6 text-xs gap-1',
        itemIndicator: 'inset-e-1.5 block-3.5 inline-3.5',
        label: 'text-xs px-1.5',
      },
    },
  },
})

// COMPONENTS
export { default as ComboboxContent } from './combobox-content.vue'
export { default as ComboboxEmpty } from './combobox-empty.vue'
export { default as ComboboxGroup } from './combobox-group.vue'
export { default as ComboboxInput } from './combobox-input.vue'
export { default as ComboboxItem } from './combobox-item.vue'
export { default as ComboboxLabel } from './combobox-label.vue'
export { default as ComboboxRoot } from './combobox-root.vue'

// CONTEXT
export type ComboboxRootContext = Pick<ComboboxRootProps, 'size'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<ComboboxRootContext>('ComboboxRoot', 'centoui:combobox-root:context')

// VARIANTS
export type ComboboxVariants = VariantProps<typeof comboboxVariants>

// PROPS
export type ComboboxRootProps = RekaComboboxRootProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: ComboboxVariants['size']
}

export type ComboboxInputProps = RekaComboboxInputProps & { class?: any }

export type ComboboxContentProps = RekaComboboxContentProps & {
  class?: any

  /**
   * Whether to show an arrow alongside the content.
   * Only available when `position` is set to `popper`.
   * @default false
   */
  showArrow?: boolean
}

export type ComboboxEmptyProps = RekaComboboxEmptyProps & { class?: any }

export type ComboboxItemProps = RekaComboboxItemProps & { class?: any }

export type ComboboxLabelProps = RekaComboboxLabelProps & { class?: any }

export type ComboboxGroupProps = RekaComboboxGroupProps & { class?: any }

// EMITS
export type ComboboxRootEmits = RekaComboboxRootEmits

export type ComboboxInputEmits = RekaComboboxInputEmits

export type ComboboxContentEmits = RekaComboboxContentEmits

export type ComboboxItemEmits = RekaComboboxItemEmits

// SLOTS
export interface ComboboxRootSlots<TValue = AcceptableValue> {
  default?: (props: {
    /** Current active values */
    modelValue: Array<TValue> | TValue

    /** Current open state */
    open: boolean
  }) => any
}

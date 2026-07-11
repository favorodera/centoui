import {
  type AcceptableValue,
  createContext,
  type RadioGroupItemEmits as RekaRadioGroupItemEmits,
  type RadioGroupItemProps as RekaRadioGroupItemProps,
  type RadioGroupRootEmits as RekaRadioGroupRootEmits,
  type RadioGroupRootProps as RekaRadioGroupRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const radioGroupVariants = tv({
  defaultVariants: {
    orientation: 'vertical',
    size: 'md',
  },
  slots: {
    indicator: `
      flex items-center justify-center relative group/radio-group-indicator
    `,
    indicatorDot: `
      bg-primary-foreground absolute inset-bs-1/2 inset-s-1/2 -translate-1/2
      rounded-full group/radio-group-indicator-dot
    `,
    item: `
      peer relative flex aspect-square shrink-0 rounded-full border border-input
      outline-none items-center justify-center bg-primary
      text-primary-foreground cursor-default group/radio-group-item

      focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:opacity-65

      aria-invalid:border-error aria-invalid:ring-2 aria-invalid:ring-error

      data-[state=unchecked]:bg-transparent
      data-[state=unchecked]:text-foreground
    `,
    root: 'inline-full min-inline-0 gap-2 group/radio-group-root',
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'flex items-center',
      },
      vertical: {
        root: 'grid grid-cols-1',
      },
    },
    size: {
      lg: {
        indicatorDot: `block-3 inline-3`,
        item: 'inline-6 block-6',
      },
      md: {
        indicatorDot: `block-2.5 inline-2.5`,
        item: 'inline-5 block-5',
      },
      sm: {
        indicatorDot: `block-2 inline-2`,
        item: 'inline-4 block-4',
      },
    },
  },
})

// COMPONENTS
export { default as RadioGroupItem } from './radio-group-item.vue'
export { default as RadioGroupRoot } from './radio-group-root.vue'

// CONTEXT
export type RadioGroupRootContext = Pick<RadioGroupRootProps, 'size'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<RadioGroupRootContext>('RadioGroupRoot', 'centoui:radiogroup-root:context')

// VARIANTS
export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>

// PROPS
export type RadioGroupRootProps = RekaRadioGroupRootProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: RadioGroupVariants['size']
}

export type RadioGroupItemProps = RekaRadioGroupItemProps & { class?: any }

// EMITS
export type RadioGroupRootEmits = RekaRadioGroupRootEmits

export type RadioGroupItemEmits = RekaRadioGroupItemEmits

// SLOTS
export interface RadioGroupRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue
  }) => any
}

export interface RadioGroupItemSlots {
  default?: (props: {
    /** Current checked state */
    checked: boolean

    /** Required state */
    required: boolean

    /** Disabled state */
    disabled: boolean
  }) => any
}

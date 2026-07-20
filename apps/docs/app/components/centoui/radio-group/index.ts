import type { HTMLAttributes } from 'vue'
import {
  type AcceptableValue,
  createContext,
  type RadioGroupItemEmits as RekaRadioGroupItemEmits,
  type RadioGroupItemProps as RekaRadioGroupItemProps,
  type RadioGroupRootEmits as RekaRadioGroupRootEmits,
  type RadioGroupRootProps as RekaRadioGroupRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const radioGroupVariants = tv({
  defaultVariants: {
    orientation: 'vertical',
    size: 'md',
  },
  slots: {
    indicator: `grid place-items-center relative group/radio-group-indicator`,
    indicatorDot: `
      bg-primary-foreground absolute inset-bs-1/2 inset-s-1/2 -translate-1/2
      rounded-full group/radio-group-indicator-dot
    `,
    item: `
      peer relative shrink-0 rounded-full border border-input outline-none grid
      place-items-center cursor-default group/radio-item bg-clip-padding

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:cursor-not-allowed disabled:opacity-70

      aria-invalid:ring-2 aria-invalid:ring-error

      data-[state=unchecked]:bg-transparent

      data-[state=checked]:bg-primary
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
export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>

// Components
export { default as RadioGroupItem } from './radio-group-item.vue'
export { default as RadioGroupRoot } from './radio-group-root.vue'

// Context
export type RadioGroupRootContext = Pick<RadioGroupRootProps, 'size'>
export const [
  injectRootContext,
  provideRootContext,
] = createContext<RadioGroupRootContext>('RadioGroupRoot', 'centoui:radiogroup-root:context')

// Props
export type RadioGroupRootProps = RekaRadioGroupRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: RadioGroupVariants['size']
}

export type RadioGroupItemProps = RekaRadioGroupItemProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type RadioGroupRootEmits = RekaRadioGroupRootEmits

export type RadioGroupItemEmits = RekaRadioGroupItemEmits

// Slots
export interface RadioGroupRootSlots {
  default?: (props: {
    /** Current input values */
    modelValue?: AcceptableValue
  }) => void
}

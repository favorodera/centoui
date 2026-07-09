import type {
  AcceptableValue,
  ToggleGroupItemProps as RekaToggleGroupItemProps,
  ToggleGroupRootEmits as RekaToggleGroupRootEmits,
  ToggleGroupRootProps as RekaToggleGroupRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { ToggleProps } from '../toggle'

export const toggleGroupVariants = tv({
  compoundVariants: [
    {
      class: {
        root: `
          *:not-first:rounded-s-none *:not-first:border-s-0

          *:not-last:rounded-e-none
        `,
      },
      compact: true,
      orientation: 'horizontal',
    },
    {
      class: {
        root: `
          *:not-first:rounded-t-none *:not-first:border-bs-0

          *:not-last:rounded-b-none
        `,
      },
      compact: true,
      orientation: 'vertical',
    },
  ],
  defaultVariants: {
    compact: false,
    orientation: 'horizontal',
  },
  slots: {
    item: '',
    root: 'flex inline-fit items-stretch',
  },
  variants: {
    compact: {
      false: {
        root: 'gap-2',
      },
      true: {
        root: '*:focus-visible:z-10',
      },
    },
    orientation: {
      horizontal: {
        root: 'flex-row',
      },
      vertical: {
        root: 'flex-col',
      },
    },
  },
})

// COMPONENTS
export { default as ToggleGroupItem } from './toggle-group-item.vue'
export { default as ToggleGroupRoot } from './toggle-group-root.vue'

// VARIANTS
export type ToggleGroupVariants = VariantProps<typeof toggleGroupVariants>

// PROPS
export type ToggleGroupRootProps = RekaToggleGroupRootProps & {
  class?: any

  /**
   * Whether to compact the toggle group (e.g like a button group).
   * @default false
   */
  compact?: boolean
}

export type ToggleGroupItemProps = Pick<ToggleProps, 'class' | 'size' | 'square' | 'variant'> & RekaToggleGroupItemProps

// EMITS
export type ToggleGroupRootEmits = RekaToggleGroupRootEmits

// SLOTS
export interface ToggleGroupRootSlots {
  default?: (props: {
    /** Current toggle values */
    modelValue?: AcceptableValue | Array<AcceptableValue>
  }) => any
}

export interface ToggleGroupItemSlots {
  default?: (props: {
    /** Current value */
    modelValue: boolean

    /** Current state */
    state: 'off' | 'on'

    /** Current pressed state */
    pressed: boolean

    /** Current disabled state */
    disabled: boolean
  }) => any
}

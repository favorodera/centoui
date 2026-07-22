import type {
  ToggleEmits as RekaToggleEmits,
  ToggleProps as RekaToggleProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const toggleVariants = tv({
  defaultVariants: {
    size: 'md',
    square: false,
    variant: 'ghost',
  },
  slots: {
    root: `
      group/toggle inline-flex items-center shrink-0 border-transparent border
      outline-none select-none transition-all font-medium cursor-default
      justify-center bg-clip-padding

      data-disabled:cursor-not-allowed data-disabled:opacity-70

      aria-invalid:ring-2 aria-invalid:ring-error

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      lg: {
        root: `
          min-block-9 px-3 text-base gap-2 rounded-lg

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
      },
      md: {
        root: `
          min-block-8 min-inline-8 px-2.5 text-sm gap-1.5 rounded-lg

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
      },
      sm: {
        root: `
          min-block-7 min-inline-7 px-2 text-xs gap-1 rounded-lg

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
      xl: {
        root: `
          min-block-10 min-inline-10 px-3.5 text-base gap-2.5 rounded-xl

          *:data-[slot=icon]:block-5 *:data-[slot=icon]:inline-5
        `,
      },
      xs: {
        root: `
          min-block-6 min-inline-6 px-1.5 text-xs gap-1 rounded-md

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
    },
    square: {
      false: {
        root: 'min-inline-fit',
      },
      true: {
        root: 'px-0',
      },
    },
    variant: {
      ghost: {
        root: `
          bg-transparent text-foreground

          hover:not-disabled:bg-muted

          aria-pressed:bg-muted

          data-[state=on]:bg-muted
        `,
      },
      outline: {
        root: `
          border-border bg-transparent text-foreground

          hover:not-disabled:bg-muted

          aria-pressed:bg-muted

          data-[state=on]:bg-muted
        `,
      },
    },
  },
})
export type ToggleVariants = VariantProps<typeof toggleVariants>

// Components
export { default as Toggle } from './toggle.vue'

// Props
export type ToggleProps = RekaToggleProps & {
  /**
   * Visual style variant.
   * @default 'ghost'
   */
  variant?: ToggleVariants['variant']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: ToggleVariants['size']

  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Render the toggle with equal dimensions.
   * @default false
   */
  square?: boolean
}

// Emits
export type ToggleEmits = RekaToggleEmits

// Slots
export interface ToggleSlots {
  default?: (props: {
    /** Current value */
    modelValue: boolean

    /** Current state */
    state: 'off' | 'on'

    /** Current pressed state */
    pressed: boolean

    /** Current disabled state  */
    disabled: boolean
  }) => void
}

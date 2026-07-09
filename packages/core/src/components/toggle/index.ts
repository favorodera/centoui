import type {
  ToggleEmits as RekaToggleEmits,
  ToggleProps as RekaToggleProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const toggleVariants = tv({
  defaultVariants: {
    size: 'md',
    square: false,
    variant: 'ghost',
  },
  slots: {
    root: `
      group/toggle relative inline-flex items-center shrink-0 cursor-default
      truncate border border-transparent font-medium outline-none select-none
      justify-center transition-all

      data-disabled:pointer-events-none data-disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error

      active:translate-y-px

      focus-visible:ring-2 focus-visible:ring-ring
    `,
  },
  variants: {
    size: {
      lg: {
        root: `
          min-block-9 inline-9 px-3 text-sm gap-1.5 rounded-lg

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
      },
      md: {
        root: `
          min-block-8 inline-8 px-2.5 text-sm gap-1.5 rounded-lg

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
      },
      sm: {
        root: `
          min-block-7 inline-7 px-2 text-xs gap-1 rounded-md

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
      },
      xs: {
        root: `
          min-block-6 inline-6 px-1.5 text-xs gap-1 rounded-md

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
      },
    },
    square: {
      false: {
        root: 'inline-auto',
      },
      true: {
        root: 'px-0',
      },
    },
    variant: {
      ghost: {
        root: `
          bg-transparent text-foreground

          hover:bg-muted

          aria-pressed:bg-muted

          data-[state=on]:bg-muted
        `,
      },
      outline: {
        root: `
          border-border bg-transparent text-foreground

          hover:bg-muted

          aria-pressed:bg-muted

          data-[state=on]:bg-muted
        `,
      },
    },
  },
})

// COMPONENT
export { default as Toggle } from './toggle.vue'

// VARIANTS
export type ToggleVariants = VariantProps<typeof toggleVariants>

// PROPS
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

  class?: any

  /**
   * Render the toggle with equal dimensions.
   * @default false
   */
  square?: boolean
}

// EMITS
export type ToggleEmits = RekaToggleEmits

// SLOTS
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
  }) => any
}

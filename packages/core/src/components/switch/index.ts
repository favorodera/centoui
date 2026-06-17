import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const switchVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      peer relative inline-flex shrink-0 items-center border border-transparent
      transition-all outline-none

      focus-visible:ring-2 focus-visible:ring-ring

      disabled:pointer-events-none disabled:opacity-65

      aria-invalid:ring-2 aria-invalid:ring-error

      data-[state=checked]:bg-primary

      data-[state=unchecked]:bg-input
    `,
    thumb: `
      pointer-events-none block origin-left rounded-[inherit] bg-background
      transition-transform

      data-[state=checked]:translate-x-[calc(100%+(--spacing(1.25)))]

      data-[state=unchecked]:translate-x-px
    `,
  },
  variants: {
    size: {
      md: {
        root: 'block-4.5 inline-9 rounded-xs',
        thumb: 'block-3.5 inline-3.5',
      },
      sm: {
        root: 'block-4 inline-8 rounded-xs',
        thumb: 'block-3 inline-3',
      },
    },
  },
})

// COMPONENTS

export { default as Switch } from './switch.vue'

// VARIANTS
export type SwitchVariants = VariantProps<typeof switchVariants>

// PROPS
export type SwitchProps = SwitchRootProps & {
  /**
   * Visual size of the switch
   * @default 'md'
   */
  class?: any
  size?: SwitchVariants['size']
}

// EMITS
export type SwitchEmits = SwitchRootEmits

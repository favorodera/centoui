import { tv, type VariantProps } from 'tailwind-variants'
import {
  type SwitchRootProps,
  type SwitchRootEmits,
} from 'reka-ui'

export const switchVariants = tv({
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
      sm: {
        root: 'h-4 w-8 rounded-xs',
        thumb: 'size-3',
      },
      md: {
        root: 'h-4.5 w-9 rounded-xs',
        thumb: 'size-3.5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
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
  size?: SwitchVariants['size']
  class?: any
}


// EMITS
export type SwitchEmits = SwitchRootEmits

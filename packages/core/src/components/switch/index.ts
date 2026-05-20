import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import {
  type SwitchRootProps as RekaSwitchRootProps,
  type SwitchRootEmits as RekaSwitchRootEmits,
  type SwitchThumbProps as RekaSwitchThumbProps,
  createContext,
} from 'reka-ui'

export const switchVariants = tv({
  slots: {
    root: `
      peer relative inline-flex shrink-0 items-center rounded-sm transition-all
      duration-200 outline-none
      focus-visible:ring-2 focus-visible:ring-ring
      disabled:pointer-events-none disabled:opacity-50
      data-[state=checked]:bg-primary
      data-[state=unchecked]:bg-input
    `,
    
    thumb: `
      pointer-events-none block origin-left rounded-sm bg-background
      transition-transform duration-200
      data-[state=checked]:translate-x-[calc(100%+3px)]
      data-[state=unchecked]:translate-x-px
    `,
  },

  variants: {
    size: {
      sm: {
        root: 'h-4 w-8',
        thumb: 'size-3.5',
      },

      md: {
        root: 'h-4.5 w-9',
        thumb: 'size-4',
      },

      lg: {
        root: 'h-5 w-10',
        thumb: 'size-4.5',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})


// COMPONENTS

export { default as SwitchRoot } from './switch-root.vue'
export { default as SwitchThumb } from './switch-thumb.vue'

// CONTEXT

export const [injectCentouiSwitchRootContext, provideCentouiSwitchRootContext] = createContext<SwitchRootContext>('SwitchRoot', 'centoui:switch-root:context')


// TYPES — Variants

export type SwitchVariants = VariantProps<typeof switchVariants>


// TYPES — Context

export type SwitchRootContext = Pick<SwitchRootProps, 'size'>

// TYPES — Props

export type SwitchRootProps = RekaSwitchRootProps & Pick<ClassProp, 'class'> & {
  /**
   *  Size of the switch
   * @default 'md'
  */
  size?: SwitchVariants['size']
}

export type SwitchThumbProps = RekaSwitchThumbProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type SwitchRootEmits = RekaSwitchRootEmits

// TYPES — Slots

export type SwitchRootSlots = {
  default: (props: {
    /** Current value */
    modelValue: unknown
    /** Whether the switch is checked */
    checked: boolean
  }) => []
}

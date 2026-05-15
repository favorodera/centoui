import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { SeparatorProps } from '../separator'

export const buttonGroupVariants = tv({
  slots: {
    root: `
      relative flex w-fit items-stretch
      *:focus-visible:z-10
      has-[>[data-slot=button-group]]:gap-2
      has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md
      [&>[data-slot=select-trigger]:not([class*=\'w-\'])]:w-fit
      [&>input]:flex-1
    `,
    separator: 'm-0 gap-0 self-stretch',
  },
  variants: {
    orientation: {
      vertical: {
        root: `
          flex-col
          [&>*:not(:first-child)]:rounded-t-none
          [&>*:not(:first-child)]:border-t-0
          [&>*:not(:last-child)]:rounded-b-none
        `,
        separator: '',
      },
      horizontal: {
        root: `
          [&>*:not(:first-child)]:rounded-l-none
          [&>*:not(:first-child)]:border-l-0
          [&>*:not(:last-child)]:rounded-r-none
        `,
        separator: 'h-auto',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})


// COMPONENTS

export { default as ButtonGroupSeparator } from './button-group-separator.vue'
export { default as ButtonGroup } from './button-group.vue'


// CONTEXT

export const [injectCentouiButtonGroupContext, provideCentouiButtonGroupContext] = createContext<ButtonGroupContext>('ButtonGroup', 'centoui:button-group:context')


// TYPES — Variants

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>


// TYPES — Context

export type ButtonGroupContext = Pick<ButtonGroupVariants, 'orientation'> & {
  /** Styles for the button group */
  styles: ReturnType<typeof buttonGroupVariants>
}


// TYPES — Props

export type ButtonGroupProps = PrimitiveProps & {
  /**
   * The orientation of the button group.
   * @default 'horizontal'
   */
  orientation?: ButtonGroupVariants['orientation']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type ButtonGroupSeparatorProps = SeparatorProps


// TYPES — Slots

export type ButtonGroupSlots = {
  default: []
}

import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { SeparatorProps } from '../separator'

/** ButtonGroup style variants */
export const buttonGroupVariants = tv({
  slots: {
    root: `
      relative flex w-fit items-stretch
      *:focus-visible:relative *:focus-visible:z-10
      has-[>[data-centoui-slot=button-group]]:gap-2
      has-[select[aria-hidden=true]:last-child]:[&>[data-centoui-slot=select-trigger]:last-of-type]:rounded-r-md
      [&>[data-centoui-slot=select-trigger]:not([class*=\'w-\'])]:w-fit
      [&>input]:flex-1
    `,
    separator: 'm-0 gap-0 self-stretch',
  },
  variants: {
    orientation: {
      // Vertical
      vertical: {
        root: `
          flex-col
          [&>*:not(:first-child)]:rounded-t-none
          [&>*:not(:first-child)]:border-t-0
          [&>*:not(:last-child)]:rounded-b-none
        `,
        separator: '',
      },
      // Horizontal
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


// Component exports

export { default as ButtonGroupSeparator } from './button-group-separator.vue'
export { default as ButtonGroup } from './button-group.vue'


// Methods exports

export const [injectButtonGroupContext, provideButtonGroupContext] = createContext<ButtonGroupContext>('ButtonGroup', 'centoui:button-group:context')


// Types exports

/** ButtonGroup context type */
export type ButtonGroupContext = Pick<ButtonGroupVariants, 'orientation'>

/** Variant props for ButtonGroup component. */
export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

/** Props for ButtonGroup component. */
export type ButtonGroupProps = PrimitiveProps & {
  /**
   * The orientation of the button group.
   * @default 'horizontal'
   */
  orientation?: ButtonGroupVariants['orientation']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for ButtonGroupSeparator component. */
export type ButtonGroupSeparatorProps = Pick<SeparatorProps, 'color' | 'size' | 'variant' | 'decorative'> & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for ButtonGroup component. */
export type ButtonGroupSlots = {
  /** Default slot. */
  default: []
}

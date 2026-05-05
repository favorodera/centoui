import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { SeparatorProps } from '../separator'
import type { InjectionKey } from 'vue'

export const buttonGroupVariants = tv({
  slots: {
    root: `
      flex w-fit items-stretch
      *:focus-visible:relative *:focus-visible:z-10
      has-[>[data-centoui-slot=button-group-root]]:gap-2
      has-[select[aria-hidden=true]:last-child]:[&>[data-centoui-slot=select-trigger]:last-of-type]:rounded-r-md
      [&>[data-centoui-slot=select-trigger]:not([class*=\'w-\'])]:w-fit
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

export { default as ButtonGroup } from './button-group.vue'
export { default as ButtonGroupSeparator } from './button-group-separator.vue'

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

export const buttonGroupContextKey: InjectionKey<Pick<ButtonGroupVariants, 'orientation'>> = Symbol('centoui:button-group:context')

export type ButtonGroupProps = PrimitiveProps & {
  /**
   * The orientation of the button group.
   * @default 'horizontal'
   */
  orientation?: ButtonGroupVariants['orientation']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type ButtonGroupSeparatorProps = Pick<SeparatorProps, 'color' | 'size' | 'variant' | 'decorative'> & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type ButtonGroupSlots = {
  /** Button group content — buttons, inputs, selects etc. */
  default: []
}

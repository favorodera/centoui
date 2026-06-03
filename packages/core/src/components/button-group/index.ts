import { type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonGroupVariants = tv({
  slots: {
    root: `
      isolate flex w-fit items-stretch

      *:focus-visible:z-10

      has-data-[slot=button-group]:gap-2
    `,
  },
  variants: {
    orientation: {
      vertical: {
        root: `
          flex-col

          *:not-first:rounded-t-none *:not-first:border-t-0

          *:not-last:rounded-b-none
        `,
      },
      horizontal: {
        root: `
          flex-row

          *:not-first:rounded-l-none *:not-first:border-l-0

          *:not-last:rounded-r-none

          **:data-[slot=separator]:h-auto
        `,
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})


// COMPONENT
export { default as ButtonGroup } from './button-group.vue'


// VARIANTS
export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>


// PROPS
export type ButtonGroupProps = PrimitiveProps & {
  /**
   * The orientation of the button group.
   * @default 'horizontal'
   */
  orientation?: ButtonGroupVariants['orientation']
  class?: any
}

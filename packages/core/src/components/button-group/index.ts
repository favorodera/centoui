import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonGroupVariants = tv({
  defaultVariants: {
    orientation: 'horizontal',
  },
  slots: {
    root: `
      isolate flex inline-fit items-stretch group/button-group

      *:focus-visible:z-10

      has-data-[slot=button-group]:gap-2
    `,
  },
  variants: {
    orientation: {
      horizontal: {
        root: `
          flex-row

          *:not-first:rounded-s-none *:not-first:border-s-0

          *:not-last:rounded-e-none
        `,
      },
      vertical: {
        root: `
          flex-col

          *:not-first:rounded-t-none *:not-first:border-bs-0

          *:not-last:rounded-b-none
        `,
      },
    },
  },
})

// COMPONENT
export { default as ButtonGroup } from './button-group.vue'

// VARIANTS
export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>

// PROPS
export type ButtonGroupProps = PrimitiveProps & {
  class?: any

  /**
   * The orientation of the button group.
   * @default 'horizontal'
   */
  orientation?: ButtonGroupVariants['orientation']
}

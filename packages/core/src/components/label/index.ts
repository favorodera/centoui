import type { LabelProps as RekaLabelProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const labelVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      text-sm font-medium select-none flex gap-2 border-input group/label

      peer-disabled:pointer-events-none peer-disabled:opacity-65

      peer-aria-invalid:text-error

      group-data-required/field:after:ms-1
      group-data-required/field:after:text-error
      group-data-required/field:after:content-['*']

      group-data-[disabled=true]/field:opacity-65
      group-data-[disabled=true]/field:pointer-events-none

      has-[>[data-slot=field]]:border has-[>[data-slot=field]]:flex-col
      has-[>[data-slot=field]]:inline-full

      has-[>[data-slot=field][data-invalid="true"]]:border-error

      has-data-[state=checked]:border-primary/10
      has-data-[state=checked]:bg-primary/5
    `,
  },
  variants: {
    size: {
      lg: {
        root: `
          has-[>[data-slot=field]]:px-3.5 has-[>[data-slot=field]]:py-3
          has-[>[data-slot=field]]:rounded-lg
        `,
      },
      md: {
        root: `
          has-[>[data-slot=field]]:px-3 has-[>[data-slot=field]]:py-2.5
          has-[>[data-slot=field]]:rounded-lg
        `,
      },
      sm: {
        root: `
          has-[>[data-slot=field]]:px-2.5 has-[>[data-slot=field]]:py-2
          has-[>[data-slot=field]]:rounded-md
        `,
      },
    },
  },
})

// COMPONENT
export { default as Label } from './label.vue'

// VARIANTS
export type LabelVariants = VariantProps<typeof labelVariants>

// PROPS
export type LabelProps = RekaLabelProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: LabelVariants['size']
}

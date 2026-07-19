import type { LabelProps as RekaLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const labelVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      text-sm font-medium select-none flex gap-2 group/label bg-clip-padding

      peer-disabled:cursor-not-allowed peer-disabled:opacity-70

      peer-aria-invalid:text-error

      group-data-required/field:after:ms-1
      group-data-required/field:after:text-error
      group-data-required/field:after:content-['*']

      group-data-[disabled=true]/field:opacity-70
      group-data-[disabled=true]/field:cursor-not-allowed

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
        root: `has-[>[data-slot=field]]:p-3 has-[>[data-slot=field]]:rounded-lg`,
      },
      md: {
        root: `
          has-[>[data-slot=field]]:p-2.5 has-[>[data-slot=field]]:rounded-lg
        `,
      },
      sm: {
        root: `has-[>[data-slot=field]]:p-2 has-[>[data-slot=field]]:rounded-md`,
      },
    },
  },
})
export type LabelVariants = VariantProps<typeof labelVariants>

// Components
export { default as Label } from './label.vue'

// Props
export type LabelProps = RekaLabelProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: LabelVariants['size']
}

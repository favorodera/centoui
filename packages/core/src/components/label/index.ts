import type { LabelProps as RekaLabelProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const labelVariants = tv({
  slots: {
    root: `
      text-sm font-medium select-none flex

      peer-disabled:pointer-events-none peer-disabled:opacity-65

      group-data-required/field:after:ms-1
      group-data-required/field:after:text-error
      group-data-required/field:after:content-['*']

      group-data-[disabled=true]/field:opacity-65
      group-data-[disabled=true]/field:pointer-events-none
    `,
  },
})

// COMPONENT
export { default as Label } from './label.vue'

// PROPS
export type LabelProps = RekaLabelProps & {
  class?: any
}

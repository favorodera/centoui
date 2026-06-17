import type { LabelProps as RekaLabelProps } from 'reka-ui'
import type { LabelHTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

export const labelVariants = tv({
  slots: {
    root: `
      text-sm font-medium select-none

      peer-disabled:cursor-not-allowed peer-disabled:opacity-65

      group-data-[disabled=true]:pointer-events-none
      group-data-[disabled=true]:opacity-60
    `,
  },
})

// COMPONENT
export { default as Label } from './label.vue'

// PROPS
export type LabelProps = RekaLabelProps & {
  class?: any
}
/* @vue-ignore */ & LabelHTMLAttributes

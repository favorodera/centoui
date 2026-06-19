import type { LabelProps as RekaLabelProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const labelVariants = tv({
  slots: {
    root: `
      text-sm font-medium select-none transition-colors duration-150 ease-in-out

      peer-disabled:pointer-events-none peer-disabled:opacity-65

      has-disabled:pointer-events-none has-disabled:opacity-65

      group-data-disabled:pointer-events-none group-data-disabled:opacity-65
    `,
  },
})

// COMPONENT
export { default as Label } from './label.vue'

// PROPS
export type LabelProps = RekaLabelProps & {
  class?: any
}

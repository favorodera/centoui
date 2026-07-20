import type { AspectRatioProps as RekaAspectRatioProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv } from 'tailwind-variants'

// Variants
export const aspectRatioVariants = tv({
  slots: {
    root: 'group/aspect-ratio',
  },
})

// Components
export { default as AspectRatio } from './aspect-ratio.vue'

// Props
export type AspectRatioProps = RekaAspectRatioProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Slots
export interface AspectRatioSlots {
  default?: (props: {
    /** Current aspect ratio (in %) */
    aspect: number
  }) => void
}

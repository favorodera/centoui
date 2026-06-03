import { type AspectRatioProps as RekaAspectRatioProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const aspectRatioVariants = tv({
  slots: {
    root: '',
  },
})


// COMPONENT
export { default as AspectRatio } from './aspect-ratio.vue'


// PROPS
export type AspectRatioProps = RekaAspectRatioProps & { class?: any }


// SLOTS
export type AspectRatioSlots = {
  default?: (props: {
    /** Current aspect ratio (in %) */
    aspect: number
  }) => any
}

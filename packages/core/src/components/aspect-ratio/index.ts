import { type AspectRatioProps as RekaAspectRatioProps } from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const aspectRatioVariants = tv({
  slots: {
    root: '',
  },
})

// COMPONENTS

export { default as AspectRatio } from './aspect-ratio.vue'


// TYPES — Props

export type AspectRatioProps = RekaAspectRatioProps & Pick<ClassProp, 'class'>


// TYPES — Slots

export type AspectRatioSlots = {
  default: (props: {
    /** Current aspect ratio (in %) */
    aspect: number
  }) => []
}

import { tv, type ClassProp } from 'tailwind-variants'
import {
  type SliderRangeProps as RekaSliderRangeProps,
  type SliderRootProps as RekaSliderRootProps,
  type SliderRootEmits as RekaSliderRootEmits,
  type SliderThumbProps as RekaSliderThumbProps,
  type SliderTrackProps as RekaSliderTrackProps,
  createContext,
} from 'reka-ui'

export const sliderVariants = tv({
  slots: {
    root: `
      relative flex w-full touch-none items-center select-none

      data-disabled:opacity-60
    `,
    track: 'relative grow overflow-hidden rounded-xs bg-input',
    range: 'absolute rounded-[inherit] bg-primary',
    thumb: `
      block size-4.5 shrink-0 rounded-full border border-primary bg-primary
      shadow-sm transition-[color,box-shadow] duration-300

      hover:ring-2 hover:ring-primary

      focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none

      disabled:pointer-events-none disabled:opacity-60

      aria-invalid:ring-2 aria-invalid:ring-error
    `,
  },
  variants: {
    orientation: {
      vertical: {
        root: 'h-full min-h-32 w-auto flex-col',
        track: 'h-full w-2',
        range: 'w-full',
      },
      horizontal: {
        track: 'h-2 w-full',
        range: 'h-full',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})


// COMPONENTS

export { default as SliderRoot } from './slider-root.vue'
export { default as SliderTrack } from './slider-track.vue'
export { default as SliderRange } from './slider-range.vue'
export { default as SliderThumb } from './slider-thumb.vue'


// CONTEXT

export const [injectCentouiSliderRootContext, provideCentouiSliderRootContext] = createContext<SliderRootContext>('SliderRoot', 'centoui:slider-root:context')


// TYPES — Context

export type SliderRootContext = Pick<SliderRootProps, 'orientation'>


// TYPES — Props

export type SliderRootProps = RekaSliderRootProps & Pick<ClassProp, 'class'>

export type SliderTrackProps = RekaSliderTrackProps & Pick<ClassProp, 'class'>

export type SliderRangeProps = RekaSliderRangeProps & Pick<ClassProp, 'class'>

export type SliderThumbProps = RekaSliderThumbProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type SliderRootEmits = RekaSliderRootEmits


// TYPES — Slots

export type SliderRootSlots = {
  default?: (props: {
    /** Current slider values */
    modelValue: number[] | null
   
  }) => any
}

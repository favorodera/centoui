import { tv } from 'tailwind-variants'
import {
  type SliderRootProps,
  type SliderRootEmits,
} from 'reka-ui'

export const sliderVariants = tv({
  slots: {
    root: `
      group/slider-root relative flex touch-none items-center select-none

      data-disabled:opacity-65
    `,
    track: 'relative grow overflow-hidden rounded-xs bg-input',
    range: 'absolute rounded-[inherit] bg-primary',
    thumb: `
      relative block size-3 shrink-0 rounded-full border border-ring bg-primary
      ring-ring transition-[color,box-shadow] select-none

      group-aria-invalid/slider-root:border-error
      group-aria-invalid/slider-root:ring-2
      group-aria-invalid/slider-root:ring-error

      hover:ring-2

      focus-visible:ring-2 focus-visible:outline-none

      disabled:pointer-events-none disabled:opacity-65
    `,
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'w-full',
        track: 'h-1.5 w-full',
        range: 'h-full',
      },
      vertical: {
        root: 'min-h-32 w-auto flex-col self-stretch',
        track: 'h-full w-1.5',
        range: 'w-full',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})


// COMPONENT
export { default as Slider } from './slider.vue'


// PROPS
export type SliderProps = SliderRootProps & { class?: any }


// EMITS
export type SliderEmits = SliderRootEmits

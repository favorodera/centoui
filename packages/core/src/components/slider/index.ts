import type { SliderRootEmits, SliderRootProps } from 'reka-ui'
import { tv } from 'tailwind-variants'

export const sliderVariants = tv({
  defaultVariants: {
    orientation: 'horizontal',
  },
  slots: {
    range: 'absolute rounded-[inherit] bg-primary',
    root: `
      group/slider-root relative flex touch-none items-center select-none

      data-disabled:opacity-65
    `,
    thumb: `
      relative block block-4 inline-4 shrink-0 rounded-full border-2
      border-primary bg-primary-foreground ring-ring

      group-aria-invalid/slider-root:border-error
      group-aria-invalid/slider-root:ring-2
      group-aria-invalid/slider-root:ring-error

      hover:ring-2

      focus-visible:ring-2 focus-visible:outline-none

      disabled:pointer-events-none disabled:opacity-65
    `,
    track: 'relative grow overflow-hidden rounded-full bg-muted',
  },
  variants: {
    orientation: {
      horizontal: {
        range: 'block-full',
        root: 'inline-full',
        track: 'block-1.5 inline-full',
      },
      vertical: {
        range: 'inline-full',
        root: 'min-block-32 inline-auto flex-col self-stretch',
        track: 'block-full inline-1.5',
      },
    },
  },
})

// COMPONENT
export { default as Slider } from './slider.vue'

// PROPS
export type SliderProps = SliderRootProps & { class?: any }

// EMITS
export type SliderEmits = SliderRootEmits

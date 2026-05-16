import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const textVariants = tv({
  slots: {
    root: 'text-foreground',
  },
  variants: {
    size: {
      'xs': { root: 'text-xs' },
      'sm': { root: 'text-sm' },
      'md': { root: 'text-base' },
      'lg': { root: 'text-lg' },
      'xl': { root: 'text-xl' },
      '2xl': { root: 'text-2xl' },
    },
    weight: {
      light: { root: 'font-light' },
      normal: { root: 'font-normal' },
      medium: { root: 'font-medium' },
      semibold: { root: 'font-semibold' },
      bold: { root: 'font-bold' },
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
})


// COMPONENT

export { default as Text } from './text.vue'


// TYPES — Variants
export type TextVariants = VariantProps<typeof textVariants>


// TYPES — Props
export type TextProps = PrimitiveProps & {
  /**
   * The size of the text.
   * @default 'md'
   */
  size?: TextVariants['size']

  /**
   * The weight of the text.
   * @default 'normal'
   */
  weight?: TextVariants['weight']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// TYPES — Slots
export type TextSlots = {
  default: []
}

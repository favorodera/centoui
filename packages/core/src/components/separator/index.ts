import { type SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const separatorVariants = tv({
  slots: {
    root: 'flex items-center gap-3 align-middle',
    line: '',
    content: 'shrink-0 text-center font-medium',
  },
  variants: {
    color: {
      primary: { line: 'border-primary' },
      secondary: { line: 'border-secondary' },
      success: { line: 'border-success' },
      warning: { line: 'border-warning' },
      error: { line: 'border-error' },
      neutral: { line: 'border-muted' },
    },
    variant: {
      solid: { line: 'border-solid' },
      dashed: { line: 'border-dashed' },
      dotted: { line: 'border-dotted' },
    },
    orientation: {
      horizontal: {
        root: 'my-3 w-full',
        line: 'w-full',
      },
      vertical: {
        root: 'mx-3 h-full flex-col',
        line: 'h-full',
      },
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
  },
  compoundVariants: [
    { orientation: 'horizontal', size: 'xs', class: { line: 'border-t' } },
    { orientation: 'horizontal', size: 'sm', class: { line: 'border-t-2' } },
    { orientation: 'horizontal', size: 'md', class: { line: 'border-t-3' } },
    { orientation: 'horizontal', size: 'lg', class: { line: 'border-t-4' } },
    { orientation: 'horizontal', size: 'xl', class: { line: 'border-t-5' } },

    { orientation: 'vertical', size: 'xs', class: { line: 'border-s' } },
    { orientation: 'vertical', size: 'sm', class: { line: 'border-s-2' } },
    { orientation: 'vertical', size: 'md', class: { line: 'border-s-3' } },
    { orientation: 'vertical', size: 'lg', class: { line: 'border-s-4' } },
    { orientation: 'vertical', size: 'xl', class: { line: 'border-s-5' } },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    size: 'xs',
    variant: 'solid',
    color: 'neutral',
  },
})
export { default as Separator } from './separator.vue'

export type SeparatorVariants = VariantProps<typeof separatorVariants>

export type SeparatorProps = RekaSeparatorProps & {
  /**
   * The orientation of the separator.
   * @defaultValue 'horizontal'
   */
  orientation?: SeparatorVariants['orientation']
  /**
   * The color of the separator.
   * @defaultValue 'neutral'
   */
  color?: SeparatorVariants['color']
  /**
   * The size of the separator.
   * @defaultValue 'xs'
   */
  size?: SeparatorVariants['size']
  /**
   * The visual style of the separator.
   * @defaultValue 'solid'
   */
  variant?: SeparatorVariants['variant']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type SeparatorSlots = {
  /** Separator content - text, icons, etc. */
  default: []
}

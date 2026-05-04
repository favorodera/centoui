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
    size: {
      xs: { line: 'border' },
      sm: { line: 'border-2' },
      md: { line: 'border-3' },
      lg: { line: 'border-4' },
      xl: { line: 'border-5' },
    },
    variant: {
      solid: { line: 'border-solid' },
      dashed: { line: 'border-dashed' },
      dotted: { line: 'border-dotted' },
    },
    orientation: {
      horizontal: {
        root: 'my-3 w-full flex-row',
        line: 'w-full border-t',
      },
      vertical: {
        root: 'mx-3 h-full flex-col',
        line: 'h-full border-s',
      },
    },
  },
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

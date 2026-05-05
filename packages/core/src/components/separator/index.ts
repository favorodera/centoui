import { type SeparatorProps as RekaSeparatorProps } from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

/** Separator style variants */
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
    // Horizontal border widths
    { orientation: 'horizontal', size: 'xs', class: { line: 'border-t' } },
    { orientation: 'horizontal', size: 'sm', class: { line: 'border-t-2' } },
    { orientation: 'horizontal', size: 'md', class: { line: 'border-t-3' } },
    { orientation: 'horizontal', size: 'lg', class: { line: 'border-t-4' } },
    { orientation: 'horizontal', size: 'xl', class: { line: 'border-t-5' } },

    // Vertical border widths
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

// Component exports
export { default as Separator } from './separator.vue'

// Types exports
/** Extractable variant props for Separator component. */
export type SeparatorVariants = VariantProps<typeof separatorVariants>

/** Props for Separator component. */
export type SeparatorProps = RekaSeparatorProps & {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: SeparatorVariants['orientation']
  /**
   * The color of the separator.
   * @default 'neutral'
   */
  color?: SeparatorVariants['color']
  /**
   * The size (thickness) of the separator.
   * @default 'xs'
   */
  size?: SeparatorVariants['size']
  /**
   * The visual style of the separator line.
   * @default 'solid'
   */
  variant?: SeparatorVariants['variant']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Slots for Separator component. */
export type SeparatorSlots = {
  /** Separator content — text, icons, etc. Renders flanking lines when present. */
  default: []
}

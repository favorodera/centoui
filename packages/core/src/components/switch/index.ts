import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const switchVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      peer relative inline-flex shrink-0 items-center rounded-full border
      outline-none transition-colors border-input bg-primary

      focus-visible:ring-2 focus-visible:ring-ring

      aria-invalid:ring-2 aria-invalid:ring-error

      disabled:pointer-events-none disabled:opacity-65

      data-[state=unchecked]:bg-muted
    `,
    thumb: `
      pointer-events-none block shrink-0 rounded-full bg-primary-foreground
      transition-[translate,background-color]

      data-[state=unchecked]:translate-x-0.5
      data-[state=unchecked]:bg-foreground
    `,
  },
  variants: {
    size: {
      lg: {
        root: 'inline-12 block-6',
        thumb: `
          inline-4 block-4

          data-[state=checked]:translate-x-7
        `,
      },
      md: {
        root: 'inline-10 block-5',
        thumb: `
          inline-3.5 block-3.5

          data-[state=checked]:translate-x-5.5
        `,
      },
      sm: {
        root: 'inline-8 block-4',
        thumb: `
          inline-3 block-3

          data-[state=checked]:translate-x-4
        `,
      },
    },
  },
})

// COMPONENTS
export { default as Switch } from './switch.vue'

// VARIANTS
export type SwitchVariants = VariantProps<typeof switchVariants>

// PROPS
export type SwitchProps = SwitchRootProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: SwitchVariants['size']
}

// EMITS
export type SwitchEmits = SwitchRootEmits

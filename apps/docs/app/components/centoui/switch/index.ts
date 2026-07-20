import type { SwitchRootEmits, SwitchRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const switchVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: `
      peer relative inline-flex shrink-0 items-center rounded-full border
      outline-none transition-colors border-input group/switch-root
      bg-clip-padding px-0.5

      focus-visible:ring-2 focus-visible:ring-ring

      aria-invalid:ring-2 aria-invalid:ring-error

      disabled:cursor-not-allowed disabled:opacity-70

      data-[state=unchecked]:bg-muted

      data-[state=checked]:bg-primary
    `,
    thumb: `
      pointer-events-none block shrink-0 rounded-full
      transition-[translate,background-color] group/switch-thumb

      data-[state=unchecked]:bg-foreground

      data-[state=checked]:bg-primary-foreground
    `,
  },
  variants: {
    size: {
      lg: {
        root: 'inline-12 block-6',
        thumb: `
          inline-4 block-4

          data-[state=checked]:translate-x-6.5
        `,
      },
      md: {
        root: 'inline-10 block-5',
        thumb: `
          inline-3.5 block-3.5

          data-[state=checked]:translate-x-5
        `,
      },
      sm: {
        root: 'inline-8 block-4',
        thumb: `
          inline-3 block-3

          data-[state=checked]:translate-x-3.5
        `,
      },
    },
  },
})
export type SwitchVariants = VariantProps<typeof switchVariants>

// Components
export { default as Switch } from './switch.vue'

// Props
export type SwitchProps = SwitchRootProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: SwitchVariants['size']
}

// Emits
export type SwitchEmits = SwitchRootEmits

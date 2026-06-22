import type { IconifyIconProps } from '@iconify/vue'
import { tv } from 'tailwind-variants'

export const iconVariants = tv({
  slots: {
    root: 'pointer-events-none block-lh inline-4 shrink-0 align-middle',
  },
})

// COMPONENT
export { default as Icon } from './icon.vue'

// PROPS
export type IconProps = Omit<IconifyIconProps, 'ariaHidden'> & {
  /**
   * Controls exposure to assistive technologies.
   * Set to `false` and provide an accessible label for meaningful icons.
   * @default true
   */
  ariaHidden?: 'false' | 'true' | boolean

  class?: any
}

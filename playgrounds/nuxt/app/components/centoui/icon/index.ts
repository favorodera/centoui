import { type IconifyIconProps } from '@iconify/vue'
import { tv, type ClassProp } from 'tailwind-variants'

export const iconVariants = tv({
  slots: {
    root: '',
  },
})


// COMPONENTS

export { default as Icon } from './icon.vue'


// TYPES — Props

export type IconProps = Pick<ClassProp, 'class'> & Omit<IconifyIconProps, 'ariaHidden'> & {
  /**
   * Controls exposure to assistive technologies.
   * Set to `false` and provide an accessible label for meaningful icons.
   * @default true
   */
  ariaHidden?: boolean | 'true' | 'false'
}

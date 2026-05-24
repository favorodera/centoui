import { type IconifyIconProps as BaseIconifyIconProps } from '@iconify/vue'
import { tv, type ClassProp } from 'tailwind-variants'

export const iconVariants = tv({
  slots: {
    root: '',
  },
})


// COMPONENTS

export { default as Icon } from './icon.vue'


// TYPES — Utils and Bases

type IconifyIconProps = Omit<BaseIconifyIconProps, 'ariaHidden'>

// type NuxtIconProps = Omit<InstanceType<typeof Icon>['$props'], 'name'> & {
//   icon: string,
// }


// TYPES — Props

export type IconProps = Pick<ClassProp, 'class'> & IconifyIconProps & {
  /**
     * Controls whether the icon is exposed to assistive technologies.
     *
     * Decorative icons should typically remain hidden from screen readers,
     * while meaningful icons (for example, status or action indicators)
     * should set this to `false` and provide an accessible label.
     *
     * @default true
     */
  ariaHidden?: boolean | 'true' | 'false'
}

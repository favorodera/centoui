import {
  createContext,
  type AvatarFallbackProps as RekaAvatarFallbackProps,
  type AvatarImageEmits as RekaAvatarImageEmits,
  type AvatarImageProps as RekaAvatarImageProps,
  type AvatarRootProps as RekaAvatarRootProps,
} from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'
import type { ImgHTMLAttributes } from 'vue'

export const avatarVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center overflow-hidden
      rounded-full bg-surface align-middle select-none
    `,
    image: 'size-full rounded-[inherit] object-cover',
    fallback: `
      truncate font-medium text-foreground
      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
  },
  variants: {
    size: {
      'xs': {
        root: 'size-6',
        fallback: `
          text-[10px]
          [&_svg]:size-3
        `,
      },
      'sm': {
        root: 'size-7',
        fallback: `
          text-xs
          [&_svg]:size-3.5
        `,
      },
      'md': {
        root: 'size-8',
        fallback: `
          text-sm
          [&_svg]:size-4
        `,
      },
      'lg': {
        root: 'size-9',
        fallback: `
          text-sm
          [&_svg]:size-4.5
        `,
      },
      'xl': {
        root: 'size-10',
        fallback: `
          text-base
          [&_svg]:size-5
        `,
      },
      '2xl': {
        root: 'size-11',
        fallback: `
          text-lg
          [&_svg]:size-5.5
        `,
      },
      '3xl': {
        root: 'size-12',
        fallback: `
          text-xl
          [&_svg]:size-6
        `,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})


// COMPONENTS

export { default as AvatarFallback } from './avatar-fallback.vue'
export { default as AvatarImage } from './avatar-image.vue'
export { default as AvatarRoot } from './avatar-root.vue'


// COMPONENT UTILS

export { getInitials } from './avatar-utils'


// CONTEXT

export const [injectCentouiAvatarRootContext, provideCentouiAvatarRootContext] = createContext<AvatarRootContext>('AvatarRoot', 'centoui:avatar-root:context')


// TYPES — Variants

export type AvatarVariants = VariantProps<typeof avatarVariants>


// TYPES — Context

export type AvatarRootContext = Pick<AvatarRootProps, 'size'>


// TYPES — Props

export type AvatarRootProps = RekaAvatarRootProps & Pick<ClassProp, 'class'> & {
  /**
   * The size of the avatar.
   * @default 'md'
   */
  size?: AvatarVariants['size']
}

export type AvatarImageProps = RekaAvatarImageProps & /* @vue-ignore */ Omit<ImgHTMLAttributes, 'src' | 'crossorigin' | 'referrerpolicy'> & Pick<ClassProp, 'class'>

export type AvatarFallbackProps = RekaAvatarFallbackProps & Pick<ClassProp, 'class'>


// TYPES — Emits

export type AvatarImageEmits = RekaAvatarImageEmits

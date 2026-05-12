import {
  createContext,
  type AvatarFallbackProps as RekaAvatarFallbackProps,
  type AvatarImageEmits as RekaAvatarImageEmits,
  type AvatarImageProps as RekaAvatarImageProps,
  type AvatarRootProps as RekaAvatarRootProps,
} from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { ImgHTMLAttributes } from 'vue'

/** Avatar style variants */
export const avatarVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center overflow-hidden
      rounded-full bg-surface align-middle select-none
    `,
    image: 'size-full rounded-[inherit] object-cover',
    fallback: `
      truncate font-medium text-foreground/80
      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
  },
  variants: {
    size: {
      '2xs': {
        root: 'size-5',
        fallback: 'text-[10px] [&_svg]:size-2.5',
      },
      'xs': {
        root: 'size-6',
        fallback: 'text-xs [&_svg]:size-3',
      },
      'sm': {
        root: 'size-7',
        fallback: 'text-sm [&_svg]:size-3.5',
      },
      'md': {
        root: 'size-8',
        fallback: 'text-base [&_svg]:size-4',
      },
      'lg': {
        root: 'size-9',
        fallback: 'text-lg [&_svg]:size-4.5',
      },
      'xl': {
        root: 'size-10',
        fallback: 'text-xl [&_svg]:size-5',
      },
      '2xl': {
        root: 'size-11',
        fallback: 'text-[22px] [&_svg]:size-5.5',
      },
      '3xl': {
        root: 'size-12',
        fallback: 'text-2xl [&_svg]:size-6',
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


export const [injectCentouiAvatarRootContext, provideCentouiAvatarRootContext] = createContext<AvatarRootContext>('AvatarRoot', 'centoui:avatar-root:context')


// PROPS

export type AvatarRootContext = {
  /** Styles for the alert */
  styles: ReturnType<typeof avatarVariants>
}

/** Variant props for Avatar component. */
export type AvatarVariants = VariantProps<typeof avatarVariants>

/** Props for AvatarRoot component. */
export type AvatarRootProps = RekaAvatarRootProps & {
  /**
   * The size of the avatar.
   * @default 'md'
   */
  size?: AvatarVariants['size']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AvatarImage component. */
export type AvatarImageProps = RekaAvatarImageProps & /* @vue-ignore */ Omit<ImgHTMLAttributes, 'src' | 'crossorigin' | 'referrerpolicy'> & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

/** Props for AvatarFallback component. */
export type AvatarFallbackProps = RekaAvatarFallbackProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}


// EMITS

/** Emits for AvatarImage component. */
export type AvatarImageEmits = RekaAvatarImageEmits


// SLOTS

/** Slots for AvatarRoot component. */
export type AvatarRootSlots = {
  /** Default slot. */
  default: []
}

/** Slots for AvatarFallback component. */
export type AvatarFallbackSlots = {
  /** Default slot. */
  default: []
}

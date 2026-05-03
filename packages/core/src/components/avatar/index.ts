import {
  type AvatarFallbackProps as RekaAvatarFallbackProps,
  type AvatarImageEmits as RekaAvatarImageEmits,
  type AvatarImageProps as RekaAvatarImageProps,
  type AvatarRootProps as RekaAvatarRootProps,
} from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'

export const avatarVariants = tv({
  slots: {
    root: [],
    image: [],
    fallback: [],
  },
  variants: {
    size: {
      '2xs': {},
      'xs': {},
      'sm': {},
      'md': {},
      'lg': {},
      'xl': {},
      '2xl': {},
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'md',
  },
})

export { default as AvatarRoot } from './avatar-root.vue'
// export { default as AvatarImage } from './avatar-image.vue'
// export { default as AvatarFallback } from './avatar-fallback.vue'

export type AvatarVariants = VariantProps<typeof avatarVariants>

export type AvatarRootProps = RekaAvatarRootProps & {
  /**
    * The size of the avatar.
    * @default 'md'
    */
  size?: AvatarVariants['size']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AvatarImageProps = RekaAvatarImageProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AvatarFallbackProps = RekaAvatarFallbackProps & {
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AvatarImageEmits = RekaAvatarImageEmits


export type AvatarRootSlots = {
  /** Avatar root content - image and fallback */
  default: []
}

export type AvatarFallbackSlots = {
  /** Avatar fallback content - text, icons, etc. */
  default: []
}

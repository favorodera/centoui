import {
  type AvatarFallbackProps as RekaAvatarFallbackProps,
  type AvatarImageEmits as RekaAvatarImageEmits,
  type AvatarImageProps as RekaAvatarImageProps,
  type AvatarRootProps as RekaAvatarRootProps,
} from 'reka-ui'
import { tv, type ClassValue, type VariantProps } from 'tailwind-variants'
import type { ImgHTMLAttributes } from 'vue'

export const avatarVariants = tv({
  slots: {
    root: [
      `
        relative inline-flex shrink-0 items-center justify-center
        overflow-hidden rounded-full bg-surface align-middle select-none
      `,
    ],
    image: [
      'size-full rounded-[inherit] object-cover',
    ],
    fallback: [
      'truncate font-medium text-muted-foreground',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    ],
  },
  variants: {
    disabled: {
      true: {
        root: [
          'pointer-events-none opacity-40',
        ],
      },
    },
    size: {
      '3xs': {
        root: [
          'size-4 text-[8px]',
          '[&_svg]:size-2',
        ],
      },
      '2xs': {
        root: [
          'size-5 text-[10px]',
          '[&_svg]:size-2.5',
        ],
      },
      'xs': {
        root: [
          'size-6 text-xs',
          '[&_svg]:size-3',
        ],
      },
      'sm': {
        root: [
          'size-7 text-sm',
          '[&_svg]:size-3.5',
        ],
      },
      'md': {
        root: [
          'size-8 text-base',
          '[&_svg]:size-4',
        ],
      },
      'lg': {
        root: [
          'size-9 text-lg',
          '[&_svg]:size-4.5',
        ],
      },
      'xl': {
        root: [
          'size-10 text-xl',
          '[&_svg]:size-5',
        ],
      },
      '2xl': {
        root: [
          'size-11 text-[22px]',
          '[&_svg]:size-5.5',
        ],
      },
      '3xl': {
        root: [
          'size-12 text-2xl',
          '[&_svg]:size-6',
        ],
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'md',
  },
})

export { default as AvatarFallback } from './avatar-fallback.vue'
export { default as AvatarImage } from './avatar-image.vue'
export { default as AvatarRoot } from './avatar-root.vue'

export { getInitials } from './avatar-utils'

export type AvatarVariants = VariantProps<typeof avatarVariants>

export type AvatarRootProps = RekaAvatarRootProps & {
  /**
    * The size of the avatar.
    * @default 'md'
    */
  size?: AvatarVariants['size']
  /**
   * Whether the avatar is disabled.
   * @default false
   */
  disabled?: AvatarVariants['disabled']
  /** Custom class to apply to the root element. */
  class?: ClassValue
}

export type AvatarImageProps = RekaAvatarImageProps & /* @vue-ignore */ Omit<ImgHTMLAttributes, 'src' | 'crossorigin' | 'referrerpolicy'> & {
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

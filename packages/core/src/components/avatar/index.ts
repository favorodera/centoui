import {
  createContext,
  type PrimitiveProps,
  type AvatarFallbackProps as RekaAvatarFallbackProps,
  type AvatarImageEmits as RekaAvatarImageEmits,
  type AvatarImageProps as RekaAvatarImageProps,
  type AvatarRootProps as RekaAvatarRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { ImgHTMLAttributes } from 'vue'

export const avatarVariants = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 items-center justify-center overflow-hidden
      rounded-full border border-border bg-muted align-middle select-none
    `,
    image: 'size-full rounded-[inherit] object-cover',
    fallback: `
      flex size-full items-center justify-center truncate font-medium
      text-muted-foreground uppercase select-none
    `,
    group: `
      isolate flex -space-x-2.5

      *:border-background

      *:data-[slot=avatar-root]:border-2
    `,
  },
  variants: {
    size: {
      xs: {
        root: 'size-6',
        fallback: `
          text-[10px]

          *:data-[slot=icon]:size-3
        `,
      },
      sm: {
        root: 'size-8',
        fallback: `
          text-xs

          *:data-[slot=icon]:size-3.5
        `,
      },
      md: {
        root: 'size-10',
        fallback: `
          text-sm

          *:data-[slot=icon]:size-4
        `,
      },
      lg: {
        root: 'size-12',
        fallback: `
          text-base

          *:data-[slot=icon]:size-5
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
export { default as AvatarGroup } from './avatar-group.vue'


// CONTEXT
export type AvatarRootContext = Pick<AvatarRootProps, 'size'>

export const [
  injectCentouiAvatarRootContext,
  provideCentouiAvatarRootContext,
] = createContext<AvatarRootContext>(
  'AvatarRoot',
  'centoui:avatar-root:context',
)


// VARIANTS
export type AvatarVariants = VariantProps<typeof avatarVariants>


// UTILITIES
export { getInitials } from './avatar-utils'


// PROPS
export type AvatarRootProps = RekaAvatarRootProps & {
  /**
   * The size of the avatar.
   * @default 'md'
   */
  size?: AvatarVariants['size']
  class?: any
}

export type AvatarImageProps = RekaAvatarImageProps & { class?: any } & /* @vue-ignore */ ImgHTMLAttributes

export type AvatarFallbackProps = RekaAvatarFallbackProps & { class?: any }

export type AvatarGroupProps = PrimitiveProps & { class?: any }


// EMITS
export type AvatarImageEmits = RekaAvatarImageEmits

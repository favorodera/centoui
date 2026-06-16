import type { ImgHTMLAttributes } from 'vue'
import {
  createContext,
  type PrimitiveProps,
  type AvatarFallbackProps as RekaAvatarFallbackProps,
  type AvatarImageEmits as RekaAvatarImageEmits,
  type AvatarImageProps as RekaAvatarImageProps,
  type AvatarRootProps as RekaAvatarRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const avatarVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    fallback: `
      flex block-full inline-full items-center justify-center truncate
      font-medium text-muted-foreground uppercase select-none
    `,
    group: `
      isolate flex -space-x-2.5

      *:border-background

      *:data-[slot=avatar-root]:border-2
    `,
    image: 'block-full inline-full rounded-[inherit] object-cover',
    root: `
      relative inline-flex shrink-0 items-center justify-center overflow-hidden
      rounded-full border border-border bg-muted align-middle select-none
    `,
  },
  variants: {
    size: {
      lg: {
        fallback: `
          text-base

          *:data-[slot=icon]:block-5 *:data-[slot=icon]:inline-5
        `,
        root: 'block-12 inline-12',
      },
      md: {
        fallback: `
          text-sm

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
        root: 'block-10 inline-10',
      },
      sm: {
        fallback: `
          text-xs

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
        root: 'block-8 inline-8',
      },
      xs: {
        fallback: `
          text-[10px]

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
        root: 'block-6 inline-6',
      },
    },
  },
})

// COMPONENTS
export { default as AvatarFallback } from './avatar-fallback.vue'
export { default as AvatarGroup } from './avatar-group.vue'
export { default as AvatarImage } from './avatar-image.vue'
export { default as AvatarRoot } from './avatar-root.vue'

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
  class?: any
  size?: AvatarVariants['size']
}

export type AvatarImageProps = ImgHTMLAttributes & RekaAvatarImageProps & /** @vue-ignore */ { class?: any }

export type AvatarFallbackProps = RekaAvatarFallbackProps & { class?: any }

export type AvatarGroupProps = PrimitiveProps & { class?: any }

// EMITS
export type AvatarImageEmits = RekaAvatarImageEmits

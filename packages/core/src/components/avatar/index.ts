import type { HTMLAttributes } from 'vue'
import {
  createContext,
  type PrimitiveProps,
  type AvatarFallbackProps as RekaAvatarFallbackProps,
  type AvatarImageEmits as RekaAvatarImageEmits,
  type AvatarImageProps as RekaAvatarImageProps,
  type AvatarRootProps as RekaAvatarRootProps,
} from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

// Variants
export const avatarVariants = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    fallback: `
      flex block-full inline-full items-center justify-center truncate
      font-medium text-muted-foreground uppercase group/avatar-fallback
    `,
    group: `isolate inline-flex -space-x-2.5 group/avatar-group`,
    image: `
      block-full inline-full rounded-[inherit] object-cover group/avatar-image
    `,
    root: `
      relative inline-flex shrink-0 items-center justify-center overflow-hidden
      rounded-full border align-middle bg-muted select-none group/avatar-root
    `,
  },
  variants: {
    size: {
      lg: {
        fallback: `
          text-sm

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
        root: 'block-9 inline-9',
      },
      md: {
        fallback: `
          text-sm

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
        root: 'block-8 inline-8',
      },
      sm: {
        fallback: `
          text-xs

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
        root: 'block-7 inline-7',
      },
      xl: {
        fallback: `
          text-base

          *:data-[slot=icon]:block-5 *:data-[slot=icon]:inline-5
        `,
        root: 'block-10 inline-10',
      },
      xs: {
        fallback: `
          text-xs

          *:data-[slot=icon]:block-3 *:data-[slot=icon]:inline-3
        `,
        root: 'block-6 inline-6',
      },
    },
  },
})
export type AvatarVariants = VariantProps<typeof avatarVariants>

// Components
export { default as AvatarFallback } from './avatar-fallback.vue'
export { default as AvatarGroup } from './avatar-group.vue'
export { default as AvatarImage } from './avatar-image.vue'
export { default as AvatarRoot } from './avatar-root.vue'

// Utils
export { getInitials } from './utils.ts'

// Context
export type AvatarRootContext = Pick<AvatarRootProps, 'size'>
export const [
  injectRootContext,
  provideRootContext,
] = createContext<AvatarRootContext>('AvatarRoot', 'centoui:avatar-root:context')

// Props
export type AvatarRootProps = RekaAvatarRootProps & {
  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: AvatarVariants['size']

  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AvatarImageProps = RekaAvatarImageProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AvatarFallbackProps = RekaAvatarFallbackProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

export type AvatarGroupProps = PrimitiveProps & {
  /** Custom style class */
  class?: HTMLAttributes['class']
}

// Emits
export type AvatarImageEmits = RekaAvatarImageEmits

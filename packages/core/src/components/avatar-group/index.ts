import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const avatarGroupVariants = tv({
  slots: {
    root: `
      isolate flex -space-x-2
      *:data-[slot=avatar-root]:border-2 *:data-[slot=avatar-root]:border-border
    `,
  },
})


// COMPONENT

export { default as AvatarGroup } from './avatar-group.vue'


// TYPES — Props

export type AvatarGroupProps = PrimitiveProps & Pick<ClassProp, 'class'>



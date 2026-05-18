import type { PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp } from 'tailwind-variants'

export const kbdGroupVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-1 align-middle',
  },
})


// COMPONENT

export { default as KbdGroup } from './kbd-group.vue'


// TYPES — Props

export type KbdGroupProps = PrimitiveProps & Pick<ClassProp, 'class'>

import { tv, type ClassProp } from 'tailwind-variants'
import { type LabelProps as RekaLabelProps } from 'reka-ui'
import type { LabelHTMLAttributes } from 'vue'

export const labelVariants = tv({
  slots: {
    root: `
      flex items-center gap-2 text-sm leading-none font-medium select-none

      group-data-[disabled=true]:pointer-events-none
      group-data-[disabled=true]:opacity-60

      peer-disabled:opacity-60
    `,
  },
})


// COMPONENT

export { default as Label } from './label.vue'


// TYPES — Props

export type LabelProps = Pick<ClassProp, 'class'> & RekaLabelProps & /* @vue-ignore */ Omit<LabelHTMLAttributes, 'class' | 'for'>

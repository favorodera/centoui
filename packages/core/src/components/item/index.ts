import { tv } from 'tailwind-variants'

export const itemVariants = tv({
  defaultVariants: {
    variant: 'ghost',
  },
  slots: {
    body: '',
    description: '',
    header: '',
    root: '',
    title: '',
  },
  variants: {
    variant: {
      elevated: {},
      ghost: {},
      outline: {},
    },
  },
})

import { tv } from 'tailwind-variants'

export const itemVariants = tv({
  slots: {
    root: '',
    media: '',
    content: '',
    header: '',
    title: '',
    description: '',
    body: '',
    footer: '',
    actions: '',
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    variant: {
      outline: {},
      naked: {},
      soft: {},
    },
    orientation: {
      horizontal: {},
      vertical: {},
    },
  },
})

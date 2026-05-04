import { tv } from 'tailwind-variants'

export const buttonGroupVariants = tv({
  slots: {
    root: `
      flex w-fit items-stretch
      *:focus-visible:relative *:focus-visible:z-10
      has-[>[data-centoui-slot=button-group]]:gap-2
      has-[select[aria-hidden=true]:last-child]:[&>[data-centoui-slot=select-trigger]:last-of-type]:rounded-r-md
      [&>[data-centoui-slot=select-trigger]:not([class*=\'w-\'])]:w-fit
      [&>input]:flex-1
    `,
    separator: '',
  },
  variants: {
    orientation: {
      vertical: {
        root: `
          flex-col
          [&>*:not(:first-child)]:rounded-t-none
          [&>*:not(:first-child)]:border-t-0
          [&>*:not(:last-child)]:rounded-b-none
        `,
      },
      horizontal: {
        root: `
          [&>*:not(:first-child)]:rounded-l-none
          [&>*:not(:first-child)]:border-l-0
          [&>*:not(:last-child)]:rounded-r-none
        `,
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

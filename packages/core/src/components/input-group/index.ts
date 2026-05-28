import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

export const inputGroupVariants = tv({
  slots: {
    root: `
      relative flex w-full min-w-0 items-stretch overflow-hidden border
      border-input

      has-[[data-slot][aria-invalid=true]]:ring-2
      has-[[data-slot][aria-invalid=true]]:ring-error

      has-[[input-group-control]:disabled]:pointer-events-none
      has-[[input-group-control]:disabled]:opacity-60

      has-[[input-group-control]:focus-visible]:ring-2
      has-[[input-group-control]:focus-visible]:ring-ring

      has-[>[data-slot=input-group-addon]:is([data-position=bottom],[data-position=top])]:h-auto
      has-[>[data-slot=input-group-addon]:is([data-position=bottom],[data-position=top])]:flex-col

      *:[[input-group-control]]:min-w-0 *:[[input-group-control]]:flex-1
      *:[[input-group-control]]:rounded-none *:[[input-group-control]]:border-0
      *:[[input-group-control]]:bg-transparent *:[[input-group-control]]:p-0

      [&>[input-group-control]:focus-visible]:ring-0

      [&>[input-group-control][aria-invalid=true]]:ring-0
    `,
    addon: `
      flex shrink-0 items-center font-medium text-muted-foreground

      [&_svg]:pointer-events-none [&_svg]:shrink-0
    `,
  },
  variants: {
    addonPosition: {
      left: {
        addon: 'order-first',
      },
      right: {
        addon: 'order-last',
      },
      top: {
        addon: 'w-full',
      },
      bottom: {
        addon: 'order-last w-full',
      },
    },
    size: {
      sm: {
        root: 'gap-1 rounded-md px-3 py-1',
        addon: `
          text-xs

          [&_svg]:size-4

          data-[position=top]:[.border-b]:pb-3

          data-[position=bottom]:[.border-t]:pt-3
        `,
      },
      md: {
        root: 'gap-2 rounded-md px-4 py-2',
        addon: `
          text-sm

          [&_svg]:size-4

          data-[position=top]:[.border-b]:pb-4

          data-[position=bottom]:[.border-t]:pt-4
        `,
      },
    },
  },
  defaultVariants: {
    addonPosition: 'left',
    size: 'md',
  },
})


// COMPONENT

export { default as InputGroupRoot } from './input-group-root.vue'
export { default as InputGroupAddon } from './input-group-addon.vue'


// CONTEXT

export const [injectCentouiInputGroupRootContext, provideCentouiInputGroupRootContext] = createContext<InputGroupRootContext>('InputGroupRoot', 'centoui:input-group-root:context')


// TYPES — Variants

export type InputGroupVariants = VariantProps<typeof inputGroupVariants>


// TYPES — Context

export type InputGroupRootContext = Pick<InputGroupRootProps, 'size'>


// TYPES — Props

export type InputGroupRootProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
   * The visual size of the input group.
   * Matches the padding and text size of its contained inputs.
   * @default 'md'
   */
  size?: InputGroupVariants['size']
}

export type InputGroupAddonProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
   * The position of the addon relative to the input.
   * @default 'left'
   */
  position?: InputGroupVariants['addonPosition']
}

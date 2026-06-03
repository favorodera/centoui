import { type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const inputGroupVariants = tv({
  slots: {
    root: `
      group/input-group-root relative flex w-full min-w-0 items-stretch
      overflow-hidden rounded-md border border-input bg-transparent
      transition-all

      has-[[data-slot=input-group-addon]:is([data-position=bottom],[data-position=top])]:h-auto
      has-[[data-slot=input-group-addon]:is([data-position=bottom],[data-position=top])]:flex-col

      has-[[data-slot=input-group-addon]:is([data-position=right],[data-position=left])]:gap-1
      has-[[data-slot=input-group-addon]:is([data-position=right],[data-position=left])]:px-3
      has-[[data-slot=input-group-addon]:is([data-position=right],[data-position=left])]:py-1

      has-[[input-group-control]:disabled]:pointer-events-none
      has-[[input-group-control]:disabled]:bg-input/60
      has-[[input-group-control]:disabled]:opacity-65

      has-[[input-group-control]:focus-visible]:ring-2
      has-[[input-group-control]:focus-visible]:ring-ring

      has-[[input-group-control][aria-invalid=true]]:ring-2
      has-[[input-group-control][aria-invalid=true]]:ring-error

      dark:bg-input/40

      *:[[input-group-control]]:h-auto *:[[input-group-control]]:flex-1
      *:[[input-group-control]]:rounded-none *:[[input-group-control]]:border-0
      *:[[input-group-control]]:p-0

      has-[[data-slot=input-group-addon]:is([data-position=top],[data-position=bottom])]:*:[[input-group-control]]:px-3
      has-[[data-slot=input-group-addon]:is([data-position=top],[data-position=bottom])]:*:[[input-group-control]]:py-2

      *:[[input-group-control]:disabled]:bg-transparent

      *:[[input-group-control]:focus-visible]:ring-0

      *:[[input-group-control][aria-invalid=true]]:ring-0
    `,
    addon: `
      flex shrink-0 items-center text-sm font-medium text-muted-foreground
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
        addon: 'w-full border-input px-3 py-2',
      },
      bottom: {
        addon: 'order-last w-full border-input px-3 py-2',
      },
    },
  },
  defaultVariants: {
    addonPosition: 'left',
  },
})


// COMPONENTS
export { default as InputGroupRoot } from './input-group-root.vue'
export { default as InputGroupAddon } from './input-group-addon.vue'

// VARIANTS
export type InputGroupVariants = VariantProps<typeof inputGroupVariants>


// PROPS
export type InputGroupRootProps = PrimitiveProps & { class?: any }

export type InputGroupAddonProps = PrimitiveProps & {
  /**
   * The position of the addon relative to the input.
   * @default 'left'
   */
  position?: InputGroupVariants['addonPosition']
  class?: any
}

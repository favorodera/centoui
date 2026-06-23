import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const inputGroupVariants = tv({
  defaultVariants: {
    addonPosition: 'left',
  },
  slots: {
    addon: `
      flex shrink-0 items-center text-sm font-medium text-muted-foreground
    `,
    control: `
      block-auto flex-1 rounded-none border-0 p-0

      disabled:opacity-100

      focus-visible:ring-0

      aria-invalid:ring-0
    `,
    root: `
      relative flex inline-full min-inline-0 items-stretch overflow-hidden
      rounded-lg border border-input bg-transparent gap-1.5 px-3 min-block-8

      has-[[data-slot=input-group-addon]:is([data-position=bottom],[data-position=top])]:flex-col
      has-[[data-slot=input-group-addon]:is([data-position=bottom],[data-position=top])]:py-2.5

      has-[[data-slot=input-group-control]:disabled]:pointer-events-none
      has-[[data-slot=input-group-control]:disabled]:opacity-65

      has-[[data-slot=input-group-control]:focus-visible]:ring-2
      has-[[data-slot=input-group-control]:focus-visible]:ring-ring

      has-[[data-slot=input-group-control][aria-invalid=true]]:ring-2
      has-[[data-slot=input-group-control][aria-invalid=true]]:ring-error
    `,
  },
  variants: {
    addonPosition: {
      bottom: {
        addon: `order-last min-inline-full px-3 py-2.5 -mx-3 -mbe-2.5`,
      },
      left: {
        addon: 'order-first',
      },
      right: {
        addon: 'order-last',
      },
      top: {
        addon: 'min-inline-full px-3 py-2.5 -mbs-2.5 -mx-3',
      },
    },
  },
})

// COMPONENTS
export { default as InputGroupAddon } from './input-group-addon.vue'
export { default as InputGroupControl } from './input-group-control.vue'
export { default as InputGroupRoot } from './input-group-root.vue'

// VARIANTS
export type InputGroupVariants = VariantProps<typeof inputGroupVariants>

// PROPS
export type InputGroupRootProps = PrimitiveProps & { class?: any }

export type InputGroupControlProps = PrimitiveProps & { class?: any }

export type InputGroupAddonProps = PrimitiveProps & {
  class?: any

  /**
   * The position of the addon relative to the input.
   * @default 'left'
   */
  position?: InputGroupVariants['addonPosition']
}

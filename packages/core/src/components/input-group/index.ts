import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const inputGroupVariants = tv({
  defaultVariants: {
    addonAlignment: 'inline-start',
    size: 'md',
  },
  slots: {
    addon: `
      flex shrink-0 items-center text-sm font-medium text-muted-foreground
    `,
    root: `
      relative flex inline-full min-inline-0 items-stretch overflow-hidden
      border border-input bg-transparent

      **:data-[slot=input-group-control]:block-auto
      **:data-[slot=input-group-control]:flex-1
      **:data-[slot=input-group-control]:rounded-none
      **:data-[slot=input-group-control]:border-0
      **:data-[slot=input-group-control]:p-0

      **:data-[slot=input-group-control]:disabled:opacity-100

      **:data-[slot=input-group-control]:focus-visible:ring-0

      **:data-[slot=input-group-control]:aria-invalid:ring-0

      has-[[data-slot=input-group-addon][data-align*=block]]:flex-col

      has-[[data-slot=input-group-control]:disabled]:pointer-events-none
      has-[[data-slot=input-group-control]:disabled]:opacity-65

      has-[[data-slot=input-group-control]:focus-visible]:ring-2
      has-[[data-slot=input-group-control]:focus-visible]:ring-ring

      has-[[data-slot=input-group-control][aria-invalid=true]]:ring-2
      has-[[data-slot=input-group-control][aria-invalid=true]]:ring-error
    `,
  },
  variants: {
    addonAlignment: {
      'block-end': {
        addon: `order-last min-inline-full`,
      },
      'block-start': {
        addon: 'min-inline-full',
      },
      'inline-end': {
        addon: 'order-last',
      },
      'inline-start': {
        addon: 'order-first',
      },
    },
    size: {
      lg: {
        addon: 'text-sm gap-1.5',
        root: `
          min-block-9 rounded-lg px-3.5 gap-1.5

          has-[[data-slot=input-group-addon][data-align*=block]]:py-3
        `,
      },
      md: {
        addon: 'text-sm gap-1.5',
        root: `
          min-block-8 rounded-lg px-3 gap-1.5

          has-[[data-slot=input-group-addon][data-align*=block]]:py-2.5
        `,
      },
      sm: {
        addon: 'text-xs gap-1',
        root: `
          min-block-7 rounded-md px-2.5 gap-1

          has-[[data-slot=input-group-addon][data-align*=block]]:py-2
        `,
      },
    },
  },
})

// COMPONENTS
export { default as InputGroupAddon } from './input-group-addon.vue'
export { default as InputGroupRoot } from './input-group-root.vue'

// CONTEXT
export type InputGroupRootContext = Pick<InputGroupRootProps, 'size'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<InputGroupRootContext>('InputGroupRoot', 'centoui:input-group-root:context')

// VARIANTS
export type InputGroupVariants = VariantProps<typeof inputGroupVariants>

// PROPS
export type InputGroupRootProps = PrimitiveProps & {
  class?: any

  /**
   * Visual size scale.
   * @default 'md'
   */
  size?: InputGroupVariants['size']
}

export type InputGroupAddonProps = PrimitiveProps & {
  class?: any

  /**
   * The position of the addon relative to the input.
   * @default 'inline-end'
   */
  align?: InputGroupVariants['addonAlignment']
}

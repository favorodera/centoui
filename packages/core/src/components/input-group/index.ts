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

      **:data-input-group-control:block-auto **:data-input-group-control:flex-1
      **:data-input-group-control:rounded-none
      **:data-input-group-control:border-0 **:data-input-group-control:p-0

      **:data-input-group-control:disabled:opacity-100

      **:data-input-group-control:focus-visible:ring-0

      **:data-input-group-control:aria-invalid:ring-0

      has-[[data-slot=input-group-addon][data-align*=block]]:flex-col

      has-[[data-input-group-control]:disabled]:pointer-events-none
      has-[[data-input-group-control]:disabled]:opacity-65

      has-[[data-input-group-control]:focus-visible]:ring-2
      has-[[data-input-group-control]:focus-visible]:ring-ring

      has-[[data-input-group-control][aria-invalid=true]]:ring-2
      has-[[data-input-group-control][aria-invalid=true]]:ring-error
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
        addon: `
          text-sm gap-1.5

          *:data-[slot=icon]:block-4.5 *:data-[slot=icon]:inline-4.5
        `,
        root: `
          min-block-9 rounded-lg px-3 gap-1.5

          has-[[data-slot=input-group-addon][data-align*=block]]:py-2
        `,
      },
      md: {
        addon: `
          text-sm gap-1.5

          *:data-[slot=icon]:block-4 *:data-[slot=icon]:inline-4
        `,
        root: `
          min-block-8 rounded-lg px-2.5 gap-1.5

          has-[[data-slot=input-group-addon][data-align*=block]]:py-1.5
        `,
      },
      sm: {
        addon: `
          text-xs gap-1

          *:data-[slot=icon]:block-3.5 *:data-[slot=icon]:inline-3.5
        `,
        root: `
          min-block-7 rounded-md px-2 gap-1

          has-[[data-slot=input-group-addon][data-align*=block]]:py-1
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

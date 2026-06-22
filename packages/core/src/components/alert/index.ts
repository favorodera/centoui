import { createContext, type PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const alertVariants = tv({
  defaultVariants: {
    variant: 'neutral',
  },
  slots: {
    body: 'flex-1 min-inline-0 text-sm',
    description: 'mbs-1 font-normal',
    root: `flex items-start inline-full p-4 gap-3 rounded-md border flex-wrap`,
    title: 'font-medium',
  },
  variants: {
    variant: {
      error: {
        root: 'border-error/20 bg-error/8 text-error',
      },
      info: {
        root: 'border-info/20 bg-info/8 text-info',
      },
      neutral: {
        root: 'border-border bg-neutral text-neutral-foreground',
      },
      success: {
        root: 'border-success/20 bg-success/8 text-success',
      },
      warning: {
        root: 'border-warning/20 bg-warning/8 text-warning',
      },
    },
  },
})

// COMPONENTS
export { default as AlertBody } from './alert-body.vue'
export { default as AlertDescription } from './alert-description.vue'
export { default as AlertRoot } from './alert-root.vue'
export { default as AlertTitle } from './alert-title.vue'

// CONTEXT
export type AlertRootContext = Pick<AlertRootProps, 'variant'>

export const [
  injectRootContext,
  provideRootContext,
] = createContext<AlertRootContext>('AlertRoot', 'centoui:alert-root:context')

// VARIANTS
export type AlertVariants = VariantProps<typeof alertVariants>

// PROPS
export type AlertRootProps = PrimitiveProps & {
  class?: any

  /**
   * Visual style variant.
   * @default 'neutral'
   */
  variant?: AlertVariants['variant']
}

export type AlertBodyProps = PrimitiveProps & { class?: any }

export type AlertTitleProps = PrimitiveProps & { class?: any }

export type AlertDescriptionProps = PrimitiveProps & { class?: any }

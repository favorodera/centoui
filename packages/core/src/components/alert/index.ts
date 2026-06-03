import { type PrimitiveProps, createContext } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const alertVariants = tv({
  slots: {
    root: `
      flex w-full flex-wrap items-start gap-4 rounded-md border px-4 py-3

      *:data-[slot=icon]:first:h-lh *:data-[slot=icon]:first:w-4
    `,
    body: 'min-w-0 flex-1 text-sm',
    title: 'font-medium text-foreground',
    description: 'mt-1 text-foreground/80',
  },
  variants: {
    variant: {
      neutral: {
        root: `
          border-border bg-background

          *:data-[slot=icon]:first:text-foreground
        `,
      },
      success: {
        root: `
          border-success/15 bg-success/10

          *:data-[slot=icon]:first:text-success
        `,
      },
      error: {
        root: `
          border-error/15 bg-error/10

          *:data-[slot=icon]:first:text-error
        `,
      },
      warning: {
        root: `
          border-warning/15 bg-warning/10

          *:data-[slot=icon]:first:text-warning
        `,
      },
      info: {
        root: `
          border-info/15 bg-info/10

          *:data-[slot=icon]:first:text-info
        `,
      },
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
})


// COMPONENTS
export { default as AlertRoot } from './alert-root.vue'
export { default as AlertBody } from './alert-body.vue'
export { default as AlertTitle } from './alert-title.vue'
export { default as AlertDescription } from './alert-description.vue'


// CONTEXT
export type AlertRootContext = Pick<AlertRootProps, 'variant'>

export const [
  injectCentouiAlertRootContext,
  provideCentouiAlertRootContext,
] = createContext<AlertRootContext>(
  'AlertRoot',
  'centoui:alert-root:context',
)


// VARIANTS
export type AlertVariants = VariantProps<typeof alertVariants>


// PROPS
export type AlertRootProps = PrimitiveProps & {
  /**
     * The variant of the alert.
     * @default 'neutral'
     */
  variant?: AlertVariants['variant']
  class?: any
}

export type AlertBodyProps = PrimitiveProps & { class?: any }

export type AlertTitleProps = PrimitiveProps & { class?: any }

export type AlertDescriptionProps = PrimitiveProps & { class?: any }

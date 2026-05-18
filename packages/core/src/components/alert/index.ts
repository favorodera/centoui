import { type PrimitiveProps, createContext } from 'reka-ui'
import { tv, type VariantProps, type ClassProp } from 'tailwind-variants'

export const alertVariants = tv({
  slots: {
    root: 'flex w-full items-center gap-3 rounded-lg px-4 py-3',
    media: `
      shrink-0 self-start
      [&>svg]:h-lh [&>svg]:w-4
    `,
    content: 'min-w-0 flex-1 text-sm/snug',
    title: 'min-w-0 font-medium',
    description: 'mt-1 min-w-0',
    actions: 'flex shrink-0 items-center gap-2',
  },
  variants: {
    variant: {
      neutral: {
        root: 'bg-neutral text-foreground',
      },
      success: {
        root: 'bg-success/8 text-success',
      },
      warning: {
        root: 'bg-warning/8 text-warning',
      },
      error: {
        root: 'bg-error/8 text-error',
      },
      info: {
        root: 'bg-info/8 text-info',
      },
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
})


// COMPONENTS

export { default as AlertRoot } from './alert-root.vue'
export { default as AlertMedia } from './alert-media.vue'
export { default as AlertContent } from './alert-content.vue'
export { default as AlertTitle } from './alert-title.vue'
export { default as AlertDescription } from './alert-description.vue'
export { default as AlertActions } from './alert-actions.vue'


// CONTEXT

export const [injectCentouiAlertRootContext, provideCentouiAlertRootContext] = createContext<AlertRootContext>('AlertRoot', 'centoui:alert-root:context')


// TYPES — Variants

export type AlertVariants = VariantProps<typeof alertVariants>


// TYPES — Context

export type AlertRootContext = Pick<AlertRootProps, 'variant'>


// TYPES — Props

export type AlertRootProps = PrimitiveProps & Pick<ClassProp, 'class'> & {
  /**
     * The variant of the alert.
     * @default 'neutral'
     */
  variant?: AlertVariants['variant']
}

export type AlertMediaProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type AlertContentProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type AlertTitleProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type AlertDescriptionProps = PrimitiveProps & Pick<ClassProp, 'class'>

export type AlertActionsProps = PrimitiveProps & Pick<ClassProp, 'class'>

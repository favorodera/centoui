import { type PrimitiveProps, createContext } from 'reka-ui'
import { tv, type VariantProps, type ClassProp } from 'tailwind-variants'

export const alertVariants = tv({
  slots: {
    root: 'flex w-full items-start gap-3 rounded-lg px-4 py-3',
    media: `
      shrink-0
      [&>svg]:size-4 [&>svg]:translate-y-0.5
    `,
    content: 'min-w-0 flex-1 text-sm',
    title: 'min-w-0 font-medium',
    description: 'mt-2 min-w-0 text-muted-foreground',
    actions: 'flex shrink-0 items-center gap-2',
  },
  variants: {
    variant: {
      neutral: {
        root: 'bg-neutral',
        title: 'text-foreground',
        description: 'text-foreground/80',
        media: 'text-foreground',
      },
      success: {
        root: 'bg-success/8',
        title: 'text-success',
        description: 'text-success/80',
        media: 'text-success',
      },
      warning: {
        root: 'bg-warning/8',
        title: 'text-warning',
        description: 'text-warning/80',
        media: 'text-warning',
      },
      error: {
        root: 'bg-error/8',
        title: 'text-error',
        description: 'text-error/80',
        media: 'text-error',
      },
      info: {
        root: 'bg-info/8',
        title: 'text-info',
        description: 'text-info/80',
        media: 'text-info',
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

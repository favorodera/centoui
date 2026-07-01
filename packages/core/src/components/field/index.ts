import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'
import type { LabelProps } from '../label'

export const fieldVariants = tv({
  defaultVariants: {
    fieldOrientation: 'vertical',
    legendVariant: 'legend',
  },
  slots: {
    content: 'flex flex-col flex-1 gap-1',
    field: `
      flex inline-full gap-2

      data-invalid:text-error
    `,
    group: 'flex inline-full min-inline-0 gap-4 @container/field-group',
    label: 'flex',
    legend: 'mbe-1 font-medium',
    set: 'flex flex-col gap-4',
  },
  variants: {
    fieldOrientation: {
      auto: {
        field: 'flex-col',
      },
      horizontal: {
        field: 'flex-row',
      },
      vertical: {
        field: 'flex-col',
      },
    },
    legendVariant: {
      label: {
        legend: 'text-sm',
      },
      legend: {
        legend: 'text-base',
      },
    },
  },
})

// COMPONENTS
export { default as FieldContent } from './field-content.vue'
export { default as FieldGroup } from './field-group.vue'
export { default as FieldLabel } from './field-label.vue'
export { default as FieldLegend } from './field-legend.vue'
export { default as FieldSet } from './field-set.vue'
export { default as Field } from './field.vue'

// VARIANTS
export type FieldVariants = VariantProps<typeof fieldVariants>

// PROPS
export interface FieldSetProps {
  class?: any
}

export interface FieldLegendProps {
  class?: any

  /**
   * Visual style variant.
   *
   * Use 'label' when nesting inside another FieldSet, so it reads
   * as a sub-label rather than competing with the parent legend.
   * @default 'legend'
   */
  variant?: FieldVariants['legendVariant']
}

export type FieldGroupProps = PrimitiveProps & { class?: any }

export type FieldProps = PrimitiveProps & {
  class?: any

  /**
   * The orientation of the field.
   * @default 'vertical'
   */
  orientation?: FieldVariants['fieldOrientation']
}

export type FieldContentProps = PrimitiveProps & { class?: any }

export type FieldLabelProps = LabelProps

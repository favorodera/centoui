import type { PrimitiveProps } from 'reka-ui'
import { tv, type VariantProps } from 'tailwind-variants'

export const fieldVariants = tv({
  defaultVariants: {
    legendVariant: 'legend',
  },
  slots: {
    group: 'flex inline-full min-inline-0 gap-4 @container/field-group',
    legend: 'mbe-1 font-medium',
    set: 'flex flex-col gap-4',
  },
  variants: {
    legendVariant: {
      label: 'text-sm',
      legend: 'text-base',
    },
  },
})

// COMPONENTS
export { default as FieldGroup } from './field-group.vue'
export { default as FieldLegend } from './field-legend.vue'
export { default as FieldSet } from './field-set.vue'

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

<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type FieldLegendProps, fieldVariants } from '.'

const props = withDefaults(defineProps<FieldLegendProps>(), {
  variant: 'legend',
})

const variants = fieldVariants()
</script>

<template>
  <legend
    data-slot="field-legend"
    :data-variant="variant"
    :class="variants.legend({
      class: normalizeClass(props.class),
      legendVariant: props.variant,
    })"
  >
    <slot />
  </legend>
</template>

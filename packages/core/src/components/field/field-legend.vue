<script setup lang="ts">
import { computed } from 'vue'
import { type FieldLegendProps, fieldVariants } from '.'

const props = withDefaults(defineProps<FieldLegendProps>(), {
  variant: 'legend',
})

const { fieldLegend } = fieldVariants()

const classNames = computed(() => fieldLegend({
  class: props.class,
  fieldLegendVariant: props.variant,
}))
</script>

<template>
  <legend
    data-slot="field-legend"
    :data-variant="variant"
    :class="classNames"
  >
    <slot />
  </legend>
</template>

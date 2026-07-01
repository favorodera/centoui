<script setup lang="ts">
import { computed } from 'vue'
import { type FieldLegendProps, fieldVariants } from '.'

const props = withDefaults(defineProps<FieldLegendProps>(), {
  variant: 'legend',
})

const { legend } = fieldVariants()

const classNames = computed(() => legend({
  class: props.class,
  legendVariant: props.variant,
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

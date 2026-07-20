<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type FieldSetProps, fieldVariants } from '.'

const props = defineProps<FieldSetProps>()

const variants = fieldVariants()
</script>

<template>
  <fieldset
    data-slot="field-set"
    :class="variants.set({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </fieldset>
</template>

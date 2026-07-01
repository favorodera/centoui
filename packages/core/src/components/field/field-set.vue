<script setup lang="ts">
import { computed } from 'vue'
import { type FieldSetProps, fieldVariants } from '.'

const props = defineProps<FieldSetProps>()

const { fieldSet } = fieldVariants()

const classNames = computed(() => fieldSet({
  class: props.class,
}))
</script>

<template>
  <fieldset
    data-slot="field-set"
    :class="classNames"
  >
    <slot />
  </fieldset>
</template>

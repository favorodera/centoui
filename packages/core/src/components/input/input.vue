<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type InputProps, inputVariants } from '.'

const props = withDefaults(defineProps<InputProps>(), {
  size: 'md',
})

const model = defineModel<string>()

const variants = inputVariants()
</script>

<template>
  <input
    v-model="model"
    data-slot="input"
    :data-size="size"
    :class="variants.root({
      class: normalizeClass(props.class),
      size: props.size,
    })"
  >
</template>

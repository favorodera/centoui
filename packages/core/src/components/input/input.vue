<script setup lang="ts">
import { computed } from 'vue'
import { type InputProps, inputVariants } from '.'

const props = withDefaults(defineProps<InputProps>(), {
  size: 'md',
})

const model = defineModel<string>()

const { root } = inputVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
}))
</script>

<template>
  <input
    v-model="model"
    data-slot="input"
    :data-size="size"
    :class="classNames"
  >
</template>

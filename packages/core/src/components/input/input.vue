<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { type InputEmits, type InputProps, inputVariants } from '.'

const emits = defineEmits<InputEmits>()

const props = withDefaults(defineProps<InputProps>(), {
  size: 'md',
})

const modelValue = useVModel(
  props,
  'value',
  emits,
  { defaultValue: props.defaultValue },
)

const { root } = inputVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
}))
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :data-size="size"
    :class="classNames"
    :autocomplete
  >
</template>

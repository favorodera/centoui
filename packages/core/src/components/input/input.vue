<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { inputVariants, type InputEmits, type InputProps } from '.'

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
  size: props.size,
  class: props.class,
}))
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :data-size="size"
    :class="classNames"
  >
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { inputVariants, type InputEmits, type InputProps } from '.'

const emits = defineEmits<InputEmits>()

// Accepts all native HTML input attributes
// See — https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
const props = withDefaults(defineProps<InputProps>(), {
  size: 'md',
})

const modelValue = useVModel(
  props,
  'value',
  emits,
  { defaultValue: props.defaultValue },
)

const classNames = computed(() => {
  const { root } = inputVariants({
    size: props.size,
  })

  return root({ class: props.class })
})
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :data-size="size"
    :class="classNames"
  >
</template>

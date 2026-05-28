<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { textareaVariants, type TextareaEmits, type TextareaProps } from '.'

const emits = defineEmits<TextareaEmits>()

const props = withDefaults(defineProps<TextareaProps>(), {
  size: 'md',
})

const modelValue = useVModel(
  props,
  'value',
  emits,
  { defaultValue: props.defaultValue },
)

const classNames = computed(() => {
  const { root } = textareaVariants({
    size: props.size,
  })

  return root({ class: props.class })
})
</script>

<template>
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :data-size="size"
    :class="classNames"
    :min-rows="10"
  />
</template>

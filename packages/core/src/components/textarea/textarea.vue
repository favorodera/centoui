<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { type TextareaEmits, type TextareaProps, textareaVariants } from '.'

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

const { root } = textareaVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
}))
</script>

<template>
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :data-size="size"
    :class="classNames"
  />
</template>

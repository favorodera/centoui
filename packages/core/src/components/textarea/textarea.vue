<script setup lang="ts">
import { computed } from 'vue'
import { type TextareaProps, textareaVariants } from '.'

const props = withDefaults(defineProps<TextareaProps>(), {
  size: 'md',
})

const model = defineModel<string>()

const { root } = textareaVariants()

const classNames = computed(() => root({
  class: props.class,
  size: props.size,
}))
</script>

<template>
  <textarea
    v-model="model"
    data-slot="textarea"
    :data-size="size"
    :class="classNames"
  />
</template>

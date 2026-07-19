<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type TextareaProps, textareaVariants } from '.'

const props = withDefaults(defineProps<TextareaProps>(), {
  size: 'md',
})

const model = defineModel<string>()

const variants = textareaVariants()
</script>

<template>
  <textarea
    v-model="model"
    data-slot="textarea"
    :data-size="size"
    :class="variants.root({
      class: normalizeClass(props.class),
      size: props.size,
    })"
  />
</template>

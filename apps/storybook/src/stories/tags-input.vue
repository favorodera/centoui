<script setup lang="ts">
import { ref } from 'vue'
import { TagsInputInput, TagsInputItem, TagsInputRoot, tagsInputVariants } from '#centoui/components/tags-input'
import { useStory } from '@/composables/use-story'

const controls = useStory('Tags Input', {
  disabled: {
    default: false,
    label: 'Disabled',
    type: 'boolean',
  },
  invalid: {
    default: false,
    label: 'Invalid',
    type: 'boolean',
  },
  size: {
    default: tagsInputVariants.defaultVariants.size,
    options: Object.keys(tagsInputVariants.variants.size),
    type: 'array',
  },
})

const modelValue = ref([
  'Apple',
  'Banana',
])
</script>

<template>
  <TagsInputRoot
    v-model:model-value="modelValue"
    :disabled="controls.disabled"
    :size="controls.size"
    :aria-invalid="controls.invalid"
  >
    <TagsInputItem
      v-for="item in modelValue"
      :key="item"
      :value="item"
    />

    <TagsInputInput placeholder="Add a new fruit..." />
  </TagsInputRoot>
</template>

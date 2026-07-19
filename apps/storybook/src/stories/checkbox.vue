<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, checkboxVariants } from '#centoui/components/checkbox'
import { useStory } from '@/composables/use-story'

const controls = useStory('Checkbox', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: checkboxVariants.defaultVariants.size,
    options: Object.keys(checkboxVariants.variants.size),
    type: 'array',
  },
})

const checkboxModel = ref<'indeterminate' | boolean>('indeterminate')

const toggleState = () => {
  switch (checkboxModel.value) {
    case 'indeterminate': {
      checkboxModel.value = true
      break
    }
    case true: {
      checkboxModel.value = false
      break
    }
    default: {
      checkboxModel.value = 'indeterminate'
    }
  }
}
</script>

<template>
  <Checkbox
    id="checkbox"
    :model-value="checkboxModel"
    :aria-invalid="controls.invalid"
    :disabled="controls.disabled"
    :size="controls.size"
    name="checkbox"
    @update:model-value="toggleState"
  />
</template>

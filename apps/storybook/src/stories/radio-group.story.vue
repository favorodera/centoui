<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '#centoui/components/label'
import { RadioGroupItem, RadioGroupRoot, radioGroupVariants } from '#centoui/components/radio-group'
import { useStory } from '@/composables/use-story'

const controls = useStory('RadioGroup', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  orientation: {
    default: radioGroupVariants.defaultVariants.orientation,
    options: Object.keys(radioGroupVariants.variants.orientation),
    type: 'array',
  },
  size: {
    default: radioGroupVariants.defaultVariants.size,
    options: Object.keys(radioGroupVariants.variants.size),
    type: 'array',
  },
})

const fruits = [
  { id: 'apple', label: 'Apple' },
  { id: 'banana', label: 'Banana' },
  { id: 'orange', label: 'Orange' },
]

const value = ref('banana')
</script>

<template>
  <RadioGroupRoot
    v-model:model-value="value"
    :size="controls.size"
    :orientation="controls.orientation"
    :disabled="controls.disabled"
    class="inline-fit"
  >
    <div
      v-for="fruit in fruits"
      :key="fruit.id"
      className="flex items-center gap-3"
    >
      <RadioGroupItem
        :id="fruit.id"
        :value="fruit.id"
        :name="fruit.id"
        :aria-invalid="controls.invalid"
      />

      <Label :for="fruit.id">{{ fruit.label }}</Label>
    </div>
  </RadioGroupRoot>
</template>

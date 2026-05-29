<script setup lang="ts">
import { PinInputInput, PinInputRoot, PinInputSeparator, pinInputVariants, PinInputGroup } from '#centoui/components/pin-input'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Pin Input', {
  inputSize: {
    type: 'array',
    label: 'Size',
    options: Object.keys(pinInputVariants.variants.inputSize),
    default: pinInputVariants.defaultVariants.inputSize,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
  invalid: {
    type: 'boolean',
    label: 'Invalid',
    default: false,
  },
})
</script>

<template>
  <ViewContainer>
    <PinInputRoot
      :disabled="values.disabled"
      placeholder="○"
    >
      <PinInputGroup>
        <PinInputInput
          v-for="(_, index) in 3"
          :key="index"
          :index="index"
          :size="values.inputSize"
          :aria-invalid="values.invalid"
        />
      </PinInputGroup>

      <PinInputSeparator />

      <PinInputGroup>
        <PinInputInput
          v-for="(_, index) in 3"
          :key="index + 3"
          :index="index + 3"
          :size="values.inputSize"
          :aria-invalid="values.invalid"
        />
      </PinInputGroup>
    </PinInputRoot>

    <PinInputRoot
      :disabled="values.disabled"
      placeholder="○"
    >
      <PinInputInput
        v-for="(_, index) in 6"
        :key="index"
        :index="index"
        :size="values.inputSize"
        :aria-invalid="values.invalid"
      />
    </PinInputRoot>
  </ViewContainer>
</template>

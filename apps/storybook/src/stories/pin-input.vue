<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import { PinInputGroup, PinInputInput, PinInputRoot } from '#centoui/components/pin-input'
import { useStory } from '@/composables/use-story'

const controls = useStory('Pin Input', {
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
})
</script>

<template>
  <PinInputRoot
    :disabled="controls.disabled"
    placeholder="○"
  >
    <PinInputGroup>
      <PinInputInput
        v-for="(_, index) in 3"
        :key="index"
        :index="index"
        :aria-invalid="controls.invalid"
      />
    </PinInputGroup>

    <Icon
      name="lucide:minus"
      class="text-muted-foreground"
    />

    <PinInputGroup>
      <PinInputInput
        v-for="(_, index) in 3"
        :key="index + 3"
        :index="index + 3"
        :aria-invalid="controls.invalid"
      />
    </PinInputGroup>
  </PinInputRoot>

  <PinInputRoot
    :disabled="controls.disabled"
    placeholder="○"
  >
    <PinInputInput
      v-for="(_, index) in 6"
      :key="index"
      :index="index"
      :aria-invalid="controls.invalid"
    />
  </PinInputRoot>
</template>

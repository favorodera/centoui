<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import { Input } from '#centoui/components/input'
import { InputGroupAddon, InputGroupRoot, inputGroupVariants } from '#centoui/components/input-group'
import { Textarea } from '#centoui/components/textarea'
import { useStory } from '@/composables/use-story'

const controls = useStory('Input Group', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  invalid: {
    default: false,
    type: 'boolean',
  },
  size: {
    default: inputGroupVariants.defaultVariants?.size,
    options: Object.keys(inputGroupVariants.variants.size),
    type: 'array',
  },
})
</script>

<template>
  <InputGroupRoot :size="controls.size">
    <InputGroupAddon>
      <Icon icon="lucide:at-sign" />
    </InputGroupAddon>

    <Input
      data-input-group-control
      placeholder="username"
      :size="controls.size"
      :disabled="controls.disabled"
      :aria-invalid="controls.invalid"
    />

    <InputGroupAddon align="inline-end">
      @company.com
    </InputGroupAddon>
  </InputGroupRoot>

  <InputGroupRoot :size="controls.size">
    <Input
      data-input-group-control
      placeholder="Enter amount"
      :size="controls.size"
      :disabled="controls.disabled"
      :aria-invalid="controls.invalid"
    />

    <InputGroupAddon align="block-end">
      USD
    </InputGroupAddon>
  </InputGroupRoot>

  <InputGroupRoot :size="controls.size">
    <Textarea
      data-input-group-control
      placeholder="Write your bio..."
      :size="controls.size"
      :disabled="controls.disabled"
      :aria-invalid="controls.invalid"
    />

    <InputGroupAddon
      align="block-end"
      class="flex items-center justify-between text-xs"
    >
      <span class="text-muted-foreground">Shown on your public profile</span>
      <span class="text-muted-foreground">0 / 160</span>
    </InputGroupAddon>
  </InputGroupRoot>
</template>

<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import { Input } from '#centoui/components/input'
import { InputGroupAddon, InputGroupControl, InputGroupRoot } from '#centoui/components/input-group'
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
})
</script>

<template>
  <InputGroupRoot>
    <InputGroupAddon>
      <Icon icon="lucide:at-sign" />
    </InputGroupAddon>

    <InputGroupControl>
      <Input
        placeholder="username"
        :disabled="controls.disabled"
        :aria-invalid="controls.invalid"
      />
    </InputGroupControl>

    <InputGroupAddon position="right">
      @company.com
    </InputGroupAddon>
  </InputGroupRoot>

  <InputGroupRoot>
    <InputGroupControl>
      <Textarea
        placeholder="Write your bio..."
        :disabled="controls.disabled"
        :aria-invalid="controls.invalid"
      />
    </InputGroupControl>

    <InputGroupAddon
      position="bottom"
      class="flex items-center justify-between text-xs"
    >
      <span class="text-muted-foreground">Shown on your public profile</span>
      <span class="text-muted-foreground">0 / 160</span>
    </InputGroupAddon>
  </InputGroupRoot>
</template>

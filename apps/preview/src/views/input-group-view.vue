<script setup lang="ts">
import { InputGroupRoot, InputGroupAddon, inputGroupVariants } from '#centoui/components/input-group'
import { Input } from '#centoui/components/input'
import { Button } from '#centoui/components/button'
import { Textarea } from '#centoui/components/textarea'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { KbdGroup } from '#centoui/components/kbd-group'
import { Kbd } from '#centoui/components/kbd'

const values = useApp().preview.initPreview('Input Group', {
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(inputGroupVariants.variants.size),
    default: inputGroupVariants.defaultVariants.size,
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
  <ViewContainer class="max-w-lg">
    <InputGroupRoot :size="values.size">
      <InputGroupAddon>
        <Icon icon="lucide:search" />
      </InputGroupAddon>

      <Input
        input-group-control
        placeholder="Search documentation..."
        :disabled="values.disabled"
        :aria-invalid="values.invalid"
      />

      <InputGroupAddon position="right">
        <KbdGroup>
          <Kbd size="sm">⌘</Kbd>
          <Kbd size="sm">K</Kbd>
        </KbdGroup>
      </InputGroupAddon>
    </InputGroupRoot>

    <InputGroupRoot :size="values.size">
      <InputGroupAddon>
        <Icon icon="lucide:credit-card" />
      </InputGroupAddon>

      <Input
        input-group-control
        placeholder="1234 5678 9012 3456"
        :disabled="values.disabled"
        :aria-invalid="values.invalid"
      />

      <InputGroupAddon position="right">
        <Icon
          icon="lucide:shield-check"
          class="text-success"
        />
      </InputGroupAddon>
    </InputGroupRoot>

    <InputGroupRoot :size="values.size">
      <InputGroupAddon>
        https://
      </InputGroupAddon>

      <Input
        input-group-control
        placeholder="company.com/invite/john"
        :disabled="values.disabled"
        :aria-invalid="values.invalid"
      />

      <InputGroupAddon position="right">
        <Button
          size="xs"
          variant="secondary"
          :disabled="values.disabled"
        >
          Copy Link
        </Button>
      </InputGroupAddon>
    </InputGroupRoot>

    <InputGroupRoot :size="values.size">
      <Textarea
        input-group-control
        placeholder="Tell us what happened..."
        :disabled="values.disabled"
        :aria-invalid="values.invalid"
      />

      <InputGroupAddon
        position="bottom"
        class="flex items-center justify-between text-xs"
      >
        <span>Maximum 500 characters</span>
        <span>0 / 500</span>
      </InputGroupAddon>
    </InputGroupRoot>

  </ViewContainer>
</template>

<script setup lang="ts">
import { InputGroupRoot, InputGroupAddon } from '#centoui/components/input-group'
import { Input } from '#centoui/components/input'
import { Button } from '#centoui/components/button'
import { Textarea } from '#centoui/components/textarea'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { KbdGroup } from '#centoui/components/kbd'
import { Kbd } from '#centoui/components/kbd'

const values = useApp().preview.initPreview('Input Group', {
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
    <InputGroupRoot>
      <InputGroupAddon>
        <Icon icon="lucide:dollar-sign" />
      </InputGroupAddon>

      <Input
        input-group-control
        placeholder="0.00"
        :disabled="values.disabled"
        :aria-invalid="values.invalid"
      />

      <InputGroupAddon position="right">
        <span>USD</span>
      </InputGroupAddon>
    </InputGroupRoot>

    <InputGroupRoot>
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

    <InputGroupRoot>
      <InputGroupAddon>
        https://
      </InputGroupAddon>

      <Input
        input-group-control
        placeholder="company.com/invite"
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

    <InputGroupRoot>
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

    <InputGroupRoot>
      <InputGroupAddon
        position="top"
        class="border-b"
      >
        <div class="flex items-center gap-1 font-mono font-medium">
          <Icon icon="tabler:brand-javascript" />
          script.js
        </div>

        <Button
          class="ml-auto"
          variant="ghost"
          size="xs"
          square
        >
          <Icon icon="lucide:refresh-ccw" />
        </Button>

        <Button
          variant="ghost"
          size="xs"
          square
        >
          <Icon icon="lucide:copy" />
        </Button>
      </InputGroupAddon>

      <Textarea
        input-group-control
        placeholder="console.log('Hello, world!');"
        :disabled="values.disabled"
        :aria-invalid="values.invalid"
      />

      <InputGroupAddon
        position="bottom"
        class="border-t"
      >
        <span>Line 1, Column 1</span>
        <Button
          size="sm"
          class="ml-auto"
        >
          Run <Icon icon="lucide:corner-down-left" />
        </Button>
      </InputGroupAddon>
    </InputGroupRoot>
  </ViewContainer>
</template>

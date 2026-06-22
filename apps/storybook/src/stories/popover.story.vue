<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Input } from '#centoui/components/input'
import { Label } from '#centoui/components/label'
import { PopoverContent, PopoverDescription, PopoverFooter, PopoverHeader, PopoverRoot, PopoverTitle, PopoverTrigger } from '#centoui/components/popover'
import { useStory } from '@/composables/use-story'

const controls = useStory('Popover', {
  align: {
    default: 'center' as any,
    options: [
      'center',
      'start',
      'end',
    ],
    type: 'array',
  },
  showArrow: {
    default: true,
    type: 'boolean',
  },
  side: {
    default: 'bottom' as any,
    options: [
      'top',
      'bottom',
      'left',
      'right',
    ],
    type: 'array',
  },
})
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger as-child>
      <Button variant="secondary">
        Profile
      </Button>
    </PopoverTrigger>

    <PopoverContent
      :side="controls.side"
      :align="controls.align"
      :show-arrow="controls.showArrow"
    >
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>

        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>

      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <Label
            for="width"
            class="inline-1/2"
          >
            Width
          </Label>

          <Input
            id="width"
            default-value="100%"
          />
        </div>

        <div class="flex items-center justify-between">
          <Label
            for="height"
            class="inline-1/2"
          >
            Height
          </Label>

          <Input
            id="height"
            default-value="25px"
          />
        </div>
      </div>

      <PopoverFooter class="justify-between">
        <Button variant="secondary">
          Cancel
        </Button>

        <Button>
          Save Settings
        </Button>
      </PopoverFooter>
    </PopoverContent>
  </PopoverRoot>
</template>

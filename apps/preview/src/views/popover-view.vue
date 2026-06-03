<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { Input } from '#centoui/components/input'
import { Label } from '#centoui/components/label'
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '#centoui/components/avatar'
import {
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  PopoverBody,
} from '#centoui/components/popover'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Popover', {
  side: {
    type: 'array',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'bottom',
  },
  align: {
    type: 'array',
    label: 'Align',
    options: ['start', 'center', 'end'],
    default: 'center',
  },
  showArrow: {
    type: 'boolean',
    label: 'Show Arrow',
    default: true,
  },
})
</script>

<template>
  <ViewContainer>
    <PopoverRoot>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          square
        >
          <Icon icon="lucide:settings-2" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        :side="values.side as any"
        :align="values.align as any"
        :show-arrow="values.showArrow"
      >
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
        <PopoverBody
          class="
            grid gap-4

            *:grid *:grid-cols-3 *:items-center *:gap-4
          "
        >
          <div>
            <Label for="width">Width</Label>
            <Input
              id="width"
              value="100%"
              class="col-span-2 h-8"
            />
          </div>
          <div>
            <Label for="height">Height</Label>
            <Input
              id="height"
              value="25px"
              class="col-span-2 h-8"
            />
          </div>
        </PopoverBody>
        <PopoverFooter class="flex justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
          >
            Cancel
          </Button>
          <Button size="sm">
            Save
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </PopoverRoot>

    <PopoverRoot>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          class="rounded-full"
          square
        >
          <AvatarRoot>
            <AvatarImage src="https://i.pravatar.cc/40?img=4" />
            <AvatarFallback>JD</AvatarFallback>
          </AvatarRoot>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        :side="values.side as any"
        :align="values.align as any"
      >
        <PopoverHeader>
          <div class="flex gap-4">
            <AvatarRoot size="lg">
              <AvatarImage src="https://i.pravatar.cc/40?img=4" />
              <AvatarFallback>JD</AvatarFallback>
            </AvatarRoot>
            <div class="space-y-1 text-left">
              <PopoverTitle>Jane Doe</PopoverTitle>
              <PopoverDescription>@janedoe</PopoverDescription>
            </div>
          </div>
        </PopoverHeader>

        <PopoverBody>
          <div class="text-sm">
            Frontend engineer focusing on design systems and accessibility.
          </div>
          <div class="flex gap-4 pt-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1">
              <Icon
                icon="lucide:users"
                class="size-4"
              />
              <span class="font-medium text-foreground">240</span> followers
            </div>
            <div class="flex items-center gap-1">
              <span class="font-medium text-foreground">12</span> following
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  </ViewContainer>
</template>

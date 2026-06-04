<script setup lang="ts">
import { Kbd, kbdVariants, KbdGroup } from '#centoui/components/kbd'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from '#centoui/components/tooltip'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Kbd', {
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(kbdVariants.variants.size),
    default: kbdVariants.defaultVariants.size,
  },
})
</script>

<template>
  <ViewContainer>
    <Kbd :size="values.size">⌘</Kbd>
  
    <KbdGroup>
      <Kbd :size="values.size">Ctrl</Kbd>
      <Kbd :size="values.size">Alt</Kbd>
      <Kbd :size="values.size">Del</Kbd>
    </KbdGroup>

    <Button
      variant="outline"
    >
      <Icon icon="lucide:search" />
      Search documentation
      <KbdGroup>
        <Kbd :size="values.size">⌘</Kbd>
        <Kbd :size="values.size">K</Kbd>
      </KbdGroup>
    </Button>

    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger as-child>
          <Button
            variant="outline"
            square
          >
            <Icon icon="lucide:bold" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Bold
          <KbdGroup>
            <Kbd :size="values.size">⌘</Kbd>
            <Kbd :size="values.size">B</Kbd>
          </KbdGroup>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  </ViewContainer>
</template>

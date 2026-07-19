<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from '#centoui/components/tooltip'
import { useStory } from '@/composables/use-story'

const controls = useStory('Tooltip', {
  align: {
    default: 'center' as any,
    options: [
      'start',
      'center',
      'end',
    ],
    type: 'array',
  },
  showArrow: {
    default: true,
    type: 'boolean',
  },
  side: {
    default: 'top' as any,
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
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger as-child>
        <Button>
          Hover
        </Button>
      </TooltipTrigger>

      <TooltipContent
        :align="controls.align"
        :side="controls.side"
        :show-arrow="controls.showArrow"
      >
        This is a tooltip
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>

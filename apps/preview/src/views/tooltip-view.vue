<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from '#centoui/components/tooltip'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Separator', {
  side: {
    type: 'select',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'top',
  },
})
</script>

<template>
  <ViewContainer>
    <TooltipProvider>
      <TooltipRoot>

        <TooltipTrigger as-child>
          <Button>
            Hover
          </Button>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent
            :side="values.side as any"
            class="flex gap-2"
          >
            <p>This is a tooltip</p>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>

      </TooltipRoot>
    </TooltipProvider>
      
  </ViewContainer>
</template>

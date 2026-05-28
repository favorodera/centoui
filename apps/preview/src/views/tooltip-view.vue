<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from '#centoui/components/tooltip'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Tooltip', {
  side: {
    type: 'array',
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
          >
            <p>This is a tooltip</p>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>

      </TooltipRoot>
    </TooltipProvider>
  </ViewContainer>
</template>

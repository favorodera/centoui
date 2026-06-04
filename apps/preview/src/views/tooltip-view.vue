<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { TooltipContent, TooltipRoot, TooltipProvider, TooltipTrigger } from '#centoui/components/tooltip'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Tooltip', {
  side: {
    type: 'array',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'top',
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
    <TooltipProvider>

      <TooltipRoot>

        <TooltipTrigger as-child>
          <Button>
            Hover
          </Button>
        </TooltipTrigger>

        <TooltipContent
          :side="values.side as any"
          :show-arrow="values.showArrow"
        >
          <p>This is a tooltip</p>
        </TooltipContent>

      </TooltipRoot>
    </TooltipProvider>
  </ViewContainer>
</template>

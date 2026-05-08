<script setup lang="ts">
import { onMounted } from 'vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'
import { TooltipRoot, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow, TooltipPortal, tooltipVariants } from '#centoui/components/tooltip'
import { Button } from '#centoui/components/button'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(tooltipVariants.variants.variant),
    default: tooltipVariants.defaultVariants.variant,
  },
  side: {
    type: 'select',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'top',
  },
}

onMounted(() => {
  setPreviewState('Tooltip', schema)
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
            :variant="values.variant"
            :side="values.side"
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

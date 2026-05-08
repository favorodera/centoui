<script setup lang="ts">
import { onMounted } from 'vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'
import { TooltipRoot, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow, TooltipPortal, tooltipVariants } from '#centoui/components/tooltip'
import { Button } from '#centoui/components/button'
import { Kbd } from '#centoui/components/kbd'
import { KbdGroup } from '#centoui/components/kbd-group'

const { values, setPreviewState } = usePreview()

const tooltipPropsSchema: PropsSchema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(tooltipVariants.variants.variant),
    default: 'solid',
  },
  side: {
    type: 'select',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'top',
  },
}

onMounted(() => {
  setPreviewState('Tooltip', tooltipPropsSchema)
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

            <p>Add to library</p>

            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>D</Kbd>
            </KbdGroup>

            <TooltipArrow />

          </TooltipContent>
        </TooltipPortal>

      </TooltipRoot>
    </TooltipProvider>
      
  </ViewContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { AlertRoot, AlertDescription, AlertClose, AlertActions, alertVariants, AlertMedia, AlertTitle } from '#centoui/components/alert'
import { Button } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(alertVariants.variants.variant),
    default: alertVariants.defaultVariants.variant,
  },
  color: {
    type: 'select',
    label: 'Color',
    options: Object.keys(alertVariants.variants.color),
    default: alertVariants.defaultVariants.color,
  },
  orientation: {
    type: 'select',
    label: 'Orientation',
    options: Object.keys(alertVariants.variants.orientation),
    default: alertVariants.defaultVariants.orientation,
  },
}

onMounted(() => {
  setPreviewState('Alert', schema)
})
</script>

<template>
  <ViewContainer>
    <AlertRoot
      :variant="values.variant"
      :color="values.color"
      :orientation="values.orientation"
    >
      <AlertMedia>
        <Icon icon="lucide:bell" />
      </AlertMedia>

      <AlertTitle>Unable to process your payment.</AlertTitle>

      <AlertDescription>
        <p>Please verify your billing information and try again.</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </AlertDescription>

      <AlertActions>
        <Button
          variant="solid"
          :color="values.color"
          size="sm"
        >
          Learn more
        </Button>
      </AlertActions>

      <AlertClose />
    </AlertRoot>
      
  </ViewContainer>
</template>

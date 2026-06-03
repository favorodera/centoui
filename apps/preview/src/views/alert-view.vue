<script setup lang="ts">
import { AlertRoot, AlertDescription, alertVariants, AlertTitle, AlertBody } from '#centoui/components/alert'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Alert', {
  variant: {
    type: 'array',
    label: 'Variant',
    options: Object.keys(alertVariants.variants.variant),
    default: alertVariants.defaultVariants.variant,
  },
})
</script>

<template>
  <ViewContainer>
    <AlertRoot :variant="values.variant">
      <Icon icon="lucide:info" />

      <AlertBody>
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>
          System maintenance is scheduled for Sunday, 2:00 AM - 4:00 AM UTC. Some features may be temporarily unavailable.
        </AlertDescription>
      </AlertBody>

      <Button
        variant="outline"
        size="sm"
      >
        Learn more
      </Button>
    </AlertRoot>
  </ViewContainer>
</template>

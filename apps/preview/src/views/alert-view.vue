<script setup lang="ts">
import { AlertRoot, AlertDescription, AlertActions, alertVariants, AlertMedia, AlertTitle, AlertContent } from '#centoui/components/alert'
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
      <AlertMedia>
        <Icon icon="lucide:info" />
      </AlertMedia>

      <AlertContent>
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>
          System maintenance is scheduled for Sunday, 2:00 AM - 4:00 AM UTC. Some features may be temporarily unavailable.
        </AlertDescription>
      </AlertContent>

      <AlertActions>
        <Button
          variant="outline"
          size="sm"
        >
          Learn more
        </Button>
      </AlertActions>
    </AlertRoot>
  </ViewContainer>
</template>

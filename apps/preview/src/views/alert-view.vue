<script setup lang="ts">
import { AlertRoot, AlertDescription, AlertActions, alertVariants, AlertMedia, AlertTitle, AlertContent } from '#centoui/components/alert'
import { Button } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
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
    <AlertRoot
      :variant="values.variant"
    >
      <AlertMedia>
        <Icon icon="lucide:bell" />
      </AlertMedia>

      <AlertContent>
        <AlertTitle>Alert Title.</AlertTitle>

        <AlertDescription>
          Alert description
        </AlertDescription>
      </AlertContent>

      <AlertActions>
        <Button
          size="sm"
        >
          Learn more
        </Button>
      </AlertActions>

    </AlertRoot>
      
  </ViewContainer>
</template>

<script setup lang="ts">
import { AlertRoot, AlertDescription, AlertActions, alertVariants, AlertMedia, AlertTitle, AlertContent } from '#centoui/components/alert'
import { Button } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Alert', {
  variant: {
    type: 'select',
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
          :variant="values.variant === 'inverted' ? 'secondary' : 'inverted'"
          size="sm"
        >
          Learn more
        </Button>
      </AlertActions>

    </AlertRoot>
      
  </ViewContainer>
</template>

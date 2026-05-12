<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { AlertRoot, AlertDescription, AlertClose, AlertActions, alertVariants, AlertMedia, AlertTitle } from '#centoui/components/alert'
import { Button } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  status: {
    type: 'select',
    label: 'Status',
    options: Object.keys(alertVariants.variants.status),
    default: alertVariants.defaultVariants.status,
  },
  orientation: {
    type: 'select',
    label: 'Orientation',
    options: Object.keys(alertVariants.variants.orientation),
    default: alertVariants.defaultVariants.orientation,
  },
}

const isAlertOpen = ref(true)

onMounted(() => {
  setPreviewState('Alert', schema)
})
</script>

<template>
  <ViewContainer>
    <Button
      v-if="!isAlertOpen"
      variant="soft"
      size="sm"
      @click="isAlertOpen = true"
    >
      Open alert
    </Button>

    <AlertRoot
      v-model:open="isAlertOpen"
      :variant="values.variant"
      :status="values.status"
      :orientation="values.orientation"
    >
      <AlertMedia>
        <Icon icon="lucide:bell" />
      </AlertMedia>

      <AlertTitle>Alert Title.</AlertTitle>

      <AlertDescription>
        Alert description
      </AlertDescription>

      <AlertActions>
        <Button
          variant="solid"
          :color="values.status === 'neutral' ? 'primary' : values.status"
          size="sm"
        >
          Learn more
        </Button>
      </AlertActions>

      <AlertClose />
    </AlertRoot>
      
  </ViewContainer>
</template>

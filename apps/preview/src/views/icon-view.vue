<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Icon', {
  icon: {
    type: 'string',
    label: 'Icon',
    default: 'lucide:plus',
    hint: 'Iconify icon IDs',
  },
})
</script>

<template>
  <ViewContainer>

    <Icon :icon="values.icon" />

  </ViewContainer>
</template>

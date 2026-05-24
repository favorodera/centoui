<script setup lang="ts">
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

useApp().preview.initPreview('Icon', {})
</script>

<template>
  <ViewContainer>

    <Icon icon="lucide:plus" />

  </ViewContainer>
</template>

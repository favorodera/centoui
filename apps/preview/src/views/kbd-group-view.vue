<script setup lang="ts">
import { Kbd } from '#centoui/components/kbd'
import { KbdGroup } from '#centoui/components/kbd-group'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

useApp().preview.initPreview('Kbd Group', {})
</script>

<template>
  <ViewContainer>
    <KbdGroup>
      <Kbd>
        ⌘
      </Kbd>
      <Kbd>
        K
      </Kbd>
    </KbdGroup>

    <KbdGroup>
      <Kbd>
        Ctrl
      </Kbd>

      <Kbd>
        C
      </Kbd>
    </KbdGroup>
  </ViewContainer>
</template>

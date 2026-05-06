<script setup lang="ts">
import { onMounted } from 'vue'
import { Kbd } from '../../../../packages/core/src/components/kbd'
import { KbdGroup } from '../../../../packages/core/src/components/kbd-group'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { setPreviewState } = usePreview()

const kbdGroupPropsSchema: PropsSchema = {}

onMounted(() => {
  setPreviewState('Kbd Group', kbdGroupPropsSchema)
})
</script>

<template>
  <ViewContainer>
    <KbdGroup>
      <Kbd>
        ⌘
      </Kbd>

      <Kbd>
        ⇧
      </Kbd>
    </KbdGroup>

    <KbdGroup>
      <Kbd>
        ⌥
      </Kbd>

      <Kbd>
        ⌃
      </Kbd>
    </KbdGroup>
  </ViewContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { AvatarRoot, AvatarImage, AvatarFallback } from '../../../../packages/core/src/components/avatar'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const avatarPropsSchema: PropsSchema = {
  src: {
    type: 'string',
    label: 'Image URL',
    default: 'https://github.com/favorodera.png',
  },
  size: {
    type: 'select',
    label: 'Size',
    options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    default: 'md',
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
  iconFallback: {
    type: 'string',
    label: 'Icon Fallback',
    hint: 'Enter an Iconify icon name (e.g., lucide:plus)',
    default: '',
  },
  textFallback: {
    type: 'string',
    label: 'Text Fallback',
    default: '',
  },
}

onMounted(() => {
  setPreviewState('Avatar', avatarPropsSchema)
})
</script>

<template>
  <ViewContainer>
      
    <AvatarRoot
      :size="values.size"
      :disabled="values.disabled"
    >
      <AvatarImage :src="values.src" />
      <AvatarFallback>
        <Icon
          v-if="values.iconFallback"
          :icon="values.iconFallback"
        />
        <span v-else-if="values.textFallback">{{ values.textFallback }}</span>
      </AvatarFallback>
    </AvatarRoot>

  </ViewContainer>
</template>

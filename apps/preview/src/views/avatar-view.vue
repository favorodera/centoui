<script setup lang="ts">
import { onMounted } from 'vue'
import { AvatarRoot, AvatarImage, AvatarFallback, avatarVariants } from '../../../../packages/core/src/components/avatar'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const avatarPropsSchema: PropsSchema = {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(avatarVariants.variants.size),
    default: 'md',
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
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
      <AvatarImage
        src="https://github.com/favorodera.png"
        alt="Image"
      />
      <AvatarFallback>FE</AvatarFallback>
    </AvatarRoot>

    <AvatarRoot
      :size="values.size"
      :disabled="values.disabled"
    >
      <AvatarImage
        src=""
        alt="Image"
      />
      <AvatarFallback>FE</AvatarFallback>
    </AvatarRoot>

    <AvatarRoot
      :size="values.size"
      :disabled="values.disabled"
    >
      <AvatarImage
        src=""
        alt="Image"
      />
      <AvatarFallback>
        <Icon
          icon="lucide:user"
        />
      </AvatarFallback>
    </AvatarRoot>
      
  </ViewContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { AvatarRoot, AvatarImage, AvatarFallback, avatarVariants } from '#centoui/components/avatar'
import { Icon } from '@iconify/vue'
import { usePreview } from '../utils/use-preview'
import type { PropsSchema } from '../components/props-panel.vue'
import ViewContainer from '../components/view-container.vue'

const { values, setPreviewState } = usePreview()

const schema: PropsSchema = {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(avatarVariants.variants.size),
    default: avatarVariants.defaultVariants.size,
  },
}

onMounted(() => {
  setPreviewState('Avatar', schema)
})
</script>

<template>
  <ViewContainer>
    <AvatarRoot
      :size="values.size"
    >
      <AvatarImage
        src="https://github.com/favorodera.png"
        alt="Image"
      />
      <AvatarFallback>FE</AvatarFallback>
    </AvatarRoot>

    <AvatarRoot
      :size="values.size"
    >
      <AvatarImage
        src=""
        alt="Image"
      />
      <AvatarFallback>FE</AvatarFallback>
    </AvatarRoot>

    <AvatarRoot
      :size="values.size"
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

<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback, avatarVariants } from '#centoui/components/avatar'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

const values = usePreview('Avatar', {
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(avatarVariants.variants.size),
    default: avatarVariants.defaultVariants.size,
  },
  shape: {
    type: 'select',
    label: 'Shape',
    options: Object.keys(avatarVariants.variants.shape),
    default: avatarVariants.defaultVariants.shape,
  },
})
</script>

<template>
  <ViewContainer>
    <AvatarRoot
      :size="values.size"
      :shape="values.shape"
    >
      <AvatarImage
        src="https://github.com/favorodera.png"
        alt="Image"
      />
      <AvatarFallback>FE</AvatarFallback>
    </AvatarRoot>

    <AvatarRoot
      :size="values.size"
      :shape="values.shape"
    >
      <AvatarImage
        src=""
        alt="Image"
      />
      <AvatarFallback>FE</AvatarFallback>
    </AvatarRoot>

    <AvatarRoot
      :size="values.size"
      :shape="values.shape"
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

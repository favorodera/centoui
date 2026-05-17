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

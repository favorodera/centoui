<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback, avatarVariants, AvatarGroup } from '#centoui/components/avatar'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Avatar', {
  size: {
    type: 'array',
    label: 'Size',
    options: Object.keys(avatarVariants.variants.size),
    default: avatarVariants.defaultVariants.size,
  },
})

const users = [
  { src: 'https://i.pravatar.cc/40?img=1', fallback: 'AM' },
  { src: 'https://i.pravatar.cc/40?img=5', fallback: 'RK' },
  { src: 'https://i.pravatar.cc/40?img=9', fallback: 'JL' },
]
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

    <AvatarGroup>
      <AvatarRoot
        v-for="user in users"
        :key="user.fallback"
        :size="values.size"
      >
        <AvatarImage
          :src="user.src"
          alt="Image"
        />
        <AvatarFallback>{{ user.fallback }}</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot
        :size="values.size"
      >
        <AvatarFallback>+284</AvatarFallback>
      </AvatarRoot>
    </AvatarGroup>

  </ViewContainer>
</template>

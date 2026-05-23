<script setup lang="ts">
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '#centoui/components/avatar'
import { AvatarGroup } from '#centoui/components/avatar-group'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

useApp().preview.initPreview('Avatar Group', {})

const users = [
  { src: 'https://i.pravatar.cc/40?img=1', fallback: 'AM' },
  { src: 'https://i.pravatar.cc/40?img=5', fallback: 'RK' },
  { src: 'https://i.pravatar.cc/40?img=9', fallback: 'JL' },
]
</script>

<template>
  <ViewContainer>
    <AvatarGroup>
      <AvatarRoot
        v-for="user in users"
        :key="user.fallback"
        size="lg"
      >
        <AvatarImage
          :src="user.src"
          alt="Image"
        />
        <AvatarFallback>{{ user.fallback }}</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot
        size="lg"
      >
        <AvatarFallback>+284</AvatarFallback>
      </AvatarRoot>
    </AvatarGroup>
  </ViewContainer>
</template>

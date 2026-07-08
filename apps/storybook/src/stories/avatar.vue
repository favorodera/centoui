<script setup lang="ts">
import { AvatarFallback, AvatarGroup, AvatarImage, AvatarRoot, avatarVariants, getInitials } from '#centoui/components/avatar'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const controls = useStory('Avatar', {
  size: {
    default: avatarVariants.defaultVariants.size,
    options: Object.keys(avatarVariants.variants.size),
    type: 'array',
  },
})

const users = [
  {
    image: 'https://avatars.githubusercontent.com/favorodera?v=4',
    name: 'John Doe',
  },
  {
    image: 'https://avatars.githubusercontent.com/favorodera?v=4',
    name: 'Jane Doe',
  },
  {
    image: 'https://avatars.githubusercontent.com/favorodera?v=4',
    name: 'Sam Smith',
  },
] as const
</script>

<template>
  <AvatarRoot :size="controls.size">
    <AvatarImage :src="users[0].image" />
    <AvatarFallback>{{ getInitials(users[0].name) }}</AvatarFallback>
  </AvatarRoot>

  <AvatarRoot :size="controls.size">
    <AvatarFallback>{{ getInitials(users[0].name) }}</AvatarFallback>
  </AvatarRoot>

  <AvatarRoot :size="controls.size">
    <AvatarFallback>
      <Icon icon="lucide:user" />
    </AvatarFallback>
  </AvatarRoot>

  <AvatarGroup>
    <AvatarRoot
      v-for="user in users"
      :key="user.name"
      :size="controls.size"
    >
      <AvatarImage :src="user.image" />
      <AvatarFallback>{{ getInitials(user.name) }}</AvatarFallback>
    </AvatarRoot>
  </AvatarGroup>
</template>

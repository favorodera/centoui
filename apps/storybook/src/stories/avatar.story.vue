<script setup lang="ts">
import { AvatarFallback, AvatarGroup, AvatarImage, AvatarRoot, avatarVariants, getInitials } from '#centoui/components/avatar'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

const values = useStory('Avatar', {
  size: {
    default: avatarVariants.defaultVariants.size,
    options: Object.keys(avatarVariants.variants.size),
    type: 'array',
  },
})

const users = [
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'John Doe',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Jane Doe',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Sam Smith',
  },
] as const
</script>

<template>
  <AvatarRoot :size="values.size">
    <AvatarImage :src="users[0].image" />
    <AvatarFallback>{{ getInitials(users[0].name) }}</AvatarFallback>
  </AvatarRoot>

  <AvatarRoot :size="values.size">
    <AvatarFallback>{{ getInitials(users[0].name) }}</AvatarFallback>
  </AvatarRoot>

  <AvatarRoot :size="values.size">
    <AvatarFallback>
      <Icon icon="lucide:user" />
    </AvatarFallback>
  </AvatarRoot>

  <AvatarGroup>
    <AvatarRoot
      v-for="user in users"
      :key="user.name"
      :size="values.size"
    >
      <AvatarImage :src="user.image" />
      <AvatarFallback>{{ getInitials(user.name) }}</AvatarFallback>
    </AvatarRoot>
  </AvatarGroup>
</template>

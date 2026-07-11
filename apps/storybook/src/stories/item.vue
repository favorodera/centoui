<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot, getInitials } from '#centoui/components/avatar'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemRoot, ItemTitle, itemVariants } from '#centoui/components/item'
import { useStory } from '@/composables/use-story'

const controls = useStory('Item', {
  variant: {
    default: itemVariants.defaultVariants.variant,
    options: Object.keys(itemVariants.variants.variant),
    type: 'array',
  },
})

const teammates = [
  {
    image: 'https://avatars.githubusercontent.com/favorodera?v=4',
    lastSeen: 'Editing the design file',
    name: 'Mara Okonkwo',
  },
  {
    image: 'https://avatars.githubusercontent.com/favorodera?v=4',
    lastSeen: 'Away · back at 3pm',
    name: 'Tunde Bello',
  },
]

const projects = [
  {
    cover: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=320&auto=format&fit=crop',
    name: 'Aurora Rebrand',
    status: 'In review',
  },
  {
    cover: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=320&auto=format&fit=crop',
    name: 'Field Notes App',
    status: 'In progress',
  },
  {
    cover: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=320&auto=format&fit=crop',
    name: 'Quarterly Report',
    status: 'Draft',
  },
]
</script>

<template>
  <ItemRoot :variant="controls.variant">
    <ItemMedia variant="icon">
      <Icon icon="lucide:calendar-clock" />
    </ItemMedia>

    <ItemContent>
      <ItemTitle>Standup starts in 10 minutes</ItemTitle>
      <ItemDescription>Daily sync · Room "North Star"</ItemDescription>
    </ItemContent>

    <Button
      size="sm"
      variant="outline"
    >
      Join
    </Button>
  </ItemRoot>

  <ItemRoot :variant="controls.variant">
    <ItemMedia variant="icon">
      <Icon icon="lucide:cloud-upload" />
    </ItemMedia>

    <ItemContent>
      <ItemTitle>3 files finished uploading</ItemTitle>
    </ItemContent>

    <Icon
      class="text-muted-foreground"
      icon="lucide:chevron-right"
    />
  </ItemRoot>

  <ItemRoot
    v-for="teammate in teammates"
    :key="teammate.name"
    :variant="controls.variant"
  >
    <ItemMedia>
      <AvatarRoot size="xl">
        <AvatarImage :src="teammate.image" />
        <AvatarFallback>{{ getInitials(teammate.name) }}</AvatarFallback>
      </AvatarRoot>
    </ItemMedia>

    <ItemContent>
      <ItemTitle>{{ teammate.name }}</ItemTitle>
      <ItemDescription>{{ teammate.lastSeen }}</ItemDescription>
    </ItemContent>

    <Button
      size="sm"
      square
      variant="outline"
      class="rounded-full"
      aria-label="Message"
    >
      <Icon icon="lucide:message-circle" />
    </Button>
  </ItemRoot>

  <ItemRoot
    :variant="controls.variant"
    as-child
  >
    <a href="#">
      <ItemContent>
        <ItemTitle>Open the weekly digest</ItemTitle>
        <ItemDescription>Summarized activity from your workspace.</ItemDescription>
      </ItemContent>

      <Icon
        class="text-muted-foreground"
        icon="lucide:arrow-up-right"
      />
    </a>
  </ItemRoot>

  <ItemGroup class="grid grid-cols-3">
    <ItemRoot
      v-for="project in projects"
      :key="project.name"
      :variant="controls.variant"
    >
      <img
        :src="project.cover"
        :alt="project.name"
        width="128"
        height="128"
        class="aspect-square inline-full rounded-sm object-cover"
      >

      <ItemContent>
        <ItemTitle>{{ project.name }}</ItemTitle>
        <ItemDescription>{{ project.status }}</ItemDescription>
      </ItemContent>
    </ItemRoot>
  </ItemGroup>
</template>

<script setup lang="ts">
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from '#centoui/components/avatar'
import { Button } from '#centoui/components/button'
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  CardTitle,
} from '#centoui/components/card'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

useStory('Card', {})
</script>

<template>
  <CardRoot class="max-inline-sm">
    <div
      class="
        aspect-video block-48 bg-muted min-inline-full -mx-4 -mbs-4
        overflow-hidden
      "
    >
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&h=220&fit=crop"
        alt="Code on a screen"
        class="block-full inline-full object-cover grayscale"
      >
    </div>

    <CardHeader>
      <CardTitle>
        Building scalable APIs with Node.js & Fastify
      </CardTitle>

      <CardDescription>
        Learn how to structure your backend for performance and
        maintainability at scale — from routing to plugin architecture.
      </CardDescription>
    </CardHeader>

    <div class="space-y-4 flex-1">
      <div class="flex items-center gap-3">
        <AvatarRoot size="sm">
          <AvatarImage src="https://i.pravatar.cc/40?img=12" />
          <AvatarFallback>NB</AvatarFallback>
        </AvatarRoot>

        <div class="flex flex-col">
          <span class="text-sm font-medium">Nnamdi Bekele</span>
          <span class="text-xs text-muted-foreground">Senior Backend Engineer</span>
        </div>
      </div>

      <div
        class="
          flex items-center gap-4 text-sm text-muted-foreground

          *:flex *:items-center *:gap-1.5
        "
      >
        <div>
          <Icon icon="lucide:clock" />
          <span>8 min read</span>
        </div>

        <div>
          <Icon icon="lucide:heart" />
          <span>214 likes</span>
        </div>

        <div>
          <Icon icon="lucide:message-circle" />
          <span>38</span>
        </div>
      </div>
    </div>

    <CardFooter
      class="
        gap-3

        *:flex-1
      "
    >
      <Button variant="outline">
        <Icon icon="lucide:bookmark" />
        Save
      </Button>

      <Button>
        <Icon icon="lucide:book-open" />
        Read article
      </Button>
    </CardFooter>
  </CardRoot>
</template>

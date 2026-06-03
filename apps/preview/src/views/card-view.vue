<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import {
  CardRoot,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from '#centoui/components/card'
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '#centoui/components/avatar'

useApp().preview.initPreview('Card', {})
</script>

<template>
  <ViewContainer class="flex flex-wrap items-start gap-6">
    <CardRoot class="max-w-sm pt-0">

      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&h=220&fit=crop"
        alt="Code on a screen"
        class="h-48 w-full object-cover grayscale"
      >

      <CardHeader>
        <CardTitle>
          Building scalable APIs with Node.js & Fastify
        </CardTitle>
        <CardDescription>
          Learn how to structure your backend for performance and
          maintainability at scale — from routing to plugin architecture.
        </CardDescription>
      </CardHeader>

      <CardBody class="space-y-4">
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

        <!-- Meta -->
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
      </CardBody>

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
  </ViewContainer>
</template>

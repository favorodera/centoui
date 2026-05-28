<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Badge } from '#centoui/components/badge'
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
import {
  AvatarGroup,
} from '#centoui/components/avatar-group'

useApp().preview.initPreview('Card', {})

const attendees = [
  { src: 'https://i.pravatar.cc/40?img=1', fallback: 'AM' },
  { src: 'https://i.pravatar.cc/40?img=5', fallback: 'RK' },
  { src: 'https://i.pravatar.cc/40?img=9', fallback: 'JL' },
]
</script>

<template>
  <ViewContainer>

    <CardRoot class="max-w-md">
      <CardHeader>
        <Badge
          variant="success"
        >
          <Icon
            icon="lucide:radio"
          />
          Live now
        </Badge>

        <CardTitle>
          Vue 3 Composition API — deep dive into reactivity
        </CardTitle>

        <CardDescription>
          Hosted by Favour Emeka · CentoUI
        </CardDescription>
      </CardHeader>

      <CardBody class="space-y-4">
        <div class="flex items-center gap-4 text-sm">
          <div class="flex items-center gap-1.5 text-muted-foreground">
            <Icon
              icon="lucide:calendar"
            />
            <span>Fri, 23 May</span>
          </div>
          <div class="flex items-center gap-1.5 text-muted-foreground">
            <Icon
              icon="lucide:clock"
            />
            <span>4:00 PM WAT</span>
          </div>
        </div>

        <div class="flex items-end gap-2">
          <AvatarGroup>
            <AvatarRoot
              v-for="attendee in attendees"
              :key="attendee.fallback"
              size="sm"
            >
              <AvatarImage :src="attendee.src" />
              <AvatarFallback>{{ attendee.fallback }}</AvatarFallback>
            </AvatarRoot>
            <AvatarRoot
              size="sm"
            >
              <AvatarFallback>+50</AvatarFallback>
            </AvatarRoot>
          </AvatarGroup>
          <span class="font-mono text-sm text-muted-foreground">devs attending.</span>
        </div>
      </CardBody>

      <CardFooter
        class="
          gap-3 border-t border-border

          *:flex-1
        "
      >
        <Button variant="outline">
          <Icon icon="lucide:bookmark" />
          Save
        </Button>
        <Button>
          <Icon icon="lucide:arrow-right" />
          Join event
        </Button>
      </CardFooter>
    </CardRoot>

  </ViewContainer>
</template>

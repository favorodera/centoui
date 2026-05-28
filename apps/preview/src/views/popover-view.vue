<script setup lang="ts">
import { Button } from '#centoui/components/button'
import { Badge } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '#centoui/components/avatar'
import {
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPortal,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  PopoverBody,
} from '#centoui/components/popover'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Popover', {
  side: {
    type: 'array',
    label: 'Side',
    options: ['top', 'bottom', 'left', 'right'],
    default: 'bottom',
  },
  align: {
    type: 'array',
    label: 'Align',
    options: ['start', 'center', 'end'],
    default: 'center',
  },
})

const notifications = [
  {
    src: 'https://i.pravatar.cc/40?img=1',
    fallback: 'AM',
    text: 'Amara merged your pull request.',
    time: '2m ago',
    unread: true,
  },
  {
    src: 'https://i.pravatar.cc/40?img=5',
    fallback: 'RK',
    text: 'Ravi left a comment on Badge.',
    time: '1h ago',
    unread: true,
  },
  {
    src: 'https://i.pravatar.cc/40?img=9',
    fallback: 'JL',
    text: 'Jade starred CentoUI.',
    time: '3h ago',
    unread: false,
  },
]
</script>

<template>
  <ViewContainer>
    <PopoverRoot>
      <PopoverAnchor>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            square
            class="overflow-visible"
          >
            <Icon icon="lucide:bell" />
            <div
              class="absolute -top-1 -right-1 size-2 rounded-full bg-foreground"
            />
          </Button>
        </PopoverTrigger>
      </PopoverAnchor>

      <PopoverPortal>
        <PopoverContent
          :side="values.side as any"
          :align="values.align as any"
          class="w-full"
        >
          <PopoverHeader class="border-b border-border">
            <div class="flex items-center justify-between">
              <PopoverTitle>Notifications</PopoverTitle>
              <Badge
                variant="success"
                class="font-mono"
              >
                2 new
              </Badge>
            </div>
            <PopoverDescription>
              Recent activity across your repositories.
            </PopoverDescription>
          </PopoverHeader>

          <PopoverBody class="divide-y divide-border p-0">
            <div
              v-for="notification in notifications"
              :key="notification.fallback"
              class="
                flex items-start gap-3 px-4 py-3

                first:pt-0

                last:pb-0
              "
            >
              <AvatarRoot
                size="sm"
              >
                <AvatarImage :src="notification.src" />
                <AvatarFallback>{{ notification.fallback }}</AvatarFallback>
              </AvatarRoot>

              <div class="min-w-0 flex-1 space-y-0.5">
                <p class="text-sm">
                  {{ notification.text }}
                </p>
                <p class="font-mono text-xs text-muted-foreground">
                  {{ notification.time }}
                </p>
              </div>

              <div
                v-if="notification.unread"
                class="size-2 shrink-0 rounded-full bg-foreground"
              />
            </div>
          </PopoverBody>

          <PopoverFooter class="border-t border-border">
            <PopoverClose as-child>
              <Button
                variant="ghost"
                size="sm"
                class="w-full"
              >
                Mark all as read
              </Button>
            </PopoverClose>
          </PopoverFooter>

          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </ViewContainer>
</template>

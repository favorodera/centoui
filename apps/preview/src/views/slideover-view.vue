<script setup lang="ts">
import {
  SlideoverRoot,
  SlideoverTrigger,
  SlideoverPortal,
  SlideoverOverlay,
  SlideoverContent,
  SlideoverHeader,
  SlideoverTitle,
  SlideoverDescription,
  SlideoverClose,
  SlideoverBody,
  SlideoverFooter,
  slideoverVariants,
} from '#centoui/components/slideover'
import { Button } from '#centoui/components/button'
import { Badge } from '#centoui/components/badge'
import { Icon } from '@iconify/vue'
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '#centoui/components/avatar'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'

const values = useApp().preview.initPreview('Slideover', {
  side: {
    type: 'array',
    label: 'Variant',
    options: Object.keys(slideoverVariants.variants.side),
    default: slideoverVariants.defaultVariants.side,
  },
  showClose: {
    type: 'boolean',
    label: 'Show Header Close Button',
    default: true,
  },
})

const activity = [
  {
    icon: 'lucide:git-pull-request',
    label: 'Merged',
    description: 'feat: add Slideover component',
    time: '2h ago',
  },
  {
    icon: 'lucide:message-circle',
    label: 'Commented',
    description: 'Reviewed Card component API',
    time: '5h ago',
  },
  {
    icon: 'lucide:git-commit-horizontal',
    label: 'Pushed',
    description: 'fix: avatar ring offset in dark mode',
    time: 'yesterday',
  },
]

const stats = [
  { label: 'Components', value: '48' },
  { label: 'Commits', value: '312' },
  { label: 'Followers', value: '2.4k' },
]
</script>

<template>
  <ViewContainer>
    <SlideoverRoot>
      <SlideoverTrigger as-child>
        <Button>Open Slideover</Button>
      </SlideoverTrigger>

      <SlideoverPortal>
        <SlideoverOverlay />

        <SlideoverContent :side="values.side">
          <SlideoverHeader
            class="border-b border-border"
            :show-close="values.showClose"
          >
            <SlideoverTitle>Team member</SlideoverTitle>
            <SlideoverDescription>
              CentoUI core contributor
            </SlideoverDescription>
          </SlideoverHeader>

          <SlideoverBody class="flex flex-col gap-6">
            <div class="flex items-start gap-4">
              <AvatarRoot size="lg">
                <AvatarImage src="https://github.com/favorodera.png" />
                <AvatarFallback>FE</AvatarFallback>
              </AvatarRoot>

              <div class="space-y-1">
                <p class="text-sm font-semibold">
                  Favour Emeka
                </p>
                <p class="text-xs text-muted-foreground">
                  UI Engineer · Lagos, NG
                </p>
                <Badge
                  variant="success"
                >
                  <Icon icon="lucide:circle" />
                  Available
                </Badge>
              </div>
            </div>

            <div
              class="
                grid grid-cols-3 gap-px divide-x divide-border overflow-hidden
                rounded-lg border border-border
              "
            >
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="flex flex-col items-center gap-0.5 bg-surface py-3"
              >
                <span class="text-base font-bold tabular-nums">{{ stat.value }}</span>
                <span class="text-xs text-muted-foreground">{{ stat.label }}</span>
              </div>
            </div>

            <section class="space-y-3">
              <h3
                class="
                  font-mono text-sm font-medium tracking-wide
                  text-muted-foreground uppercase
                "
              >
                Recent activity
              </h3>

              <ul class="space-y-0 divide-y divide-border">
                <li
                  v-for="item in activity"
                  :key="item.description"
                  class="flex items-start gap-3 py-3"
                >
                  <div
                    class="
                      flex size-7 shrink-0 items-center justify-center
                      rounded-md bg-surface
                    "
                  >
                    <Icon
                      :icon="item.icon"
                      class="text-muted-foreground"
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium">
                      {{ item.label }}
                    </p>
                    <p
                      class="truncate font-mono text-xs text-muted-foreground"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                  <span class="shrink-0 font-mono text-xs text-muted-foreground">
                    {{ item.time }}
                  </span>
                </li>
              </ul>
            </section>
          </SlideoverBody>

          <SlideoverFooter
            class="justify-end gap-3 border-t border-border"
            :class="['right', 'left'].includes(values.side) && '*:flex-1'"
          >
            <SlideoverClose as-child>
              <Button variant="outline">
                Dismiss
              </Button>
            </SlideoverClose>
            <Button>
              <Icon icon="lucide:user-plus" />
              Follow
            </Button>
          </SlideoverFooter>
        </SlideoverContent>
      </SlideoverPortal>
    </SlideoverRoot>
  </ViewContainer>
</template>

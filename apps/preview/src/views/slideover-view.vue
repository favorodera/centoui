<script setup lang="ts">
import {
  SlideoverRoot,
  SlideoverTrigger,
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
import { Icon } from '#centoui/components/icon'
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

const deployments = [
  {
    id: 'deploy-1',
    env: 'Production',
    commit: 'feat: add slideover component',
    hash: 'a1b2c3d',
    time: '2m ago',
    branch: 'main',
    icon: {
      name: 'lucide:circle-check',
      class: 'text-success',
    },
  },
  {
    id: 'deploy-2',
    env: 'Preview',
    commit: 'fix: padding in button',
    hash: 'f9e8d7c',
    time: '45m ago',
    branch: 'fix/button-padding',
    icon: {
      name: 'svg-spinners:180-ring',
      class: 'text-warning',
    },
  },
  {
    id: 'deploy-3',
    env: 'Preview',
    commit: 'chore: update dependencies',
    hash: 'b3c4d5e',
    time: '2h ago',
    branch: 'chore/deps',
    icon: {
      name: 'lucide:circle-x',
      class: 'text-error',
    },
  },
]
</script>

<template>
  <ViewContainer>
    <SlideoverRoot>
      <SlideoverTrigger as-child>
        <Button>
          <Icon icon="lucide:list-tree" />
          Deployments
        </Button>
      </SlideoverTrigger>

      <SlideoverContent :side="values.side as any">
        <SlideoverHeader
          class="border-b border-border"
          :show-close="values.showClose"
        >
          <SlideoverTitle>Recent Deployments</SlideoverTitle>
          <SlideoverDescription>
            View and manage your recent environment builds.
          </SlideoverDescription>
        </SlideoverHeader>

        <SlideoverBody
          class="px-0 divide-y divide-border"
          as="ul"
        >
          <li
            v-for="deployment in deployments"
            :key="deployment.id"
            class="flex flex-col gap-3 px-4 py-4 first:pt-0"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-start gap-2">
                <Icon
                  :icon="deployment.icon.name"
                  :class="deployment.icon.class"
                />
                <span class="text-sm font-medium">
                  {{ deployment.env }}
                </span>
              </div>
              <span class="shrink-0 text-xs text-muted-foreground">
                {{ deployment.time }}
              </span>
            </div>

            <p class="text-sm text-foreground">
              {{ deployment.commit }}
            </p>

            <div class="flex items-center gap-4 text-xs justify-between text-muted-foreground *:flex *:items-center *:gap-1">
              <span>
                <Icon
                  icon="lucide:git-branch"
                  class="size-3.5"
                />
                {{ deployment.branch }}
              </span>
              <span class="font-mono">
                <Icon
                  icon="lucide:git-commit-horizontal"
                  class="size-3.5"
                />
                {{ deployment.hash }}
              </span>
            </div>
          </li>
        </SlideoverBody>

        <SlideoverFooter
          class="justify-end gap-2 border-t border-border"
          :class="['right', 'left'].includes(values.side as string) && 'flex-col'"
        >
          <SlideoverClose as-child>
            <Button variant="outline">
              Close
            </Button>
          </SlideoverClose>
          
          <Button>
            View All Deployments
          </Button>
        </SlideoverFooter>
        
      </SlideoverContent>

    </SlideoverRoot>
  </ViewContainer>
</template>

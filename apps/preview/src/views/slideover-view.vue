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
import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertContent,
} from '#centoui/components/alert'
import { Button } from '#centoui/components/button'
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

const release = [
  'Improved navigation performance',
  'Refined table spacing and typography',
  'Better mobile responsiveness',
  'Updated empty states and loading indicators',
]
</script>

<template>
  <ViewContainer>
    <SlideoverRoot>
      <SlideoverTrigger as-child>
        <Button>
          Open Slideover
        </Button>
      </SlideoverTrigger>

      <SlideoverPortal>
        <SlideoverOverlay />

        <SlideoverContent :side="values.side">
          <SlideoverHeader
            class="border-b border-border"
            :show-close="values.showClose"
          >
            <SlideoverTitle>
              Product Update
            </SlideoverTitle>

            <SlideoverDescription>
              New improvements shipped this week across the dashboard experience.
            </SlideoverDescription>
          </SlideoverHeader>

          <SlideoverBody class="flex flex-col gap-4">
            <section class="space-y-2">
              <h3 class="text-sm font-medium">
                Highlights
              </h3>

              <p class="text-sm/relaxed text-muted-foreground">
                We redesigned the analytics overview to improve readability,
                added faster page transitions, and reduced initial loading
                times across the application.
              </p>
            </section>

            <section class="space-y-3">
              <h3 class="text-sm font-medium">
                Included in this release
              </h3>

              <ul class="space-y-2 text-sm text-muted-foreground">
                <li
                  v-for="item in release"
                  :key="item"
                >
                  • {{ item }}
                </li>
              </ul>
            </section>

            <AlertRoot variant="info">
              <AlertContent>
                <AlertTitle>
                  Team Note
                </AlertTitle>
                <AlertDescription>
                  This update focuses on creating a more polished and consistent
                  experience while keeping the interface lightweight and fast.
                </AlertDescription>
              </AlertContent>
            </AlertRoot>
          </SlideoverBody>

          <SlideoverFooter class="justify-end border-t border-border">
            <SlideoverClose as-child>
              <Button>
                See full changelog
              </Button>
            </SlideoverClose>
          </SlideoverFooter>
        </SlideoverContent>
      </SlideoverPortal>
    </SlideoverRoot>
  </ViewContainer>
</template>

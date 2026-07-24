<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { Badge } from '#centoui/components/badge'
import { Icon } from '#centoui/components/icon'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  navigationMenuVariants,
  NavigationMenuViewport,
} from '#centoui/components/navigation-menu'
import { Separator } from '#centoui/components/separator'
import { useStory } from '@/composables/use-story'

const controls = useStory('NavigationMenu', {
  disabled: {
    default: false,
    type: 'boolean',
  },
  triggerSize: {
    default: navigationMenuVariants.defaultVariants.triggerSize,
    options: Object.keys(navigationMenuVariants.variants.triggerSize),
    type: 'array',
  },
  withViewport: {
    default: true,
    type: 'boolean',
  },
})

const [
  DefineMenuItemTemplate,
  UseMenuItem,
] = createReusableTemplate<{
  badge?: string
  description: string
  href?: string
  icon?: string
  title: string
}>()

const [
  DefineFeaturedItemTemplate,
  UseFeaturedItem,
] = createReusableTemplate<{
  description: string
  href?: string
  image: string
  title: string
}>()

const products = [
  {
    badge: 'New',
    description: 'Streamline workflows with AI-powered automation',
    icon: 'lucide:zap',
    title: 'Automation',
  },
  {
    description: 'Track performance metrics in real-time',
    icon: 'lucide:bar-chart-3',
    title: 'Analytics',
  },
  {
    description: 'Connect with 200+ tools and services',
    icon: 'lucide:plug-2',
    title: 'Integrations',
  },
]

const resources = [
  {
    description: 'Comprehensive guides and API reference',
    icon: 'lucide:book-open',
    title: 'Documentation',
  },
  {
    description: 'Latest updates, tutorials, and industry insights',
    icon: 'lucide:newspaper',
    title: 'Blog',
  },
  {
    description: 'Join thousands of developers building with us',
    icon: 'lucide:message-circle',
    title: 'Community',
  },
]

const featuredItems = [
  {
    description: 'Your intelligent copilot for everyday tasks',
    href: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    title: 'AI Assistant',
  },
  {
    description: 'Stay productive on the go with our native apps',
    href: '#',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    title: 'Mobile App',
  },
]
</script>

<template>
  <DefineMenuItemTemplate v-slot="{ title, description, icon, badge, href }">
    <NavigationMenuLink
      :href="href || '#'"
      class="group"
    >
      <div class="flex items-start gap-3">
        <div
          v-if="icon"
          class="
            flex shrink-0 items-center justify-center rounded-lg bg-muted p-2
            text-muted-foreground transition-colors

            group-hover:bg-accent group-hover:text-accent-foreground
          "
        >
          <Icon
            :name="icon"
            class="block-4 inline-4"
          />
        </div>

        <div class="flex-1">
          <div class="flex items-center gap-2">
            <div class="font-medium leading-none">
              {{ title }}
            </div>

            <Badge
              v-if="badge"
              size="sm"
              variant="primary"
            >
              {{ badge }}
            </Badge>
          </div>

          <p class="mbs-1 text-sm/normal text-muted-foreground">
            {{ description }}
          </p>
        </div>
      </div>
    </NavigationMenuLink>
  </DefineMenuItemTemplate>

  <DefineFeaturedItemTemplate v-slot="{ title, description, image, href }">
    <NavigationMenuLink
      :href="href || '#'"
      class="group"
    >
      <div class="overflow-hidden rounded-lg bg-muted inline-full">
        <img
          :src="image"
          :alt="title"
          class="
            block-32 inline-full object-cover transition-transform duration-300

            group-hover:scale-105
          "
        >
      </div>

      <div class="mbs-2">
        <div class="font-medium leading-none">
          {{ title }}
        </div>

        <p class="mbs-1 text-sm/normal text-muted-foreground">
          {{ description }}
        </p>
      </div>
    </NavigationMenuLink>
  </DefineFeaturedItemTemplate>

  <div class="block-full inline-full grid items-start justify-items-center">
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger
            :disabled="controls.disabled"
            :size="controls.triggerSize"
          >
            Products
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div
              class="grid gap-4"
              style="inline-size: 500px; grid-template-columns: repeat(2, 1fr)"
            >
              <div class="space-y-3">
                <div
                  v-for="item in products.slice(0, 2)"
                  :key="item.title"
                >
                  <UseMenuItem v-bind="item" />
                </div>
              </div>

              <div class="space-y-3">
                <div
                  v-for="item in products.slice(2)"
                  :key="item.title"
                >
                  <UseMenuItem v-bind="item" />
                </div>
              </div>

              <Separator class="col-span-2 -mx-3" />

              <div class="col-span-2">
                <div class="font-medium mbe-3 text-sm text-muted-foreground">
                  Featured
                </div>

                <div
                  class="grid gap-3"
                  style="grid-template-columns: repeat(2, 1fr)"
                >
                  <div
                    v-for="item in featuredItems"
                    :key="item.title"
                  >
                    <UseFeaturedItem v-bind="item" />
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="resources">
          <NavigationMenuTrigger
            :disabled="controls.disabled"
            :size="controls.triggerSize"
          >
            Resources
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div
              class="grid gap-3"
              style="inline-size: 400px"
            >
              <div
                v-for="item in resources"
                :key="item.title"
              >
                <UseMenuItem v-bind="item" />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem
          v-for="item in [ 'Pricing','Contact',]"
          :key="item"
          :value="item.toLowerCase()"
        >
          <NavigationMenuLink
            href="#"
            :class="navigationMenuVariants().trigger({triggerSize:controls.triggerSize})"
          >
            {{ item }}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <NavigationMenuViewport v-if="controls.withViewport" />
    </NavigationMenuRoot>
  </div>
</template>

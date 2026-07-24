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
  eyebrow?: string
  href?: string
  image: string
  title: string
}>()

// "Platform" mega menu — a spend-management product with several
// distinct surfaces, so it's worth two columns plus a featured rail.
const platform = [
  {
    badge: 'Popular',
    description: 'Issue smart cards with built-in spending controls for every team',
    icon: 'lucide:credit-card',
    title: 'Corporate cards',
  },
  {
    description: 'Approve, pay, and reconcile vendor invoices without leaving Vantage',
    icon: 'lucide:receipt',
    title: 'Bill pay',
  },
  {
    description: 'Auto-categorize transactions and close the books in days, not weeks',
    icon: 'lucide:calculator',
    title: 'Accounting automation',
  },
  {
    badge: 'New',
    description: 'Book flights and hotels that stay inside policy, automatically',
    icon: 'lucide:plane',
    title: 'Travel & expense',
  },
]

// "Resources" is a flatter, single-column menu — good for testing
// a narrower NavigationMenuContent against the wider mega menu above.
const resources = [
  {
    description: 'Setup guides and API references for engineering teams',
    icon: 'lucide:book-open',
    title: 'Documentation',
  },
  {
    description: 'How finance leaders at growing companies run on Vantage',
    icon: 'lucide:quote',
    title: 'Customer stories',
  },
  {
    description: 'Live product walkthroughs and monthly release notes',
    icon: 'lucide:calendar',
    title: 'Events & webinars',
  },
]

const featuredItems = [
  {
    description: 'See the workflow their 40-person finance team runs today',
    eyebrow: 'Case study',
    href: '#',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=480&h=320&fit=crop',
    title: 'How Northwind cut close time from 12 days to 2',
  },
  {
    description: 'A 6-minute walkthrough of what shipped this quarter',
    eyebrow: 'Product tour',
    href: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=320&fit=crop',
    title: 'A first look at real-time spend dashboards',
  },
]

const plainLinks = [
  'Pricing',
  'Security',
  'Contact sales',
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

  <DefineFeaturedItemTemplate v-slot="{ title, description, image, href, eyebrow }">
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
        <div
          v-if="eyebrow"
          class="text-xs font-medium uppercase tracking-wide text-primary"
        >
          {{ eyebrow }}
        </div>

        <div class="mbs-1 font-medium leading-snug">
          {{ title }}
        </div>

        <p class="mbs-1 text-sm/normal text-muted-foreground">
          {{ description }}
        </p>
      </div>
    </NavigationMenuLink>
  </DefineFeaturedItemTemplate>

  <div class="block-full inline-full items-start justify-center flex">
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem value="platform">
          <NavigationMenuTrigger
            :disabled="controls.disabled"
            :size="controls.triggerSize"
          >
            Platform
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div class="grid grid-cols-2 gap-4 inline-[560px]">
              <div class="space-y-3">
                <div
                  v-for="item in platform.slice(0, 2)"
                  :key="item.title"
                >
                  <UseMenuItem v-bind="item" />
                </div>
              </div>

              <div class="space-y-3">
                <div
                  v-for="item in platform.slice(2)"
                  :key="item.title"
                >
                  <UseMenuItem v-bind="item" />
                </div>
              </div>

              <Separator class="col-span-2 -mx-3" />

              <div class="col-span-2">
                <div class="mbe-3 text-sm font-medium text-muted-foreground">
                  Featured
                </div>

                <div class="grid grid-cols-2 gap-3">
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
            <div class="grid gap-3 inline-[380px]">
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
          v-for="item in plainLinks"
          :key="item"
          :value="item.toLowerCase().replace(/\s+/g, '-')"
        >
          <NavigationMenuLink
            href="#"
            :class="navigationMenuVariants().trigger({ triggerSize: controls.triggerSize })"
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

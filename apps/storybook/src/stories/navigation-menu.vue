<script setup lang="ts">
import { ref } from 'vue'
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
import { useStory } from '@/composables/use-story'

const controls = useStory('NavigationMenu', {
  orientation: {
    default: navigationMenuVariants.defaultVariants.orientation,
    options: Object.keys(navigationMenuVariants.variants.orientation),
    type: 'array',
  },
})

const currentValue = ref('learn')

const menuItems = [
  {
    label: 'Learn',
    links: [
      'Documentation',
      'Themes',
      'Examples',
    ],
    value: 'learn',
  },
  {
    label: 'Components',
    links: [
      'Accordion',
      'Alert Dialog',
      'Button',
      'Card',
    ],
    value: 'components',
  },
  {
    label: 'Resources',
    links: [
      'Blog',
      'Community',
      'Support',
    ],
    value: 'resources',
  },
  {
    label: 'Pricing',
    value: 'pricing',
  },
  {
    label: 'About',
    value: 'about',
  },
]
</script>

<template>
  <NavigationMenuRoot
    v-model="currentValue"
    :orientation="controls.orientation"
  >
    <NavigationMenuList>
      <NavigationMenuItem
        v-for="item in menuItems"
        :key="item.value"
        :value="item.value"
      >
        <template v-if="item.links">
          <NavigationMenuTrigger>
            {{ item.label }}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <NavigationMenuLink
              v-for="link in item.links"
              :key="link"
              href="#"
            >
              {{ link }}
            </NavigationMenuLink>
          </NavigationMenuContent>
        </template>

        <NavigationMenuLink
          v-else
          href="#"
        >
          {{ item.label }}
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator />
    </NavigationMenuList>

    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>

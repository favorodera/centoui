<script setup lang="ts">
import { navigationMenuVariants } from '../centoui/navigation-menu'

const navLinks = [
  { label: 'Documentation', name: 'docs', path: '/docs' },
  // { label: 'Showcase', name: 'showcase', path: '/showcase' },
  // { label: 'Templates', name: 'templates', path: '/templates' },
  // { label: 'Changelog', name: 'changelog', path: '/changelog' },
]

const route = useRoute()

const isRouteActive = (name: string) => {
  const routeName = route.name?.toString() ?? ''
  return routeName === name || routeName.startsWith(`${name}-`)
}
</script>

<template>
  <header
    class="
      bg-background/50 sticky inset-bs-0 z-50 backdrop-blur-xl border-be py-2
    "
  >
    <NavigationMenuRoot
      class="
        px-6 mx-auto inline-full

        *:flex-1
      "
    >
      <NavigationMenuList>
        <NavigationMenuItem class="me-4">
          <NuxtLink
            to="/"
            class="
              outline-none

              focus-visible:ring-ring focus-visible:ring-2
            "
          >
            <AppLogo />
          </NuxtLink>
        </NavigationMenuItem>

        <NavigationMenuItem
          v-for="link in navLinks"
          :key="link.path"
        >
          <NavigationMenuLink
            :as-child="true"
            :active="isRouteActive(link.name)"
            :class="navigationMenuVariants().trigger()"
          >
            <NuxtLink :to="link.path">
              {{ link.label }}
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem class="ms-auto">
          <ColorScheme>
            <Button
              variant="ghost"
              :square="true"
              :aria-label="`Switch to ${$colorMode.value === 'dark' ? 'light' : 'dark'} mode`"
              @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
            >
              <Icon
                :name="$colorMode.value === 'dark' ? 'lucide:moon' : 'lucide:sun'"
              />
            </Button>

            <template #placeholder>
              <div class="block-8 inline-8 rounded-lg bg-muted animate-pulse" />
            </template>
          </ColorScheme>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport />
    </NavigationMenuRoot>
  </header>
</template>

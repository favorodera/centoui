<script setup lang="ts">
const navLinks = [
  { label: 'Home', name: 'index', path: '/' },
  { label: 'Documentation', name: 'docs', path: '/docs' },
  { label: 'Showcase', name: 'showcase', path: '/showcase' },
  { label: 'Templates', name: 'templates', path: '/templates' },
  { label: 'Changelog', name: 'changelog', path: '/changelog' },
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
      bg-background sticky inset-bs-0 z-50 backdrop-blur-sm border-be py-2.5
    "
  >
    <nav
      class="inline-full px-6 mx-auto flex items-center justify-between"
    >
      <ul class="flex items-center gap-4">
        <li
          v-for="link in navLinks"
          :key="link.path"
        >
          <Button
            as-child
            variant="ghost"
            :class="{ 'bg-muted': isRouteActive(link.name) }"
          >
            <NuxtLink :to="link.path">
              {{ link.label }}
            </NuxtLink>
          </Button>
        </li>
      </ul>

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
    </nav>
  </header>
</template>

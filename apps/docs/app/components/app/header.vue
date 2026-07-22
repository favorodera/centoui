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

const ReusableNavLinks = createReusableTemplate<{ isMobile?: boolean }>()
</script>

<template>
  <ReusableNavLinks.define v-slot="{isMobile}">
    <li
      v-for="link in navLinks"
      :key="link.path"
    >
      <Button
        as-child
        variant="ghost"
        :class="{
          'bg-muted': isRouteActive(link.name),
          'inline-full justify-start':isMobile
        }"
      >
        <NuxtLink :to="link.path">
          {{ link.label }}
        </NuxtLink>
      </Button>
    </li>
  </ReusableNavLinks.define>

  <header
    class="
      bg-background/50 sticky inset-bs-0 z-50 backdrop-blur-xl border-be py-2.5
    "
  >
    <nav
      class="inline-full px-6 mx-auto flex items-center justify-between"
    >
      <ul
        class="
          flex items-center gap-4

          max-lg:hidden
        "
      >
        <ReusableNavLinks.reuse />
      </ul>

      <SheetRoot>
        <SheetTrigger
          as-child
          variant="ghost"
          :square="true"
        >
          <Button
            aria-label="Open Menu"
            class="lg:hidden"
          >
            <Icon name="lucide:menu" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>CentoUI</SheetTitle>
            <SheetDescription>Vue Components for Elegant Interfaces</SheetDescription>
          </SheetHeader>

          <Separator />

          <ul
            class="grid gap-4"
          >
            <ReusableNavLinks.reuse :is-mobile="true" />
          </ul>
        </SheetContent>
      </SheetRoot>

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

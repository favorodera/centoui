<script setup lang="ts">
const coreRoutes = [{ label: 'Documentation', path: '/' }]
</script>

<template>
  <nav
    class="
      inline-full px-4 mx-auto flex items-center justify-between

      sm:px-6

      md:px-8

      lg:px-10
    "
  >
    <Icon
      name="lucide:sword"
      class="
        text-primary block-6 inline-6 rotate-90

        *:[path]:fill-primary
      "
    />

    <ul class="flex items-center gap-4">
      <li
        v-for="route in coreRoutes"
        :key="route.path"
      >
        <Button
          as-child
          variant="ghost"
        >
          <NuxtLink :to="route.path">
            {{ route.label }}
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
</template>

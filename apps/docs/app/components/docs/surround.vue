<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

defineProps<{
  surround: ContentNavigationItem[]
}>()

const isPrevious = (index: number) => index === 0
</script>

<!-- eslint-disable vue/no-root-v-if -->
<template>
  <ItemGroup
    v-if="surround.some(Boolean)"
    data-not-prose="true"
    class="
      pbs-(--prose-spacing) flex-row flex-wrap

      *:flex-1 *:basis-80
    "
  >
    <template
      v-for="(item, index) in surround"
      :key="index"
    >
      <ItemRoot
        v-if="item"
        variant="outline"
        as-child
      >
        <NuxtLink :to="item.path">
          <ItemMedia variant="icon">
            <Icon
              v-if="isPrevious(index)"
              name="lucide:chevron-left"
            />
          </ItemMedia>

          <ItemContent
            :class="{
              'items-end text-end': !isPrevious(index),
            }"
          >
            <ItemTitle>
              {{ item.title }}
            </ItemTitle>

            <ItemDescription class="line-clamp-1">
              {{ item.description }}
            </ItemDescription>
          </ItemContent>

          <ItemMedia variant="icon">
            <Icon
              v-if="!isPrevious(index)"
              name="lucide:chevron-right"
            />
          </ItemMedia>
        </NuxtLink>
      </ItemRoot>
    </template>
  </ItemGroup>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

defineProps<{
  surround: ContentNavigationItem[]
}>()

const isFirstSurroundItem = (index: number) => index === 0
</script>

<template>
  <ItemGroup
    class="
      flex-row flex-wrap

      *:inline-fit *:flex-1
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
              v-if="isFirstSurroundItem(index)"
              name="lucide:chevron-left"
            />
          </ItemMedia>

          <ItemContent
            :class="{
              'items-end': !isFirstSurroundItem(index)
            }"
          >
            <ItemTitle>{{ item.title }}</ItemTitle>

            <ItemDescription class="line-clamp-1">
              {{ item.description }}
            </ItemDescription>
          </ItemContent>

          <ItemMedia variant="icon">
            <Icon
              v-if="!isFirstSurroundItem(index)"
              name="lucide:chevron-right"
            />
          </ItemMedia>
        </NuxtLink>
      </ItemRoot>
    </template>
  </ItemGroup>
</template>

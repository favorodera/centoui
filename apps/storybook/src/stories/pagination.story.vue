<script setup lang="ts">
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from '#centoui/components/pagination'
import { useStory } from '@/composables/use-story'

useStory('Pagination', {})
</script>

<template>
  <PaginationRoot
    v-slot="{page}"
    :total="50"
    :sibling-count="0"
    :items-per-page="5"
    show-edges
    :default-page="2"
  >
    <PaginationList
      v-slot="{ items }"
    >
      <PaginationFirst />
      <PaginationPrev />

      <template
        v-for="(item, index) in items"
        :key="index"
      >
        <PaginationListItem
          v-if="item.type === 'page'"
          :value="item.value"
          :variant="item.value === page ? 'outline' : undefined"
        >
          {{ item.value }}
        </PaginationListItem>

        <PaginationEllipsis
          v-else
          :key="item.type"
          :index="index"
        />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>

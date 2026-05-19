<script setup lang="ts">
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationEllipsis,
  PaginationFirst,
  PaginationPrev,
  PaginationNext,
  PaginationLast,
} from '#centoui/components/pagination'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'

usePreview('Pagination', {})
</script>

<template>
  <ViewContainer>
    <PaginationRoot
      :total="100"
      :sibling-count="1"
      :items-per-page="10"
      show-edges
      :default-page="2"
    >
      <PaginationList
        v-slot="{ items }"
      >
        <PaginationFirst />

        <PaginationPrev />

        <template v-for="(page, index) in items">
          <PaginationListItem
            v-if="page.type === 'page'"
            :key="index"
            :value="page.value"
          >
            {{ page.value }}
          </PaginationListItem>

          <PaginationEllipsis
            v-else
            :key="page.type"
            :index="index"
          />
        </template>

        <PaginationNext />

        <PaginationLast />
      </PaginationList>
    </PaginationRoot>
  </ViewContainer>
</template>

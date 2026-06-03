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
import { useApp } from '@/composables/use-app'

useApp().preview.initPreview('Pagination', {})
</script>

<template>
  <ViewContainer>
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
  </ViewContainer>
</template>

<script setup lang="ts">
import { buttonVariants } from '#centoui/components/button'
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

const values = usePreview('Pagination', {
  variant: {
    type: 'select',
    label: 'Variant',
    options: Object.keys(buttonVariants.variants.variant),
    default: 'ghost',
  },
  activeVariant: {
    type: 'select',
    label: 'Active variant',
    options: Object.keys(buttonVariants.variants.variant),
    default: 'outline',
  },
  size: {
    type: 'select',
    label: 'Size',
    options: Object.keys(buttonVariants.variants.size),
    default: 'md',
  },
})
</script>

<template>
  <ViewContainer>
    <PaginationRoot
      v-slot="{page}"
      :total="100"
      :sibling-count="1"
      :items-per-page="5"
      show-edges
      :default-page="2"
      :variant="values.variant as any"
      :active-variant="values.activeVariant as any"
      :size="values.size as any"
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
            :active="item.value === page"
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

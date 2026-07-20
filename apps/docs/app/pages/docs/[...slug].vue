<script setup lang="ts">
const route = useRoute()

const { data: page } = useQuery({
  key: [
    'docs',
    route.path,
  ],
  query: () => queryCollection('docs').path(route.path)
    .first(),
})

const { data: surround } = useQuery({
  key: [
    'docs',
    'surround',
    route.path,
  ],
  query: () => queryCollectionItemSurroundings('docs', route.path, { fields: ['description'] }),
})
</script>

<template>
  <div class="block-full inline-full">
    <div v-if="page">
      <pre>{{ page }}</pre>

    <ContentRenderer
      :value="page"
      :prose="false"
    />

    <pre>{{ surround }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: page } = useQuery({
  key: ['home'],
  query: () => queryCollection('home').first(),
})
</script>

<template>
  <div class="block-full inline-full">
    <ContentRenderer
      v-if="page"
      :value="page"
      :prose="false"
    />
  </div>
</template>

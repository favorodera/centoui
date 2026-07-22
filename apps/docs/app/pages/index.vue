<script setup lang="ts">
definePageMeta({
  layout: false,
})

const { data: page } = useQuery({
  key: ['page', 'home'],
  query: () => queryCollection('home').first(),
})
</script>

<template>
  <div class="block-full inline-full">
    <NuxtLayout name="default">
      <div
        v-if="page"
        class="px-6 py-12"
      >
        <ContentRenderer
          :value="page"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

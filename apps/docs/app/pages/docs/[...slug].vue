<script setup lang="ts">
definePageMeta({
  layout: false,
})

const route = useRoute()

const { data: page } = useQuery({
  key: [
    'page',
    'docs',
    route.path,
  ],
  query: () => queryCollection('docs')
    .path(route.path)
    .first(),
})

const { data: surround } = useQuery({
  key: [
    'surround',
    'docs',
    route.path,
  ],
  query: () => queryCollectionItemSurroundings('docs', route.path, {
    fields: ['description'],
  }),
})
</script>

<template>
  <div class="block-full inline-full">
    <NuxtLayout name="docs">
      <div
        v-if="page"
        class="
          px-6 py-12 block-full inline-full grid grid-cols-1

          lg:grid-cols-[1fr_auto]
        "
      >
        <section
          class="
            block-full inline-full grid grid-rows-[auto_1fr_auto] gap-4 mx-auto
            max-inline-4xl
          "
        >
          <DocsPageHeader
            :title="page.title"
            :description="page.description"
          />

          <ContentRenderer
            :value="page"
            class="grid"
          />

          <DocsSurround
            v-if="surround"
            :surround="surround"
          />
        </section>

        <aside
          class="
            hidden

            lg:block lg:min-inline-2xs
          "
        >
          <!-- TOC -->
        </aside>
      </div>
    </NuxtLayout>
  </div>
</template>

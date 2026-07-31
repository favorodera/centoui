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
          block-full inline-full grid grid-cols-1 relative pbe-6 px-6 prose
          prose-docs

          lg:grid-cols-[1fr_auto]
        "
      >
        <section
          class="
            block-full inline-full grid grid-rows-[auto_1fr_auto] mx-auto
            max-inline-5xl pbs-6
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
            hidden ps-6

            lg:block lg:min-inline-3xs
          "
        >
          <DocsToc
            :items="page.body.toc?.links"
          />
        </aside>
      </div>
    </NuxtLayout>
  </div>
</template>

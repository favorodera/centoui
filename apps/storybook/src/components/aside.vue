<script setup lang="ts">
import { Separator } from '#centoui/components/separator'
import { sheetVariants } from '#centoui/components/sheet'
import { useApp } from '@/composables/use-app'
import Controls from './controls.vue'

const { story } = useApp()

const variants = sheetVariants()
</script>

<template>
  <aside
    :class="variants.content({
      class:'relative inset-auto translate-x-0 min-w-72 shrink-0 max-lg:hidden'
    })"
  >
    <div :class="variants.header()">
      <h2 :class="variants.title()">
        Controls
      </h2>

      <p :class="variants.description()">
        Configure the properties of the story.
      </p>
    </div>

    <Separator />

    <Controls
      :schema="story.schema.value"
      :values="story.values.value"
      @update:values="story.updateValues"
    />
  </aside>
</template>

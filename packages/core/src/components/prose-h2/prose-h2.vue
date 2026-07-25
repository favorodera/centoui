<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProseH2Props, proseH2Variants } from '.'

const props = withDefaults(defineProps<ProseH2Props>(), {
  anchor: false,
})

const variants = proseH2Variants()
</script>

<template>
  <h1
    :id="props.id"
    data-slot="prose-h2"
    :data-anchor="props.anchor"
    :class="variants.root({
      class:normalizeClass(props.class),
      anchor:props.anchor
    })"
  >
    <a
      v-if="props.anchor && props.id"
      data-slot="prose-h2-link"
      :href="`#${props.id}`"
      :class="variants.link({
      anchor:props.anchor
    })"
    >
      <slot />
    </a>

    <slot v-else />
  </h1>
</template>

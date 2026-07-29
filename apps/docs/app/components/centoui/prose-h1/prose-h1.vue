<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import config from '#centoui/config'
import { type ProseH1Props, proseH1Variants } from '.'
import { Icon } from '../icon'

const props = withDefaults(defineProps<ProseH1Props>(), {
  anchor: false,
})

const showAnchor = computed(() => props.anchor && !!props.id)

const variants = proseH1Variants()
</script>

<template>
  <h1
    :id="props.id"
    data-slot="prose-h1"
    :data-anchor="props.anchor"
    :class="variants.root({
      class:normalizeClass(props.class),
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h1-anchor"
      :href="`#${props.id}`"
      aria-label="Section permalink"
      :class="variants.anchor()"
    >
      <icon :name="config.icons.hash" />
    </a>
  </h1>
</template>

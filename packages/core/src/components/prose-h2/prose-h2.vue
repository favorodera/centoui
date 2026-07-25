<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import config from '#centoui/config'
import { type ProseH2Props, proseH2Variants } from '.'
import { Icon } from '../icon'

const props = withDefaults(defineProps<ProseH2Props>(), {
  anchor: false,
})

const showAnchor = computed(() => props.anchor && !!props.id)

const variants = proseH2Variants()
</script>

<template>
  <h2
    :id="props.id"
    data-slot="prose-h2"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
      anchor: showAnchor,
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h2-link"
      :href="`#${props.id}`"
      aria-label="Section link"
      :class="variants.link({
        anchor: showAnchor 
      })"
    >
      <icon :name="config.icons.hash" />
    </a>
  </h2>
</template>

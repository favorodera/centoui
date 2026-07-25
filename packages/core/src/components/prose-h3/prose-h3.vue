<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import config from '#centoui/config'
import { type ProseH3Props, proseH3Variants } from '.'
import { Icon } from '../icon'

const props = withDefaults(defineProps<ProseH3Props>(), {
  anchor: false,
})

const showAnchor = computed(() => props.anchor && !!props.id)

const variants = proseH3Variants()
</script>

<template>
  <h3
    :id="props.id"
    data-slot="prose-h3"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
      anchor: showAnchor,
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h3-link"
      :href="`#${props.id}`"
      aria-label="Section link"
      :class="variants.link({ anchor: showAnchor })"
    >
      <icon :name="config.icons.hash" />
    </a>
  </h3>
</template>

<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import config from '#centoui/config'
import { type ProseH3Props, proseH3Variants } from '.'
import { Icon } from '../icon'

const props = defineProps<ProseH3Props>()

const showAnchor = computed(() => !!props.id)

const variants = proseH3Variants()
</script>

<template>
  <h3
    :id="props.id"
    data-slot="prose-h3"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h3-anchor"
      :href="`#${props.id}`"
      aria-label="Section permalink"
      :class="variants.anchor()"
    >
      <icon :name="config.icons.hash" />
    </a>
  </h3>
</template>

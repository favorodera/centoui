<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import config from '#centoui/config'
import { type ProseH6Props, proseH6Variants } from '.'
import { Icon } from '../icon'

const props = withDefaults(defineProps<ProseH6Props>(), {
  anchor: false,
})

const showAnchor = computed(() => props.anchor && !!props.id)

const variants = proseH6Variants()
</script>

<template>
  <h6
    :id="props.id"
    data-slot="prose-h6"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h6-anchor"
      :href="`#${props.id}`"
      aria-label="Section permalink"
      :class="variants.anchor()"
    >
      <icon :name="config.icons.hash" />
    </a>
  </h6>
</template>

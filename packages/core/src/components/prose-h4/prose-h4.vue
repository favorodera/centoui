<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import config from '#centoui/config'
import { type ProseH4Props, proseH4Variants } from '.'
import { Icon } from '../icon'

const props = withDefaults(defineProps<ProseH4Props>(), {
  anchor: false,
})

const showAnchor = computed(() => props.anchor && !!props.id)

const variants = proseH4Variants()
</script>

<template>
  <h4
    :id="props.id"
    data-slot="prose-h4"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
      anchor: showAnchor,
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h4-link"
      :href="`#${props.id}`"
      aria-label="Section link"
      :class="variants.link({
        anchor: showAnchor 
      })"
    >
      <icon :name="config.icons.hash" />
    </a>
  </h4>
</template>

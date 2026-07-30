<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import { type ProseH2Props, proseH2Variants } from '.'
import { Icon, iconsConfig } from '../icon'

const props = defineProps<ProseH2Props>()

const showAnchor = computed(() => !!props.id)

const variants = proseH2Variants()
</script>

<template>
  <h2
    :id="props.id"
    data-slot="prose-h2"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h2-anchor"
      :href="`#${props.id}`"
      aria-label="Section permalink"
      :class="variants.anchor()"
    >
      <icon :name="iconsConfig.hash" />
    </a>
  </h2>
</template>

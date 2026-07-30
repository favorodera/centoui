<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import { type ProseH4Props, proseH4Variants } from '.'
import { Icon, iconsConfig } from '../icon'

const props = defineProps<ProseH4Props>()

const showAnchor = computed(() => !!props.id)

const variants = proseH4Variants()
</script>

<template>
  <h4
    :id="props.id"
    data-slot="prose-h4"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h4-anchor"
      :href="`#${props.id}`"
      aria-label="Section permalink"
      :class="variants.anchor()"
    >
      <icon :name="iconsConfig.hash" />
    </a>
  </h4>
</template>

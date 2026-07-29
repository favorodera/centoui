<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import config from '#centoui/config'
import { type ProseH5Props, proseH5Variants } from '.'
import { Icon } from '../icon'

const props = defineProps<ProseH5Props>()

const showAnchor = computed(() => !!props.id)

const variants = proseH5Variants()
</script>

<template>
  <h5
    :id="props.id"
    data-slot="prose-h5"
    :data-anchor="showAnchor"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />

    <a
      v-if="showAnchor"
      data-slot="prose-h5-anchor"
      :href="`#${props.id}`"
      aria-label="Section permalink"
      :class="variants.anchor()"
    >
      <icon :name="config.icons.hash" />
    </a>
  </h5>
</template>

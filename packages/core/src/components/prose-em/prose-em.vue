<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProseEmProps, proseEmVariants } from '.'

const props = defineProps<ProseEmProps>()

const variants = proseEmVariants()
</script>

<template>
  <em
    data-slot="prose-em"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </em>
</template>

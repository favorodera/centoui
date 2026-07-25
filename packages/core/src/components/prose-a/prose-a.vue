<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProseAProps, proseAVariants } from '.'

const props = defineProps<ProseAProps>()

const variants = proseAVariants()
</script>

<template>
  <a
    data-slot="prose-a"
    :href="props.href"
    :target="props.target"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </a>
</template>

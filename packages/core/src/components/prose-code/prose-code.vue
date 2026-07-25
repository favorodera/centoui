<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProseCodeProps, proseCodeVariants } from '.'

const props = defineProps<ProseCodeProps>()

const variants = proseCodeVariants()
</script>

<template>
  <code
    :data-lang="props.lang"
    data-slot="prose-code"
    :class="variants.root({
      class: normalizeClass(props.class)
    })"
  >
    <slot />

  </code>
</template>

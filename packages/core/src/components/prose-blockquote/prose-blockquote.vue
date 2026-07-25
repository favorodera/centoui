<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProseBlockquoteProps, proseBlockquoteVariants } from '.'

const props = defineProps<ProseBlockquoteProps>()

const variants = proseBlockquoteVariants()
</script>

<template>
  <blockquote
    data-slot="prose-blockquote"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </blockquote>
</template>

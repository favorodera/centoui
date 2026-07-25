<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProseStrongProps, proseStrongVariants } from '.'

const props = defineProps<ProseStrongProps>()

const variants = proseStrongVariants()
</script>

<template>
  <strong
    data-slot="prose-strong"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </strong>
</template>

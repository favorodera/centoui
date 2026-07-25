<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProsePProps, prosePVariants } from '.'

const props = defineProps<ProsePProps>()

const variants = prosePVariants()
</script>

<template>
  <p
    data-slot="prose-p"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </p>
</template>

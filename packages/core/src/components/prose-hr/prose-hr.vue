<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type ProseHrProps, proseHrVariants } from '.'

const props = defineProps<ProseHrProps>()

const variants = proseHrVariants()
</script>

<template>
  <hr
    data-slot="prose-hr"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
</template>

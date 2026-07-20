<script setup lang="ts">
import { normalizeClass } from 'vue'
import { type IconProps, iconVariants } from '.'

const props = defineProps<IconProps>()

const variants = iconVariants()
</script>

<template>
  <NuxtIcon
    data-slot="icon"
    v-bind="props"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
    :icon="name"
  />
</template>

<script setup lang="ts">
import { computed, normalizeClass } from 'vue'
import { type ProseCodeIconProps, proseCodeIconVariants, resolveIconFromFilename } from '.'
import { Icon } from '../icon'

const props = defineProps<ProseCodeIconProps>()

const resolvedIcon = computed(() => {
  if (props.icon) {
    return props.icon
  }

  return resolveIconFromFilename(props.filename)
})

const variants = proseCodeIconVariants()
</script>

<template>
  <Icon
    v-if="resolvedIcon"
    data-slot="prose-code-icon"
    :name="resolvedIcon"
    :class="variants.root({
      class:normalizeClass(props.class)
    })"
  />
</template>

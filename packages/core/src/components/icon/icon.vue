<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { type IconProps, iconVariants } from '.'

const props = defineProps<IconProps>()

const { root } = iconVariants()

const classNames = computed(() => root({
  class: props.class,
}))
</script>

<template>
  <Icon
    data-slot="icon"
    v-bind="props"
    :class="classNames"
    :icon="name"
  />
</template>

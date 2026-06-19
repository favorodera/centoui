<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { type IconProps, iconVariants } from '.'

const props = withDefaults(defineProps<IconProps>(), {
  ariaHidden: true,
})

const forwardedProps = reactiveOmit(props, 'class', 'ariaHidden')

const ariaHidden = computed(() => {
  return props.ariaHidden === true || props.ariaHidden === 'true'
    ? true
    : undefined
})

const { root } = iconVariants()

const classNames = computed(() => root({ class: props.class }))
</script>

<template>
  <Icon
    data-slot="icon"
    v-bind="forwardedProps"
    :class="classNames"
    :aria-hidden
  />
</template>

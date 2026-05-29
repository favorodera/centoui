<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { type IconProps, iconVariants } from '.'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = withDefaults(defineProps<IconProps>(), {
  ariaHidden: true,
})
const delegatedProps = reactiveOmit(props, 'class', 'icon', 'ariaHidden')
const forwardedProps = useForwardProps(delegatedProps)

const ariaHidden = computed(() => {
  return props.ariaHidden === true || props.ariaHidden === 'true'
    ? true
    : undefined
})

const classNames = computed(() => {
  const { root } = iconVariants()

  return root({ class: props.class })
})
</script>

<template>
  <Icon
    data-slot="icon"
    :icon
    v-bind="forwardedProps"
    :class="classNames"
    :aria-hidden
  />
</template>

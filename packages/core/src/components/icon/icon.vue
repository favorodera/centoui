<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type IconProps, iconVariants } from '.'

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

const { root } = iconVariants()
const classNames = computed(() => root({ class: props.class }))
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

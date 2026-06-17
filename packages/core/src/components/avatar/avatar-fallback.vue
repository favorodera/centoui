<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarFallback, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type AvatarFallbackProps, avatarVariants, injectRootContext } from '.'

const props = defineProps<AvatarFallbackProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { fallback } = avatarVariants()

const classNames = computed(() => fallback({
  class: props.class,
  size: rootContext?.size,
}))
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AvatarFallback>
</template>

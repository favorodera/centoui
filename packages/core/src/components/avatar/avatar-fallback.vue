<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarFallback, useForwardProps } from 'reka-ui'
import {
  type AvatarFallbackProps,
  avatarVariants,
  injectCentouiAvatarRootContext,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiAvatarRootContext()

const props = defineProps<AvatarFallbackProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { fallback } = avatarVariants()
const classNames = computed(() => fallback({
  size: rootContext?.size,
  class: props.class,
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

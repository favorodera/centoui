<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarFallback, useForwardProps } from 'reka-ui'
import { type AvatarFallbackProps, type AvatarFallbackSlots, injectCentouiAvatarRootContext } from '.'

const rootContext = injectCentouiAvatarRootContext()

defineSlots<AvatarFallbackSlots>()

const props = defineProps<AvatarFallbackProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="forwardedProps"
    :class="rootContext.styles.fallback({ class: props.class })"
  >
    <slot />
  </AvatarFallback>
</template>

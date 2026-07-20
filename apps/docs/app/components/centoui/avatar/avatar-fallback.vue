<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarFallback, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AvatarFallbackProps, avatarVariants, injectRootContext } from '.'

const props = defineProps<AvatarFallbackProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = avatarVariants()
</script>

<template>
  <AvatarFallback
    data-slot="avatar-fallback"
    v-bind="forwardedProps"
    :class="variants.fallback({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
  >
    <slot />
  </AvatarFallback>
</template>

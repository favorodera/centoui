<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarFallback, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants, type AvatarFallbackProps, type AvatarFallbackSlots } from '.'

defineSlots<AvatarFallbackSlots>()

const props = defineProps<AvatarFallbackProps>()

// Forward props.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { fallback } = avatarVariants()

  return fallback({ class: props.class })
})
</script>

<template>
  <AvatarFallback
    data-centoui-slot="avatar-fallback"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </AvatarFallback>
</template>

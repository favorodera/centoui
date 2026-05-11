<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarRoot, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants, type AvatarRootProps, type AvatarRootSlots } from '.'

defineSlots<AvatarRootSlots>()

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: 'md',
})

// Forward props.
const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwardedProps = useForwardProps(delegatedProps)

// Style class string for the component.
const styles = computed(() => {
  const { root } = avatarVariants({
    size: props.size,
  })

  return root({ class: props.class })
})
</script>

<template>
  <AvatarRoot
    data-centoui-slot="avatar-root"
    :data-centoui-size="size"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </AvatarRoot>
</template>

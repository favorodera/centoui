<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarRoot, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants, type AvatarRootProps, type AvatarRootSlots } from '.'

defineSlots<AvatarRootSlots>()

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: 'md',
  disabled: false,
})

// Strip component-specific props and forward native props.
const delegatedProps = reactiveOmit(props, 'class', 'disabled', 'size')
const forwardedProps = useForwardProps(delegatedProps)

// Compute class string for the root slot.
const styles = computed(() => {
  const { root } = avatarVariants({
    size: props.size,
    disabled: props.disabled,
  })

  return root({ class: props.class })
})
</script>

<template>
  <AvatarRoot
    data-centoui-slot="avatar-root"
    :data-centoui-size="size"
    :data-centoui-disabled="disabled"
    :aria-disabled="disabled"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </AvatarRoot>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarRoot, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants, type AvatarRootProps, type AvatarRootSlots } from '.'

defineSlots<AvatarRootSlots>()

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

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
  />
</template>

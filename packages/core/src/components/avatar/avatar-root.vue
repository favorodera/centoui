<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarRoot, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { avatarVariants, provideCentouiAvatarRootContext, type AvatarRootProps } from '.'

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = avatarVariants({
    size: props.size,
  })

  return root({ class: props.class })
})

provideCentouiAvatarRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <AvatarRoot
    data-slot="avatar-root"
    :data-size="size"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </AvatarRoot>
</template>

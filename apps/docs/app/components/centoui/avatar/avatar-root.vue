<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarRoot, useForwardProps } from 'reka-ui'
import { normalizeClass, reactive, toRef } from 'vue'
import { type AvatarRootProps, avatarVariants, provideRootContext } from '.'

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const variants = avatarVariants()

provideRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <AvatarRoot
    data-slot="avatar-root"
    :data-size="size"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
      size: props.size,
    })"
  >
    <slot />
  </AvatarRoot>
</template>

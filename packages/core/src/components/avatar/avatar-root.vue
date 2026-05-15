<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarRoot, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { avatarVariants, provideCentouiAvatarRootContext, type AvatarRootProps, type AvatarRootSlots } from '.'

defineSlots<AvatarRootSlots>()

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: 'md',
  shape: 'squircle',
})
const delegatedProps = reactiveOmit(props, 'class', 'size', 'shape')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => avatarVariants({
  size: props.size,
  shape: props.shape,
}))

provideCentouiAvatarRootContext(reactive({
  styles,
  size: toRef(props, 'size'),
}))
</script>
<template>
  <AvatarRoot
    data-slot="avatar-root"
    :data-size="size"
    v-bind="forwardedProps"
    :class="styles.root({ class: props.class })"
  >
    <slot />
  </AvatarRoot>
</template>

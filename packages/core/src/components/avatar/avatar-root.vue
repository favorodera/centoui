<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarRoot, useForwardProps } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { avatarVariants, provideCentouiAvatarRootContext, type AvatarRootProps, type AvatarRootSlots } from '.'

defineSlots<AvatarRootSlots>()

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class', 'size')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => avatarVariants({
  size: props.size,
}))

provideCentouiAvatarRootContext(reactive({
  styles,
  size: toRef(props, 'size'),
}))
</script>
<template>
  <AvatarRoot
    data-centoui-slot="avatar-root"
    :data-centoui-size="size"
    v-bind="forwardedProps"
    :class="styles.root({ class: props.class })"
  >
    <slot />
  </AvatarRoot>
</template>

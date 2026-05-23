<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import {
  type AvatarGroupProps,
  avatarGroupVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<AvatarGroupProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { root } = avatarGroupVariants()
  
  return root({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="avatar-group"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

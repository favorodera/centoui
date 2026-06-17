<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type AvatarGroupProps, avatarVariants } from '.'

const props = defineProps<AvatarGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { group } = avatarVariants()

const classNames = computed(() => {
  return group({
    class: props.class,
  })
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

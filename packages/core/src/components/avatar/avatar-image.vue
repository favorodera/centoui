<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarImage, useForwardPropsEmits } from 'reka-ui'
import {
  type AvatarImageEmits,
  type AvatarImageProps,
  avatarVariants,
  injectCentouiAvatarRootContext,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiAvatarRootContext()

const emits = defineEmits<AvatarImageEmits>()

const props = defineProps<AvatarImageProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { image } = avatarVariants()
const classNames = computed(() => image({
  size: rootContext?.size,
  class: props.class,
}))
</script>

<template>
  <AvatarImage
    data-slot="avatar-image"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  />
</template>

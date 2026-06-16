<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarImage, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import {
  type AvatarImageEmits,
  type AvatarImageProps,
  avatarVariants,
  injectCentouiAvatarRootContext,
} from '.'

const emits = defineEmits<AvatarImageEmits>()

const props = defineProps<AvatarImageProps>()

const rootContext = injectCentouiAvatarRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { image } = avatarVariants()
const classNames = computed(() => image({
  class: props.class,
  size: rootContext?.size,
}))
</script>

<template>
  <AvatarImage
    data-slot="avatar-image"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  />
</template>

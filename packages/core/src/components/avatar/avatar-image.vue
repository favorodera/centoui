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

const classNames = computed(() => {
  const { image } = avatarVariants({
    size: rootContext.size,
  })
  
  return image({ class: props.class })
})
</script>

<template>
  <AvatarImage
    data-slot="avatar-image"
    :src
    v-bind="forwardedPropsEmits"
    :class="classNames"
  />
</template>

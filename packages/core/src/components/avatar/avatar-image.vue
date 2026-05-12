<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarImage, useForwardPropsEmits } from 'reka-ui'
import {
  type AvatarImageEmits,
  type AvatarImageProps,
  injectCentouiAvatarRootContext,
} from '.'

const rootContext = injectCentouiAvatarRootContext()

const emits = defineEmits<AvatarImageEmits>()

const props = defineProps<AvatarImageProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <AvatarImage
    data-centoui-slot="avatar-image"
    :src
    v-bind="forwardedPropsEmits"
    :class="rootContext.styles.image({ class: props.class })"
  />
</template>

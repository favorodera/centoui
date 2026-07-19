<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarImage, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AvatarImageEmits, type AvatarImageProps, avatarVariants, injectRootContext } from '.'

const emits = defineEmits<AvatarImageEmits>()

const props = defineProps<AvatarImageProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = avatarVariants()
</script>

<template>
  <AvatarImage
    data-slot="avatar-image"
    v-bind="forwardedPropsEmits"
    :class="variants.image({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
  />
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarImage, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants, type AvatarImageEmits, type AvatarImageProps } from '.'

defineEmits<AvatarImageEmits>()

const props = withDefaults(defineProps<AvatarImageProps>(), {
  src: '',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { image } = avatarVariants()

  return image({ class: props.class })
})
</script>

<template>
  <AvatarImage
    data-centoui-slot="avatar-image"
    :src
    v-bind="forwardedProps"
    :class="styles"
  />
</template>

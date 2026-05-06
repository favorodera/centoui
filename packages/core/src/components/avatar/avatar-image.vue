<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarImage, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants, type AvatarImageEmits, type AvatarImageProps } from '.'

const emits = defineEmits<AvatarImageEmits>()

const props = withDefaults(defineProps<AvatarImageProps>(), {
  src: '',
})

// Strip component-specific props and forward native props and emits.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

// Compute class string for the image slot.
const styles = computed(() => {
  const { image } = avatarVariants()

  return image({ class: props.class })
})
</script>

<template>
  <AvatarImage
    data-centoui-slot="avatar-image"
    :src
    v-bind="forwardedPropsEmits"
    :class="styles"
  />
</template>

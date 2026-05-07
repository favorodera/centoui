<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AvatarImage, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { avatarVariants, type AvatarImageEmits, type AvatarImageProps } from '.'

const emits = defineEmits<AvatarImageEmits>()

const props = defineProps<AvatarImageProps>()

// Forward props and emits.
const delegatedProps = reactiveOmit(props, 'class')
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

// Style class string for the component.
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

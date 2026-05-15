<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, AspectRatio } from 'reka-ui'
import { computed } from 'vue'
import { type AspectRatioProps, type AspectRatioSlots, aspectRatioVariants } from '.'

defineSlots<AspectRatioSlots>()

const props = defineProps<AspectRatioProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = aspectRatioVariants()
  return root({ class: props.class })
})
</script>

<template>
  <AspectRatio
    v-slot="slotProps"
    data-slot="aspect-ratio"
    :class="styles"
    v-bind="forwardedProps"
  >
    <slot v-bind="slotProps" />
  </AspectRatio>
</template>

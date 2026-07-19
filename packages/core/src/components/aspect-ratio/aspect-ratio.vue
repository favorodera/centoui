<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AspectRatio, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type AspectRatioProps, type AspectRatioSlots, aspectRatioVariants } from '.'

defineSlots<AspectRatioSlots>()

const props = defineProps<AspectRatioProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = aspectRatioVariants()
</script>

<template>
  <AspectRatio
    v-slot="slotProps"
    data-slot="aspect-ratio"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
    v-bind="forwardedProps"
  >
    <slot v-bind="slotProps" />
  </AspectRatio>
</template>

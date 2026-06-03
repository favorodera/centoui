<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type SlideoverFooterProps,
  slideoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<SlideoverFooterProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { footer } = slideoverVariants()
const classNames = computed(() => footer({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="slideover-footer"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

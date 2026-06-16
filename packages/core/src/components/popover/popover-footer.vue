<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverFooterProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<PopoverFooterProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { footer } = popoverVariants()
const classNames = computed(() => footer({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="popover-footer"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

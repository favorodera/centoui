<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverHeaderProps,
  popoverVariants,
} from '.'
import { computed } from 'vue'

const props = defineProps<PopoverHeaderProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { header } = popoverVariants()
const classNames = computed(() => header({ class: props.class }))
</script>

<template>
  <Primitive
    data-slot="popover-header"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

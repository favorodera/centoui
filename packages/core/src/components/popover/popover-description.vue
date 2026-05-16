<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Primitive } from 'reka-ui'
import {
  type PopoverDescriptionSlots,
  type PopoverDescriptionProps,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverDescriptionSlots>()

const props = withDefaults(defineProps<PopoverDescriptionProps>(), {
  as: 'p',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="popover-description"
    v-bind="forwardedProps"
    :class="rootContext.styles.description({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>

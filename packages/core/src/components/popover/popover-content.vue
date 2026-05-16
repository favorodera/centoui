<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PopoverContent, useForwardPropsEmits } from 'reka-ui'
import {
  type PopoverContentEmits,
  type PopoverContentProps,
  type PopoverContentSlots,
  injectCentouiPopoverRootContext,
} from '.'

const rootContext = injectCentouiPopoverRootContext()

defineSlots<PopoverContentSlots>()

const emits = defineEmits<PopoverContentEmits>()

const props = defineProps<PopoverContentProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PopoverContent
    data-slot="popover-content"
    v-bind="forwardedPropsEmits"
    :class="rootContext.styles.content({ class: props.class })"
  >
    <slot />
  </PopoverContent>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleTrigger, useForwardProps } from 'reka-ui'
import {
  injectCentouiCollapsibleContext,
  type CollapsibleTriggerProps,
  type CollapsibleTriggerSlots,
} from '.'

const rootContext = injectCentouiCollapsibleContext()

defineSlots<CollapsibleTriggerSlots>()

const props = defineProps<CollapsibleTriggerProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CollapsibleTrigger
    data-slot="collapsible-trigger"
    v-bind="forwardedProps"
    :class="rootContext.styles.trigger({ class: props.class })"
  >
    <slot />
  </CollapsibleTrigger>
</template>

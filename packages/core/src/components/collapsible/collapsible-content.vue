<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleContent, useForwardPropsEmits } from 'reka-ui'
import {
  type CollapsibleContentEmits,
  type CollapsibleContentProps,
  type CollapsibleContentSlots,
  injectCentouiCollapsibleContext,
} from '.'

const rootContext = injectCentouiCollapsibleContext()

defineSlots<CollapsibleContentSlots>()

const emits = defineEmits<CollapsibleContentEmits>()

const props = defineProps<CollapsibleContentProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CollapsibleContent
    data-slot="collapsible-content"
    v-bind="forwardedPropsEmits"
    :class="rootContext.styles.content({ class: props.class })"
  >
    <slot />
  </CollapsibleContent>
</template>

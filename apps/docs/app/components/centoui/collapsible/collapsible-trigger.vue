<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleTrigger, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CollapsibleTriggerProps,
  collapsibleVariants,
} from '.'

const props = defineProps<CollapsibleTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = collapsibleVariants()
</script>

<template>
  <CollapsibleTrigger
    data-slot="collapsible-trigger"
    v-bind="forwardedProps"
    :class="variants.trigger({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </CollapsibleTrigger>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CollapsibleRootEmits,
  type CollapsibleRootProps,
  type CollapsibleRootSlots,
  collapsibleVariants,
} from '.'

defineSlots<CollapsibleRootSlots>()

const emits = defineEmits<CollapsibleRootEmits>()

const props = defineProps<CollapsibleRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = collapsibleVariants()
</script>

<template>
  <CollapsibleRoot
    v-slot="slotProps"
    data-slot="collapsible-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot v-bind="slotProps" />
  </CollapsibleRoot>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleContent, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type CollapsibleContentEmits,
  type CollapsibleContentProps,
  collapsibleVariants,
} from '.'

const emits = defineEmits<CollapsibleContentEmits>()

const props = defineProps<CollapsibleContentProps>()

const delegatedProps = reactiveOmit(props, 'class')

// Note: emits as any is used to silence type instantiation issues
const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits as any)

const variants = collapsibleVariants()
</script>

<template>
  <CollapsibleContent
    data-slot="collapsible-content"
    v-bind="forwardedPropsEmits"
    :class="variants.content({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </CollapsibleContent>
</template>

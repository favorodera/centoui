<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CollapsibleRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, reactive } from 'vue'
import {
  collapsibleVariants,
  provideCentouiCollapsibleContext,
  type CollapsibleRootEmits,
  type CollapsibleRootProps,
  type CollapsibleRootSlots,
} from '.'

defineSlots<CollapsibleRootSlots>()

const emits = defineEmits<CollapsibleRootEmits>()

const props = defineProps<CollapsibleRootProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const styles = computed(() => collapsibleVariants())

provideCentouiCollapsibleContext(reactive({
  styles,
}))
</script>

<template>
  <CollapsibleRoot
    v-slot="slotProps"
    data-slot="collapsible-root"
    v-bind="forwardedPropsEmits"
    :class="styles.root({ class: props.class })"
  >
    <slot v-bind="slotProps" />
  </CollapsibleRoot>
</template>

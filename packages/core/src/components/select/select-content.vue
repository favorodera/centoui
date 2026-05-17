<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SelectContent, useForwardPropsEmits } from 'reka-ui'
import {
  type SelectContentEmits,
  type SelectContentProps,
  type SelectContentSlots,
  injectCentouiSelectRootContext,
} from '.'

const rootContext = injectCentouiSelectRootContext()

defineSlots<SelectContentSlots>()

const emits = defineEmits<SelectContentEmits>()

const props = defineProps<SelectContentProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SelectContent
    v-bind="forwardedPropsEmits"
    data-slot="select-content"
    :class="rootContext.styles.content({class:props.class})"
  >
    <slot />
  </SelectContent>
</template>

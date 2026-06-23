<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PinInputRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { type PinInputRootEmits, type PinInputRootProps, type PinInputRootSlots, pinInputVariants } from '.'

defineSlots<PinInputRootSlots>()

const emits = defineEmits<PinInputRootEmits>()

const props = defineProps<PinInputRootProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = pinInputVariants()

const classNames = computed(() => root({
  class: props.class,
}))
</script>

<template>
  <PinInputRoot
    v-slot="slotProps"
    data-slot="pin-input-root"
    :class="classNames"
    v-bind="forwardedPropsEmits"
  >
    <slot v-bind="slotProps" />
  </PinInputRoot>
</template>

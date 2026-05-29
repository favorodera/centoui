<script setup lang="ts">
import { computed } from 'vue'
import { PinInputRoot, useForwardPropsEmits } from 'reka-ui'
import { pinInputVariants, type PinInputRootProps, type PinInputRootEmits, type PinInputRootSlots } from '.'
import { reactiveOmit } from '@vueuse/core'

defineSlots<PinInputRootSlots>()

const emits = defineEmits<PinInputRootEmits>()

const props = defineProps<PinInputRootProps>()
const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { root } = pinInputVariants()

  return root({ class: props.class })
})
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

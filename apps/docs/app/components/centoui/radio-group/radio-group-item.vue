<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { RadioGroupIndicator, RadioGroupItem, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { injectRootContext, type RadioGroupItemEmits, type RadioGroupItemProps, radioGroupVariants } from '.'

const emits = defineEmits<RadioGroupItemEmits>()

const props = defineProps<RadioGroupItemProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = radioGroupVariants()
</script>

<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    :class="variants.item({
      class: normalizeClass(props.class),
      size: rootContext?.size,
    })"
    v-bind="forwardedPropsEmits"
  >
    <RadioGroupIndicator
      data-slot="radio-group-indicator"
      :class="variants.indicator({ size: rootContext?.size })"
    >
      <span
        data-slot="radio-group-indicator-dot"
        :class="variants.indicatorDot({ size: rootContext?.size })"
      />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>

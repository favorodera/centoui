<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { RadioGroupIndicator, RadioGroupItem, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { injectRootContext, type RadioGroupItemEmits, type RadioGroupItemProps, type RadioGroupItemSlots, radioGroupVariants } from '.'

defineSlots<RadioGroupItemSlots>()

const emits = defineEmits<RadioGroupItemEmits>()

const props = defineProps<RadioGroupItemProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { indicator, indicatorDot, item } = radioGroupVariants()

const classNames = computed(() => ({
  indicator: indicator({
    size: rootContext?.size,
  }),
  indicatorDot: indicatorDot({
    size: rootContext?.size,
  }),
  item: item({
    class: props.class,
    size: rootContext?.size,
  }),
}))
</script>

<template>
  <RadioGroupItem
    v-slot="slotProps"
    data-slot="radio-group-item"
    :class="classNames.item"
    v-bind="forwardedPropsEmits"
  >
    <RadioGroupIndicator
      data-slot="radio-group-indicator"
      :class="classNames.indicator"
    >
      <slot v-bind="slotProps">
        <span
          data-slot="radio-group-indicator-dot"
          :class="classNames.indicatorDot"
        />
      </slot>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { RadioGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { provideRootContext, type RadioGroupRootEmits, type RadioGroupRootProps, type RadioGroupRootSlots, radioGroupVariants } from '.'

defineSlots<RadioGroupRootSlots>()

const emits = defineEmits<RadioGroupRootEmits>()

const props = withDefaults(defineProps<RadioGroupRootProps>(), {
  orientation: 'vertical',
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root } = radioGroupVariants()

const classNames = computed(() => root({
  class: props.class,
  orientation: props.orientation,
  size: props.size,
}))

provideRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <RadioGroupRoot
    v-slot="slotProps"
    data-slot="radio-group-root"
    :class="classNames"
    v-bind="forwardedPropsEmits"
    :data-orientation="orientation"
    :data-size="size"
  >
    <slot v-bind="slotProps" />
  </RadioGroupRoot>
</template>

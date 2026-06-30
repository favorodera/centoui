<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import config from '#centoui/config'
import { type NumberInputEmits, type NumberInputProps, numberInputVariants } from '.'
import { Icon } from '../icon'

const emits = defineEmits<NumberInputEmits>()

const props = withDefaults(defineProps<NumberInputProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'size', 'class', 'placeholder')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { decrement, increment, input, root } = numberInputVariants()

const classNames = computed(() => ({
  decrement: decrement({
    size: props.size,
  }),
  increment: increment({
    size: props.size,
  }),
  input: input({
    size: props.size,
  }),
  root: root({
    class: props.class,
  }),
}))
</script>

<template>
  <NumberFieldRoot
    v-bind="forwardedPropsEmits"
    data-slot="number-input-root"
    :data-size="props.size"
    :class="classNames.root"
  >
    <NumberFieldDecrement
      :class="classNames.decrement"
      data-slot="number-input-decrement"
    >
      <Icon :icon="config.icons.minus" />
    </NumberFieldDecrement>

    <NumberFieldInput
      :class="classNames.input"
      data-slot="number-input-input"
      :placeholder
    />

    <NumberFieldIncrement
      :class="classNames.increment"
      data-slot="number-input-increment"
    >
      <Icon :icon="config.icons.plus" />
    </NumberFieldIncrement>
  </NumberFieldRoot>
</template>

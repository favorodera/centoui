<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import config from '#centoui/config'
import { type NumberInputEmits, type NumberInputProps, numberInputVariants } from '.'
import { Button } from '../button'
import { Icon } from '../icon'

const emits = defineEmits<NumberInputEmits>()

const props = withDefaults(defineProps<NumberInputProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'size', 'class', 'placeholder')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = numberInputVariants()
</script>

<template>
  <NumberFieldRoot
    v-bind="forwardedPropsEmits"
    data-slot="number-input-root"
    :data-size="props.size"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <NumberFieldDecrement
      :class="variants.decrement({
        size: props.size,
      })"
      data-slot="number-input-decrement"
      as-child
    >
      <Button
        variant="ghost"
        size="xs"
        data-spin-button
        :square="true"
      >
        <Icon :name="config.icons.minus" />
      </Button>
    </NumberFieldDecrement>

    <NumberFieldInput
      :class="variants.input({
        size: props.size,
      })"
      data-slot="number-input-input"
      :placeholder
    />

    <NumberFieldIncrement
      :class="variants.increment({
        size: props.size,
      })"
      data-slot="number-input-increment"
      as-child
    >
      <Button
        variant="ghost"
        data-spin-button
        size="xs"
        :square="true"
      >
        <Icon :name="config.icons.plus" />
      </Button>
    </NumberFieldIncrement>
  </NumberFieldRoot>
</template>

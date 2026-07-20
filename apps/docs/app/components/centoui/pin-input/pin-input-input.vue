<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { PinInputInput, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type PinInputInputProps, pinInputVariants } from '.'
import { inputVariants } from '../input'

const props = withDefaults(defineProps<PinInputInputProps>(), {
  size: 'md',
})

const model = defineModel<string>()

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const variants = inputVariants()
</script>

<template>
  <PinInputInput
    v-model="model"
    data-slot="pin-input-input"
    :data-size="size"
    :class="variants.root({
      class:pinInputVariants().input({
        class: normalizeClass(props.class),
      }),
      size: props.size,
    })"
    v-bind="forwardedProps"
  />
</template>

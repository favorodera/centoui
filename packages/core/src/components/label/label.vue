<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Label, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type LabelProps, labelVariants } from '.'

const props = defineProps<LabelProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { root } = labelVariants()

const classNames = computed(() => root({
  class: props.class
}))
</script>

<template>
  <Label
    data-slot="label"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Label>
</template>

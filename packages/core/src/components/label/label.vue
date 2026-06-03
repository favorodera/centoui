<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, Label } from 'reka-ui'
import { type LabelProps, labelVariants } from '.'
import { computed } from 'vue'

const props = defineProps<LabelProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const { root } = labelVariants()
const classNames = computed(() => root({ class: props.class }))
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

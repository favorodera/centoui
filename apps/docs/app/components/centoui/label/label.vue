<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Label, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type LabelProps, labelVariants } from '.'

const props = defineProps<LabelProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = labelVariants()
</script>

<template>
  <Label
    data-slot="label"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Label>
</template>

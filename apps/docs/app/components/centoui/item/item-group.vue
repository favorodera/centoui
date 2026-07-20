<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  type ItemGroupProps,
  itemVariants,
} from '.'

const props = defineProps<ItemGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = itemVariants()
</script>

<template>
  <Primitive
    data-slot="item-group"
    v-bind="forwardedProps"
    :class="variants.group({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

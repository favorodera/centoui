<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type KbdGroupProps, kbdVariants } from './index'

const props = withDefaults(defineProps<KbdGroupProps>(), {
  as: 'kbd',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = kbdVariants()
</script>

<template>
  <Primitive
    data-slot="kbd-group"
    :class="variants.group({
      class: normalizeClass(props.class),
    })"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

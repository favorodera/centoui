<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type KbdGroupProps, kbdVariants } from './index'

const props = withDefaults(defineProps<KbdGroupProps>(), {
  as: 'kbd',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { group } = kbdVariants()

const classNames = computed(() => group({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="kbd-group"
    :class="classNames"
    v-bind="forwardedProps"
  >
    <slot />
  </Primitive>
</template>

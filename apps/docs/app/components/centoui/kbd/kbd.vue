<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type KbdProps, kbdVariants } from '.'

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd',
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedProps = useForwardProps(delegatedProps)

const variants = kbdVariants()
</script>

<template>
  <Primitive
    data-slot="kbd"
    :data-size="size"
    v-bind="forwardedProps"
    :class="variants.root({
      class: normalizeClass(props.class),
      size: props.size,
    })"
  >
    <slot />
  </Primitive>
</template>

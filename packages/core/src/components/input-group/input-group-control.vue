<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type InputGroupControlProps, inputGroupVariants } from '.'

const props = withDefaults(defineProps<InputGroupControlProps>(), {
  asChild: true,
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { control } = inputGroupVariants()

const classNames = computed(() => control({
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="input-group-control"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </Primitive>
</template>

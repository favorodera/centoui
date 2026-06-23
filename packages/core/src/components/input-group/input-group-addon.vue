<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type InputGroupAddonProps, inputGroupVariants } from '.'

const props = withDefaults(defineProps<InputGroupAddonProps>(), {
  position: 'left',
})

const delegatedProps = reactiveOmit(props, 'class', 'position')

const forwardedProps = useForwardProps(delegatedProps)

const { addon } = inputGroupVariants()

const classNames = computed(() => addon({
  addonPosition: props.position,
  class: props.class,
}))
</script>

<template>
  <Primitive
    data-slot="input-group-addon"
    :data-position="props.position"
    v-bind="forwardedProps"
    :class="classNames"
    role="group"
  >
    <slot />
  </Primitive>
</template>

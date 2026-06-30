<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { injectRootContext, type InputGroupAddonProps, inputGroupVariants } from '.'

const props = withDefaults(defineProps<InputGroupAddonProps>(), {
  align: 'inline-start',
})

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class', 'align')

const forwardedProps = useForwardProps(delegatedProps)

const { addon } = inputGroupVariants()

const classNames = computed(() => addon({
  addonAlignment: props.align,
  class: props.class,
  size: rootContext?.size,
}))
</script>

<template>
  <Primitive
    data-slot="input-group-addon"
    :data-align="props.align"
    v-bind="forwardedProps"
    :class="classNames"
    role="group"
  >
    <slot />
  </Primitive>
</template>

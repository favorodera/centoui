<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type BreadcrumbItemProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  as: 'li',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = breadcrumbVariants()
</script>

<template>
  <Primitive
    data-slot="breadcrumb-item"
    v-bind="forwardedProps"
    :class="variants.item({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

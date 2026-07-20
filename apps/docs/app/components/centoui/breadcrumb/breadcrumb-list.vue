<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type BreadcrumbListProps, breadcrumbVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbListProps>(), {
  as: 'ol',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variants = breadcrumbVariants()
</script>

<template>
  <Primitive
    data-slot="breadcrumb-list"
    v-bind="forwardedProps"
    :class="variants.list({
      class: normalizeClass(props.class),
    })"
  >
    <slot />
  </Primitive>
</template>

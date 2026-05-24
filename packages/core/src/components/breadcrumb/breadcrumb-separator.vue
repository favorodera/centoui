<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { breadcrumbVariants, type BreadcrumbSeparatorProps } from '.'
import { Icon } from '../icon'
import config from '#centoui/config'

const props = defineProps<BreadcrumbSeparatorProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { separator } = breadcrumbVariants()

  return separator({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="breadcrumb-separator"
    v-bind="forwardedProps"
    :class="classNames"
    role="presentation"
    aria-hidden="true"
  >
    <slot>
      <Icon :icon="config.icons.chevronRight" />
    </slot>
  </Primitive>
</template>

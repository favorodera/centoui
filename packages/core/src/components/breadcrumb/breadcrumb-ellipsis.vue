<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { breadcrumbVariants, type BreadcrumbEllipsisProps } from '.'
import { Icon } from '@iconify/vue'
import config from '#centoui/config'

const props = defineProps<BreadcrumbEllipsisProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { ellipsis } = breadcrumbVariants()

  return ellipsis({ class: props.class })
})
</script>

<template>
  <Primitive
    data-slot="breadcrumb-ellipsis"
    v-bind="forwardedProps"
    :class="classNames"
    role="presentation"
    aria-hidden="true"
  >
    <slot>
      <Icon :icon="config.icons.ellipsis" />
    </slot>
  </Primitive>
</template>

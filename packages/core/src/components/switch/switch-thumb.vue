<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { injectCentouiSwitchRootContext, switchVariants, type SwitchThumbProps } from '.'
import { SwitchThumb, useForwardProps } from 'reka-ui'
import { computed } from 'vue'

const rootContext = injectCentouiSwitchRootContext()

const props = defineProps<SwitchThumbProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { thumb } = switchVariants({
    size: rootContext.size,
  })
  
  return thumb({ class: props.class })
})
</script>

<template>
  <SwitchThumb
    data-slot="switch-thumb"
    :data-size="rootContext.size"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot />
  </SwitchThumb>
</template>

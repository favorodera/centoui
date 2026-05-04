<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Separator, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { separatorVariants, type SeparatorProps, type SeparatorSlots } from './index'

defineSlots<SeparatorSlots>()

const props = withDefaults(defineProps<SeparatorProps>(), {
  as: 'div',
  orientation: 'horizontal',
})
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const styles = computed(() => {
  const { root } = separatorVariants({ })

  return root({ class: props.class })
})
</script>

<template>
  <Separator
    data-centoui-slot="separator"
    :data-centoui-orientation="orientation"
    v-bind="forwardedProps"
    :class="styles"
  >
    <slot />
  </Separator>
</template>

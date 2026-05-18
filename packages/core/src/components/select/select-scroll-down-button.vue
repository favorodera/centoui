<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps, SelectScrollDownButton } from 'reka-ui'
import { Icon } from '@iconify/vue'
import config from '#centoui/config'
import {
  selectVariants,
  type SelectScrollDownButtonProps,
  injectCentouiSelectRootContext,
} from '.'
import { computed } from 'vue'

const rootContext = injectCentouiSelectRootContext()

const props = defineProps<SelectScrollDownButtonProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)

const classNames = computed(() => {
  const { scrollDownButton } = selectVariants({
    size: rootContext.size,
  })
  
  return scrollDownButton({ class: props.class })
})
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot>
      <Icon :icon="config.icons.chevronDown" />
    </slot>
  </SelectScrollDownButton>
</template>

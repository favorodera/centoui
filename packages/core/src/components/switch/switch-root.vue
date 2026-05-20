<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SwitchRoot, useForwardPropsEmits } from 'reka-ui'
import { computed, reactive, toRef } from 'vue'
import { provideCentouiSwitchRootContext, switchVariants, type SwitchRootEmits, type SwitchRootProps, type SwitchRootSlots } from '.'

defineSlots<SwitchRootSlots>()

const emits = defineEmits<SwitchRootEmits>()

const props = withDefaults(defineProps<SwitchRootProps>(), {
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const classNames = computed(() => {
  const { root } = switchVariants({
    size: props.size,
  })
  
  return root({ class: props.class })
})

provideCentouiSwitchRootContext(reactive({
  size: toRef(props, 'size'),
}))
</script>

<template>
  <SwitchRoot
    v-slot="slotProps"
    :data-size="props.size"
    data-slot="switch-root"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  >
    <slot v-bind="slotProps" />
  </SwitchRoot>
</template>

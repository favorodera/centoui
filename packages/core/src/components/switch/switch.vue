<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { switchVariants, type SwitchEmits, type SwitchProps } from '.'

const emits = defineEmits<SwitchEmits>()

const props = withDefaults(defineProps<SwitchProps>(), {
  size: 'md',
})
const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const { root, thumb } = switchVariants()
const classNames = computed(() => ({
  root: root({
    size: props.size,
    class: props.class,
  }),
  thumb: thumb({
    size: props.size,
  }),
}))
</script>

<template>
  <SwitchRoot
    :data-size="props.size"
    data-slot="switch-root"
    v-bind="forwardedPropsEmits"
    :class="classNames.root"
  >
    <SwitchThumb
      data-slot="switch-thumb"
      :class="classNames.thumb"
    />
  </SwitchRoot>
</template>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type SwitchEmits, type SwitchProps, switchVariants } from '.'

const emits = defineEmits<SwitchEmits>()

const props = withDefaults(defineProps<SwitchProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = switchVariants()
</script>

<template>
  <SwitchRoot
    :data-size="props.size"
    data-slot="switch-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class: normalizeClass(props.class),
      size: props.size,
    })"
  >
    <SwitchThumb
      data-slot="switch-thumb"
      :class="variants.thumb({ size: props.size })"
    />
  </SwitchRoot>
</template>

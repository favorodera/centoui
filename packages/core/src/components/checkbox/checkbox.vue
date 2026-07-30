<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'
import { normalizeClass } from 'vue'
import { type CheckboxEmits, type CheckboxProps, checkboxVariants } from '.'
import { Icon, iconsConfig } from '../icon'

const emits = defineEmits<CheckboxEmits>()

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'md',
})

const delegatedProps = reactiveOmit(props, 'class', 'size')

const forwardedPropsEmits = useForwardPropsEmits(delegatedProps, emits)

const variants = checkboxVariants()
</script>

<template>
  <CheckboxRoot
    v-slot="slotProps"
    :data-size="props.size"
    data-slot="checkbox-root"
    v-bind="forwardedPropsEmits"
    :class="variants.root({
      class: normalizeClass(props.class),
      size: props.size,
    })"
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      :class="variants.indicator({ size: props.size })"
    >
      <Icon
        v-if="slotProps.state === 'indeterminate'"
        :name="iconsConfig.minus"
      />

      <Icon
        v-else
        :name="iconsConfig.check"
      />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

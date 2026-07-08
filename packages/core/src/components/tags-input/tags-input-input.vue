<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  TagsInputInput,
  useForwardProps,
} from 'reka-ui'
import { computed } from 'vue'
import {
  injectRootContext,
  type TagsInputInputProps,
  tagsInputVariants,
} from '.'

const props = defineProps<TagsInputInputProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardProps(delegatedProps)

const { input } = tagsInputVariants()

const classNames = computed(() => input({
  class: props.class,
  size: rootContext.size,
}))
</script>

<template>
  <TagsInputInput
    data-slot="tags-input-input"
    v-bind="forwardedPropsEmits"
    :class="classNames"
  />
</template>

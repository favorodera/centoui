<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import {
  TagsInputInput,
  useForwardProps,
} from 'reka-ui'
import { normalizeClass } from 'vue'
import {
  injectRootContext,
  type TagsInputInputProps,
  tagsInputVariants,
} from '.'

const props = defineProps<TagsInputInputProps>()

const rootContext = injectRootContext()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedPropsEmits = useForwardProps(delegatedProps)

const variants = tagsInputVariants()
</script>

<template>
  <TagsInputInput
    data-slot="tags-input-input"
    v-bind="forwardedPropsEmits"
    :class="variants.input({
      size: rootContext?.size,
      class: normalizeClass(props.class),
    })"
  />
</template>

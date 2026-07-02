<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { type FieldErrorProps, fieldVariants } from '.'

const props = defineProps<FieldErrorProps>()

const delegatedProps = reactiveOmit(props, 'class', 'errors')

const forwardedProps = useForwardProps(delegatedProps)

const { error } = fieldVariants()

const classNames = computed(() => error({
  class: props.class,
}))

/**
 * Type guard to check if a value is a non-empty string.
 * @param value The value to check.
 * @returns True if the value is a non-empty string.
 */
function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Extracts a non-empty error message from a string or error object.
 * @param errorEntry The error entry to resolve.
 * @returns The resolved error message or undefined.
 */
function resolveErrorMessage(errorEntry: string | undefined | { message?: string }): string | undefined {
  const rawMessage = typeof errorEntry === 'string' ? errorEntry : errorEntry?.message

  return isNonEmptyString(rawMessage) ? rawMessage.trim() : undefined
}

/**
 * Normalizes `props.errors` into a format suitable for rendering.
 * Resolves to a single string, an array of unique strings, or undefined.
 */
const resolvedErrors = computed<string | string[] | undefined>(() => {
  const errors = props.errors

  if (!errors) return

  if (typeof errors === 'string') {
    return isNonEmptyString(errors) ? errors.trim() : undefined
  }

  const resolvedMessages = errors
    .map(errorEntry => resolveErrorMessage(errorEntry))
    .filter(isNonEmptyString)

  // Collapse repeated messages while keeping first-seen order.
  const uniqueMessages = [...new Set(resolvedMessages)]

  if (uniqueMessages.length === 0) return
  if (uniqueMessages.length === 1) return uniqueMessages[0]

  return uniqueMessages
})
</script>

<!-- eslint-disable-next-line vue/no-root-v-if -->
<template>
  <Primitive
    v-if="$slots.default || resolvedErrors"
    data-slot="field-error"
    role="alert"
    v-bind="forwardedProps"
    :class="classNames"
  >
    <slot v-if="$slots.default" />

    <template v-else-if="typeof resolvedErrors === 'string'">
      {{ resolvedErrors }}
    </template>

    <ul
      v-else
    >
      <li
        v-for="errorMessage in resolvedErrors"
        :key="errorMessage"
      >
        {{ errorMessage }}
      </li>
    </ul>
  </Primitive>
</template>

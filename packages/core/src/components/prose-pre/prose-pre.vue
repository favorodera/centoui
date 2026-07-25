<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { normalizeClass, useTemplateRef } from 'vue'
import config from '#centoui/config'
import { type ProsePreProps, prosePreVariants } from '.'
import { Button } from '../button'
import { Icon } from '../icon'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ProsePreProps>(), {
  copy: true,
  highlights: () => [],
})

const prosePreCodeRef = useTemplateRef('prosePreCodeRef')

const { copied, copy: copyToClipboard } = useClipboard({
  legacy: true,
})

/** Copies the code to the clipboard. */
function copyCode() {
  const code = props.code ?? prosePreCodeRef.value?.textContent ?? ''

  copyToClipboard(code)
}

const variants = prosePreVariants()
</script>

<template>
  <figure
    :data-lang="props.language"
    data-slot="prose-pre-root"
    :class="variants.root({

    })"
  >
    <Button
      v-if="props.copy"
      variant="ghost"
      :square="true"
      size="sm"
      aria-label="Copy code to clipboard"
      :class="variants.copy({
        copy:props.copy
      })"
      @click="copyCode"
    >
      <icon :name="copied ?config.icons.copyCheck :config.icons.copy " />
    </Button>

    <pre
      ref="prosePreCodeRef"
      data-slot="prose-pre-code"
      v-bind="$attrs"
      :class="variants.code({
        class: normalizeClass(props.class)
      })"
    ><slot />
  </pre>
  </figure>
</template>

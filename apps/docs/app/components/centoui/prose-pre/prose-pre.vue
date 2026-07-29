<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { normalizeClass, useTemplateRef } from 'vue'
import config from '#centoui/config'
import { type ProsePreProps, prosePreVariants } from '.'
import { Button } from '../button'
import { Icon } from '../icon'
import { ProseCodeIcon } from '../prose-code-icon'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ProsePreProps>(), {
  copy: true,
  highlights: () => [],
  language: 'plaintext',
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
    :class="variants.root()"
  >
    <figcaption
      v-if="props.filename"
      data-slot="prose-pre-header"
      :class="variants.header()"
    >
      <ProseCodeIcon
        data-slot="prose-pre-header-icon"
        :filename="props.filename"
        :icon="props.icon"
      />

      <span>{{ props.filename }}</span>
    </figcaption>

    <Button
      v-if="props.copy"
      variant="outline"
      :square="true"
      size="sm"
      :aria-label="copied ? 'Code copied successfully!' : 'Copy code to clipboard'"
      :class="variants.copy({
        copy:props.copy
      })"
      @click="copyCode"
    >
      <icon :name="copied ? config.icons.check : config.icons.clipboard " />
    </Button>

    <pre
      ref="prosePreCodeRef"
      data-slot="prose-pre-code"
      data-not-prose="true"
      v-bind="$attrs"
      :class="variants.code({
        class: normalizeClass(props.class)
      })"
    ><slot /></pre>
  </figure>
</template>

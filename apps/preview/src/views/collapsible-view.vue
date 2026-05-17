<script setup lang="ts">
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from '#centoui/components/collapsible'
import { Button } from '#centoui/components/button'
import { Icon } from '@iconify/vue'
import ViewContainer from '@/components/view-container.vue'
import { usePreview } from '@/composables/use-preview'
import { ref } from 'vue'

usePreview('Collapsible', {})

const open = ref(false)
</script>

<template>
  <ViewContainer>
    <CollapsibleRoot
      v-model:open="open"
      class="flex w-full max-w-xl flex-col gap-2"
    >

      <div class="flex items-center justify-between gap-4">

        <h4 class="text-sm font-semibold">
          @favorodera starred 3 repositories
        </h4>
        
        <CollapsibleTrigger as-child>
          <Button
            variant="ghost"
            square
            size="sm"
            aria-label="Toggle"
          >
            <Icon :icon="open ?'lucide:x': 'lucide:chevrons-up-down'" />
          </Button>
        </CollapsibleTrigger>

      </div>

      <div class="rounded-lg border border-border px-4 py-2 font-mono text-sm">
        notform
      </div>

      <CollapsibleContent class="flex flex-col gap-2">

        <div class="rounded-lg border border-border px-4 py-2 font-mono text-sm">
          notform-nuxt
        </div>
        
        <div class="rounded-lg border border-border px-4 py-2 font-mono text-sm">
          centoui
        </div>

      </CollapsibleContent>

    </CollapsibleRoot>
  </ViewContainer>
</template>

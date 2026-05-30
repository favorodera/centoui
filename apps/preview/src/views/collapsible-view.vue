<script setup lang="ts">
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from '#centoui/components/collapsible'
import { Icon } from '#centoui/components/icon'
import ViewContainer from '@/components/view-container.vue'
import { useApp } from '@/composables/use-app'
import { ref } from 'vue'

useApp().preview.initPreview('Collapsible', {})

const open = ref(false)
</script>

<template>
  <ViewContainer>
    <CollapsibleRoot
      v-model:open="open"
      class="w-full max-w-xl rounded-xl border border-border"
    >
    
      <CollapsibleTrigger
        class="flex w-full items-center justify-between p-4 text-left"
      >
        <div>
          <div class="font-medium">
            Account Security
          </div>

          <div class="text-sm text-muted-foreground">
            Last reviewed 2 days ago
          </div>
        </div>

        <Icon
          icon="lucide:chevron-down"
          :class="[
            'transition-transform duration-300',
            open && 'rotate-180'
          ]"
        />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div class="border-t border-border p-4">
          <p class="mb-4 text-sm text-muted-foreground">
            Two-factor authentication is enabled for your account.
          </p>

          <ul class="space-y-2 text-sm">
            <li
              v-for="value in [
                'Authenticator app connected',
                'Recovery codes generated',
                '3 trusted devices active'
              ]"
              :key="value"
              class="flex items-center gap-2"
            >
              <Icon
                icon="lucide:check"
                class="shrink-0 text-success"
              /> {{ value }}
            </li>
          </ul>
          
        </div>
      </CollapsibleContent>

    </CollapsibleRoot>
  </ViewContainer>
</template>

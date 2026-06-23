<script setup lang="ts">
import { ref } from 'vue'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from '#centoui/components/collapsible'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

useStory('Collapsible', {})

const open = ref(false)
</script>

<template>
  <CollapsibleRoot
    v-model:open="open"
    class="inline-full max-inline-xl rounded-md border border-border"
  >
    <CollapsibleTrigger
      class="
        flex inline-full items-center justify-between p-3 font-medium text-sm
      "
    >
      Account Security

      <Icon
        icon="lucide:chevron-down"
        class="transition-transform"
        :class="{
          'rotate-180 duration-200 ease-out': open,
          'duration-150 ease-in': !open
        }"
      />
    </CollapsibleTrigger>

    <CollapsibleContent>
      <div class="border-bs border-border p-4">
        <p class="mbe-4 text-sm text-muted-foreground">
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
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Badge } from '#centoui/components/badge'
import { Button } from '#centoui/components/button'
import { ButtonGroup } from '#centoui/components/button-group'
import {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxRoot,
} from '#centoui/components/combobox'
import { Icon } from '#centoui/components/icon'

import { Separator } from '#centoui/components/separator'
import { useApp } from '@/composables/use-app'

const { colorMode, models, navigation, story } = useApp()
const route = useRoute()
</script>

<template>
  <header
    class="
      flex block-11 inline-full items-center justify-between gap-4 border-be
      border-border bg-background px-3
    "
  >
    <!-- Component Selector -->
    <ComboboxRoot
      open-on-click
      size="sm"
      :model-value="route.path"
      @update:model-value="(value)=>navigation.goTo(value as string)"
    >
      <ComboboxInput
        id="components"
        data-slot="input-group-control"
        placeholder="Select a component"
        :display-value="(value)=> navigation.components.value.find((component)=>component.path === value)?.label || ''"
      />

      <ComboboxContent class="max-block-[50dvh]">
        <ComboboxEmpty />

        <ComboboxGroup>
          <ComboboxItem
            v-for="component in navigation.components.value"
            :key="component.path"
            :value="component.path"
          >
            {{ component.label }}
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxContent>
    </ComboboxRoot>

    <div class="flex items-center gap-2">
      <!-- Count Badge -->
      <Badge variant="secondary">
        {{ navigation.activeComponentIndex.value + 1 }} / {{ navigation.components.value.length }}
      </Badge>

      <Separator
        orientation="vertical"
      />

      <!-- Navigation Buttons -->
      <ButtonGroup>
        <Button
          size="xs"
          variant="secondary"
          square
          aria-label="Previous component"
          :disabled="!navigation.canGoPrev"
          @click="navigation.goPrev"
        >
          <Icon icon="lucide:chevron-left" />
        </Button>

        <Separator orientation="vertical" />

        <Button
          size="xs"
          variant="secondary"
          square
          aria-label="Next component"
          :disabled="!navigation.canGoNext"
          @click="navigation.goNext"
        >
          <Icon icon="lucide:chevron-right" />
        </Button>
      </ButtonGroup>

      <Separator
        orientation="vertical"
      />

      <!-- Actions -->
      <div class="flex shrink-0 items-center gap-2">
        <!-- Color Mode Toggle -->
        <Button
          size="xs"
          variant="outline"
          square
          aria-label="Toggle dark mode"
          @click="colorMode.toggleColorMode()"
        >
          <Icon :icon="colorMode.isDarkMode ? 'lucide:sun' : 'lucide:moon'" />
        </Button>

        <!-- Props Panel Toggle -->
        <Button
          v-if="story.hasProps"
          size="xs"
          variant="outline"
          square
          aria-label="Toggle props panel"
          class="md:hidden"
          @click="models.controlPanelModel.value = !models.controlPanelModel.value"
        >
          <Icon :icon="models.controlPanelModel.value ? 'lucide:panel-right-close' : 'lucide:panel-right-open'" />
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '#centoui/components/select'
import {
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  PopoverBody,
} from '#centoui/components/popover'
import { Badge } from '#centoui/components/badge'
import { Separator } from '#centoui/components/separator'
import { ButtonGroup } from '#centoui/components/button-group'
import { Button } from '#centoui/components/button'
import { Icon } from '#centoui/components/icon'
import { useApp } from '@/composables/use-app'
import { watch } from 'vue'
import { Textarea } from '#centoui/components/textarea'

const { navigation, colorMode, models, theme, preview } = useApp()
const route = useRoute()

watch(
  () => theme.customTheme.value,
  (value) => {
    if (value.trim() === theme.rawDefaultTheme.trim()) {
      document.getElementById(theme.customThemeStyleId)?.remove()
      return
    }

    let tag = document.getElementById(theme.customThemeStyleId)

    if (!tag) {
      tag = document.createElement('style')
      tag.id = theme.customThemeStyleId
      document.head.appendChild(tag)
    }

    tag.textContent = value
  },
  { immediate: true },
)
</script>

<template>
  <header
    class="
      flex h-11 w-full items-center justify-between gap-4 border-b border-border
      bg-background p-3
    "
  >

    <!-- Component Selector -->
    <SelectRoot
      :model-value="route.path"
      @update:model-value="(value)=>navigation.goTo(value as string)"
    >
      <SelectTrigger
        class="max-w-3xs"
        size="sm"
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="component in navigation.components.value"
            :key="component.path"
            :value="component.path"
          >
            {{ component.label }}

          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>

    <div class="flex h-full items-center gap-2">
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

        <!-- Theme Editor -->
        <PopoverRoot v-model:open="models.themePopoverModel.value">
          <PopoverTrigger as-child>
            <Button
              size="xs"
              variant="outline"
              square
              aria-label="Edit theme"
              :class="theme.hasCustomTheme.value && 'border-warning'"
            >
              <Icon icon="lucide:swatch-book" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            align="end"
            :side-offset="5"
          >

            <PopoverHeader>
              <PopoverTitle>Theme</PopoverTitle>
              <PopoverDescription>
                Edit theme settings and preview changes.
              </PopoverDescription>
            </PopoverHeader>

            <PopoverBody>
              <Textarea
                v-model:value="theme.customTheme.value"
                spellcheck="false"
                placeholder="Enter CSS theme"
                class="max-h-40"
              />
            </PopoverBody>

            <PopoverFooter>
              <ButtonGroup class="w-full">
                <Button
                  v-if="theme.hasCustomTheme"
                  size="xs"
                  variant="error"
                  class="flex-1"
                  @click="theme.resetTheme"
                >
                  <Icon
                    icon="lucide:rotate-ccw"
                  />
                  Reset
                </Button>

                <Separator orientation="vertical" />

                <Button
                  size="xs"
                  variant="secondary"
                  class="flex-1"
                  @click="theme.copyTheme"
                >
                  <Icon
                    :icon="theme.isThemeCopied.value ? 'lucide:check' : 'lucide:copy'"
                  />
                  {{ theme.isThemeCopied.value ? 'Copied' : 'Copy theme' }}
                </Button>
              </ButtonGroup>
            </PopoverFooter>

          </PopoverContent>
        </PopoverRoot>

        <!-- Props Panel Toggle -->
        <Button
          v-if="preview.hasProps"
          size="xs"
          variant="outline"
          square
          aria-label="Toggle props panel"
          class="md:hidden"
          @click="models.propsPanelModel.value = !models.propsPanelModel.value"
        >
          <Icon :icon="models.propsPanelModel.value ? 'lucide:panel-right-close' : 'lucide:panel-right-open'" />
        </Button>
      </div>
      
    </div>

  </header>
</template>

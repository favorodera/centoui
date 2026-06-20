<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { Badge } from '#centoui/components/badge'
import { Button } from '#centoui/components/button'
import { ButtonGroup } from '#centoui/components/button-group'
import { Icon } from '#centoui/components/icon'
import {
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTrigger,
} from '#centoui/components/popover'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '#centoui/components/select'
import { Separator } from '#centoui/components/separator'
import { Textarea } from '#centoui/components/textarea'
import { useApp } from '@/composables/use-app'

const { colorMode, models, navigation, story, theme } = useApp()
const route = useRoute()

watch(
  () => theme.customTheme.value,
  (value) => {
    if (value.trim() === theme.rawDefaultTheme.trim()) {
      document.querySelector(`#${theme.customThemeStyleId}`)?.remove()
      return
    }

    let tag = document.querySelector(`#${theme.customThemeStyleId}`)

    if (!tag) {
      tag = document.createElement('style')
      tag.id = theme.customThemeStyleId
      document.head.append(tag)
    }

    tag.textContent = value
  },
  { immediate: true },
)
</script>

<template>
  <header
    class="
      flex block-11 inline-full items-center justify-between gap-4 border-be
      border-border bg-background px-3
    "
  >
    <!-- Component Selector -->
    <SelectRoot
      :model-value="route.path"
      @update:model-value="(value)=>navigation.goTo(value as string)"
    >
      <SelectTrigger
        class="max-inline-3xs"
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

    <div class="flex items-center gap-2">
      <!-- Count Badge -->
      <Badge color="neutral">
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
              <p class="font-medium">
                Theme
              </p>

              <p class="text-muted-foreground">
                Edit theme settings and preview changes.
              </p>
            </PopoverHeader>

            <Textarea
              v-model:value="theme.customTheme.value"
              spellcheck="false"
              placeholder="Enter CSS theme"
              class="max-block-40"
            />

            <PopoverFooter>
              <ButtonGroup class="inline-full">
                <Button
                  v-if="theme.hasCustomTheme"
                  size="sm"
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
                  size="sm"
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

<script setup lang="ts">
import { watch } from 'vue'
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
import { Field } from '#centoui/components/field'
import { Icon } from '#centoui/components/icon'
import { InputGroupAddon } from '#centoui/components/input-group'
import { Label } from '#centoui/components/label'
import {
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverRoot,
  PopoverTitle,
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

const { colorMode, models, navigation, theme } = useApp()
const route = useRoute()

const colorModeOptions = [
  { icon: 'lucide:sun', label: 'Light', value: 'light' },
  { icon: 'lucide:moon', label: 'Dark', value: 'dark' },
]

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
      flex inline-full items-center justify-between gap-4 border-be
      border-border bg-background px-4 py-3
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
      >
        <InputGroupAddon align="inline-start">
          <Badge
            variant="secondary"
            size="sm"
            class="-ms-1"
          >
            {{ navigation.components.value.length }}
          </Badge>
        </InputGroupAddon>
      </ComboboxInput>

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
      <!-- Navigation Buttons -->
      <ButtonGroup>
        <Button
          size="sm"
          variant="secondary"
          square
          aria-label="Previous component"
          :disabled="!navigation.canGoPrev"
          @click="navigation.goPrev"
        >
          <Icon name="lucide:chevron-left" />
        </Button>

        <Separator orientation="vertical" />

        <Button
          size="sm"
          variant="secondary"
          square
          aria-label="Next component"
          :disabled="!navigation.canGoNext"
          @click="navigation.goNext"
        >
          <Icon name="lucide:chevron-right" />
        </Button>
      </ButtonGroup>

      <Separator
        orientation="vertical"
      />

      <!-- Theme & Appearance Editor -->
      <PopoverRoot v-model:open="models.themePopoverModel.value">
        <PopoverTrigger as-child>
          <Button
            size="sm"
            variant="outline"
            square
            aria-label="Edit theme"
          >
            <Icon name="lucide:swatch-book" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="end"
        >
          <PopoverHeader>
            <PopoverTitle>
              Theme
            </PopoverTitle>

            <PopoverDescription>
              Edit theme and color-mode settings and preview changes.
            </PopoverDescription>
          </PopoverHeader>

          <Separator class="-mx-4" />

          <!-- Color Mode Select -->
          <Field orientation="auto">
            <Label for="color-mode">
              Color Mode
            </Label>

            <SelectRoot
              :model-value="colorMode.isDarkMode.value ? 'dark' : 'light'"
              @update:model-value="(value) => colorMode.isDarkMode.value = value === 'dark'"
            >
              <SelectTrigger id="color-mode">
                <SelectValue placeholder="Select color mode" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="option in colorModeOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </SelectRoot>
          </Field>

          <!-- Custom Theme CSS -->
          <Field>
            <Label for="custom-theme">
              Custom Theme
            </Label>

            <Textarea
              id="custom-theme"
              v-model="theme.customTheme.value"
              spellcheck="false"
              placeholder="Enter CSS theme"
              class="max-block-40"
              data-input-group-control
            />

            <ButtonGroup class="inline-full">
              <Button
                v-if="theme.hasCustomTheme"
                variant="error"
                class="flex-1"
                @click="theme.resetTheme"
              >
                <Icon
                  name="lucide:rotate-ccw"
                />
                Reset
              </Button>

              <Separator orientation="vertical" />

              <Button
                variant="secondary"
                class="flex-1"
                @click="theme.copyTheme"
              >
                <Icon
                  :name="theme.isThemeCopied.value ? 'lucide:check' : 'lucide:copy'"
                />
                {{ theme.isThemeCopied.value ? 'Copied' : 'Copy theme' }}
              </Button>
            </ButtonGroup>
          </Field>
        </PopoverContent>
      </PopoverRoot>
    </div>
  </header>
</template>

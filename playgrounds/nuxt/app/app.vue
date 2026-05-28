<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="grid min-h-dvh w-full place-items-center p-4 grid-rows-[auto_1fr] grid-cols-1">

    <header
      class="
          flex w-full items-center justify-end
        "
    >
      <Button
        variant="outline"
        square
        aria-label="Toggle dark mode"
        @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
      >
        <Icon :icon="colorMode.preference === 'dark' ? 'lucide:sun' : 'lucide:moon'" />
      </Button>
    </header>


    <div class="size-full flex items-center justify-center gap-8 flex-wrap">
      <Button>Hello</Button>

      <SelectRoot>
        <SelectTrigger
          class="max-w-3xs"
        >
          <SelectValue placeholder="Select a fruit..." />
          <SelectIcon />
        </SelectTrigger>
      
        <SelectPortal>
          <SelectContent :side-offset="5">
            <SelectScrollUpButton />
      
            <SelectViewport>
      
              <SelectGroup>
                <SelectItem
                  v-for="(fruit, index) in ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']"
                  :key="index"
                  :value="fruit"
                >
                  <SelectItemText>
                    {{ fruit }}
                  </SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              </SelectGroup>
      
            </SelectViewport>
      
            <SelectScrollDownButton />
      
            <SelectArrow />
      
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    </div>

  </div>
</template>

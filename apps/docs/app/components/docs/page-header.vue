<script setup lang="ts">
defineProps<{
  description: string
  title: string
}>()
</script>

<template>
  <div class="flex gap-4 justify-between items-start">
    <div>
      <ProseH1>
        {{ title }}
      </ProseH1>

      <ProseP
        class="
          text-muted-foreground

          md:max-inline-[80%]
        "
      >
        {{ description }}
      </ProseP>
    </div>

    <Button
      variant="secondary"
      size="sm"
      class="mbs-(--typeset-flow)"
    >
      <Icon name="lucide:copy" />
      Copy Page
    </Button>
  </div>
</template>

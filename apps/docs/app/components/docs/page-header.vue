<script setup lang="ts">
defineProps<{
  description: string
  title: string
}>()
</script>

<template>
  <div class="flex flex-wrap gap-4 justify-between items-start">
    <div class="md:max-inline-8/10">
      <ProseH1 class="mbs-0">
        {{ title }}
      </ProseH1>

      <ProseP
        class="text-muted-foreground"
      >
        {{ description }}
      </ProseP>
    </div>

    <Button
      variant="secondary"
      size="sm"
    >
      <Icon name="lucide:copy" />
      Copy Page
    </Button>
  </div>
</template>

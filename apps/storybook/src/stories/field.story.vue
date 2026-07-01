<script setup lang="ts">
import { FieldLegend, FieldSet } from '#centoui/components/field'
import { useStory } from '@/composables/use-story'

useStory('Field', {})
</script>

<template>
  <FieldSet>
    <FieldLegend>Address Information</FieldLegend>
  </FieldSet>
</template>

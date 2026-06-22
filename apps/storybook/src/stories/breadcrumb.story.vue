<script setup lang="ts">
import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '#centoui/components/breadcrumb'
import { Icon } from '#centoui/components/icon'
import { useStory } from '@/composables/use-story'

useStory('Breadcrumb', {})
</script>

<template>
  <BreadcrumbRoot>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon
            icon="lucide:folder-open"
            class="text-warning"
          />
          centoui
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon
            icon="lucide:folder-open"
            class="text-warning"
          />
          breadcrumb
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbPage>
          <Icon
            icon="lucide:file-code"
            class="text-info"
          />
          index.ts
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </BreadcrumbRoot>
</template>

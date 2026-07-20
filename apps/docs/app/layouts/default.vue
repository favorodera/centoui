<template>
  <div
    class="
      max-inline-2xl mx-auto px-6 grid grid-rows-[auto_1fr_auto] min-block-full
      inline-full relative

      sm:px-8
    "
  >
    <header

      class="bg-background sticky inset-bs-0 z-50"
    >
      <!-- Nav -->
    </header>

    <main
      id="main"
      tabindex="-1"
      class="outline-none"
    >
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <slot />
    </main>
  </div>
</template>

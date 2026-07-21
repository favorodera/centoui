<template>
  <div class="block-full inline-full grid grid-cols-10">
    <aside class="col-span-2" />

    <main
      id="main"
      tabindex="-1"
      class="outline-none block-full inline-full col-span-8"
    >
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <slot />
    </main>
  </div>
</template>

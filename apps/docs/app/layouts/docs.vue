<template>
  <div
    class="
      block-full inline-full grid grid-cols-1 typeset typeset-docs

      lg:grid-cols-[auto_1fr]
    "
  >
    <aside
      class="
        min-inline-2xs

        max-lg:hidden
      "
    />

    <main
      id="main"
      tabindex="-1"
      class="outline-none block-full inline-full"
    >
      <slot />
    </main>
  </div>
</template>

<div align="center">
  <h1>centoui-nuxt</h1>
  <p><strong>CentoUI, seamlessly integrated with Nuxt.</strong></p>
  <p>
    <a href="https://npmx.dev/package/centoui-nuxt" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/centoui-nuxt.svg?style=plastic&label=NPM%20Version&color=blue" alt="NPM Version"></a>
    <a href="https://npmx.dev/package/centoui-nuxt" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dw/centoui-nuxt.svg?style=plastic&label=NPM%20Downloads&color=blue" alt="NPM Downloads"></a>
    <a href="https://npmx.dev/package/centoui-nuxt" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/unpacked-size/centoui-nuxt?style=plastic&label=NPM%20Unpacked%20Size" alt="NPM Unpacked Size"></a>
  </p>
</div>

<br>

`centoui-nuxt` is the official Nuxt module for [CentoUI](../core). It auto-registers every CentoUI component in your project so you can use them in templates without manual imports.

## Installation

```bash
pnpm add centoui
pnpm add -D centoui-nuxt
```

## Setup

Add `centoui-nuxt` to the `modules` section of your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    'centoui-nuxt'
  ],
  centoui: {
    // Optional: prefix all component names
    prefix: "Cento",
  }
})
```

That's it — all components from your `centoui.config.ts` component directory are now globally available.

## What the Module Does

1. **Reads your `centoui.config.ts`** — Picks up `componentsDir` to know where your CentoUI components live.
2. **Auto-registers every `.vue` file** — Scans component group folders (e.g., `button/`, `select/`) and registers each `.vue` file as a global Nuxt component.
3. **Converts names to PascalCase** — A file named `alert-root.vue` becomes `AlertRoot` (or `CentoAlertRoot` with `prefix: "Cento"`).
4. **Exposes config at `#centoui/config`** — Your resolved `centoui.config.ts` is available as a Nuxt template import for runtime access.
5. **Pre-bundles dependencies** — Adds `@vueuse/core`, `reka-ui`, `tailwind-variants`, and `@iconify/vue` to Vite's `optimizeDeps` for faster dev startup.

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prefix` | `string` | `""` | Prepended to every registered component name in PascalCase. `"Cento"` turns `Button` into `CentoButton`. |

## Prerequisites

Before using this module, you need a CentoUI project initialized with the CLI:

```bash
pnpm dlx centoui init
pnpm dlx centoui add button accordion
```

The module reads from the component directory created by `centoui init`. Without it, there are no components to register.

## License

[MIT](../../LICENSE) &copy; [Favour Emeka](https://github.com/favorodera)

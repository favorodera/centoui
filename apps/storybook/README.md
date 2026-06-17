<div align="center">
  <h1>centoui-preview</h1>
  <p><strong>Visual development environment for CentoUI components.</strong></p>
</div>

<br>

The preview app is a Vite-powered playground for developing and inspecting CentoUI components in isolation. It live-links to the `centoui` core package in this monorepo, so every saved change is reflected instantly.

## Tech Stack

- **Vite** — Fast HMR for component development
- **Vue 3** + **Vue Router** — SPA with route-per-component views
- **Pinia** — State management for preview-specific UI state
- **Tailwind CSS v4** — Same styling engine used by CentoUI components
- **CentoUI** — Linked via `workspace:*` for real-time development

## Development

From the monorepo root:

```bash
# Start the preview app on http://localhost:5173
pnpm --filter preview dev
```

Or from this directory:

```bash
pnpm dev
```

## Build

```bash
# Production build
pnpm build

# Preview the production build locally
pnpm preview
```

## License

[MIT](../../LICENSE) &copy; [Favour Emeka](https://github.com/favorodera)

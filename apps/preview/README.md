# centoui-preview

**Component Viewer for CentoUI.**

This is a Vite-based preview app for [CentoUI](../../packages/core) components. Use it to view, inspect, and preview components directly, similar to Histoire or Storybook.

## Features

- **Vite 6:** Fast HMR for component development.
- **Tailwind CSS v4:** Directly uses the same styling engine as CentoUI.
- **Component Development:** Live-link to `centoui` package (monorepo).
- **TypeScript:** Full type support for component development.

## Development

```bash
# Install dependencies
pnpm install

# Start the preview app on http://localhost:5173
pnpm dev
```

## Production

```bash
# Build the preview app for production
pnpm build

# Preview the production build
pnpm preview
```

## CLI Usage

The preview app is pre-configured with a local CentoUI CLI command for development testing:

```bash
# Run the local CentoUI CLI in the preview app
pnpm centoui init
```

## License

[MIT](../../LICENSE) &copy; [Favour Emeka](https://github.com/favorodera)

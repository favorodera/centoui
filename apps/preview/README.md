# centoui-preview

**Component Viewer for CentoUI.**

This is a Vite-based preview app for [CentoUI](https://github.com/favorodera/centoui) components. Use it to view, inspect, and preview components directly, similar to Histoire or Storybook.

## Features

- **Vite 6:** Fast HMR for component development.
- **Tailwind CSS v4:** Directly uses the same styling engine as CentoUI.
- **Component Development:** Live-link to `centoui` package (monorepo).
- **TypeScript:** Full type support for component development.

## Setup

```bash
# Install dependencies
pnpm install
```

## Development

```bash
# Start the sandbox on http://localhost:5173
pnpm dev
```

## Production

```bash
# Build the sandbox for production
pnpm build

# Preview the production build
pnpm preview
```

## CLI Usage

The sandbox is pre-configured with a local CentoUI CLI command for development testing:

```bash
# Run the local CentoUI CLI in the sandbox
pnpm centoui init
```

## License

[MIT](../../LICENSE) &copy; [Favour Emeka](https://github.com/favorodera)

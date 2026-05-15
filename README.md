# CentoUI

[![license](https://img.shields.io/github/license/favorodera/centoui.svg?style=plastic)](https://github.com/favorodera/centoui/blob/main/LICENSE)
[![github stars](https://img.shields.io/github/stars/favorodera/centoui.svg?style=plastic)](https://github.com/favorodera/centoui/stargazers)
[![documentation](https://img.shields.io/badge/-documentation-green?style=plastic)](https://centoui.vercel.app/)
[![centoui core](https://img.shields.io/badge/core-%234FC08D?style=plastic&logo=vuedotjs)](./packages/core)
[![centoui cli](https://img.shields.io/badge/cli-%234FC08D?style=plastic&logo=typescript)](./packages/cli)
[![nuxt module](https://img.shields.io/badge/nuxt_module-%234FC08D?style=plastic&logo=nuxt)](./packages/nuxt)

**Vue components for modern interfaces**

CentoUI is a Vue component library designed for modern web applications. It provides a comprehensive set of accessible, customizable components built with Vue 3, RekaUI, TypeScript, and Tailwind CSS.

## Documentation

Full documentation and examples can be found at:
**[centoui.vercel.app](https://centoui.vercel.app/)**

## Features

- **Component-driven:** Copy components directly into your project — you own every line.
- **Zero configuration:** One CSS file controls the entire theme.
- **Type-safe:** Built with TypeScript from the ground up.
- **CLI-powered:** Add components instantly with the CentoUI CLI.
- **Nuxt Support:** Official Nuxt module for a first-class Nuxt experience.

## Project Structure

This is a monorepo managed with `pnpm` and `turbo`.

- [`packages/core`](./packages/core): Vue components and CSS (centoui).
- [`packages/cli`](./packages/cli): CLI tool for component management (centoui-cli).
- [`packages/nuxt`](./packages/nuxt): Official Nuxt module (centoui-nuxt).
- [`apps/docs`](./apps/docs): Documentation site built with Nuxt Content.
- [`apps/preview`](./apps/preview): Component viewer and playground.
- [`apps/sandbox`](./apps/sandbox): Vite dev playground.

## Development

### Prerequisites

- [pnpm](https://pnpm.io/installation) (v10 or later)
- Node.js (v22 or later)

### Setup

```bash
# Install dependencies
pnpm install

# Start development in watch mode
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test
```

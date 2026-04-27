# CentoUI

[![license](https://img.shields.io/github/license/favorodera/centoui.svg?style=flat-square)](https://github.com/favorodera/centoui/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/centoui.svg?style=flat-square)](https://www.npmjs.com/package/centoui)
[![github stars](https://img.shields.io/github/stars/favorodera/centoui.svg?style=flat-square)](https://github.com/favorodera/centoui/stargazers)

---

## What is CentoUI

CentoUI is a Vue component library built like a blade — every component is sharp, every prop intentional. No translation layer, no fighting the library to get a variant it didn't anticipate.

Components are copied into your project — you own every line. One CSS file controls the entire theme.

- [Documentation](https://centoui.vercel.app/)

---

## Quick Start

### Initialize CentoUI in your project

```bash
pnpm dlx centoui@latest init
```

### Add a component
```bash
pnpm dlx centoui@latest add button
```

---

## Monorepo Structure

```
centoui/
├── packages/
│   ├── core/       ← Vue components + CSS  (centoui)
│   ├── cli/        ← CLI tool              (centoui-cli)
│   └── nuxt/       ← Nuxt module           (centoui-nuxt)
├── apps/
│   ├── docs/       ← Nuxt Content documentation site
│   ├── preview/    ← Component viewer
│   └── sandbox/    ← Vite dev playground
```

---

## Development

**Prerequisites:** Node.js v22+, pnpm v10+

```bash
pnpm dev        # start all packages/apps in watch mode
pnpm build      # build all packages
pnpm lint       # lint all
pnpm typecheck  # type-check all
pnpm test       # run all tests
pnpm ready      # full pre-publish gate: install → lint → typecheck → build → test
```
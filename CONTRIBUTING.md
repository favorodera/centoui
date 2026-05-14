# Contributing to CentoUI

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Setup

**Prerequisites:** Node.js v22+, pnpm v10+

```bash
git clone https://github.com/favorodera/centoui.git
cd centoui
pnpm install
pnpm dev
```

---

## Testing

Vitest + jsdom + Vue Test Utils + axe-core. Every component needs accessibility and state coverage. `pnpm test`.

---

## Pull Request

1. `pnpm ready` — install → lint → typecheck → build → test.
2. [Conventional Commits](https://www.conventionalcommits.org/).
3. Update docs if behaviour changes.

---

[Discussions](https://github.com/favorodera/centoui/discussions) · [Docs](https://centoui.vercel.app/)
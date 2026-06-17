import { factory } from '@favorodera/eslint-config'

export default factory({
  tailwind: {
    settings: {
      entryPoint: 'src/index.css',
    },
  },
  typescript: {
    overrides: {
      'ts/no-explicit-any': 'off',
    },
  },
})

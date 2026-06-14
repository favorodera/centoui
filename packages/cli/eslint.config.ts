import { factory } from '@favorodera/eslint-config'

export default factory({
  node: {
    overrides: {
      'node/no-process-exit': 'off',
    },
  },
  tailwind: false,
  unicorn: {
    overrides: {
      'unicorn/no-process-exit': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: [
            /utils?/i,
            /props?/i,
          ],
        },
      ],
    },
  },
})

import { factory } from '@favorodera/eslint-config'

export default factory({
  jsdoc: {
    overrides: {
      'jsdoc/check-tag-names': [
        'error',
        {
          definedTags: ['vue-ignore'],
        },
      ],
      'jsdoc/no-bad-blocks': [
        'error',
        {
          ignore: ['vue-ignore'],
        },
      ],
    },
  },
  tailwind: {
    settings: {
      entryPoint: 'src/theme.css',
    },
  },
  typescript: {
    overrides: {
      'ts/no-explicit-any': 'off',
    },
  },
})

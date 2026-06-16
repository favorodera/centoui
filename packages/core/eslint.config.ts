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
    },
  },
  typescript: {
    overrides: {
      'ts/no-explicit-any': 'off',
    },
  },
})

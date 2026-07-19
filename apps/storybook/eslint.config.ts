import { factory } from '@favorodera/eslint-config'

export default factory({
  tailwind: {
    entryPoint: 'src/index.css',
  },
})
  .override('favorodera/typescript/rules', {
    rules: {
      'ts/no-explicit-any': 'off',
    },
  })
  .remove('favorodera/vue/a11y/rules')

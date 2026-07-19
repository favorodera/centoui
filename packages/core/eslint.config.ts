import { factory } from '@favorodera/eslint-config'

export default factory({
  tailwind: {
    entryPoint: 'src/theme.css',
  },
})
  .remove('favorodera/vue/a11y/rules')
  .overrideRules({
    'vue/no-root-v-if': 'off',
  })

import { factory } from '@favorodera/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

const resolvedFactory = factory({
  tailwind: {
    entryPoint: 'app/assets/css/index.css',
  },
})
  .append({
    files: ['app/components/centoui/**/*.vue'],
    rules: {
      'vue-a11y/form-control-has-label': 'off',
      'vue/no-root-v-if': 'off',
    },
  })

export default withNuxt(resolvedFactory)

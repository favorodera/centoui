import { factory } from '@favorodera/eslint-config'

export default factory({
  tailwind: {
    entryPoint: 'src/theme.css',
  },
})
  .append({
    files: ['src/components/**/*.vue'],
    rules: {
      'vue-a11y/form-control-has-label': 'off',
      'vue/no-root-v-if': 'off',
    },
  })

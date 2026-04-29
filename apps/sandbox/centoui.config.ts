import { defineConfig } from 'centoui'

export default defineConfig({
  version: '0.1.0',
  componentsDir: 'src/components/centoui',
  themeFilePath: 'src/assets/css/centoui.css',
  icons: {
    check: 'lucide:check',
    close: 'lucide:x',
    menu: 'lucide:menu',
  },
})

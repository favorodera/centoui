import { defineCommand, runMain } from 'citty'
import { init } from './commands/init'
import { VERSION } from './constants'

export * from './types'

const main = defineCommand({
  meta: { name: 'centoui', version: VERSION },
  subCommands: {
    init,
  },
})

runMain(main)

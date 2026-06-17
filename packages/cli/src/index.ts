import { defineCommand, runMain } from 'citty'
import { add } from './commands/add'
import { init } from './commands/init'
import { remove } from './commands/remove'
import { VERSION } from './constants'

export * from './types'

const main = defineCommand({
  meta: { name: 'centoui', version: VERSION },
  subCommands: {
    add,
    init,
    remove,
  },
})

runMain(main)

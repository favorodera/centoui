#!/usr/bin/env node
import { defineCommand, runMain } from 'citty'
import { VERSION } from './constants'
import { init } from './commands/init'
import { add } from './commands/add'
import { remove } from './commands/remove'

export * from './types'

const main = defineCommand({
  meta: { name: 'centoui', version: VERSION },
  subCommands: {
    init,
    add,
    remove,
  },
})

runMain(main)

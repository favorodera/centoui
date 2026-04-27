#!/usr/bin/env node
import { defineCommand, runMain } from 'citty'
import { VERSION } from './constants'
import { init } from './commands/init'

export * from './types'

const main = defineCommand({
  meta: { name: 'centoui', version: VERSION },
  subCommands: {
    init,
  },
})

runMain(main)

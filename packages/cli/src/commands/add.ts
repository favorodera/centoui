import { defineCommand } from 'citty'

export function add() {
  return defineCommand({
    meta: {
      name: 'add',
      description: 'Add one or more components to your project',
    },

    args: {},

    async run({ args }) {
    },
  })
}

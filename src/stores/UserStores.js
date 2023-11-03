import { defineStore } from 'pinia'

import users from '../data/data'

console.log(users)

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    users
  })
})

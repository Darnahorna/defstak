import { defineStore } from 'pinia'

import { useRouter } from 'vue-router'

import authService from '../services/authenticate'

export const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    isAuthenticated: authService.isAuthenticated() as boolean,
    error: '' as string,
    router: useRouter()
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const isAuth = await authService.login(username, password)

        if (isAuth) {
          this.router.push({ name: 'Admin' })
          this.isAuthenticated = true
        } else {
          this.router.push({ name: 'Login' })
          this.error = 'Incorrect username or password. Please try again.'
        }
      } catch (error) {
        this.error = `Authentication error: ${error}`
      }
    },
    async logout() {
      try {
        await authService.logout()
        this.router.push({ name: 'Login' })
        this.isAuthenticated = false
      } catch (error) {
        this.error = `Authentication error: ${error}`
      }
    }
  }
})

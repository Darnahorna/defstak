import { ref, inject, provide } from 'vue'
import { useRouter } from 'vue-router'

/*
 * ATTENTION! This code is retrieved and not used in the components.
 * It is only an example of how implement basic global state and provide/inject it to the components.
 * It is not intended to be used in production.
 * It is an illustration that in Vue you can solve the problem in multiple ways.
 */

import authService from '../services/authenticate'

const INJECTION_KEY = 'authContext'

export function provideAuthContext() {
  const isAuthenticated = ref<boolean>()

  const error = ref<string>('')

  const router = useRouter()

  isAuthenticated.value = authService.isAuthenticated()

  const login = async (username: string, password: string) => {
    try {
      const isAuth = await authService.login(username, password)

      if (isAuth) {
        router.push({ name: 'Admin' })
        isAuthenticated.value = true
      } else {
        router.push({ name: 'Login' })
        error.value = 'Incorrect username or password. Please try again.'
      }
    } catch (error) {
      console.error('Authentication error:', error)
    }
  }
  const logout = async () => {
    try {
      await authService.logout()
      router.push({ name: 'Login' })
      isAuthenticated.value = false
    } catch (error) {
      console.error('Authentication error:', error)
    }
  }

  provide(/* key */ INJECTION_KEY, /* value */ { isAuthenticated, login, logout, error })
}

export function useAuth() {
  const { isAuthenticated, login, logout, error } = inject(INJECTION_KEY) as {
    isAuthenticated: boolean
    login: (username: string, password: string) => void
    logout: () => void
    error: string
  }

  return { isAuthenticated, login, logout, error }
}

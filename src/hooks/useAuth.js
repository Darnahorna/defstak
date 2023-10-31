import { ref, inject, provide } from 'vue'
import { useRouter } from 'vue-router'
import authService from '../services/authenticate'

const INJECTION_KEY = 'authContext'

//state keeps in one place but available thought provider

export function provideAuthContext() {
  const isAuthenticated = ref(null)

  const error = ref('')

  const router = useRouter()

  isAuthenticated.value = authService.isAuthenticated()

  const login = async (username, password) => {
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
      console.error('Authentication error:', error.value)
    }
  }
  const logout = async () => {
    try {
      await authService.logout()
      router.push({ name: 'Login' })
      isAuthenticated.value = false
    } catch (error) {
      console.error('Authentication error:', error.message)
    }
  }

  provide(/* key */ INJECTION_KEY, /* value */ { isAuthenticated, login, logout })
}

export function useAuth() {
  const { isAuthenticated, login, logout } = inject(INJECTION_KEY)
  return { isAuthenticated, login, logout }
}

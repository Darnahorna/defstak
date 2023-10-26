import { ref } from 'vue'
import authService from '../services/authenticate'
import { useRouter } from 'vue-router'

export async function useAuth(username, password) {
  const router = useRouter()
  const isAuthenticated = ref(false)
  const error = ref('')

  try {
    console.log('Authenticating...')
    console.log(username, password)
    isAuthenticated.value = await authService.login(username, password)
    if (isAuthenticated.value) {
      router.push({ name: 'Admin' })
    } else {
      router.push({ name: 'Login' })
      error.value = 'Incorrect username or password. Please try again.'
      password = ''
      username = ''
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }

  return { isAuthenticated, error }
}

<template>
  <div class="page flex flex-col justify-center items-center h-85 p-5 m-5 h-90">
    <h1 class="text-xl font-extrabold mb-4">Welcome Back</h1>
    <form class="flex flex-col gap-3" id="login-form" @submit.prevent="handleLogin">
      <p>Please enter login details</p>

      <FormField
        label="Enter user username"
        v-model="username"
        placeholder="User username"
        name="username"
        :required="true"
      />
      <FormField
        label="Enter user password"
        v-model="password"
        placeholder="User password"
        name="password"
        :required="true"
        type="password"
      />

      <div class="flex flex-col gap-2">
        <button
          class="px-4 py-1.5 rounded-2xl bg-primary-color text-light :hover:cursor-pointer mt-3"
          type="submit"
          required
        >
          Login
        </button>
      </div>
    </form>
    <div v-if="error" class="text-red mt-3">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import authService from '../services/authenticate.js'
import { useRouter } from 'vue-router'
import FormField from '../components/FormField.vue'

const username = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

const handleLogin = async () => {
  try {
    // Call the authenticate function with entered credentials
    const isAuthenticated = await authService.login(username.value, password.value)
    if (isAuthenticated) {
      console.log('Successfully logged in')
      router.push({ name: 'Admin' })
    } else {
      router.push({ name: 'Login' })
      error.value = 'Incorrect username or password. Please try again.'
      password.value = ''
      username.value = ''
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }
}
</script>

<style scoped>
.page {
  height: 80vh;
}
</style>

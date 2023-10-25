<template>
  <div class="flex flex-col justify-center items-center h-85 p-5 m-5">
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
          class="p-2 bg-primary-color px-button-padding w-60 text-light rounded-border-radius-light text-font-size-medium :hover:cursor-pointer"
          type="submit"
          required
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import authService from '../services/authenticate.js'
import { useRouter } from 'vue-router'
import FormField from '../components/FormField.vue'

const username = ref('')
const password = ref('')

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
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }
}
</script>

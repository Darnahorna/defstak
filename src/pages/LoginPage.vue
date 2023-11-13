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
          class="px-4 py-1.5 rounded-lg bg-primary-color text-light :hover:cursor-pointer mt-3"
          type="submit"
          required
        >
          Login
        </button>
      </div>
    </form>
    <div v-if="authStore.error" class="text-red mt-3">{{ authStore.error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormField from '../components/FormField.vue'
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()

const username = ref<string>('')
const password = ref<string>('')

//const { login, error } = useAuth()

const handleLogin = () => {
  authStore.login(username.value, password.value)
  password.value = ''
  username.value = ''
}
</script>

<style scoped>
.page {
  height: 80vh;
}
</style>

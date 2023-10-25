<template>
  <nav class="flex flex-row justify-between self-center items-center">
    <RouterLink to="/"
      ><div class="flex flex-row items-center logo">
        <img src="../assets/images/logo.png" alt="DefStak" class="w-1/5 h-1/5 object-contain" />
        <span class="ml-2 font-text-2xl hover:text-highlight-color hover:cursor-pointer"
          >DefStak</span
        >
      </div></RouterLink
    >
    <HamburgerMenu />
    <a @click="handleLogout" class="self-center hover:text-highlight-color hover:cursor-pointer"
      >Logout</a
    >
  </nav>
</template>

<script setup>
import HamburgerMenu from '../views/HamburgerMenu.vue'
import authService from '../services/authenticate.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = async () => {
  try {
    const isAuthenticated = await authService.logout()

    if (isAuthenticated) {
      router.push({ name: 'Login' })
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }
}
</script>

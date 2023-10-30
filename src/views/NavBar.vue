<template>
  <nav class="flex flex-row justify-between self-center items-center">
    <RouterLink to="/"
      ><div class="flex flex-row items-center">
        <img src="../assets/images/logo.png" alt="DefStak" class="w-1/5 h-1/5 object-contain" />
        <span class="ml-2 hover:text-highlight-color hover:cursor-pointer logo">DefStak</span>
      </div></RouterLink
    >
    <DarkMode />
    <HamburgerMenu />

    <!-- <a
      @click="handleLogout"
      class="self-center hover:text-highlight-color hover:cursor-pointer login"
      >Logout</a
    > -->
  </nav>
</template>

<script setup>
import HamburgerMenu from './HamburgerMenu.vue'
import DarkMode from '../components/DarkMode.vue'
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

<style scoped>
.logo {
  font-family: var(--accent-font);
  font-weight: 600;
  font-size: var(--font-size-large-x);
}
@media (max-width: 991.98px) {
  .login {
    display: none;
  }
}
</style>

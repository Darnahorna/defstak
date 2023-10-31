<template>
  <ul>
    <RouterLink to="/admin">
      <li
        @click="handleItemClick"
        class="flex flex-row justify-center py-1 px-0 items-end h-12 gap-2 hover:text-primary-color dark:text-highlight-color"
      >
        <UsersEditIcon />
        Manage Users
      </li>
    </RouterLink>

    <li
      v-if="isAuth"
      @click="handleItemClick"
      class="flex flex-row justify-center py-1 px-0 items-end h-12 gap-2 hover:text-primary-color"
    >
      <LoginIcon />
      Logout
    </li>
  </ul>
</template>

<script setup>
//import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import UsersEditIcon from './icons/UsersEditIcon.vue'
import LoginIcon from './icons/LoginIcon.vue'
//import authService from '../services/authenticate'
//import { useRouter } from 'vue-router'

//const router = useRouter()

//const isAuth = ref(authService.isAuthenticated())

const emit = defineEmits(['handleItemClose'])

const handleItemClick = () => {
  // try {
  //   const isAuthenticated = await authService.logout()

  //   if (isAuthenticated) {
  //     router.push({ name: 'Login' })
  //   }
  // } catch (error) {
  //   console.error('Authentication error:', error)
  // }
  emit('handleItemClose')
}
</script>

<style scoped>
.router-link-active {
  color: var(--primary-color);
}
</style>

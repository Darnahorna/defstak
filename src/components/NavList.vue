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
      v-if="authStore.isAuthenticated"
      @click="handleLogoutClick"
      class="flex flex-row justify-center py-1 px-0 items-end h-12 gap-2 hover:text-primary-color"
    >
      <LoginIcon />
      Logout
    </li>
  </ul>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import UsersEditIcon from './icons/UsersEditIcon.vue'
import LoginIcon from './icons/LoginIcon.vue'
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()

const emit = defineEmits(['handleItemClose'])

const handleItemClick = () => {
  emit('handleItemClose')
}

const handleLogoutClick = () => {
  authStore.logout()
  emit('handleItemClose')
}
</script>

<style scoped>
.router-link-active {
  color: var(--primary-color);
}
</style>

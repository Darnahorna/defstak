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
      v-if="isAuthenticated"
      @click="handleLogoutClick"
      class="flex flex-row justify-center py-1 px-0 items-end h-12 gap-2 hover:text-primary-color"
    >
      <LoginIcon />
      Logout
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import UsersEditIcon from './icons/UsersEditIcon.vue'
import LoginIcon from './icons/LoginIcon.vue'
import { useAuth } from '../hooks/useAuth'

const { isAuthenticated, logout } = useAuth()

const emit = defineEmits(['handleItemClose'])

const handleItemClick = () => {
  emit('handleItemClose')
}

const handleLogoutClick = () => {
  logout()
  emit('handleItemClose')
}
</script>

<style scoped>
.router-link-active {
  color: var(--primary-color);
}
</style>

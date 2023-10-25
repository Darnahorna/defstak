<template>
  <ul>
    <RouterLink to="/admin">
      <li
        @click="handleItemClick"
        class="flex flex-row justify-end py-1 px-0 items-end h-12 gap-2 hover:text-primary-color"
      >
        <UsersEditIcon />
        Manage Users
      </li>
    </RouterLink>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import UsersEditIcon from './icons/UsersEditIcon.vue'
const emit = defineEmits(['handleItemClose'])

const handleItemClick = () => {
  emit('handleItemClose')
}
</script>

<style scoped>
.router-link-active {
  color: var(--primary-color);
}
</style>

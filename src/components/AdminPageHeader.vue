<template>
  <div class="flex justify-between flex-row mb-5">
    <h1 class="font-semibold text-lg">Manage Users</h1>
    <button
      @click="showAddUserPage"
      class="bg-primary-color py-3 px-4 text-light text-sm rounded-lg hover:bg-secondary-color"
    >
      Add User
    </button>
  </div>

  <div>
    <div class="flex justify-between items-center flex-row mb-5">
      <h2 class="font-semibold text-lg">User List</h2>
      <SearchBar v-model="userStore.searchTerm" placeholder="Search users" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/UserStore'

import SearchBar from './SearchBar.vue'

const userStore = useUserStore()
const router = useRouter()

const showAddUserPage = () => {
  router.push({ name: 'AddUser' })
}
</script>

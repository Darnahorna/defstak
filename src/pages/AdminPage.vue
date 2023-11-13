<template>
  <div class="p-5 m-5">
    <AdminPageHeader />

    <UserTable :users="userStore.computeUsers" />

    <PaginationBar />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'

import UserTable from '../views/UserTable.vue'
import PaginationBar from '@/components/PaginationBar.vue'
import AdminPageHeader from '@/components/AdminPageHeader.vue'

const userStore = useUserStore()
</script>

<style scoped>
h1 {
  font-family: var(--accent-font);
}
</style>

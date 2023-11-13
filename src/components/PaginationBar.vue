<template>
  <div class="flex justify-between mt-2 p-2">
    <div>
      <span>Rows per page </span>
      <select
        v-model="userStore.itemsPerPage"
        @change="handleItemsPerPageChange"
        class="bg-light px-1 py-1 cursor-pointer dark:bg-text-color dark:text-light-gray"
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>

    <div class="flex flex-row gap-4">
      <div class="flex flex-row gap-4 opacity-70">
        <span @click="previousPage" class="cursor-pointer" v-if="userStore.currentPage > 1"
          ><ArrowLeft
        /></span>
        <span @click="nextPage" class="cursor-pointer" v-if="userStore.currentPage < maxPage">
          <ArrowRight
        /></span>
      </div>
      <div>
        <span>{{ startItem }} - {{ endItem }}</span> of
        <span>{{ userStore.totalItems }}</span> items
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/UserStore'

import ArrowLeft from './icons/ArrowLeftIcon.vue'
import ArrowRight from './icons/ArrowRightIcon.vue'

const userStore = useUserStore()

const maxPage = Math.ceil(userStore.totalItems / userStore.itemsPerPage) as number

const startItem = computed(() => {
  return (userStore.currentPage - 1) * userStore.itemsPerPage + 1
})

const endItem = computed(() => {
  return Math.min(userStore.currentPage * userStore.itemsPerPage, userStore.totalItems)
})

const handleItemsPerPageChange = (event: Event) => {
  userStore.setItemsPerPage(Number((event.target as HTMLSelectElement).value))
}

const previousPage = () => {
  if (userStore.currentPage > 1) {
    let prev = userStore.currentPage - 1
    userStore.setCurrentPage(prev)
  }
}

const nextPage = () => {
  if (userStore.currentPage < maxPage) {
    let next = userStore.currentPage + 1
    userStore.setCurrentPage(next)
  }
}
</script>

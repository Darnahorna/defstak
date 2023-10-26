<template>
  <div class="flex justify-between mt-2 p-2">
    <div>
      <span>Rows per page </span>
      <select v-model="localItemsPerPage" @change="handleItemsPerPageChange">
        <option>10</option>
        <option>20</option>
      </select>
    </div>

    <div class="flex flex-row gap-4">
      <div class="flex flex-row gap-4 opacity-70">
        <span @click="previousPage"><ArrowLeft /></span>
        <span @click="nextPage"><ArrowRight /></span>
      </div>
      <div>
        <span>{{ startItem }} - {{ endItem }}</span> of <span>{{ totalItems }}</span> items
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, isRef, toRef, computed, defineEmits, defineProps } from 'vue'
import ArrowLeft from './icons/ArrowLeftIcon.vue'
import ArrowRight from './icons/ArrowRightIcon.vue'

const props = defineProps({ totalItems: Number, itemsPerPage: Number, currentPage: Number })
const emit = defineEmits(['pageChange', 'itemsPerPageChange'])

const currentPage = toRef(props.currentPage)
const localCurrentPage = ref(currentPage.value)

const itemsPerPage = toRef(props.itemsPerPage)
const localItemsPerPage = ref(itemsPerPage.value)

console.log(isRef(localItemsPerPage))

const startItem = computed(() => {
  return (props.currentPage - 1) * props.itemsPerPage + 1
})

const endItem = computed(() => {
  return Math.min(props.currentPage * props.itemsPerPage, props.totalItems)
})

const handleItemsPerPageChange = () => {
  localCurrentPage.value = 1
  emit('itemsPerPageChange', localItemsPerPage.value)
}
const previousPage = () => {
  if (localCurrentPage.value > 1) {
    localCurrentPage.value--
    emit('pageChange', localCurrentPage.value)
  }
}
const nextPage = () => {
  const maxPage = Math.ceil(props.totalItems / localItemsPerPage.value)
  if (localCurrentPage.value < maxPage) {
    localCurrentPage.value++
    emit('pageChange', localCurrentPage.value)
  }
}
</script>

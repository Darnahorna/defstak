<template>
  <div class="px-4 py-1.5 bg-light-gray rounded-2xl flex justify-between self-center items-center">
    <SearchIcon />
    <input
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      @change="handleSearch"
      class="bg-light-gray outline-none ml-3"
    />
  </div>
</template>

<script setup>
import SearchIcon from './icons/SearchIcon.vue'

defineProps({
  modelValue: String,
  placeholder: String
})

const emit = defineEmits(['handleSearch'])

const handleSearch = (event) => {
  emit('handleSearch', event.target.value)
}
</script>

<style scoped></style>

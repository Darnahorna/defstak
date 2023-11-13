<template>
  <div
    class="px-4 py-1.5 bg-light-gray rounded-2xl flex justify-between self-center items-center dark:bg-light-blue dark:text-light"
  >
    <SearchIcon />
    <input
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      @change="handleSearch"
      class="bg-light-gray outline-none ml-3 dark:bg-light-blue dark:text-light"
    />
  </div>
</template>

<script setup lang="ts">
import SearchIcon from './icons/SearchIcon.vue'

interface SearchBarProps {
  modelValue: string
  placeholder: string
}

const { modelValue, placeholder } = defineProps<SearchBarProps>()

const emits = defineEmits<{
  'update:modelValue': [searchTerm: string]
  handleSearch: [searchTerm: string]
}>()

const handleSearch = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

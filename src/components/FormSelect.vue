<template>
  <div class="flex flex-row justify-between">
    <label :for="selectId">{{ label }}</label>
    <select
      :name="name"
      :id="selectId"
      :value="modelValue"
      @change="handleChange"
      class="bg-light-gray px-4 py-1.5 rounded-2xl outline-primary-color ml-4 dark:bg-light-blue dark:text-light-gray"
    >
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FormSelectProps {
  label: string
  name: string
  options: number[]
  modelValue: number
}

const { label, name, options, modelValue } = defineProps<FormSelectProps>()

const emit = defineEmits(['update:modelValue'])

const handleChange = (event: Event) => {
  emit('update:modelValue', Number((event.target as HTMLInputElement).value))
}

const selectId = computed(() => {
  return name || `select-${Math.random().toString(36).substr(2, 10)}`
})
</script>

<style>
select {
  -moz-appearance: none;
}
</style>

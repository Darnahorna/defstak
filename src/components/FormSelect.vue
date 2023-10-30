<template>
  <div class="flex flex-row justify-between">
    <label :for="selectId">{{ label }}</label>
    <select
      :name="name"
      :id="selectId"
      :value="modelValue"
      @change="handleChange"
      class="bg-light-gray px-4 py-1.5 rounded-2xl outline-primary-color ml-4"
    >
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  name: String,
  options: Array,
  modelValue: Number
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (event) => {
  //emit selected value
  emit('update:modelValue', Number(event.target.value))
}

const selectId = computed(() => {
  //returns computed ref
  return props.name || `select-${Math.random().toString(36).substr(2, 10)}`
})
</script>

<style>
select {
  -moz-appearance: none;
}
</style>

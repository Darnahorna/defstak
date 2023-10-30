<template>
  <div class="flex flex-col gap-4">
    <label :for="inputId">{{ label }}</label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :autoComplete="autoComplete"
      :name="name"
      :id="inputId"
      :required="isRequired"
      @change="handleChange"
      class="bg-light-gray px-4 py-1.5 rounded-2xl outline-primary-color dark:bg-light-blue dark:text-light-gray"
    />
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  label: String,
  modelValue: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  autoComplete: {
    type: String,
    default: 'on'
  },
  name: String,
  isRequired: Boolean
})
const inputId = computed(() => {
  //returns computed ref
  return props.name || `field-${Math.random().toString(36).substr(2, 10)}`
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (event) => {
  emit('update:modelValue', event.target.value)
  //emit selected value
}
</script>

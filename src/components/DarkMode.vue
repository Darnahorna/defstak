<template>
  <button @click="toggleDark()" class="px-4 py-2 text-white">
    <NightIcon v-if="isDark" />
    <DayIcon v-else />
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

import NightIcon from './icons/NightIcon.vue'
import DayIcon from './icons/DayIcon.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

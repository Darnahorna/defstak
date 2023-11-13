<template>
  <nav class="flex flex-row justify-between self-center items-center">
    <RouterLink to="/"
      ><div class="flex flex-row items-center">
        <img src="../assets/images/logo.png" alt="DefStak" class="w-1/5 h-1/5 object-contain" />
        <span class="ml-2 hover:text-highlight-color hover:cursor-pointer logo">DefStak</span>
      </div></RouterLink
    >
    <DarkMode />
    <HamburgerMenu />
  </nav>
</template>

<script setup lang="ts">
import HamburgerMenu from './HamburgerMenu.vue'
import DarkMode from '../components/DarkMode.vue'
</script>

<style scoped>
.logo {
  font-family: var(--accent-font);
  font-weight: 600;
  font-size: var(--font-size-large-x);
}
</style>

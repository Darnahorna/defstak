<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from './views/NavBar.vue'
import NavList from './components/NavList.vue'
import TransitionSlideLeft from './components/TransitionSlideLeft.vue'
</script>

<template>
  <header
    class="header sticky top-0 z-10 bg-light text-text-color dark:bg-text-color dark:text-light"
  >
    <NavBar />
  </header>

  <main class="main page">
    <TransitionSlideLeft>
      <RouterView />
    </TransitionSlideLeft>
  </main>
  <div class="sidebar"><NavList /></div>
  <footer class="footer flex flex-row justify-center items-center border-t p-3 bottom-0">
    <div class="flex flex-row items-center">
      <img class="w-8 mr-2" src="./assets/images/logo.png" alt="logo" />
      <p>Copyright &copy; 2023</p>
    </div>
  </footer>
</template>

<style scoped>
.page {
  min-height: 80vh;
}
html.dark {
  color-scheme: dark;
}
</style>

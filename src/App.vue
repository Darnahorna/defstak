<script setup>
import Navigation from './components/Navigation.vue'
import SideBar from './components/SideBar.vue'
import ManageUsersPage from './components/pages/ManageUsersPage.vue'
</script>

<template>
  <header class="header">
    <Navigation></Navigation>
  </header>
  <main class="main"><ManageUsersPage></ManageUsersPage></main>
  <div class="sidebar"><SideBar></SideBar></div>
  <footer class="footer">Footer</footer>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>

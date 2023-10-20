<template>
  <ul>
    <!-- <li><div>Dashboard</div></li> -->
    <li class="nav-link">
      <UsersEdit></UsersEdit>
      Manage Users
    </li>
    <!-- <li><div>Parameters</div></li> -->
  </ul>
</template>

<script setup>
import UsersEdit from './icons/UsersEdit.vue'
</script>

<style scoped>
.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  height: 3.5rem;
  gap: 0.5rem;
}
.nav-link:hover {
  color: var(--primary-color);
}
.image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>

<script setup>
import NavList from '../components/NavList.vue'
</script>

<template>
  <div class="hamburger-menu">
    <div className="hamburger-menu">
      <button
        class="flex flex-col cursor-pointer p-4 z-10"
        @click="toggleMenu"
        :class="{ open: isMenuOpen }"
      >
        <div class="bar bg-text-color dark:bg-light dark:text-light"></div>
        <div class="bar bg-text-color dark:bg-light dark:text-light"></div>
        <div class="bar bg-text-color dark:bg-light dark:text-light"></div>
      </button>
      <div className="menu-items bg-light dark:bg-text-color dark:text-light" v-if="isMenuOpen">
        <NavList class="menu" @handleItemClose="toggleMenu"></NavList>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.menu-items {
  height: 90vh;
  position: absolute;
  top: 6rem;
  right: -0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100vw;
  align-items: flex-end;
  z-index: 99999;
}
.bar {
  width: 2em;
  height: 0.3em;
  margin: 0.3em 0;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  border-radius: 0.5rem;
}
.hamburger-menu {
  display: none;
}
.open.bar:nth-child(1) {
  transform: rotate(-45deg) translate(-0.65em, 0.6em);
  background-color: var(--highlight-color);
}
.open.bar:nth-child(2) {
  opacity: 0;
}
.open.bar:nth-child(3) {
  transform: rotate(45deg) translate(-0.65em, -0.6em);
  background-color: var(--highlight-color);
}

@media (max-width: 991.98px) {
  .hamburger-menu {
    display: block;
    position: relative;
  }

  .menu-items.open {
    display: block;
    transition: 0.3s ease-out;
  }
}
</style>

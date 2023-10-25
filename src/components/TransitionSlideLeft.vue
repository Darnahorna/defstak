<template>
  <Transition name="slide-left">
    <slot></slot>
  </Transition>
</template>

<script setup></script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  translate: 100% 0;
  transition: all 0.3s ease-in-out;
}
</style>

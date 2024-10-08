<template>
  <div class="flex justify-center items-center m-5 p-5 home">
    <div class="flex justify-center items-center flex-col gap-10 text-center">
      <h1 class="text-xl font-extrabold mb-4 font-lg">Welcome to Default Stack Project</h1>
      <img src="../assets/images/logo.png" class="logo-home" />
      <p class="text-lg">
        The project is written in Vue in Vite using Vue Core, Vue Router and Tailwind to explore its
        the possibilities. Here you will be able to perform the simplest CRUD operations with users.
      </p>
    </div>
  </div>
</template>
<style scoped>
.home {
  min-height: 80vh;
}

h1 {
  font-family: var(--accent-font);
  font-weight: 600;
  font-size: var(--font-size-large-x);
}
.logo-home {
  transform: rotate(-45deg);
  width: 10%;
  height: 10%;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0% {
    transform: translate3d(0px, 0px, 0);
  }
  50% {
    transform: translate3d(0px, -4px, 0);
  }
  100% {
    transform: translate3d(0px, 0px, 0);
  }
}
</style>

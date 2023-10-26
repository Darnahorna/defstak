<template>
  <div class="flex justify-center items-center m-5 p-5 h-full">
    <div class="flex justify-center items-center flex-col gap-10">
      <h1 class="text-xl font-extrabold mb-4 font-lg">Welcome to Default Stack Project</h1>
      <img src="../assets/images/logo.png" class="logo-home" />
      <p>
        This is a test project from Prevas. The project is written in View using Tailwind to explore
        the possibilities. Here you will be able to perform the simplest operations with users.
      </p>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-family: var(--accent-font);
  font-weight: 600;
  font-size: var(--font-size-large-x);
}
.logo-home {
  transform: rotate(-45deg);
  width: 10%;
  height: 10%;
  animation: bounce 0.5s infinite;
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

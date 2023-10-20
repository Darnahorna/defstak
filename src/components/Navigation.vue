<template>
  <nav>
    <ul class="">
      <li>
        <div class="logo">
          <img src="../assets/images/logo.png" alt="DefStak" class="img" /> <span>DefStak</span>
        </div>
      </li>
      <li class="login-link">Login</li>
    </ul>
  </nav>
</template>
<script setup></script>
<style scoped>
.img {
  width: 20%;
  height: 20%;
  object-fit: contain;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
nav {
  margin: auto;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
}
.login-link {
  align-self: center;
}
.login-link:hover,
.logo span:hover {
  transition: var(--normal-transition);
  color: var(--highlight-color);
  cursor: pointer;
}
.logo span {
  margin-left: 0.5rem;
  font-family: var(--accent-font);
  font-weight: 600;
  font-size: 2rem;
}
</style>

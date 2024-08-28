<script setup lang="ts">

</script>

<template>
  <header class="header">
    <img src="/logo/logo.svg" alt="logo" class="logo"/>
    <nav class="nav">
      <router-link
          to="/form"
          class="nav-item"
          exact-active-class="active"
      >
        Форма
      </router-link>
      <router-link
          to="/preview"
          class="nav-item"
          exact-active-class="active"
      >
        Превью
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-black-weak);
}

.logo {
  width: 93px;
}

.nav {
  width: 100%;
  margin: 0 0 0 -93px;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.nav-item {
  color: var(--color-black-weak);
}

.nav-item:hover {
  color: var(--color-black);
}

.active {
  color: var(--color-black);
}
</style>
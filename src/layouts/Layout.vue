<script setup lang="ts">
import {Footer, Header} from "../components";
</script>

<template>
  <Header/>
  <main class="main">
    <router-view/>
  </main>
  <Footer/>
</template>

<style scoped>
  .main {
    align-self: center;
    min-width: 620px;
  }
</style>

<template>
  <div class="relative min-h-[100vh] bg-primary-900 p-20">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

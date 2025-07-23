<template>
  <div class="relative min-h-[100vh] bg-primary-900 p-5 md:p-20">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";

useSeoMeta({
  title: "小怪｜個人網站",
  ogTitle: "小怪｜個人網站",
  description: "這裡是小怪的個人網站，快來看看吧！",
  ogDescription: "這裡是小怪的個人網站，快來看看吧！",
});
</script>

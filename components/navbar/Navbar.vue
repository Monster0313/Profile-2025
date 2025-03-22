<template>
  <nav
    class="fixed z-50 w-screen top-0 left-0 flex justify-between items-center bg-primary-950 px-6"
  >
    <div class="flex gap-4">
      <router-link to="/" class="text-primary-50 text-lg flex items-center">
        <p>Monster0313</p>
      </router-link>
      <div class="ml-10 flex gap-6">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="text-primary-50 text-lg p-3 hover:text-primary-200 hover:bg-primary-300/20"
          :class="{
            'border-b-2 border-primary-100 text-primary-100':
              currentPath === link.to,
          }"
        >
          <p>{{ link.name }}</p>
        </router-link>
      </div>
    </div>
    <div class="flex gap-1">
      <ThemeToggle />
      <button class="cursor-pointer" @click="handleLocaleChange">
        <p class="text-primary-50">
          {{ locale === "en" ? "中" : "En" }}
        </p>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeToggle from "../common/ThemeToggle.vue";
const { locale, setLocale } = useI18n({ useScope: "global" });

const handleLocaleChange = () => {
  if (locale.value === "en") {
    setLocale("zh");
    locale.value = "zh";
  } else {
    setLocale("en");
    locale.value = "en";
  }
};

const links = [
  {
    name: "Gallery",
    to: "/gallery",
  },
];

const currentPath = useRoute().path;
</script>

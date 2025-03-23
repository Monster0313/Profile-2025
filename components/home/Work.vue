<template>
  <div class="p-5 mb-16 text-primary-50 flex flex-col items-center">
    <div class="text-center mb-10">
      <h1 class="text-primary-200 text-4xl pb-4 font-semibold">
        {{ t("work.title") }}
      </h1>
    </div>
    <div class="max-w-[1080px] grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(work, index) in works" :key="index" class="">
        <div class="relative">
          <img
            :src="work.image"
            class="w-full aspect-video object-cover bg-primary-50 rounded-t-2xl"
          />
          <div
            class="absolute group rounded-t-2xl w-full h-full top-0 left-0 bg-primary-800/80 flex justify-center items-center opacity-20 hover:opacity-100 transition-opacity duration-300 text-2xl font-semibold text-primary-50"
          >
            <NuxtLink
              :to="work.link"
              class="hidden group-hover:block cursor-pointer"
            >
              {{ work.isOpen ? t("work.detail") : t("work.closed") }}
            </NuxtLink>
          </div>
        </div>
        <div class="w-full bg-primary-800 p-4 rounded-b-2xl">
          <h2
            class="text-primary-100 text-xl font-semibold max-w-[400px] truncate"
          >
            {{ work.title }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Aqi from "~/assets/image/work-aqi.webp";
import Chia from "~/assets/image/work-chia.webp";
import Cms from "~/assets/image/work-cms.webp";
import Injustice from "~/assets/image/work-injustice.webp";

const { t } = useI18n();

const works = ref([
  {
    title: "Chia - Client & Admin",
    image: Chia,
    link: "https://reurl.cc/9DZQy8",
    isOpen: true,
  },
  {
    title: "Promo Website - CMS System",
    image: Cms,
    link: "https://reurl.cc/NYXEnm",
    isOpen: true,
  },
  {
    title: "AQI Map - Open Data API",
    image: Aqi,
    link: "https://github.com/Monster0313/Taiwan.AirQualityIndicator.Map",
    isOpen: true,
  },
  {
    title: "Injustice - Website",
    image: Injustice,
    link: "#",
    isOpen: false,
  },
]);
</script>

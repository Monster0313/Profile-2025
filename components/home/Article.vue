<template>
  <div class="p-5 mb-16 text-primary-50 flex flex-col items-center">
    <div class="text-center mb-10">
      <h1 class="text-primary-200 text-4xl pb-4 font-semibold">
        {{ t("article.title") }}
      </h1>
    </div>
    <div class="max-w-[1080px] grid grid-cols-2 gap-8">
      <div v-for="(work, index) in works" :key="index" class="">
        <div class="relative">
          <NuxtImg
            :src="work.image"
            class="w-full aspect-video object-cover bg-primary-50 rounded-t-2xl"
          />
          <div
            class="absolute group rounded-t-2xl w-full h-full top-0 left-0 bg-primary-800/80 flex justify-center items-center opacity-20 hover:opacity-100 transition-opacity duration-300 text-2xl font-semibold text-primary-50"
          >
            <NuxtLink :to="work.link">
              <span class="hidden group-hover:block cursor-pointer">
                {{ t("article.detail") }}
              </span>
            </NuxtLink>
          </div>
        </div>
        <div class="w-full bg-primary-800 p-4 rounded-b-2xl">
          <h2
            class="text-primary-100 text-xl font-semibold mb-2 max-w-[400px] truncate"
          >
            {{ work.title }}
          </h2>
          <p class="text-primary-200 text-sm">
            {{ work.date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const works = ref([
  {
    title: "Unit Test 學習筆記 - Vue 3 with Vitest",
    date: "Nov 30, 2023",
    image:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*XmR_altkCoRRI4Lj",
    link: "https://medium.com/@Monster.0313/unit-test-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-%E4%BA%8C-vue-3-with-vitest-617e8101f7c5",
  },
  {
    title: "Nuxt 3 開發心得 — 比較 Pinia、useState",
    date: "Dec 12, 2023",
    image:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*wHkz3GGco4Byb6FF",
    link: "https://medium.com/@Monster.0313/nuxt-3-%E9%96%8B%E7%99%BC%E5%BF%83%E5%BE%97-%E6%AF%94%E8%BC%83-pinia-usestate-ce778752411e",
  },
  {
    title: "Nuxt 3 學習筆記 − Virtual DOM",
    date: "Dec 25, 2023",
    image:
      "https://miro.medium.com/v2/da:true/resize:fit:1200/0*8MMmSC5oR6o8RTH1",
    link: "https://medium.com/@Monster.0313/nuxt-3-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-virtual-dom-cd291d0c5af7",
  },
  {
    title: "前端筆記：《基礎開發環境建置》Mac篇-Homebrew & iTerm2",
    date: "May 15, 2020",
    image:
      "https://miro.medium.com/v2/da:true/resize:fill:1200:632/g:fp:0.49:0.72/0*S9xij0qCcCemFa6Y",
    link: "https://medium.com/@monster0313/%E5%89%8D%E7%AB%AF%E7%AD%86%E8%A8%98-%E5%9F%BA%E7%A4%8E%E9%96%8B%E7%99%BC%E7%92%B0%E5%A2%83%E5%BB%BA%E7%BD%AE-mac%E7%AF%87-homebrew-iterm2-eb778f571650",
  },
]);
</script>

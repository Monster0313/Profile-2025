<template>
  <div>目前先用Notion，正在跳轉</div>
</template>

<script setup lang="ts">
const notionUrl = "https://www.notion.so/24cecb9d4920809dbbaec9273b7ad2df";
const title = "小怪 攝影委託";
const description =
  "你好，我是小怪，這裡會提供攝影外拍的委託資訊及流程。如果有任何想詢問的部分歡迎直接與我聯絡唷！";

const images = [
  "https://r2-mst.monster0313.me/ogimage/commission-01.jpg",
  "https://r2-mst.monster0313.me/ogimage/commission-02.jpg",
  "https://r2-mst.monster0313.me/ogimage/commission-03.jpg",
  "https://r2-mst.monster0313.me/ogimage/commission-04.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

definePageMeta({
  layout: "redirect",
});

useHead({
  title,
  meta: [
    { name: "title", content: title },
    { name: "description", content: description },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: randomImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: randomImage },
  ],
});

onMounted(() => {
  setTimeout(() => {
    window.location.href = notionUrl;
  }, 1000);
});
</script>
